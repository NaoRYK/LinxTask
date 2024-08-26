import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import firebase from "firebase/compat/app";
import useAuthStore from '../stores/userStore'



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
export const updateTask = async (projectId, taskId, updatedTaskData) => {
  try {
    const taskRef = doc(db, 'projects', projectId, 'tasks', taskId);
    await updateDoc(taskRef, updatedTaskData);
  } catch (error) {
    console.error('Error al actualizar la tarea:', error);
  }
};


export const updateTaskStatus = async (taskId, projectId, statuses) => {
  // Asegúrate de que 'statuses' es un array
  const statusArray = Array.isArray(statuses) ? statuses : [statuses];

  // Actualiza la tarea en Firestore
  const taskRef = doc(db, 'projects', projectId, 'tasks', taskId);

  try {
    await updateDoc(taskRef, { status: statusArray });
    console.log("Estado de la tarea actualizado exitosamente");
  } catch (error) {
    console.error("Error al actualizar el estado de la tarea:", error);
  }
};

// Obtener una tarea por su ID
export const getTaskById = async (taskId, projectId) => {
  try {
    // Referencia al documento de la tarea en la subcolección 'tasks' del proyecto
    const taskRef = doc(db, 'projects', projectId, 'tasks', taskId);

    // Obtener el documento
    const taskDoc = await getDoc(taskRef);

    if (taskDoc.exists()) {
      return { id: taskDoc.id, ...taskDoc.data() }; // Retorna los datos de la tarea
    } else {
      console.error('La tarea no existe.');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener la tarea:', error);
    throw error;
  }
};
// taskService.js
export const getTasksByProjectId = async (projectId) => {
  try {
    // Referencia a la colección de tareas dentro del proyecto
    const tasksCollectionRef = collection(db, 'projects', projectId, 'tasks');
    
    // Consulta para obtener las tareas del proyecto
    const q = query(tasksCollectionRef, where('projectId', '==', projectId));
    
    // Obtener los documentos
    const querySnapshot = await getDocs(q);

    // Mapear los documentos a objetos
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error al obtener las tareas:', error);
    throw error;
  }
};
export const addComment = async (projectId, taskId, commentText,user) => {
  
  const commentsCollectionRef = collection(db, 'projects', projectId, 'tasks', taskId, 'comments');
  const newComment = {
      text: commentText,
      userName: user.displayName, // Aquí deberías usar el nombre del usuario autenticado
      createdAt: new Date(),
      userPhoto: user.photoURL
  };
  await addDoc(commentsCollectionRef, newComment);
};

// Función para obtener todos los comentarios de una tarea
export const getCommentsByTaskId = async (projectId, taskId) => {
  const commentsCollectionRef = collection(db, 'projects', projectId, 'tasks', taskId, 'comments');
  const commentSnapshot = await getDocs(commentsCollectionRef);
  return commentSnapshot.docs.map(doc => doc.data());}
  export const updateTaskDates = async (projectId, taskId, startDate, endDate = null) => {
    try {
      // Referencia al documento de la tarea en la subcolección 'tasks' del proyecto
      const taskRef = doc(db, 'projects', projectId, 'tasks', taskId);
  
      // Obtener la tarea actual para modificar los estados
      const taskDoc = await getDoc(taskRef);
  
      if (taskDoc.exists()) {
        const taskData = taskDoc.data();
        const currentStatus = taskData.status || [];
        const currentEndDate = taskData.endDate;
  
        // Actualizar las fechas de inicio y fin de la tarea
        await updateDoc(taskRef, {
          startDate: startDate,
          endDate: endDate
        });
  
        // Verificar si la fecha de finalización está vacía
        if (!endDate) {
          // Eliminar el estado 'completada' si está presente
          const withoutCompleted = currentStatus.filter(status => status !== 'completada');

          if(!withoutCompleted.includes('pendiente')){

            const updatedStatus = [...withoutCompleted, 'pendiente'];
            await updateDoc(taskRef, { status: updatedStatus });
          }
          // Actualizar el estado en la base de datos
          console.log("Estado 'completada' eliminado porque la fecha de finalización está vacía");
        } else if (endDate) {
          // Si antes no había endDate y ahora se ha añadido, agregar el estado 'completada'
          
          if(!currentStatus.includes('completada')){
            const withoutPendient = currentStatus.filter(status => status !== 'pendiente')
            const updatedStatus = [...withoutPendient, 'completada'];
            await updateDoc(taskRef, { status: updatedStatus });
          }
          console.log("Estado 'completada' añadido porque se ha establecido una fecha de finalización");
        }
  
        console.log("Fechas de la tarea actualizadas exitosamente");
      } else {
        console.error('La tarea no existe.');
      }
    } catch (error) {
      console.error("Error al actualizar las fechas de la tarea:", error);
    }
  };
  
  export const updateTaskStartDate = async (projectId, taskId, startDate = null)  => {
    try {
      // Referencia al documento de la tarea en la subcolección 'tasks' del proyecto
      const taskRef = doc(db, 'projects', projectId, 'tasks', taskId);
  
      // Actualizar las fechas de inicio y fin de la tarea
      await updateDoc(taskRef, {
        startDate: startDate,
       
      });
  
      console.log("Fechas de la tarea actualizadas exitosamente");
    } catch (error) {
      console.error("Error al actualizar las fechas de la tarea:", error);
    }
  };
  export const updateTaskEnd = async (projectId, taskId, endDate )  => {
    try {
      // Referencia al documento de la tarea en la subcolección 'tasks' del proyecto
      const taskRef = doc(db, 'projects', projectId, 'tasks', taskId);
  
      // Actualizar las fechas de inicio y fin de la tarea
      await updateDoc(taskRef, {

        endDate: endDate 

       
      });
  
      console.log("Fechas de la tarea actualizadas exitosamente");
    } catch (error) {
      console.error("Error al actualizar las fechas de la tarea:", error);
    }
  };
  export const updateTaskStatusInDatabase = async (projectId, taskId, newStatus) => {
    try {
      // Referencia a la tarea en la subcolección 'tasks' del proyecto
      const taskRef = doc(db, 'projects', projectId, 'tasks', taskId);
  
      // Obtener la tarea actual para modificar los estados
      const taskDoc = await getDoc(taskRef);
  
      if (taskDoc.exists()) {
        const taskData = taskDoc.data();
        const currentStatus = taskData.status || [];
        const endDate = taskData.endDate;
  
        // Verificar si la fecha de finalización está vacía
        if (!endDate) {
          // Eliminar el estado 'completada' si está presente
          const updatedStatus = currentStatus.filter(status => status !== 'completada');
          
          // Actualizar el estado en la base de datos
          await updateDoc(taskRef, { status: updatedStatus });
          console.log("Estado 'completada' eliminado porque la fecha de finalización está vacía");
        } else {
          // Eliminar el estado 'pendiente' si existe
          const updatedStatus = currentStatus.filter(status => status !== 'pendiente');
          
          // Agregar el nuevo estado
          updatedStatus.push(newStatus);
          
          // Actualizar el estado en la base de datos
          await updateDoc(taskRef, { status: updatedStatus });
          console.log("Estado de la tarea actualizado exitosamente");
        }
      } else {
        console.error('La tarea no existe.');
      }
    } catch (error) {
      console.error('Error al actualizar el estado de la tarea:', error);
    }
  };