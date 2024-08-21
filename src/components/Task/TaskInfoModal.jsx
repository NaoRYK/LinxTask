import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { getUserById, getUserDisplayNames } from '../../services/userService'; 
import { getTaskStatuses } from '../../services/statusService'; 

const TaskInfoModal = ({ task, onClose }) => {
    const modalRef = useRef(null);
    const [creatorData, setCreatorData] = useState();
    const [statuses, setStatuses] = useState([]);
    const [collaborators, setCollaborators] = useState([]);

    const getStatusColor = (status) => {
        const statusObj = statuses.find(s => s.name === status);
        return statusObj ? statusObj.color : '#6d6262';
    };

    // Verificar si la tarea está atrasada
    const isOverdue = () => {
        const dueDateTimestamp = parseDate(task.dueDate);
        return dueDateTimestamp < new Date();
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        const fetchCreatorData = async () => {
            if (task.creatorId) {
                const fetchedCreatorData = await getUserById(task.creatorId);
                setCreatorData(fetchedCreatorData);
            }
        };

        const fetchStatuses = async () => {
            const fetchedStatuses = await getTaskStatuses();
            setStatuses(fetchedStatuses);
        };

        const fetchCollaborators = async () => {
            if (task.assignedTo && task.assignedTo.length > 0) {
                const fetchedCollaborators = await getUserDisplayNames(task.assignedTo);
                setCollaborators(fetchedCollaborators);
            }
        };

        fetchCreatorData();
        fetchStatuses();
        fetchCollaborators();

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [task.creatorId, task.assignedTo, onClose]);

    const backgroundColor = task.taskColor || '#FFED88';
    const darkerColor = darkenColor(backgroundColor, 0.4);
    const lighterColor = darkenColor(backgroundColor, -0.4);
    const darkColor = darkenColor(backgroundColor, 0.2);

    // Función para convertir `createdAt` a una fecha formateada
    const parseDate = (date) => {
        if (date && date.seconds) {
            return new Date(date.seconds * 1000);
        } else if (date && !isNaN(Date.parse(date))) {
            return new Date(date);
        } else {
            return new Date();
        }
    };

    const createdAtTimestamp = parseDate(task.createdAt);
    const formattedCreatedAt = isNaN(createdAtTimestamp) ? 'Fecha inválida' : createdAtTimestamp.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const dueDateTimestamp = parseDate(task.dueDate);
    const formattedDueDate = isNaN(dueDateTimestamp) ? 'Fecha inválida' : dueDateTimestamp.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const renderDescriptionWithLinks = (description) => {
        const urlPattern = /\b(https?:\/\/[^\s]+)/gi;
        return description.split(urlPattern).map((part, index) => {
          const isUrl = urlPattern.test(part) && part.startsWith('http');
          if (isUrl) {
            try {
              const url = new URL(part);
              return (
                <a key={index} href={url.href} target="_blank" rel="noopener noreferrer" style={{ color: lighterColor }} className="hover:underline">
                  {part}
                </a>
              );
            } catch (e) {
              return part;
            }
          } else {
            return part;
          }
        });
      };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 cursor-default" style={{ backdropFilter: 'blur(5px)' }}>
            <div
                className="bg-white p-6 rounded-lg shadow-lg w-[1000px] grid grid-rows-[60px,100px,1fr,60px] h-[755px] relative"
                ref={modalRef}
                style={{ backgroundColor: task.taskColor }}
            >
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Esto evita que el evento se propague a elementos padres
                        onClose();
                    }}
                    className="absolute top-4 right-4 text-primaryDark hover:text-gray-800"
                >
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
                <h2 className="text-[48px] font-bold mb-4" style={{ color: darkerColor }}>
                    {task.name}
                </h2>
                <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center justify-center gap-x-2'>
                        {creatorData && (
                            <>
                                <img className='rounded-full h-[40px] w-[40px]' src={creatorData.photoURL} alt={creatorData.name} />
                                <div className='font-bold' style={{ color: darkerColor }}>
                                    <p className='text-[20px]'>Por {creatorData.name}</p>
                                    <p className='text-[12px]'>Creado el {formattedCreatedAt}</p>
                                </div>
                            </>
                        )}
                    </div>
                    <div className='flex gap-2 flex-wrap'>
                        {task.priority && (
                            <p
                                className='p-1 rounded-[10px] bg-red-600 w-[110px] text-center h-[30px] text-[15px] font-semibold text-white overflow-hidden text-ellipsis'
                            >
                                Prioritaria
                            </p>
                        )}
                        {task.status && task.status.map((status, index) => (
                            <p
                                key={index}
                                className='p-1 rounded-[10px] w-[110px] text-center h-[30px] text-[15px] font-semibold text-white overflow-hidden text-ellipsis'
                                style={{ backgroundColor: getStatusColor(status) }}
                            >
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </p>
                        ))}
                        {/* Mostrar etiqueta de "Atrasada" si la tarea está atrasada */}
                        {isOverdue() && (
                            <p className='p-1 rounded-[10px] w-[110px] text-center h-[30px] text-[15px] font-semibold text-white overflow-hidden text-ellipsis bg-red-500'>
                                Atrasada
                            </p>
                        )}
                    </div>
                </div>
                <div className='rounded-[20px] p-2' style={{backgroundColor: darkColor}}>
                    <p className="text-primaryDark/80">{renderDescriptionWithLinks(task.description)}</p>
                </div>

                <div className="font-bold flex items-center justify-between" style={{color: darkerColor}}>
                    <p>
                        Colaboradores: <span className='text-primaryDark'>{collaborators.map(collab => collab.name).join(', ')}</span>
                    </p>
                    <p>Fecha limite: <span className='text-primaryDark'> {formattedDueDate}</span></p>
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

export default TaskInfoModal;
