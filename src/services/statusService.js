import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const getTaskStatuses = async (projectId) => {
    try {
        const statusCollectionRef = collection(db, `projects/${projectId}/status`);
        const statusSnapshot = await getDocs(statusCollectionRef);
        const statuses = [];
        statusSnapshot.forEach((doc) => {
            statuses.push(doc.data());
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
        await addDoc(collection(db, 'projects', projectId, 'status'), customStatus);
        console.log("Estado personalizado agregado:", customStatus);

    } catch (error) {
        console.error("Error al agregar el estado personalizado:", error);
    }
};