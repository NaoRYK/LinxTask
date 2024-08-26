import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faClock, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { getUsers } from '../../services/userService';
import TaskInfoModal from './TaskInfoModal';

const OverdueTasksModal = ({ task, overdueTasks, onClose, refetchProject,project }) => {
    const [usersAssignedTo, setUsersAssignedTo] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [openTaskInfoModal, setOpenTaskInfoModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        const fetchAssignedToNames = async () => {
            try {
                const users = await getUsers();
                setAllUsers(users);
                const assignedUserIds = new Set(overdueTasks.flatMap(task => task.assignedTo || []));
                const collaboratorsWithDetails = users.filter(user => assignedUserIds.has(user.id));
                setUsersAssignedTo(collaboratorsWithDetails);
            } catch (error) {
                console.error("Error al obtener colaboradores de la tarea:", error);
            }
        };

        fetchAssignedToNames();
    }, [overdueTasks]);

    const handleTaskClick = (task) => {
        setSelectedTask(task);
        setOpenTaskInfoModal(true);
    };

    const handleCloseTaskInfoModal = () => {
        setOpenTaskInfoModal(false);
        setSelectedTask(null);
    };

    const darkenColor = (color, percent) => {
        let R = parseInt(color.slice(1, 3), 16);
        let G = parseInt(color.slice(3, 5), 16);
        let B = parseInt(color.slice(5, 7), 16);

        R = Math.max(0, Math.min(255, R * (1 - percent)));
        G = Math.max(0, Math.min(255, G * (1 - percent)));
        B = Math.max(0, Math.min(255, B * (1 - percent)));

        return `#${Math.round(R).toString(16).padStart(2, '0')}${Math.round(G).toString(16).padStart(2, '0')}${Math.round(B).toString(16).padStart(2, '0')}`;
    };

    const lighterColor = darkenColor(project.color, -0.2);
    const darkestColor = darkenColor(project.color, 0.4);
    const darkerColor = darkenColor(project.color, 0.2);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                style={{ backgroundColor: lighterColor }}
                className="p-6 rounded-[20px] shadow-lg w-[850px] h-[550px]"
            >
                <div className='flex items-center mb-4 justify-between'>
                    <h2 style={{ color: darkestColor }} className="text-[40px] font-bold">Tareas Atrasadas</h2>
                    <button
                        onClick={onClose}
                        style={{ backgroundColor: darkerColor, color: lighterColor }}
                        className="py-2 px-4 text-[16px] h-[45px] w-[130px] rounded-[100px]"
                    >
                        Cerrar
                    </button>
                </div>
                <div>
                    {overdueTasks.length > 0 ? (
                        <ul className="list-none flex flex-col gap-2 py-4 overflow-y-auto max-h-[400px]">
                            {overdueTasks.map(task => (
                                <li
                                    key={task.id}
                                    style={{ backgroundColor: task.taskColor, color: darkenColor(task.taskColor,0.4) }}
                                    className="w-[765px] h-[140px] rounded-[10px] p-4 flex justify-between items-center cursor-pointer"
                                    onClick={() => handleTaskClick(task)}
                                >
                                    <div>
                                        <div className='flex items-center gap-2'>
                                            <FontAwesomeIcon icon={faCaretRight} />
                                            <p className='font-semibold text-[24px]'>{task.name}</p>
                                        </div>
                                        <p className='w-[410px] h-[60px]'>{task.description}</p>
                                        <p 
                                        style={{color:darkenColor(task.taskColor,0.4)}}>
                                            Asignado a: <span className='font-semibold'>{task.assignedTo?.map(id => {
                                                const user = usersAssignedTo.find(user => user.id === id);
                                                return user ? user.name : 'Desconocido';
                                            }).join(', ')}</span>
                                        </p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div style={{ backgroundColor: darkenColor(task.taskColor,0.4), color: darkenColor(task.taskColor,-0.4) }} className='flex text-[12px] items-center justify-center p-2 gap-2 w-[156px] text-nowrap h-[35px] rounded-[10px]'>
                                            <FontAwesomeIcon icon={faClock} />
                                            <p>Fecha límite: {new Date(task.dueDate).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay tareas atrasadas.</p>
                    )}
                </div>
            </div>
            {openTaskInfoModal &&
                <TaskInfoModal
                    refetchProject={refetchProject}
                    taskData={selectedTask}
                    onClose={handleCloseTaskInfoModal}
                />
            }
        </div>
    );
};

OverdueTasksModal.propTypes = {
    project: PropTypes.shape({
        color: PropTypes.string.isRequired,
    }).isRequired,
    overdueTasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            assignedTo: PropTypes.arrayOf(PropTypes.string),
            dueDate: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired,
    refetchProject: PropTypes.func.isRequired,
};

export default OverdueTasksModal;
