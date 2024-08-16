import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCaretRight, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TaskCard = ({ task, statuses }) => {
    const backgroundColor = task.taskColor || '#FFED88';
    const darkerColor = darkenColor(backgroundColor, 0.2); // Ajusta el porcentaje para oscurecer más o menos

    const parseDueDate = (dueDate) => {
        if (dueDate && dueDate.seconds) {
            // Es un timestamp
            return new Date(dueDate.seconds * 1000); // Convertir segundos a milisegundos
        } else if (dueDate && !isNaN(Date.parse(dueDate))) {
            // Es una cadena de fecha
            return new Date(dueDate);
        } else {
            // Fecha inválida
            return new Date();
        }
    };

    const dueDateTimestamp = parseDueDate(task.dueDate);
    const formattedDueDate = isNaN(dueDateTimestamp) ? 'Fecha inválida' : dueDateTimestamp.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    // Obtener el color de fondo para el estado
    const getStatusColor = (status) => {
        const statusObj = statuses.find(s => s.name === status);
        return statusObj ? statusObj.color : '#6d6262'; // Color predeterminado si no se encuentra el estado
    };

    return (
        <div className='w-[400px] h-[250px] rounded-[10px] shadow-lg p-6 grid grid-rows-[25px,142px,35px]' style={{ backgroundColor: backgroundColor }}>
            <div className='flex items-center gap-3'>
                <FontAwesomeIcon icon={faCaretRight} />
                <h3 className='text-[24px] font-semibold'>{task.name}</h3>
            </div>
            <div className=''>
            <p className='text-primaryDark/70 max-w-[336px] max-h-[142px] overflow-hidden text-ellipsis break-words '>{task.description}</p>            </div>
            <div className='grid items-center grid-cols-[40px,90px,1fr] gap-3'>
                <div className='w-[30px] h-[30px] rounded-full flex items-center justify-center' style={{ backgroundColor: darkerColor }}>
                    <FontAwesomeIcon className='' icon={faEllipsisV} />
                </div>
                <div className='flex items-center gap-1'>
                    <FontAwesomeIcon icon={faClock} />
                    <p className='font-semibold text-[10px]'>{formattedDueDate}</p>
                </div>
                <div className='flex justify-end'>
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
