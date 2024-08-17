import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
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

export const updateTaskPriority = async (projectId, taskId, newPriority) => {
  try {
    // Referencia a la tarea en la subcolección 'tasks' del proyecto
    const taskRef = doc(doc(db, 'projects', projectId), 'tasks', taskId);

    // Actualizar la prioridad de la tarea
    await updateDoc(taskRef, {
      priority: newPriority
    });

    console.log("Prioridad de la tarea actualizada exitosamente");
  } catch (error) {
    console.error("Error al actualizar la prioridad de la tarea:", error);
  }
};
export const updateTask = async (projectId, taskId, updatedData) => {
  try {
    // Referencia a la tarea en la subcolección 'tasks' del proyecto
    const taskRef = doc(doc(db, 'projects', projectId), 'tasks', taskId);

    // Actualizar el documento con los nuevos datos
    await updateDoc(taskRef, updatedData);

    console.log("Tarea actualizada exitosamente");
  } catch (error) {
    console.error("Error al actualizar la tarea:", error);
  }
};