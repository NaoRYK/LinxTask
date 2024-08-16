import { useEffect, useState } from "react";
import FormProject from "../components/Project/FormProject";
import useAuthStore from "../stores/userStore";
import { Link } from "react-router-dom";
import PinnedProject from "../components/PinnedProject/PinnedProject";
import useProjectStore from "../stores/projectStore";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Skeleton from "../components/Skeleton/Skeleton";
import createProjectIcon from '../assets/icons/create-project.png';
import { createProject, getAllUserProjectsWithTasks } from "../services/projectService";

const Home = () => {
  const { user } = useAuthStore();
  const { storeProjects, addProject } = useProjectStore();
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    handleCheckProjects();
  }, []);

  const handleCheckProjects = async () => {
    setLoading(true); // Inicia el estado de carga
    try {
      // Obtener proyectos y actualizar el store
      const fetchedProjects = await getAllUserProjectsWithTasks(user);
      fetchedProjects.forEach(project => addProject(project));
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  const handleCreateProject = async (projectName, collaborators, color) => {
    try {
      // Crea el proyecto y actualiza el store
      const newProject = await createProject(user, projectName, collaborators, color);
      addProject(newProject);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  useEffect(() => {
    console.log(storeProjects);
  }, [storeProjects]);

  return (
    <div className="p-[75px] relative min-h-screen">
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
            : storeProjects?.map(project => <PinnedProject key={project.id} project={project} />)}
        </div>
      </section>
      {/* END Pinned Projects Section */}

      {/* All Projects Section */}
      <section className="mt-[40px]">
        <div className="flex gap-[22px] flex-wrap">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="w-[535px] h-[205px] rounded-[10px]" />
              ))
            : storeProjects?.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>
      {/* END All Projects Section */}
      <button className="fixed bottom-4 right-4">
        <img src={createProjectIcon} alt="create-project-icon" />
      </button>
      <FormProject onCreateProject={handleCreateProject} />
    </div>
  );
};

export default Home;
