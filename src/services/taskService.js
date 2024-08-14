import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// Función para agregar una tarea a un proyecto específico
export const createTask = async (projectId, taskData) => {
  try {
    // Referencia a la subcolección 'tasks' del proyecto específico
    const tasksCollectionRef = collection(doc(db, 'projects', projectId), 'tasks');

    // Agregar la nueva tarea a la subcolección
    await addDoc(tasksCollectionRef, {
      ...taskData,
      createdAt: new Date(), // Fecha de creación de la tarea
    });

    console.log("Tarea agregada exitosamente");
  } catch (error) {
    console.error("Error al agregar la tarea:", error);
  }
};
