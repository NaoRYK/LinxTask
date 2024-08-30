import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectByIdWithTasks } from '../services/projectService';
import TaskModal from '../components/Task/TaskModal';
import { getTaskStatuses } from '../services/statusService';
import AddCollaboratorsModal from '../components/Project/AddCollaboratorsModal';
import ProjectContainer from '../components/ProjectPage/ProjectContainer/ProjectContainer';
import TaskCard from '../components/Tasks/TaskCard';
import useAuthStore from '../stores/userStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
  const { projectId } = useParams(); 
  const [project, setProject] = useState(null);
  const [statuses, setStatuses] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openCollaboratorsModal, setOpenCollaboratorsModal] = useState(false);
  const { user } = useAuthStore();
  const [filterType, setFilterType] = useState('all'); 
  const darkenColor = (color, percent) => {
    if (color) {
      let R = parseInt(color.slice(1, 3), 16);
      let G = parseInt(color.slice(3, 5), 16);
      let B = parseInt(color.slice(5, 7), 16);

      R = Math.max(0, Math.min(255, R * (1 - percent)));
      G = Math.max(0, Math.min(255, G * (1 - percent)));
      B = Math.max(0, Math.min(255, B * (1 - percent)));

      return `#${Math.round(R).toString(16).padStart(2, '0')}${Math.round(G).toString(16).padStart(2, '0')}${Math.round(B).toString(16).padStart(2, '0')}`;
    }
  };

  const handleCreateTaskButton = () => {
    setOpenCreateModal(true);
  };

  const handleCollaboratorsUpdated = () => {
    refetchProject(); 
  };

  const handleAddCollaboratorsButton = () => {
    if (project.creatorId === user.uid) {
      setOpenCollaboratorsModal(!openCollaboratorsModal);
    } else {
      alert("Debe ser administrador o creador del proyecto para añadir participantes");
    }
  };

  const onCreateTask = (newTask) => {
    setProject((prevProject) => ({
      ...prevProject,
      tasks: [...prevProject.tasks, newTask],
    }));
  };

  const onDeleteTask = (taskId) => {
    setProject((prevProject) => ({
      ...prevProject,
      tasks: prevProject.tasks.filter((task) => task.id !== taskId),
    }));
  };

  const onUpdateTask = (updatedTask) => {
    setProject((prevProject) => ({
      ...prevProject,
      tasks: prevProject.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
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
        console.log("Estados obtenidos:", statusList);
        setStatuses(Array.isArray(statusList) ? statusList : []);
      } catch (error) {
        console.error("Error al cargar los estados:", error);
      }
    };

    if (projectId) {
      fetchStatuses();
    }
  }, [projectId]);

  const filteredTasks = () => {
    if (!project || !project.tasks) return [];

    switch (filterType) {
      case 'assigned':
        return project.tasks.filter(task => task?.assignedTo && task?.assignedTo?.includes(user.uid));
      case 'own':
        return project.tasks.filter(task => task.creatorId === user.uid);
      case 'all':
      default:
        return project.tasks;
    }
  };

  const lighterColor = darkenColor(project?.color, -0.2);
  const darkerColor = darkenColor(project?.color, 0.2);
  const darkestColor = darkenColor(project?.color, 0.4);

  if (!project) return <p>Loading...</p>;

  return (
    <div className='mt-[80px] p-4 flex items-center justify-center flex-col'>
      {openCreateModal && (
        <TaskModal
          onClose={() => setOpenCreateModal(false)}
          statuses={statuses}
          project={project}
          refetchProject={refetchProject} 
          onCreateTask={onCreateTask}
        />
      )}
      <div style={{            borderColor: lighterColor, color:lighterColor}} className='w-[350px] h-[55px] mt-10 mb-8 overflow-hidden absolute z-20 top-[10rem] flex rounded-[30px] border-2 text-[14px]'>
        <button
          style={{
            backgroundColor: filterType === 'all' ? darkestColor : darkerColor,

          }}
          className='w-full h-full flex items-center justify-center'
          onClick={() => setFilterType('all')}
        >
          {filterType === 'all' && <FontAwesomeIcon icon={faCheck} className='w-5 h-5 mr-2' />}
          <p>Todas</p>
        </button>
        <button
          style={{
            backgroundColor: filterType === 'assigned' ? darkestColor : darkerColor,
            borderColor: darkestColor
          }}
          className='w-full h-full flex items-center justify-center border-r-2 border-l-2 '
          onClick={() => setFilterType('assigned')}
        >
          {filterType === 'assigned' && <FontAwesomeIcon icon={faCheck} className='w-5 h-5 mr-2' />}
          <p>Asignadas</p>
        </button>
        <button
          style={{
            backgroundColor: filterType === 'own' ? darkestColor : darkerColor,
            borderColor: darkestColor
          }}
          className='w-full h-full flex items-center justify-center'
          onClick={() => setFilterType('own')}
        >
          {filterType === 'own' && <FontAwesomeIcon icon={faCheck} className='w-5 h-5 mr-2' />}
          <p>Propias</p>
        </button>
      </div>
      <ProjectContainer
        handleAddCollaboratorsButton={handleAddCollaboratorsButton}
        project={project}
        refetchProject={refetchProject}
        createTask={handleCreateTaskButton}
      >
        <div className='p-8 flex flex-wrap gap-4 justify-center overflow-y-auto'>
  {filteredTasks().length > 0 ? (
    filteredTasks().map((task) => {
      if (!task || !task.id) {
        console.error('Tarea inválida encontrada:', task);
        return null; // Evita renderizar si la tarea es inválida
      }
      return (
        <TaskCard
          refetchProject={refetchProject}
          onDeleteTask={onDeleteTask}
          statuses={statuses}
          task={task}
          key={task.id}
          onUpdateTask={onUpdateTask}
        />
      );
    })
  ) : (
    <p>Todavía no hay ninguna tarea creada...</p>
  )}
</div>
      </ProjectContainer>

      {openCollaboratorsModal && (
        <AddCollaboratorsModal
          onCollaboratorsUpdated={handleCollaboratorsUpdated}
          projectId={projectId}
          project={project}
          onClose={() => setOpenCollaboratorsModal(false)}
        />
      )}
    </div>
  );
};

export default Project;
