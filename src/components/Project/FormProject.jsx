import { useEffect, useState } from 'react';
import { getUsers } from '../../services/userService';
import colorSelectorIcon from '../../assets/icons/color-swatch.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const FormProject = ({ onCreateProject, onClose }) => {
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
            onClose();  // Cierra el modal después de crear el proyecto
        } catch (error) {
            console.error("Error al crear el proyecto:", error);
            setError('Hubo un error al crear el proyecto.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='bg-red-400 text-white' autoComplete="off">
            {error && <p className="text-red-500">{error}</p>}
            <div className='flex items-center justify-around'>
                <div className='bg-[#71E4B9] w-[600px] h-[65px] rounded-[20px] flex items-center justify-center gap-2'>
                    <label className='text-[20px] font-bold text-[#09926C]' htmlFor="projectName">Nombre del proyecto</label>
                    <input 
                        className='bg-[#A9F1D2] w-[355px] h-[45px] rounded-[15px]'
                        id="projectName"
                        value={projectText} 
                        onChange={(e) => setProjectText(e.target.value)} 
                        type="text" 
                        required
                    />
                </div>
                <div className="flex items-center gap-2 ">
                    <div className="relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#71E4B9]">
                        <input 
                            id="projectColor"
                            value={projectColor} 
                            onChange={(e) => setProjectColor(e.target.value)} 
                            type="color" 
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <img 
                            src={colorSelectorIcon} 
                            alt="Selector de color" 
                            className="w-8 h-8 cursor-pointer"
                        />
                    </div>
                    <label htmlFor="projectColor" className=" text-[#09926C] text-[12px] font-bold w-[129px]">
                        <FontAwesomeIcon icon={faArrowLeft} /> Escoge el color de la tarea pulsando aquí
                    </label>
                </div>
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
