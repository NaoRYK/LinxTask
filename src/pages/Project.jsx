import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectByIdWithTasks } from '../services/projectService';
import TaskModal from '../components/Task/TaskModal';
import { getTaskStatuses } from '../services/statusService';
import AddCollaboratorsModal from '../components/Project/AddCollaboratorsModal';
import ProjectContainer from '../components/ProjectPage/ProjectContainer/ProjectContainer';
import TaskCard from '../components/Tasks/TaskCard';

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
    setOpenCollaboratorsModal(!openCollaboratorsModal);
};
const onCreateTask = (newTask) => {
  setProject((prevProject) => ({
    ...prevProject,
    tasks: [...prevProject.tasks, newTask],
  }));
};

const refetchProject = async () => {
  try {
    const fetchedProject = await getProjectByIdWithTasks(projectId);
    setProject(fetchedProject);
  } catch (error) {
    console.error("Error al refetch el proyecto:", error);
  }
};

useEffect(() => {
  refetchProject();
}, [projectId]);
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
    <div className='mt-[80px] p-4 flex items-center justify-center flex-col'>
      {openCreateModal && <TaskModal statuses={statuses}         refetchProject={refetchProject} // Pasa la función refetchProject como prop
 onCreateTask={onCreateTask}></TaskModal>}

    <ProjectContainer handleAddCollaboratorsButton={handleAddCollaboratorsButton} project={project} createTask={handleCreateTaskButton}>
      <div className='p-8 flex flex-wrap gap-4 justify-center overflow-y-auto'>
      {project.tasks && project.tasks.length > 0 && project.tasks.map((task) => {
  if (task) {
    return <TaskCard statuses={statuses} task={task} key={task.id} />;
  } else {
    return null;
  }
})}
      </div>

    </ProjectContainer>

      
      {openCollaboratorsModal && (
                <AddCollaboratorsModal
                    projectId={projectId}
                    onClose={() => setOpenCollaboratorsModal(false)}
                />
            )}

    </div>
  );
};

export default Project;
