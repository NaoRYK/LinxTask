import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { faCirclePlus, faClock, faCross, faMagnifyingGlass, faPen, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useAuthStore from '../../../stores/userStore';
import OverdueTasksModal from '../../Task/OverdueTaskModal';
import CompletedTasksModal from '../../Task/CompletedTaskModal';
const ProjectContainer = ({ project, children, createTask, handleAddCollaboratorsButton,refetchProject }) => {
    const { user } = useAuthStore();
    const [openOverdueTasksModal, setOpenOverdueTasksModal] = useState(false);
    const [overdueTasks, setOverdueTasks] = useState([]);

    const backgroundColor = project.color || '#FFD1D1';
    const [openCompletedTasksModal, setOpenCompletedTasksModal] = useState(false);
    const [completedTasks, setCompletedTasks] = useState([]);

    const fetchCompletedTasks = () => {
        const tasks = project.tasks || [];
        const completed = tasks.filter(task => task.status.includes('completada'));
        setCompletedTasks(completed);
    };
    const handleOpenCompletedTasksModal = () => {
        fetchCompletedTasks();
        setOpenCompletedTasksModal(true);
    };
    
    const handleCloseCompletedTasksModal = () => {
        setOpenCompletedTasksModal(false);
    };
    
    const fetchOverdueTasks = () => {
        // Reemplaza esto con la lógica para obtener las tareas atrasadas del proyecto
        const tasks = project.tasks || [];
        const now = new Date();
        const overdue = tasks.filter(task => new Date(task.dueDate) < now);
        setOverdueTasks(overdue);
    };

    const handleOpenOverdueTasksModal = () => {
        fetchOverdueTasks();
        setOpenOverdueTasksModal(true);
    };

    const handleCloseOverdueTasksModal = () => {
        setOpenOverdueTasksModal(false);
    };

    return (
        <div
            className="w-[90%] h-[85vh] grid grid-rows-[70px,100px,1fr,10%] flex-col rounded-[10px] overflow-hidden"
            style={{ backgroundColor: backgroundColor }}
        >
            <div className='w-full h-[70px] pl-4 overflow-hidden flex justify-between bg-loginGreen text-tertiaryGreen font-bold text-[36px] '>
                <h2 className='pt-2'>{project?.name}</h2>
                <div className='bg-textGreen h-full w-[70px] flex items-center justify-center'>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faX} />
                    </Link>
                </div>
            </div>
            <div className='w-full flex items-center justify-center'>
               
            </div>
            {children}
            <div className='flex items-center w-full justify-between pr-9'>
                <div className='w-[206px] h-[38px] ml-4 flex items-center justify-center bg-loginGreen rounded-[19px]'>
                    <button onClick={handleAddCollaboratorsButton} className='font-semibold flex items-center justify-center gap-2 text-primaryDark/80 text-[13px]'>
                        <p>{project.collaborators.length} colaboradores en total</p>
                        <FontAwesomeIcon icon={faCirclePlus} />
                    </button>
                </div>
                <div className='relative'>
                    <button
                        onClick={createTask}
                        className='bg-loginGreen rounded-[16px] top-[-2rem] right-1 absolute w-[150px] flex items-center justify-center gap-2 h-[65px] text-tertiaryGreen'>
                        <FontAwesomeIcon icon={faPen} />
                        <p>Nueva tarea</p>
                    </button>
                </div>
                {user.uid === project.creatorId && (
                    <div className='relative'>
                        <button
                            onClick={handleOpenOverdueTasksModal}
                            className='bg-loginGreen rounded-[16px] top-[-2rem] right-1 absolute w-[150px] flex items-center justify-center gap-2 h-[65px] text-tertiaryGreen'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <p>Ver atrasadas</p>
                        </button>
                    </div>
                )}
                {user.uid === project.creatorId && (
                    <div className='relative'>
                        <button
                            onClick={handleOpenCompletedTasksModal}
                            className='bg-loginGreen rounded-[16px] top-[-2rem] right-1 absolute w-[155px] flex items-center justify-center gap-2 h-[65px] text-tertiaryGreen'>
                            <FontAwesomeIcon className='ml-2' icon={faClock} />
                            <p>Ver horas acumuladas</p>
                        </button>
                    </div>
                )}
            </div>
            {openOverdueTasksModal && (
                <OverdueTasksModal
                    overdueTasks={overdueTasks}
                    onClose={handleCloseOverdueTasksModal}
                />
            )}
            {openCompletedTasksModal && (
    <CompletedTasksModal
    refetchProject={refetchProject}
        completedTasks={completedTasks}
        onClose={handleCloseCompletedTasksModal}
    />
)}

        </div>
    );
};

ProjectContainer.propTypes = {
    project: PropTypes.shape({
        color: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        tasks: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                description: PropTypes.string,
                dueDate: PropTypes.string.isRequired
            })
        ),
        collaborators: PropTypes.array.isRequired,
        creatorId: PropTypes.string.isRequired
    }).isRequired,
    createTask: PropTypes.func.isRequired,
    handleAddCollaboratorsButton: PropTypes.func.isRequired
};

export default ProjectContainer;
