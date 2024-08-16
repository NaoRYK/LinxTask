import { faCirclePlus, faCross, faPen, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectContainer = ({ project,children,createTask,handleAddCollaboratorsButton }) => {

  // Suponiendo que 'project.color' contiene el color del proyecto
  const backgroundColor = project.color || '#FFD1D1'; // Color por defecto si no se proporciona

  return (
    <div 
      className="w-[90%] h-[85vh] grid grid-rows-[70px,100px,1fr,10%] flex-col rounded-[10px] overflow-hidden "
      style={{ backgroundColor: backgroundColor }} // Aplicar el color de fondo
    >
      <div className='w-full h-[70px] pl-4  overflow-hidden flex justify-between bg-loginGreen text-tertiaryGreen font-bold text-[36px] '>
        <h2 className='pt-2'>{project?.name}</h2>
        <div className='bg-textGreen h-full w-[70px] flex items-center justify-center'>
          <Link to='/'>
          <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
          </Link>
        </div>
      </div>
<div className='w-full flex items-center justify-center'>
<div className='w-[350px] h-[55px] mt-10 mb-8 overflow-hidden flex rounded-[30px] border-outlineGrey/50 border-2 text-[14px] text-[#1D192B]'>
        <button className='w-full h-full  '><p>Todas</p></button>
        <button className='w-full h-full  border-r-2 border-l-2 border-outlineGrey/50 '><p>Asignadas</p></button>
        <button className='w-full h-full  '><p>Propias</p></button>
      </div>
</div>
      {children }
      <div className='flex items-center w-full justify-between pr-9'>
        
      <div className='w-[206px]  h-[38px] ml-4 flex items-center justify-center  bg-loginGreen rounded-[19px]'>
              <button onClick={handleAddCollaboratorsButton} className='font-semibold flex items-center justify-center gap-2 text-primaryDark/80 text-[13px]'><p>{project.collaborators.length} colaboradores en total</p><FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon> </button>
              
            </div>
          <div className='relative'>
          <button 
          onClick={createTask
   }
          className='bg-loginGreen rounded-[16px] top-[-2rem]  right-1 absolute w-[150px] flex items-center justify-center gap-2 h-[65px] text-tertiaryGreen'>
              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              <p>Nueva tarea</p>
            </button>
          </div>
      </div>
    </div>
  );
};

ProjectContainer.propTypes = {
  project: PropTypes.shape({
    color: PropTypes.string.isRequired, // Asegúrate de que color sea una cadena de texto
  }).isRequired,
};

export default ProjectContainer;
