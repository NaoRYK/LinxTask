
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
export const getTaskStatuses = async (projectId) => {
    try {
        const statusCollectionRef = collection(db, `projects/${projectId}/status`);
        const statusSnapshot = await getDocs(statusCollectionRef);
        const statuses = [];
        statusSnapshot.forEach((doc) => {
            statuses.push({ id: doc.id, ...doc.data() }); 
        });
        return statuses;
    } catch (error) {
        console.error("Error al obtener los estados:", error);
        throw error;
    }
};


export const addCustomStatus = async (projectId, statusName, statusColor) => {
    try {
        const customStatus = {
            name: statusName,
            color: statusColor,
        };
        const docRef = await addDoc(collection(db, 'projects', projectId, 'status'), customStatus);
        console.log("Estado personalizado agregado con ID:", docRef.id);
        return docRef.id; // Retorna el ID del documento creado
    } catch (error) {
        console.error("Error al agregar el estado personalizado:", error);
    }
};

export const updateStatus = async (projectId, statusId, updatedStatus) => {
    try {
        const statusDocRef = doc(db, `projects/${projectId}/status/${statusId}`);
        await updateDoc(statusDocRef, updatedStatus);
        console.log("Estado actualizado:", updatedStatus);
    } catch (error) {
        console.error("Error al actualizar el estado:", error);
    }
};

export const deleteStatus = async (projectId, statusId) => {
    try {
        const statusDocRef = doc(db, `projects/${projectId}/status/${statusId}`);
        await deleteDoc(statusDocRef);
        console.log("Estado eliminado:", statusId);
    } catch (error) {
        console.error("Error al eliminar el estado:", error);
    }
};
