import React, { useState, useEffect } from 'react';
import { createTask } from '../../services/taskService';
import useAuthStore from '../../stores/userStore';
import { getTaskStatuses } from '../../services/projectService'; // Asegúrate de importar la función correcta

const TaskForm = ({ projectId }) => {
    const [taskText, setTaskText] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskStatus, setTaskStatus] = useState('');
    const [taskPriority, setTaskPriority] = useState(false);
    const [statuses, setStatuses] = useState([]);
    const { user } = useAuthStore();

    useEffect(() => {
        const fetchStatuses = async () => {
            try {
                const statusList = await getTaskStatuses(projectId);
                setStatuses(statusList);
            } catch (error) {
                console.error("Error al cargar los estados:", error);
            }
        };

        if (projectId) {
            fetchStatuses();
        }
    }, [projectId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(user, projectId, taskText, taskDesc, taskDate, taskStatus, taskPriority);
        setTaskText('');
        setTaskDesc('');
        setTaskDate('');
        setTaskStatus('');
        setTaskPriority(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                type="text"
                placeholder='Nombre de la tarea'
            />
            <textarea
                value={taskDesc}
                onChange={(e) => setTaskDesc(e.target.value)}
                placeholder='Descripción de la tarea'
            />
            <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
            />
            <select value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}>
                <option value="">Selecciona un estado</option>
                {statuses.map((status, index) => (
                    <option key={index} value={status}>
                        {status}
                    </option>
                ))}
            </select>
            <label>
                Prioritaria
                <input
                    type="checkbox"
                    checked={taskPriority}
                    onChange={(e) => setTaskPriority(e.target.checked)}
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default TaskForm;
