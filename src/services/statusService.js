import { collection, getDocs } from "firebase/firestore";
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