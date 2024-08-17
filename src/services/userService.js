import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const getUsers = async () => {
    try {
        const usersCollectionRef = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollectionRef);
        const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        return usersList;
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        return [];
    }
};

export const getUserDisplayNames = async (userIds) => {
    try {
        const displayNames = [];
        for (const userId of userIds) {
            const userDocRef = doc(db, 'users', userId);
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
                const userData = userDoc.data();
                displayNames.push({ id: userId, name: userData.name });
            }
        }
        return displayNames;
    } catch (error) {
        console.error("Error al obtener los nombres de los usuarios:", error);
        return [];
    }
};

// Función para obtener datos de usuario incluyendo photoURL

export const getUserById = async (userId) => {
    try {
        const userDocRef = doc(db, 'users', userId);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
            return userDoc.data(); // Asegúrate de que `photoURL` esté incluido en los datos
        } else {
            console.error("Usuario no encontrado");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        return null;
    }
};
