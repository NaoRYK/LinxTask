import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCaretRight, faEllipsisV, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { deleteTask, getTaskById } from '../../services/taskService';
import useAuthStore from '../../stores/userStore';
import TaskInfoModal from '../Task/TaskInfoModal';
import TaskSettingsModal from '../Task/TaskSettingsModal';
import TaskEditModal from '../Task/TaskEditModal';

const TaskCard = ({ task, statuses, onDeleteTask, refetchProject,onUpdateTask }) => {
    const backgroundColor = task.taskColor || '#FFED88';
    const darkerColor = darkenColor(backgroundColor, 0.2);
    const darkestColor = darkenColor(backgroundColor, 0.4);
    const [openCardModal, setOpenCardModal] = useState(false);
    const [openCardSettingsModal, setOpenCardSettingsModal] = useState(false);
    const [openTaskEditModal, setOpenTaskEditModal] = useState(false);
    const { user } = useAuthStore();

    const handleOpenCardModal = (e) => {
        if (e.target.classList.contains('taskCard')) {
            setOpenCardModal(true);
        }
    };
    const handleUpdateTask = async () => {
        try {
            const updatedTask = await getTaskById(task.id, task.projectId);
            onUpdateTask(updatedTask); 
        } catch (error) {
            console.error('Error al obtener la tarea actualizada:', error);
        }
    };
    

    const handleToggleCardSettingsModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.target.closest('.taskCard button') || e.target.classList.contains('taskCard')) {
            setOpenCardSettingsModal(!openCardSettingsModal);
        }
    };

    const handleOpenTaskEditModal = () => {
        setOpenTaskEditModal(true);
    };

    const handleCloseCardSettingsModal = () => {
        setOpenCardSettingsModal(false);
    };

    const handleCloseCardModal = () => {
        setOpenCardModal(false);
    };

    const handleCloseTaskEditModal = () => {
        setOpenTaskEditModal(false);
    };

    const handleDeleteCard = async () => {
        try {
            await deleteTask(task.projectId, task.id);
            onDeleteTask(task.id);
        } catch (error) {
            console.error('Error al eliminar la tarea:', error);
        }
    };

    const parseDueDate = (dueDate) => {
        if (dueDate && dueDate.seconds) {
            return new Date(dueDate.seconds * 1000);
        } else if (dueDate && !isNaN(Date.parse(dueDate))) {
            return new Date(dueDate);
        } else {
            return new Date();
        }
    };

    const dueDateTimestamp = parseDueDate(task.dueDate);
    const formattedDueDate = isNaN(dueDateTimestamp) ? 'Fecha inválida' : dueDateTimestamp.toLocaleString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    

    const isOverdue = dueDateTimestamp < new Date();

    const getStatusColor = (status) => {
        const statusObj = statuses.find(s => s.name === status);
        return statusObj ? statusObj.color : '#6d6262';
    };

    return (
        <div className='taskCard w-[auto] min-w-[410px] h-[250px] rounded-[10px] shadow-lg p-6 grid grid-rows-[25px,120px,35px] relative cursor-pointer' style={{ backgroundColor: backgroundColor }}
            onClick={handleOpenCardModal}
        >
            {task.creatorId === user.uid && <button
                onClick={handleDeleteCard}
                className='w-[30px] taskCard rounded-full h-[30px] text-[18px] bg-[#BC1919] text-[#d79c9c] flex items-center justify-center absolute top-[-.5rem] right-[-.5rem]'
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>}
            <div className='flex taskCard items-center gap-3'>
                <FontAwesomeIcon style={{ color: darkestColor }} icon={faCaretRight} />
                <h3 className='text-[24px] taskCard font-semibold overflow-hidden text-ellipsis whitespace-nowrap' style={{ color: darkestColor }}>{task.name}</h3>
            </div>
            <div className='taskCard'>
                <p className='text-primaryDark/70 taskCard max-w-[336px] max-h-[122px] overflow-hidden text-ellipsis break-words'>{task.description}</p>
            </div>
            <div className='grid taskCard items-center grid-cols-[40px,90px,1fr] gap-3'>
                <button onClick={handleToggleCardSettingsModal} className='w-[30px] h-[30px] rounded-full flex items-center justify-center' style={{ backgroundColor: darkerColor }}>
                    <FontAwesomeIcon className='' icon={faEllipsisV} />
                </button>
                {openCardSettingsModal && (
                    <TaskSettingsModal
                        refetchProject={refetchProject}
                        task={task}
                        onClose={handleCloseCardSettingsModal}
                        statuses={statuses}
                        onOpenEditModal={handleOpenTaskEditModal}
                    onUpdateTask={handleUpdateTask}

                    />
                )}
                <div className='flex taskCard items-center gap-1'>
                    <FontAwesomeIcon icon={faClock} />
                    <p className='font-semibold text-[12px]'>{formattedDueDate}</p>
                </div>
                <div className='flex taskCard  justify-end  w-full  gap-[0.2rem]'>
                    <div className='w-full  flex flex-wrap gap-2 flex-col-reverse items-end  h-[70px]'>
                        {task.priority && (
                            <p
                                className='p-1 taskCard rounded-[10px] w-[100px] text-center h-[30px] text-[15px] font-semibold text-white overflow-hidden text-ellipsis'
                                style={{ backgroundColor: darkerColor }}
                            >
                                Prioritaria
                            </p>
                        )}
                        {task.status.map((status, index) => (
                            <p
                                key={index}
                                className='p-1 taskCard rounded-[10px] w-[100px] text-center h-[30px] text-[15px] font-semibold text-white overflow-hidden text-ellipsis'
                                style={{ backgroundColor: getStatusColor(status) }}
                            >
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </p>
                        ))}
                        {isOverdue && (
                            <p className='p-1 taskCard rounded-[10px] w-[100px] text-center h-[30px] text-[15px] font-semibold text-white overflow-hidden text-ellipsis bg-red-500'>
                                Atrasada
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {openCardModal && <TaskInfoModal task={task} onClose={handleCloseCardModal} />}
            {openTaskEditModal && (
                <TaskEditModal
                    task={task}
                    onClose={handleCloseTaskEditModal}
                    statuses={statuses}
                    refetchProject={refetchProject}
                />
            )}
        </div>
    );
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

export default TaskCard;
