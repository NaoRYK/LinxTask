import { useEffect, useState } from "react";
import FormProject from "../components/Project/FormProject";
import { getAllUserProjectsWithTasks } from "../services/projectService";
import useAuthStore from "../stores/userStore";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useAuthStore();
  const [projects, setProjects] = useState([]);

  const handleCheckProjects = async () => {
    try {
      const fetchedProjects = await getAllUserProjectsWithTasks(user);
      setProjects(fetchedProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <div>
      <div>
      <h1>Bienvenido {user.displayName}</h1>

<FormProject />
<button onClick={handleCheckProjects}>Ver projects</button>
      </div>
      {projects.length > 0 &&
        projects.map((project) => <Link key={project.id}  to={`/projects/${project.id}`}  >{project.name}</Link>)}
    </div>
  );
};

export default Home;
