import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";


export const createTask = async (projectId, taskData) => {
  try {
    // Referencia a la subcolección 'tasks' del proyecto 
    const tasksCollectionRef = collection(doc(db, 'projects', projectId), 'tasks');

    // Agregar la tarea a la subcolección
    await addDoc(tasksCollectionRef, {
      ...taskData,
      createdAt: new Date(), 
    });

    console.log("Tarea agregada exitosamente");
  } catch (error) {
    console.error("Error al agregar la tarea:", error);
  }
};

export const deleteTask = async (projectId, taskId) => {

  
  try {
    // Referencia a la tarea en la subcolección 'tasks' del proyecto
    const taskRef = doc(doc(db, 'projects', projectId), 'tasks', taskId);

    // Eliminar la tarea
    await deleteDoc(taskRef);

    console.log("Tarea eliminada exitosamente");
  } catch (error) {
    console.error("Error al eliminar la tarea:", error);
  }
};
