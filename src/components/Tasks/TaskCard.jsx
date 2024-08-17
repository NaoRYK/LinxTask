import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCaretRight, faEllipsisV, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { deleteTask } from '../../services/taskService';
import useAuthStore from '../../stores/userStore';
import TaskInfoModal from '../Task/TaskInfoModal';

const TaskCard = ({ task, statuses, onDeleteTask }) => {
    const backgroundColor = task.taskColor || '#FFED88';
    const darkerColor = darkenColor(backgroundColor, 0.2);
    const darkestColor = darkenColor(backgroundColor, 0.4);
    const [openCardModal, setOpenCardModal] = useState(false);
    const { user } = useAuthStore();

    const handleOpenCardModal = () => {
        setOpenCardModal(true);
    };

    const handleCloseCardModal = () => {
        setOpenCardModal(false);
        console.log('Cerrando el modal');

    };

    const handleDeleteCard = () => {
        deleteTask(task.projectId, task.id);
        onDeleteTask(task.id);
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
    const formattedDueDate = isNaN(dueDateTimestamp) ? 'Fecha inválida' : dueDateTimestamp.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const getStatusColor = (status) => {
        const statusObj = statuses.find(s => s.name === status);
        return statusObj ? statusObj.color : '#6d6262';
    };

    return (
        <div className='w-[410px] h-[250px] rounded-[10px] shadow-lg p-6 grid grid-rows-[25px,142px,35px] relative  cursor-pointer' style={{ backgroundColor: backgroundColor }}
            onClick={handleOpenCardModal}
        >
            {task.creatorId === user.uid && <button
                onClick={handleDeleteCard}
                className='w-[30px] rounded-full h-[30px] text-[18px] bg-[#BC1919] text-[#761c1c] flex items-center justify-center absolute top-[-.5rem] right-[-.5rem]'
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>}
            <div className='flex items-center gap-3'>
                <FontAwesomeIcon  style={{color:darkestColor}} icon={faCaretRight} />
                <h3 className='text-[24px] font-semibold' style={{color:darkestColor}}>{task.name}</h3>
            </div>
            <div className=''>
                <p className='text-primaryDark/70 max-w-[336px] max-h-[142px] overflow-hidden text-ellipsis break-words '>{task.description}</p>
            </div>
            <div className='grid items-center grid-cols-[40px,90px,1fr] gap-3'>
                <div className='w-[30px] h-[30px] rounded-full flex items-center justify-center' style={{ backgroundColor: darkerColor }}>
                    <FontAwesomeIcon className='' icon={faEllipsisV} />
                </div>
                <div className='flex items-center gap-1'>
                    <FontAwesomeIcon icon={faClock} />
                    <p className='font-semibold text-[10px]'>{formattedDueDate}</p>
                </div>
                <div className='flex justify-end gap-[0.2rem]'>
                {task.priority &&                         <p
                           
                           className='p-1 rounded-[10px] w-[110px] text-center h-[30px] text-[15px] font-semibold text-white overflow-hidden text-ellipsis'
                           style={{ backgroundColor: darkerColor }}
                       >
                           Prioritaria
                       </p>}
                    {task.status.map((status, index) => (
                        <p
                            key={index}
                            className='p-1 rounded-[10px] w-[110px] text-center h-[30px] text-[15px] font-semibold text-white overflow-hidden text-ellipsis'
                            style={{ backgroundColor: getStatusColor(status) }}
                        >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </p>
                    ))}


                </div>
            </div>
            {openCardModal && <TaskInfoModal task={task} onClose={handleCloseCardModal} />}
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
