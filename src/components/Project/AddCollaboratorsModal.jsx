import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getUsers } from '../../services/userService';
import { addCollaboratorsToProject, removeCollaboratorFromProject, getProjectCollaborators } from '../../services/projectService';
import useAuthStore from '../../stores/userStore';

const AddCollaboratorsModal = ({ projectId, onClose, onCollaboratorsUpdated,project }) => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [existingCollaborators, setExistingCollaborators] = useState([]);
  const [showModal, setShowModal] = useState(true);

  const darkenColor = (color, percent) => {
    let R = parseInt(color.slice(1, 3), 16);
    let G = parseInt(color.slice(3, 5), 16);
    let B = parseInt(color.slice(5, 7), 16);

    R = Math.max(0, Math.min(255, R * (1 - percent)));
    G = Math.max(0, Math.min(255, G * (1 - percent)));
    B = Math.max(0, Math.min(255, B * (1 - percent)));

    return `#${Math.round(R).toString(16).padStart(2, '0')}${Math.round(G).toString(16).padStart(2, '0')}${Math.round(B).toString(16).padStart(2, '0')}`;
};  
  const darkerColor = darkenColor(project.color,0.2)
  const darkestColor = darkenColor(project.color,0.4)
  const lighterColor = darkenColor(project.color,-0.2)



  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsers = await getUsers();
        setUsers(allUsers);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };

    const fetchExistingCollaborators = async () => {
      try {
        const collaboratorIds = await getProjectCollaborators(projectId);
        const allUsers = await getUsers(); // Obtiene todos los usuarios

        // Filtra los usuarios que son colaboradores actuales
        const collaboratorsWithDetails = allUsers.filter(user => collaboratorIds.includes(user.id));
        setExistingCollaborators(collaboratorsWithDetails);
      } catch (error) {
        console.error("Error al obtener colaboradores del proyecto:", error);
      }
    };

    fetchUsers();
    fetchExistingCollaborators();
  }, [projectId]);

  const handleUserChange = (e) => {
    const userId = e.target.value;
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleAddCollaborators = async () => {
    try {
      await addCollaboratorsToProject(projectId, selectedUsers);
      onCollaboratorsUpdated(); // Llama a la función de callback aquí
      onClose();
      setShowModal(false);
    } catch (error) {
      console.error("Error al añadir colaboradores:", error);
    }
  };

  const handleRemoveCollaborator = async (userId) => {
    try {
      await removeCollaboratorFromProject(projectId, userId);
      setExistingCollaborators((prevCollaborators) =>
        prevCollaborators.filter((collaborator) => collaborator.id !== userId)
      );
      onCollaboratorsUpdated(); // Llama a la función de callback aquí
    } catch (error) {
      console.error("Error al remover colaborador:", error);
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('fixed')) {
      setShowModal(false);
      onClose(); // También debes llamar a onClose() aquí
    }
  };

  const { user } = useAuthStore();
  const filteredUsers = users
  .filter((filteredUser) => 
    !existingCollaborators.find(collaborator => collaborator.id === filteredUser.id) && 
    filteredUser.id !== user.uid &&
    filteredUser.name.toLowerCase().includes(searchTerm.toLowerCase())  // Filtrado por nombre
  );  console.log(filteredUsers);
  return (
    showModal && (
      <div
        className={`fixed top-0 left-0 w-full h-full flex justify-center items-center ${showModal ? 'bg-blue-800/20' : ''}`}
        onClick={showModal ? handleOutsideClick : null}
      >
        {showModal && (
          <div
          style={{backgroundColor:lighterColor }}
          className={`rounded-[20px] shadow-md p-4 h-[auto] mt-16 w-[885px] `}>
            <h2
            style={{color:darkerColor}}
             className={`text-[40px] font-bold mb-2`}>Editar colaboradores</h2>
            <form className={`flex flex-wrap justify-center flex-col`}>
              <div
              style={{backgroundColor:darkerColor}}
               className={`overflow-y-auto h-[400px] rounded-[20px] p-4 flex flex-col`}>
                <div className='flex gap-2 items-center mb-4 justify-around'>

                  <p className='text-[20px] font-semibold' style={{color:lighterColor}}>Añadir usuario</p>
                <input
  type="text"
  placeholder="Filtrar usuario"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{backgroundColor:lighterColor, color:darkestColor,border:darkestColor}}
  className=" w-[400px] h-[50px] p-2 border-0 border-b-2  rounded-lg  "
/>

                </div>

<div className='overflow-y-scroll p-4'>
{filteredUsers.map((user) => (
                  <div key={user.id}
                  style={{backgroundColor:lighterColor}}
                  className={`flex items-center h-[90px] rounded-[10px] p-2 mb-2`}>
                    <label className={`flex items-center w-full justify-between`}>
                      <div className='flex items-center justify-center gap-2'>
                      <img className='h-[50px] w-[50px] rounded-full' src={user.photoURL} alt={user.displayName} />
                      <span className={`text-[20px] font-semibold`} style={{color:darkestColor}}>{user.name}</span>
                      </div>

                      <input
  type="checkbox"
  value={user.id}
  onChange={handleUserChange}
  style={{
    borderColor: darkerColor,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderWidth: '2px',
  }}
  className={`
    w-8 h-8 mr-2 rounded-lg shadow-sm appearance-none
    checked:bg-[${darkerColor}] checked:border-transparent
    checked:after:content-['✔️'] checked:after:text-white checked:after:text-center
    after:text-center after:block after:leading-8 after:text-[14px]
  `}
/>

                    </label>
                  </div> 
                ))}
</div>

              </div>
              <h3  style={{color:darkerColor}}
             className={`text-[30px] font-bold mb-4 mt-4`}>Colaboradores Existentes</h3>
              <div 
  className={`overflow-x-auto mb-2 flex gap-4`}
  style={{ maxWidth: '100%' }}
>
  {existingCollaborators.map((collaborator) => (
    <div key={collaborator.id}
      style={{ backgroundColor: darkerColor }}
      className={`flex flex-col justify-center gap-1 shadow-md items-center mb-2 h-[140px] w-[150px] rounded-[20px]`}
    >
      <img className='h-[50px] rounded-full' src={collaborator.photoURL} alt={collaborator.displayName} />
      <span 
        style={{ color: lighterColor }}
        className={`mr-2 text-nowrap text-center font-semibold`}
      >
        {collaborator.name}
      </span>
      <button
        type="button"
        style={{ backgroundColor: darkestColor, color: lighterColor }}
        onClick={() => handleRemoveCollaborator(collaborator.id)}
        className={` font-bold py-1 px-2 rounded`}
      >
        Remover
      </button>
    </div>
  ))}
</div>

              <button
                type="button"
                onClick={handleAddCollaborators}
                style={{backgroundColor:darkerColor, color:lighterColor}}
                className={` mb-2  font-bold py-2 px-4 rounded`}
              >
                Añadir
              </button>
              <button
              style={{backgroundColor:darkestColor, color:lighterColor}}
                type="button"
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setShowModal(false);
                  }
                }}
                className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded`}
              >
                Cerrar
              </button>
            </form>
          </div>
        )}
      </div>
    )
  );
};

AddCollaboratorsModal.propTypes = {
  projectId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onCollaboratorsUpdated: PropTypes.func.isRequired, // Añadido
};

export default AddCollaboratorsModal;
