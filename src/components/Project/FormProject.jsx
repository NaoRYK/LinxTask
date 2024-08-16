import { useEffect, useState } from 'react';
import { getUsers } from '../../services/userService';

const FormProject = ({ onCreateProject }) => {
    const [projectText, setProjectText] = useState('');
    const [projectColor, setProjectColor] = useState('#FFD1D1');
    const [users, setUsers] = useState([]);
    const [selectedCollaborators, setSelectedCollaborators] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const allUsers = await getUsers();
                setUsers(allUsers);
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
                setError('No se pudieron cargar los usuarios.');
            }
        };

        fetchUsers();
    }, []);

    const handleCollaboratorChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedCollaborators(selectedOptions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!projectText.trim()) {
            setError('El nombre del proyecto es obligatorio.');
            return;
        }

        try {
            await onCreateProject(projectText, selectedCollaborators, projectColor);
            setProjectText('');
            setSelectedCollaborators([]);
            setError('');
        } catch (error) {
            console.error("Error al crear el proyecto:", error);
            setError('Hubo un error al crear el proyecto.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='bg-red-400 text-white'
        
        autoComplete="off">
            {error && <p className="text-red-500">{error}</p>}
            <div>
                <label htmlFor="projectName">Nombre del proyecto:</label>
                <input 
                    id="projectName"
                    value={projectText} 
                    onChange={(e) => setProjectText(e.target.value)} 
                    type="text" 
                    placeholder='Nombre del proyecto' 
                    required
                />
            </div>
            <div>
                <label htmlFor="projectColor">Color del proyecto:</label>
                <input 
                    id="projectColor"
                    value={projectColor} 
                    onChange={(e) => setProjectColor(e.target.value)} 
                    type="color" 
                />
            </div>
            <div>
                <label htmlFor="collaborators">Colaboradores:</label>
                <select 
                    id="collaborators"
                    multiple 
                    value={selectedCollaborators} 
                    onChange={handleCollaboratorChange} 
                >
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FormProject;
