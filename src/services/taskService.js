import { addDoc, collection, doc } from "firebase/firestore";
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
