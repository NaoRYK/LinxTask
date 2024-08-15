import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where } from "firebase/firestore";
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
      
      const initialStatus = {
        pending:'pending',
        completed:'completed',
        delayed:'delayed'
      }
      await addDoc(collection(db, 'projects', projectRef.id, 'tasks'), initialTask);
      await addDoc(collection(db, 'projects', projectRef.id, 'status'), initialStatus);

      
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
      // accedo a la colección de proyectos
      const querySnapshot = await getDocs(collection(db, 'projects'));
      console.log(querySnapshot, 'query');
      // itera sobre los documentos y muestra sus datos
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
  
      // referencia a colección projects
      const projectsCollectionRef = collection(db, 'projects');
  
      // consulta para filtrar los proyectos por creatorId
      const q = query(projectsCollectionRef, where("creatorId", "==", user.uid));
  
     
      const querySnapshot = await getDocs(q);
  
      const projectsWithTasks = [];
  
      // itero sobre los documentos de proyectos
      for (const doc of querySnapshot.docs) {
     
          const tasks = await getProjectTasks(project.id);
          projectsWithTasks.push({ ...project, tasks });
        
      }
  
      console.log("Proyectos del usuario con tareas:", projectsWithTasks);
      return projectsWithTasks;
    } catch (error) {
      console.error("Error al obtener los proyectos del usuario:", error);
    }
  };

  const getUserCollaboratedProjects = async (user) => {
    try {
      if (!user) {
        throw new Error("No hay usuario logueado");
      }
  
      // referencia a la colección projects
      const projectsCollectionRef = collection(db, 'projects');
  
      // consulta para filtrar proyectos por collaborators
      const q = query(projectsCollectionRef, where("collaborators", "array-contains", user.uid));
  
      const querySnapshot = await getDocs(q);
  
      const collaboratedProjects = [];
      querySnapshot.forEach((doc) => {
        collaboratedProjects.push({ id: doc.id, ...doc.data() });
      });
  
      return collaboratedProjects;
    } catch (error) {
      console.error("Error al obtener los proyectos en los que el usuario es colaborador:", error);
    }
  };
  
  //obtener todos los proyectos del usuario (creador o colaborador)
  export const getAllUserProjectsWithTasks = async (user) => {
    try {
      if (!user) {
        throw new Error("No hay usuario logueado");
      }
  
      // obtengo proyectos creados por el usuario
      const createdProjectsQuery = query(collection(db, 'projects'), where("creatorId", "==", user.uid));
      const createdProjectsSnapshot = await getDocs(createdProjectsQuery);
  
      const createdProjects = [];
      createdProjectsSnapshot.forEach((doc) => {
        createdProjects.push({ id: doc.id, ...doc.data() });
      });
  
      // obtengo proyectos en los que el usuario es colaborador
      const collaboratedProjects = await getUserCollaboratedProjects(user);
  
 
      const allProjects = [...createdProjects, ...collaboratedProjects];
  
      const projectsWithTasks = [];
  
      // itero sobre todos los proyectos (creados y colaborados)
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

  export const getProjectByIdWithTasks = async (projectId) => {
    try {
      if (typeof projectId !== 'string' || !projectId) {
        throw new Error("ID de proyecto inválido.");
      }
  
      const projectRef = doc(db, 'projects', projectId);
      const projectSnapshot = await getDoc(projectRef);
  
      if (!projectSnapshot.exists()) {
        throw new Error("Proyecto no encontrado");
      }
  
      const projectData = { id: projectSnapshot.id, ...projectSnapshot.data() };
  
      const tasksCollectionRef = collection(db, `projects/${projectId}/tasks`);
      const tasksSnapshot = await getDocs(tasksCollectionRef);
      const tasks = [];
      tasksSnapshot.forEach((taskDoc) => {
        tasks.push({ id: taskDoc.id, ...taskDoc.data() });
      });
  
      return { ...projectData, tasks };
    } catch (error) {
      console.error("Error al obtener el proyecto y sus tareas:", error);
    }
  };

  
export const getProjectCollaborators = async (projectId) => {
  try {
      // Referencia al documento del proyecto
      const projectDocRef = doc(db, 'projects', projectId);
      
      // Obtener el documento del proyecto
      const projectDoc = await getDoc(projectDocRef);
      
      if (projectDoc.exists()) {
          const projectData = projectDoc.data();
          
          // Obtener la lista de colaboradores
          const collaborators = projectData.collaborators || [];
          
          console.log("Colaboradores:", collaborators);
          
          return collaborators;
      } else {
          console.log("El proyecto no existe");
          return [];
      }
  } catch (error) {
      console.error("Error al obtener los colaboradores del proyecto:", error);
      return [];
  }
};


export const addCollaboratorsToProject = async (projectId, newCollaborators) => {
  try {
    const projectDocRef = doc(db, 'projects', projectId);

    const projectDoc = await getDoc(projectDocRef);

    if (projectDoc.exists()) {
      const projectData = projectDoc.data();

      const existingCollaborators = projectData.collaborators || [];

      // Combinar la lista de colaboradores existentes con los nuevos colaboradores
      const updatedCollaborators = [...new Set([...existingCollaborators, ...newCollaborators])];

      await updateDoc(projectDocRef, {
        collaborators: updatedCollaborators,
      });

      console.log("Colaboradores añadidos exitosamente");
    } else {
      console.log("El proyecto no existe");
    }
  } catch (error) {
    console.error("Error al añadir colaboradores:", error);
  }
};
