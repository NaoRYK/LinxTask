import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TaskInfoModal from './TaskInfoModal';

const CompletedTasksModal = ({ completedTasks, onClose, refetchProject }) => {
    const [openTaskInfoModal, setOpenTaskInfoModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [totalHours, setTotalHours] = useState(0);

    // Calcular horas dedicadas
    const calculateHours = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffInMs = end - start;
        const diffInHours = diffInMs / (1000 * 60 * 60); // Convertir de milisegundos a horas
        return diffInHours.toFixed(2); // Redondear a 2 decimales
    };

    // Calcular total de horas acumuladas
    useEffect(() => {
        const total = completedTasks.reduce((acc, task) => {
            const hours = calculateHours(task.startDate, task.endDate);
            return acc + parseFloat(hours);
        }, 0);
        setTotalHours(total.toFixed(2));
    }, [completedTasks]);

    const handleTaskClick = (task) => {
        setSelectedTask(task);
        setOpenTaskInfoModal(true);
    };

    const handleCloseCardModal = () => {
        setOpenTaskInfoModal(false);
        setSelectedTask(null);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-2xl font-bold mb-4">Tareas Completadas</h2>
                {completedTasks.length > 0 ? (
                    <ul className="list-disc pl-5">
                        {completedTasks.map(task => (
                            <li 
                                key={task.id} 
                                className="mb-2 cursor-pointer" 
                                onClick={() => handleTaskClick(task)}
                            >
                                <strong>{task.name}</strong> - {task.description}
                                <p>Horas dedicadas: {calculateHours(task.startDate, task.endDate)}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay tareas completadas.</p>
                )}
                <div className="mt-4">
                    <strong>Total de horas acumuladas: {totalHours} horas</strong>
                </div>
                <button
                    onClick={onClose}
                    className="mt-4 bg-custom-checked text-white py-2 px-4 rounded hover:bg-tertiaryGreen"
                >
                    Cerrar
                </button>
            </div>
            {openTaskInfoModal && 
                <TaskInfoModal
                    refetchProject={refetchProject}
                    taskData={selectedTask}
                    onClose={handleCloseCardModal}
                />
            }
        </div>
    );
};

CompletedTasksModal.propTypes = {
    completedTasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired,
    refetchProject: PropTypes.func.isRequired
};

export default CompletedTasksModal;
