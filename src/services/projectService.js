import { addDoc, collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import app from "../config/firebaseConfig";
import useAuthStore from "../stores/userStore";

const db = getFirestore(app);



export const createProject = async (user, projectName, collaborators = null) => {
  try {
      const projectRef = await addDoc(collection(db, 'projects'), {
          name: projectName,
          creator: user.displayName,
          creatorId: user.uid,
          collaborators: collaborators,
          createdAt: new Date(),
      });
      console.log("Proyecto agregado");

      const initialTask = {
        name: "Bienvenido",
        description: "Esto es una tarea de ejemplo",
        assignedTo: [ user.uid],
        dueDate: new Date(),
        status: "pending",
        prioritary: true,
        createdAt: new Date(),
        createdBy: user.displayName,
      };
  
      await addDoc(collection(db, 'projects', projectRef.id, 'tasks'), initialTask);

      
  } catch (error) {
      console.error("Error al agregar el documento:", error);
  }
};

const getProjectTasks = async (projectId) => {
  try {
    const tasksCollectionRef = collection(db, `projects/${projectId}/tasks`);
    const tasksSnapshot = await getDocs(tasksCollectionRef);
    
    const tasks = [];
    tasksSnapshot.forEach((taskDoc) => {
      tasks.push({ id: taskDoc.id, ...taskDoc.data() });
    });
    
    return tasks;
  } catch (error) {
    console.error("Error al obtener las tareas del proyecto:", error);
    return [];
  }
};

  export const getAllProjects = async () => {
    try {
      // Accede a la colección 'projects'
      const querySnapshot = await getDocs(collection(db, 'projects'));
      console.log(querySnapshot, 'query');
      // Itera sobre los documentos y muestra sus datos
      const projects = [];
      querySnapshot.forEach((doc) => {
        projects.push({ id: doc.id, ...doc.data() });
      });
  
      console.log("Proyectos:", projects);
      return projects; 
    } catch (error) {
      console.error("Error al obtener los proyectos:", error);
    }
  };

  export const getUserOwnProjectsWithTasks = async (user) => {
    try {
      if (!user) {
        throw new Error("No hay usuario logueado");
      }
  
      // Referencia a la colección 'projects'
      const projectsCollectionRef = collection(db, 'projects');
  
      // Crear una consulta para filtrar los proyectos por 'creatorId'
      const q = query(projectsCollectionRef, where("creatorId", "==", user.uid));
  
      // Ejecutar la consulta
      const querySnapshot = await getDocs(q);
  
      // Crear un array para almacenar proyectos con tareas
      const projectsWithTasks = [];
  
      // Iterar sobre los documentos de proyectos
      for (const doc of querySnapshot.docs) {
     
          const tasks = await getProjectTasks(project.id);
          projectsWithTasks.push({ ...project, tasks });
        
      }
  
      console.log("Proyectos del usuario con tareas:", projectsWithTasks);
      return projectsWithTasks;
    } catch (error) {
      console.error("Error al obtener los proyectos del usuario con tareas:", error);
    }
  };

  const getUserCollaboratedProjects = async (user) => {
    try {
      if (!user) {
        throw new Error("No hay usuario logueado");
      }
  
      // Referencia a la colección 'projects'
      const projectsCollectionRef = collection(db, 'projects');
  
      // Crear una consulta para filtrar proyectos por 'collaborators'
      const q = query(projectsCollectionRef, where("collaborators", "array-contains", user.uid));
  
      // Ejecutar la consulta
      const querySnapshot = await getDocs(q);
  
      // Crear un array para almacenar los proyectos en los que el usuario es colaborador
      const collaboratedProjects = [];
      querySnapshot.forEach((doc) => {
        collaboratedProjects.push({ id: doc.id, ...doc.data() });
      });
  
      return collaboratedProjects;
    } catch (error) {
      console.error("Error al obtener los proyectos en los que el usuario es colaborador:", error);
    }
  };
  
  // Función para obtener todos los proyectos del usuario (creador o colaborador)
  export const getAllUserProjectsWithTasks = async (user) => {
    try {
      if (!user) {
        throw new Error("No hay usuario logueado");
      }
  
      // Obtener proyectos creados por el usuario
      const createdProjectsQuery = query(collection(db, 'projects'), where("creatorId", "==", user.uid));
      const createdProjectsSnapshot = await getDocs(createdProjectsQuery);
  
      const createdProjects = [];
      createdProjectsSnapshot.forEach((doc) => {
        createdProjects.push({ id: doc.id, ...doc.data() });
      });
  
      // Obtener proyectos en los que el usuario es colaborador
      const collaboratedProjects = await getUserCollaboratedProjects(user);
  
      // Combinar proyectos creados y colaborados
      const allProjects = [...createdProjects, ...collaboratedProjects];
  
      // Crear un array para almacenar proyectos con tareas
      const projectsWithTasks = [];
  
      // Iterar sobre todos los proyectos (creados y colaborados)
      for (const project of allProjects) {
        const tasks = await getProjectTasks(project.id);
        projectsWithTasks.push({ ...project, tasks });
      }
  
      console.log("Proyectos del usuario con tareas:", projectsWithTasks);
      return projectsWithTasks;
    } catch (error) {
      console.error("Error al obtener todos los proyectos del usuario con tareas:", error);
    }
  };