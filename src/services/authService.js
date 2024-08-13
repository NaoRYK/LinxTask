import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import app from '../config/firebaseConfig';

const auth = getAuth(app);
const db = getFirestore(app);

export const createAccount = async (email, password, name) => {
  try {
    // Registra el usuario
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Actualiza el perfil del usuario con el nombre de usuario
    await updateProfile(user, { displayName: name });

    // Guarda el nombre de usuario y otros datos en Firestore
    await setDoc(doc(db, 'users', user.uid), {
      name,
      email
    });

    return user;  // Opcional: devuelve el usuario registrado

  } catch (error) {
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    throw new Error(error.message);
  }
};
