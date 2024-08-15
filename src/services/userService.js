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
        const userDocRef = doc(db, 'users', userId); // Asegúrate de tener una colección de 'users' en tu DB
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          displayNames.push({ id: userId, displayName: userData.displayName });
        }
      }
      return displayNames;
    } catch (error) {
      console.error("Error al obtener los nombres de los usuarios:", error);
      return [];
    }
  };
