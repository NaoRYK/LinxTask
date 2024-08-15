import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectByIdWithTasks } from '../services/projectService';
import TaskModal from '../components/Task/TaskModal';
import { getTaskStatuses } from '../services/statusService';
import AddCollaboratorsModal from '../components/Project/AddCollaboratorsModal';

const Project = () => {
  const { projectId } = useParams(); // Obtén projectId de la URL
  const [project, setProject] = useState(null);
  const [statuses, setStatuses] = useState([])
  const [openCreateModal, setOpenCreateModal] = useState(false)
  const [openCollaboratorsModal, setOpenCollaboratorsModal] = useState(false);
  const handleCreateTaskButton = () => {
    setOpenCreateModal(true)
  }
  const handleAddCollaboratorsButton = () => {
    setOpenCollaboratorsModal(true);
};
  useEffect(() => {
    const fetchStatuses = async () => {
        try {
            const statusList = await getTaskStatuses(projectId);
            console.log("Estados obtenidos:", statusList); // Agrega este console.log para depuración
            setStatuses(statusList);
        } catch (error) {
            console.error("Error al cargar los estados:", error);
        }
    };

    if (projectId) {
        fetchStatuses();
    }
}, [projectId]);

  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) {
        console.error("No se ha proporcionado un ID de proyecto válido.");
        return;
      }

      try {
        const fetchedProject = await getProjectByIdWithTasks(projectId);
        setProject(fetchedProject);
        console.log("proyecto",project);
        
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, [projectId]);



  if (!project) return <p>Loading...</p>;

  return (
    <div>
      {openCreateModal && <TaskModal statuses={statuses}></TaskModal>}
      <h1>{project.name}</h1>
      <ul>
        {project.tasks.map((task) => (
          <li className='text-red-400' key={task.id}>{task.name}</li>
        ))}
      </ul>

      <button onClick={handleCreateTaskButton}>Create task</button>
      
      {openCollaboratorsModal && (
                <AddCollaboratorsModal
                    projectId={projectId}
                    onClose={() => setOpenCollaboratorsModal(false)}
                />
            )}
                        <button onClick={handleAddCollaboratorsButton}>Añadir Colaboradores</button>

    </div>
  );
};

export default Project;
