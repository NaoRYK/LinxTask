import React, { useRef, useEffect, useState } from 'react';
import TaskEditModal from '../Task/TaskEditModal'; // Asegúrate de que la ruta de importación sea correcta
import { updateTaskDates, updateTaskPriority } from '../../services/taskService';
import ChangePriorityModal from './ChangePriorityModal';

import ManageStatusesModal from './ManageStatusesModal';
import TaskDatesModal from './TaskDateModal';

const TaskSettingsModal = ({ task, onClose, statuses , refetchProject,onUpdateTask}) => {
    const modalRef = useRef(null);
    const [openEditTaskModal, setOpenEditTaskModal] = useState(false); // Estado para el modal de edición
    const [openPriorityModal, setOpenPriorityModal] = useState(false);
    const [openManageStatusesModal, setOpenManageStatusesModal] = useState(false);
    const [openTaskDatesModal,setOpenTaskDatesModal] = useState(false)
    const handleOpenEditTaskModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenEditTaskModal(true); // Abre el modal de edición
    };

    const handleCloseEditTaskModal = () => {
        setOpenEditTaskModal(false); // Cierra el modal de edición
    };
    const handleSavePriority = async (isPriority) => {
        await updateTaskPriority(task.projectId, task.id, isPriority);
        refetchProject(); // Refetch project to update the UI
    };
    const handleOpenPriorityModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenPriorityModal(true);
    };
    const handleClosePriorityModal = () => {
        setOpenPriorityModal(false);
    };
    const handleOpenManageStatusesModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenManageStatusesModal(true);
    };
    
    const handleCloseManageStatusesModal = () => {
        setOpenManageStatusesModal(false);
    };
    const handleSaveTaskDates = async (startDate,endDate) => {
        
        await updateTaskDates(task.projectId, task.id, startDate, endDate);
        refetchProject(); // Actualizar el proyecto para reflejar los cambios
        handleCloseTaskDatesModal(); // Cierra el modal después de guardar
      };

    const handleOpenTaskDatesModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenTaskDatesModal(true);
    };

    const handleCloseTaskDatesModal = () => {
        setOpenTaskDatesModal(false);
    };
    
    // Función para aclarar el color
    const lightenColor = (hex, percent) => {
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);

        r = Math.min(255, Math.floor(r + (255 - r) * percent));
        g = Math.min(255, Math.floor(g + (255 - g) * percent));
        b = Math.min(255, Math.floor(b + (255 - b) * percent));

        return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
    };

    // Función para oscurecer el color
    const darkenColor = (hex, percent) => {
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);

        r = Math.max(0, Math.floor(r * (1 - percent)));
        g = Math.max(0, Math.floor(g * (1 - percent)));
        b = Math.max(0, Math.floor(b * (1 - percent)));

        return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
    };

    const baseColor = task.taskColor || '#FFFFFF'; // Color por defecto si no está definido
    const lighterColor = lightenColor(baseColor, 0.2); // Aclara en un 20%
    const darkerColor = darkenColor(baseColor, 0.4); // Oscurece en un 20%



    // Maneja el clic fuera del modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose(); // Llama a la función para cerrar el modal
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div
        ref={modalRef}
        className='w-[140px] absolute top-56 h-[160px] z-20 p-1 gap-2 text-[14px] rounded-[15px] shadow-md font-bold flex items-center flex-col justify-center'
        style={{ backgroundColor: lightenColor(baseColor, 0.2) }}
    >
        <button
            className='rounded-[15px] shadow-md w-[120px] h-[40px] hover:scale-105 transition-all'
            style={{ backgroundColor: baseColor, color: darkerColor }}
            onClick={handleOpenTaskDatesModal}
        >
            Editar inicio/fin
        </button>
        <button
            className='rounded-[15px] shadow-md w-[120px] h-[40px] hover:scale-105 transition-all'
            style={{ backgroundColor: baseColor, color: darkerColor }}
            onClick={handleOpenPriorityModal}
        >
            Cambiar prioridad
        </button>
        <button
    className='rounded-[15px] shadow-md w-[120px] h-[40px] hover:scale-105 transition-all'
    style={{ backgroundColor: baseColor, color: darkerColor }}
    onClick={handleOpenManageStatusesModal}
    
>
    Cambiar estado
</button>

        <button
            className='rounded-[15px] shadow-md w-[120px] h-[40px] hover:scale-105 transition-all'
            style={{ backgroundColor: baseColor, color: darkerColor }}
            onClick={handleOpenEditTaskModal}
        >
            Editar tarea
        </button>
        {openEditTaskModal && (
            <TaskEditModal
                task={task}
                onClose={handleCloseEditTaskModal}
                statuses={statuses}
                refetchProject={refetchProject}
            />
        )}
        {openPriorityModal && (
            <ChangePriorityModal
                task={task}
                onClose={handleClosePriorityModal}
                onSave={handleSavePriority}

            />
        )}
                    {openTaskDatesModal && (
                <TaskDatesModal
                    task={task}
                    onClose={handleCloseTaskDatesModal}
                    projectId={task.projectId}
                    refetchProject={refetchProject}
                    onSave={handleSaveTaskDates} 
                />
            )}
        {openManageStatusesModal && (
<ManageStatusesModal
    task={task}
    onClose={handleCloseManageStatusesModal}
    projectId={task.projectId}
    onUpdateTask={onUpdateTask} // Asegúrate de que esto esté definido
/>


)}

    </div>
    );
};

export default TaskSettingsModal;
