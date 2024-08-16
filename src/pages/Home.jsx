import { useEffect, useState } from "react";
import FormProject from "../components/Project/FormProject";
import useAuthStore from "../stores/userStore";
import PinnedProject from "../components/PinnedProject/PinnedProject";
import useProjectStore from "../stores/projectStore";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Skeleton from "../components/Skeleton/Skeleton";
import createProjectIcon from '../assets/icons/create-project.png';
import { createProject, getAllUserProjectsWithTasks, deleteProject } from "../services/projectService";
import CreateProjectModal from "../components/Project/CreateProjectModal";

const Home = () => {
  const { user } = useAuthStore();
  const { storeProjects, setProjects, addProject } = useProjectStore();
  const [loading, setLoading] = useState(true);
  const [pinnedProjects, setPinnedProjects] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const closeModal = () => setOpenCreateModal(false);



  const handleOpenProjectModal = () => {
    setOpenCreateModal(true)
  }
  useEffect(() => {
    if (user) {
      handleCheckProjects();
    }
  }, [user]);

  useEffect(() => {
    const savedPinnedProjects = JSON.parse(localStorage.getItem('pinnedProjects')) || [];
    setPinnedProjects(savedPinnedProjects);
  }, [storeProjects]);

  const handleCheckProjects = async () => {
    setLoading(true);
    try {
      const fetchedProjects = await getAllUserProjectsWithTasks(user);
      setProjects(fetchedProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProjectModal = async (projectName, collaborators, color) => {
    try {
      const newProject = await createProject(user, projectName, collaborators, color);
      addProject(newProject);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      console.log("ID del proyecto para borrar:", projectId, "Tipo:", typeof projectId);
      await deleteProject(projectId);
      
      // Actualiza los proyectos en el estado
      setProjects(storeProjects.filter(project => project.id !== projectId));
      
      // Actualiza los proyectos fijados
      const updatedPinnedProjects = pinnedProjects.filter(p => p.id !== projectId);
      setPinnedProjects(updatedPinnedProjects);
      
      // Guarda los proyectos fijados en el local storage
      localStorage.setItem('pinnedProjects', JSON.stringify(updatedPinnedProjects));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const togglePinProject = (project) => {
    const isPinned = pinnedProjects.some(p => p.id === project.id);
    let updatedPinnedProjects;

    if (isPinned) {
      updatedPinnedProjects = pinnedProjects.filter(p => p.id !== project.id);
    } else {
      updatedPinnedProjects = [...pinnedProjects, project];
    }

    setPinnedProjects(updatedPinnedProjects);
    localStorage.setItem('pinnedProjects', JSON.stringify(updatedPinnedProjects));
  };

  const handleUnpinProject = (project) => {
    const updatedPinnedProjects = pinnedProjects.filter(p => p.id !== project.id);
    setPinnedProjects(updatedPinnedProjects);
    localStorage.setItem('pinnedProjects', JSON.stringify(updatedPinnedProjects));
  };

  return (
    <div className="p-[75px] relative min-h-screen top-[80px]">
      {/* Pinned Projects Section */}
      <section className="border-b-2 border-outlineGrey/20">
        <div className="mb-[22px]">
          <h2 className="font-bold text-[40px]">Área de trabajo</h2>
          <p className="text-[15px]">Fijados</p>
        </div>
        <div className="flex gap-[22px] mb-[40px] flex-wrap">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="w-[250px] h-[150px] rounded-[10px]" />
              ))
            : pinnedProjects.length > 0
              ? pinnedProjects.map(project => (
                  <PinnedProject 
                    key={project.id} 
                    project={project} 
                    onUnpinProject={handleUnpinProject} 
                    onDelete={handleDeleteProject}
                  />
                ))
              : <p className="text-gray-500">Todavía no hay proyectos fijados.</p>
          }
        </div>
      </section>
      {/* END Pinned Projects Section */}

      {/* All Projects Section */}
      <section className="mt-[40px]">
        <div className="flex gap-[22px] flex-wrap ">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="w-[535px] h-[205px] rounded-[10px]" />
              ))
            : storeProjects.length > 0
              ? [...storeProjects].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onTogglePin={togglePinProject}
                    isPinned={pinnedProjects.some(p => p.id === project.id)} // Pasar el estado de fijado
                    onDelete={handleDeleteProject} // Añadir la función para eliminar el proyecto
                  />
                ))
              : <p className="text-gray-500">Todavía no hay proyectos creados.</p>
          }
        </div>
      </section>
      {/* END All Projects Section */}
      <button className="fixed bottom-4 right-4" onClick={handleOpenProjectModal}>
        <img src={createProjectIcon} alt="create-project-icon" />
      </button>
      
      {openCreateModal && <CreateProjectModal onClose={closeModal}>
        <FormProject onCreateProject={handleCreateProjectModal} onClose={closeModal} />
        </CreateProjectModal>}
    </div>
  );
};

export default Home;
