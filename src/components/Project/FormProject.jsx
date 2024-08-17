import { useEffect, useState } from 'react';
import { getUsers } from '../../services/userService';
import colorSelectorIcon from '../../assets/icons/color-swatch.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const FormProject = ({ onCreateProject, onClose }) => {
    const [projectText, setProjectText] = useState('');
    const [projectColor, setProjectColor] = useState('#FFD1D1');
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedCollaborators, setSelectedCollaborators] = useState([]);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const allUsers = await getUsers();
                setUsers(allUsers);
                setFilteredUsers(allUsers);
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
                setError('No se pudieron cargar los usuarios.');
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        // Filtrar usuarios basados en el valor del filtro
        const filtered = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
        setFilteredUsers(filtered);
    }, [filter, users]);

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
        <form onSubmit={handleSubmit} className=' text-white h-[90%]' autoComplete="off">
            {error && <p className="text-red-500">{error}</p>}
            <div className='flex items-center justify-between'>
                <div className='bg-[#71E4B9] w-[600px]  h-[65px] rounded-[20px] flex shadow-md items-center justify-center gap-2'>
                    <label className='text-[20px] font-bold text-[#09926C]' htmlFor="projectName">Nombre del proyecto</label>
                    <input 
                        className='bg-[#A9F1D2] w-[355px] h-[45px] rounded-[15px] p-2  text-tertiaryGreen focus:outline-textGreen '
                        id="projectName"
                        value={projectText} 
                        onChange={(e) => setProjectText(e.target.value)} 
                        type="text" 
                        required
                    />
                </div>
                <div className="flex items-center gap-2 mr-16 ">
                    <div className="relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#71E4B9] shadow-md">
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
                            className="w-8 h-8 cursor-pointer "
                        />
                    </div>
                    <label htmlFor="projectColor" className=" text-[#09926C] text-[14px] font-bold w-[149px]">
                        <FontAwesomeIcon icon={faArrowLeft} /> Escoge el color del proyecto pulsando aquí
                    </label>
                </div>
            </div>
            <div className='mt-4 bg-[#71E4B9] w-[560px] h-[277px] rounded-[20px] p-4'>
                <label htmlFor="collaborators" className='block text-[#09926C] text-[20px] font-bold mb-2'>Agregar colaboradores al proyecto:</label>
                <div className='flex flex-col'>
                    <input 
                        type="text" 
                        placeholder="Nombre del colaborador"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className='mb-2 placeholder:text-textGreen bg-[#A9F1D2] border border-[#09926C] rounded-[15px] p-2 text-[#09926C] focus:outline-none'
                    />
                    <select 
                        id="collaborators"
                        multiple 
                        value={selectedCollaborators} 
                        onChange={handleCollaboratorChange}
                        className='bg-[#A9F1D2] border border-[#09926C] rounded-[15px] p-2 text-[#09926C] focus:outline-none h-[160px] focus:ring-2 focus:ring-[#71E4B9] focus:border-transparent appearance-none'
                    >
                        {filteredUsers.map(user => (
                            <option 
                                key={user.id} 
                                value={user.id}
                                className={`bg-[#A9F1D2] ${selectedCollaborators.includes(user.id) ? ' text-tertiaryGreen' : 'hover:bg-[#71E4B9] hover:text-[#09926C]'}`}
                            >
                                {user.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
                        <div className='w-full flex justify-end gap-3'>             <button className='bg-[#17CF97] w-[140px] h-[60px] rounded-[100px] shadow-md text-[#077559] font-semibold mt-4' type="submit">Crear proyecto</button>
                        <button className='bg-[#17CF97] w-[140px] h-[60px] rounded-[100px] shadow-md text-[#077559] font-semibold mt-4 ' onClick={onClose} >Cerrar</button></div>
        </form>
    );
}

export default FormProject;
