import React, { useState } from 'react';
import { createProject } from '../../services/projectService';
import useAuthStore from '../../stores/userStore';

const FormProject = () => {
    const [projectText, setProjectText] = useState(''); 
    const { user } = useAuthStore();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(projectText);
        createProject(user, projectText);
        setProjectText(''); 
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={projectText} 
                onChange={(e) => setProjectText(e.target.value)} 
                type="text" 
                placeholder='Nombre del proyecto' 
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FormProject;
