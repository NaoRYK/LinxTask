import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { getUserById, getUserDisplayNames } from '../../services/userService';

const TaskInfoModal = ({ task, onClose }) => {
    const modalRef = useRef(null);
    const [creatorData, setCreatorData] = useState() 

    // Maneja el clic fuera del modal
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

        fetchCreatorData();

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        
    }, []);


    useEffect(() => {
      
    console.log(creatorData);
    
    }, [creatorData])
    
    const backgroundColor = task.taskColor || '#FFED88';
    const darkerColor = darkenColor(backgroundColor, 0.4);

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


    
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 cursor-default" style={{ backdropFilter: 'blur(5px)' }}>
            <div
                className="bg-white p-6 rounded-lg shadow-lg  w-[1000px] h-[755px] relative"
                ref={modalRef}
                style={{backgroundColor:task.taskColor}}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                >
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
                <h2 className="text-[48px]  font-bold mb-4" style={{ color: darkerColor }}>
                    {task.name}
                </h2>
                <p className="text-gray-700 mb-4">{task.description}</p>
                <p className="text-gray-500 mb-2">
                    <strong>Fecha de Entrega:</strong> {formattedDueDate}
                </p>
                <p className="text-gray-500 mb-2">
                    <strong>Prioridad:</strong> {task.priority ? 'Alta' : 'Normal'}
                </p>
                <p className="text-gray-500">
                    <strong>Colaboradores:</strong> {task.assignedTo.join(', ')}
                </p>
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
