import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { faCirclePlus, faCross, faMagnifyingGlass, faPen, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useAuthStore from '../../../stores/userStore';
import OverdueTasksModal from '../../Task/OverdueTaskModal';
const ProjectContainer = ({ project, children, createTask, handleAddCollaboratorsButton }) => {
    const { user } = useAuthStore();
    const [openOverdueTasksModal, setOpenOverdueTasksModal] = useState(false);
    const [overdueTasks, setOverdueTasks] = useState([]);

    const backgroundColor = project.color || '#FFD1D1';

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
                <div className='w-[350px] h-[55px] mt-10 mb-8 overflow-hidden flex rounded-[30px] border-outlineGrey/50 border-2 text-[14px] text-[#1D192B]'>
                    <button className='w-full h-full'><p>Todas</p></button>
                    <button className='w-full h-full border-r-2 border-l-2 border-outlineGrey/50'><p>Asignadas</p></button>
                    <button className='w-full h-full'><p>Propias</p></button>
                </div>
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
            </div>
            {openOverdueTasksModal && (
                <OverdueTasksModal
                    overdueTasks={overdueTasks}
                    onClose={handleCloseOverdueTasksModal}
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
