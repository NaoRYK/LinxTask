import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getUsers } from '../../services/userService';
import { addCollaboratorsToProject, getProjectCollaborators } from '../../services/projectService';

const AddCollaboratorsModal = ({ projectId, onClose }) => {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [existingCollaborators, setExistingCollaborators] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const allUsers = await getUsers();
                setUsers(allUsers);
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
            }
        };

        const fetchExistingCollaborators = async () => {
            try {
                const collaborators = await getProjectCollaborators(projectId);
                setExistingCollaborators(collaborators);
            } catch (error) {
                console.error("Error al obtener colaboradores del proyecto:", error);
            }
        };

        fetchUsers();
        fetchExistingCollaborators();
    }, [projectId]);

    const handleUserChange = (e) => {
        const userId = e.target.value;
        setSelectedUsers((prevSelected) =>
            prevSelected.includes(userId)
                ? prevSelected.filter((id) => id !== userId)
                : [...prevSelected, userId]
        );
    };

    const handleSubmit = async () => {
        try {
            await addCollaboratorsToProject(projectId, selectedUsers);
            onClose();
        } catch (error) {
            console.error("Error al añadir colaboradores:", error);
        }
    };

    // Filtrar usuarios para eliminar los que ya son colaboradores
    const filteredUsers = users.filter(user => !existingCollaborators.includes(user.id));

    return (
        <div className="modal bg-blue-800/20">
            <h2>Añadir Colaboradores</h2>
            <form>
                {filteredUsers.map((user) => (
                    <div key={user.id}>
                        <label>
                            <input
                                type="checkbox"
                                value={user.id}
                                onChange={handleUserChange}
                            />
                            {user.name}
                        </label>
                    </div>
                ))}
                <button type="button" onClick={handleSubmit}>Añadir</button>
                <button type="button" onClick={onClose}>Cerrar</button>
            </form>
        </div>
    );
};

AddCollaboratorsModal.propTypes = {
    projectId: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AddCollaboratorsModal;
