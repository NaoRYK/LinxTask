import React, { useState, useEffect } from 'react';
import { addCustomStatus, deleteStatus, getTaskStatuses, updateStatus } from '../../services/statusService'; 
import { getTasksByProjectId, updateTaskStatus } from '../../services/taskService';
import unasignIcon from '../../assets/svg/do_not_disturb_on.svg'
import { faCircleMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colorSelectorIcon from "../../assets/icons/color-swatch.png";

const ManageStatusesModal = ({ task, onClose, projectId, onUpdateTask }) => {
    const [statuses, setStatuses] = useState([]);
    const [newStatusName, setNewStatusName] = useState('');
    const [newStatusColor, setNewStatusColor] = useState('#71E4B9');
    const [editingStatus, setEditingStatus] = useState(null);
    
    useEffect(() => {
        const fetchStatuses = async () => {
            try {
                const fetchedStatuses = await getTaskStatuses(projectId);
                setStatuses(fetchedStatuses);
            } catch (error) {
                console.error('Error al obtener los estados:', error);
            }
        };

        fetchStatuses();
    }, [projectId]);

    const capitalizeFirstLetter = (text) => {
        if (!text) return '';
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    const handleAddStatus = async () => {
        try {
            await addCustomStatus(projectId, newStatusName, newStatusColor);
            setNewStatusName('');
            setNewStatusColor('#ada8a8');

            // Actualiza la lista de estados
            const updatedStatuses = await getTaskStatuses(projectId);
            setStatuses(updatedStatuses);

            // Llama a la función de actualización de la tarea
            onUpdateTask(); 
        } catch (error) {
            console.error('Error al añadir el estado:', error);
        }
    };

    const handleDeleteStatus = async (statusId) => {
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este estado de la base de datos?');

        if (!confirmDelete) {
            return; // Si el usuario cancela, no hace nada
        }
    

        try {
            await deleteStatus(projectId, statusId);
            const updatedStatuses = await getTaskStatuses(projectId);
            setStatuses(updatedStatuses);
            onUpdateTask(); 
        } catch (error) {
            console.error('Error al eliminar el estado:', error);
        }
    };

    const handleEditStatus = async () => {
        try {
            const updatedStatus = {
                name: editingStatus.name.trim(),
                color: editingStatus.color
            };
    
            if (!updatedStatus.name) {
                throw new Error('El nombre del estado no puede estar vacío.');
            }
    
            await updateStatus(projectId, editingStatus.id, updatedStatus);

            // Actualiza las tareas con el nuevo estado
            const tasks = await getTasksByProjectId(projectId);
            const tasksWithUpdatedStatuses = tasks.map(async (task) => {
                const updatedStatuses = task.status.map(status =>
                    status === editingStatus.oldName ? updatedStatus.name : status
                );
                await updateTaskStatus(task.id, projectId, updatedStatuses);
            });

            await Promise.all(tasksWithUpdatedStatuses);

            // Actualiza la lista de estados
            setEditingStatus(null);
            const updatedStatuses = await getTaskStatuses(projectId);
            setStatuses(updatedStatuses);
            onUpdateTask(); 
        } catch (error) {
            console.error('Error al editar el estado:', error);
        }
    };

    const handleAssignStatus = async (statusId) => {
        const selectedStatus = statuses.find((status) => status.id === statusId);
        if (!selectedStatus) return;

        const currentStatuses = Array.isArray(task.status) ? task.status : [];
        let updatedStatuses;

        if (selectedStatus.name === 'pendiente' || selectedStatus.name === 'completada') {
            updatedStatuses = currentStatuses.filter(status =>
                status !== (selectedStatus.name === 'pendiente' ? 'completada' : 'pendiente')
            );
            updatedStatuses = [...updatedStatuses, selectedStatus.name];
        } else {
            updatedStatuses = currentStatuses.includes(selectedStatus.name)
                ? currentStatuses
                : [...currentStatuses, selectedStatus.name];
        }

        try {
            await updateTaskStatus(task.id, projectId, updatedStatuses);
            const updatedStatusesList = await getTaskStatuses(projectId);
            setStatuses(updatedStatusesList);
            onUpdateTask(); 
            onClose();
        } catch (error) {
            console.error('Error al actualizar el estado de la tarea:', error);
        }
    };

    const handleRemoveStatus = async (statusName) => {
        const currentStatuses = Array.isArray(task.status) ? task.status : [];
        let updatedStatuses;

        if (statusName === 'pendiente' || statusName === 'completada') {
            updatedStatuses = currentStatuses.filter(status =>
                status !== (statusName === 'pendiente' ? 'completada' : 'pendiente')
            );
        } else {
            updatedStatuses = currentStatuses.filter(status => status !== statusName);
        }

        try {
            await updateTaskStatus(task.id, projectId, updatedStatuses);
            const updatedStatusesList = await getTaskStatuses(projectId);
            setStatuses(updatedStatusesList);
            onUpdateTask(); 
            onClose();
        } catch (error) {
            console.error('Error al eliminar el estado de la tarea:', error);
        }
    };

    
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-700'>
            <div className='bg-[#D2F9E6] p-6 rounded-[28px] shadow-lg w-[400px] h-[auto] min-h-[400px]'>
                <h2 className='text-[24px] mb-4'>Gestionar Estados</h2>
                


                <div className='mb-4'>
                    {statuses.map((status, index) => (
                        <div key={index} className='grid grid-cols-[15%,40%,1fr] gap-1 items-center border-b-2  border-[#71E4B9] p-2'>
                            <div
                                className='w-[40px] h-[40px] rounded-full  '
                                style={{ backgroundColor: status.color }}
                            />
                            <span className='mr-2 text-[16px]'>{capitalizeFirstLetter(status.name)}</span>
                            {status.name !== 'completada' && status.name !== 'pendiente' && (
                                <>
                                {/* TODO */}
                                   {false === true &&  <button
                                        onClick={() => setEditingStatus(status)}
                                        className='bg-yellow-500 text-[#084C3C] px-2 py-1 rounded mr-2'
                                    >
                                        Editar
                                    </button>}

                                </>
                            )}
                            <div className='flex flex-row-reverse gap-2'>
                            { !task.status.includes(status.name) && (
                                <button
                                    onClick={() => handleAssignStatus(status.id)}
                                    className='bg-[#71E4B9] rounded-[10px] w-[70px] h-[30px] text-[12px] text-primaryDark/60 px-2 py-1 '
                                >
                                    Asignar
                                </button>
                            )}
                            {(status.name !== 'completada' && status.name !== 'pendiente')  && (task.status.includes(status.name)) && (
                                <button
                                    onClick={() => handleRemoveStatus(status.name)}
                                    className='bg-[#17CF97] w-[30px] flex items-center justify-center  rounded-full h-[30px]  text-primaryDark/60 px-2 py-1  '
                                >
                                    <FontAwesomeIcon icon={faCircleMinus}></FontAwesomeIcon>
                                </button>
                                
                            )}
                            {status.name !== 'completada' && status.name !== 'pendiente' && <button
                                        onClick={() => handleDeleteStatus(status.id)}
                                        className='bg-[#17CF97] w-[30px] flex items-center justify-center  rounded-full h-[30px]  text-primaryDark/60 py-1 '
                                    >
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                    </button> }
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mb-4 flex gap-4'>
                    <input
                        type='text'
                        value={newStatusName}
                        onChange={(e) => setNewStatusName(e.target.value)}
                        placeholder='Nombre del estado'
                        className='border p-2 w-[220px] rounded-[10px] h-[40px] bg-[#A9F1D2] text-[10px]'
                    />
          <div
          style={{backgroundColor:newStatusColor}}
          className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#71E4B9] shadow-md">
            <input
              id="statusColor"
              value={newStatusColor}
              onChange={(e) => setNewStatusColor(e.target.value)}
              type="color"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <img
              src={colorSelectorIcon}
              alt="Selector de color"
              className="w-6 h-6 cursor-pointer"
            />
          </div>

                </div>
                {editingStatus && (
                    <div className='mt-4'>
                        <h3 className='text-lg font-bold'>Editar Estado</h3>
                        <input
                            type='text'
                            value={editingStatus.name}
                            onChange={(e) =>
                                setEditingStatus({ ...editingStatus, name: e.target.value })
                            }
                            className='border p-2 w-full'
                        />
                        <input
                            type='color'
                            value={editingStatus.color}
                            onChange={(e) =>
                                setEditingStatus({ ...editingStatus, color: e.target.value })
                            }
                            className='mt-2'
                        />
                        <button
                            onClick={handleEditStatus}
                            className=' text-white p-2 mt-2 rounded'
                        >
                            Guardar Cambios
                        </button>
                    </div>
                )}
                <div className='flex items-end justify-end'>
                <button
                    onClick={onClose}
                    className=' text-[#17CF97] p-2 mt-4 rounded'
                >
                    Cerrar
                </button>
                <button
                        onClick={handleAddStatus}
                        className=' text-[#17CF97] p-2 mt-2 rounded'
                    >
                        Añadir Estado
                    </button>


                </div>
                
            </div>
        </div>
    );
};

export default ManageStatusesModal;
