import { useState, useEffect } from 'react';
import { createTask } from '../../services/taskService';
import useAuthStore from '../../stores/userStore';
import { getProjectCollaborators } from '../../services/projectService';
import { useParams } from 'react-router-dom';
import { getUserDisplayNames } from '../../services/userService';

const TaskForm = () => {
    const [taskText, setTaskText] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskColor, setTaskColor] = useState('');
    const [taskPriority, setTaskPriority] = useState(false);
    const [collaborators, setCollaborators] = useState([]);
    const [selectedCollaborators, setSelectedCollaborators] = useState([]);
    const { user } = useAuthStore();
    const { projectId } = useParams();

    useEffect(() => {
        const fetchCollaborators = async () => {
            const projectCollaborators = await getProjectCollaborators(projectId);
            const userDisplayNames = await getUserDisplayNames(projectCollaborators);
            setCollaborators(userDisplayNames);
        };

        fetchCollaborators();
    }, [projectId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            creatorId: user.uid,
            creatorName: user.displayName,
            projectId: projectId,
            text: taskText,
            description: taskDesc,
            dueDate: taskDate,
            status: 'pending',
            priority: taskPriority,
            collaborators: selectedCollaborators, 
        };
        createTask(projectId, taskData);
        setTaskText('');
        setTaskDesc('');
        setTaskDate('');
        setTaskPriority(false);
        setSelectedCollaborators([]);
    };

    const handleCollaboratorChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedCollaborators(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre de la tarea
                <input
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    type="text"
                    placeholder='Nombre de la tarea'
                />
            </label>
            <label>
                Descripción de la tarea
                <textarea
                    value={taskDesc}
                    onChange={(e) => setTaskDesc(e.target.value)}
                    placeholder='Descripción de la tarea'
                />
            </label>
            <label>
                Fecha de entrega
                <input
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                    type="date"
                />
            </label>
            <label>
                Colaboradores
                <select multiple value={selectedCollaborators} onChange={handleCollaboratorChange}>
                    {collaborators.map((collaborator) => (
                        <option key={collaborator.id} value={collaborator.id}>
                            {collaborator.displayName}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Prioritaria
                <input
                    type="checkbox"
                    checked={taskPriority}
                    onChange={(e) => setTaskPriority(e.target.checked)}
                />
            </label>
            <label>
                Color de la tarea
                <input
                    type="color"
                    checked={taskColor}
                    onChange={(e) => setTaskColor(e.target.value)}
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default TaskForm;
