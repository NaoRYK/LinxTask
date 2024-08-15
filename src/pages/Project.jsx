import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectByIdWithTasks } from '../services/projectService';

const Project = () => {
  const { projectId } = useParams(); // Obtén projectId de la URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) {
        console.error("No se ha proporcionado un ID de proyecto válido.");
        return;
      }

      try {
        const fetchedProject = await getProjectByIdWithTasks(projectId);
        setProject(fetchedProject);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, [projectId]);

  if (!project) return <p>Loading...</p>;

  return (
    <div>
      <h1>{project.name}</h1>
      <ul>
        {project.tasks.map((task) => (
          <li className='text-red-400' key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
