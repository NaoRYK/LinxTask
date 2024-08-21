import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { getUsers } from '../../services/userService';

const OverdueTasksModal = ({ overdueTasks, onClose }) => {

    const [usersAssignedTo, setUsersAssignedTo] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const fetchAssignedToNames = async () => {
            try {
                const users = await getUsers(); // Obtiene todos los usuarios
                setAllUsers(users);
                

                // Filtra los usuarios que están asignados a las tareas atrasadas
                const assignedUserIds = new Set(
                    overdueTasks.flatMap(task => task.assignedTo || [])
                );
                const collaboratorsWithDetails = users.filter(user => assignedUserIds.has(user.id));
                setUsersAssignedTo(collaboratorsWithDetails);
                

            } catch (error) {
                console.error("Error al obtener colaboradores de la tarea:", error);
            }
        };

        fetchAssignedToNames();
    }, [overdueTasks]);

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-[80%] md:w-[50%] p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Tareas Atrasadas</h2>
                    <button onClick={onClose} className="text-gray-600">
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>
                <div>
                    {overdueTasks.length > 0 ? (
                        <ul>
                            {overdueTasks.map(task => (
                                <li key={task.id} className="py-2 border-b">
                                    <span className="font-semibold">{task.name}</span>
                                    <p className="text-gray-600">{task.description}</p>
                                    <p className="text-gray-600">
                                        Asignado a: <span className='font-semibold'>{task.assignedTo?.map(id => {
                                            const user = usersAssignedTo.find(user => user.id === id);
                                            return user ? user.name : 'Desconocido';
                                        }).join(', ')}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay tareas atrasadas.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

OverdueTasksModal.propTypes = {
    overdueTasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            assignedTo: PropTypes.arrayOf(PropTypes.string),  // Asegúrate de que sea un array de IDs de usuarios
            dueDate: PropTypes.string.isRequired, // O el tipo de dato que corresponda
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default OverdueTasksModal;
