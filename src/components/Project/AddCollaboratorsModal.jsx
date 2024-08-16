import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getUsers } from '../../services/userService';
import { addCollaboratorsToProject, getProjectCollaborators } from '../../services/projectService';

const AddCollaboratorsModal = ({ projectId, onClose }) => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [existingCollaborators, setExistingCollaborators] = useState([]);
  const [showModal, setShowModal] = useState(true);

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
        const collaborators = await getProjectCollaborators(projectId);
        setExistingCollaborators(collaborators);
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

  const handleSubmit = async () => {
    try {
      await addCollaboratorsToProject(projectId, selectedUsers);
      onClose();
      setShowModal(false);
    } catch (error) {
      console.error("Error al añadir colaboradores:", error);
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('fixed')) {
      setShowModal(false);
      onClose(); // También debes llamar a onClose() aquí
    }
  };

  const filteredUsers = users.filter((user) => !existingCollaborators.includes(user.id));

  return (
    showModal && (
    <div
    className={`fixed top-0 left-0 w-full h-full flex justify-center items-center ${showModal ? 'bg-blue-800/20' : ''}`}
    onClick={showModal ? handleOutsideClick : null}

    >
      {showModal && (
        <div className={`bg-white rounded shadow-md p-4 w-1/2`}>
  <h2 className={`text-lg font-bold mb-4`}>Añadir Colaboradores</h2>
  <form className={`flex flex-wrap justify-center flex-col`}>
    <div className={`overflow-y-auto h-64 flex flex-col`}>
      {filteredUsers.map((user) => (
        <div key={user.id} className={`flex items-center mb-2`}>
          <label className={`flex items-center`}>
            <input
              type="checkbox"
              value={user.id}
              onChange={handleUserChange}
              className={`w-4 h-4 mr-2 text-textGreen rounded border-gray-300 focus:ring-textGreen`}
            />
            <span className={`text-gray-700`}>{user.name}</span>
          </label>
        </div>
      ))}
    </div>
    <button
      type="button"
      onClick={handleSubmit}
      className={`bg-loginGreen mb-2 hover:bg-textGreen text-white font-bold py-2 px-4 rounded`}
    >
      Añadir
    </button>
    <button
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
    </div>)
  );
};

AddCollaboratorsModal.propTypes = {
  projectId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddCollaboratorsModal;