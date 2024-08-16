import { useState, useEffect } from 'react';
import { createTask } from '../../services/taskService';
import useAuthStore from '../../stores/userStore';
import { getProjectCollaborators } from '../../services/projectService';
import { useParams } from 'react-router-dom';
import { getUserDisplayNames } from '../../services/userService';
import TaskInput from './TaskInput';

const TaskForm = ({ onCreateTask,refetchProject }) => {
    const [taskText, setTaskText] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskColor, setTaskColor] = useState('#ffffff'); // Valor inicial del color
    const [taskPriority, setTaskPriority] = useState(false);
    const [collaborators, setCollaborators] = useState([]);
    const [selectedCollaborators, setSelectedCollaborators] = useState([]);
    const [error, setError] = useState('');
    const { user } = useAuthStore();
    const { projectId } = useParams();

    const today = new Date().toISOString().split('T')[0];

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

        if (!taskText || !taskDesc || !taskDate) {
            setError('Por favor, complete todos los campos obligatorios.');
            return;
        }

        setError('');

        const taskData = {
            creatorId: user.uid,
            creatorName: user.displayName,
            projectId: projectId,
            name: taskText,
            description: taskDesc,
            dueDate: taskDate,
            status: ['pendiente'],
            priority: taskPriority,
            assignedTo: selectedCollaborators,
            taskColor: taskColor // Asegúrate de que el color se incluya aquí
        };

        createTask(projectId, taskData)
            .then((newTask) => {
                onCreateTask(newTask);
                refetchProject();

                setTaskText('');
                setTaskDesc('');
                setTaskDate('');
                setTaskPriority(false);
                setSelectedCollaborators([]);
                setTaskColor('#FFED88'); 
            })
            .catch(error => {
                console.error("Error al crear la tarea:", error);
                setError('Hubo un error al crear la tarea.');
            });
    };

    const handleCollaboratorChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedCollaborators(value);
    };

    return (
        <form onSubmit={handleSubmit} autoComplete='off' className='flex flex-col bg-blue-700/40'>
            {error && <p className="text-red-500">{error}</p>}
            <TaskInput
                label='Nombre de la tarea'
                type='text'
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder='Nombre de la tarea'
                required
            />
            <TaskInput
                label='Descripción de la tarea'
                type='textarea'
                value={taskDesc}
                onChange={(e) => setTaskDesc(e.target.value)}
                placeholder='Descripción de la tarea'
                required
            />
            <TaskInput
                label='Fecha de entrega'
                type='datetime-local'
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                required
                min={today}
            />
            <TaskInput
                label='Colaboradores'
                type='select'
                value={selectedCollaborators}
                onChange={handleCollaboratorChange}
                options={collaborators.map(collaborator => ({
                    value: collaborator.id,
                    label: collaborator.name
                }))}
            />
            <TaskInput
                label='Prioritaria'
                type='checkbox'
                checked={taskPriority}
                onChange={(e) => setTaskPriority(e.target.checked)}
            />
            <TaskInput
                label='Color de la tarea'
                type='color'
                value={taskColor}
                onChange={(e) => setTaskColor(e.target.value)}
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default TaskForm;
