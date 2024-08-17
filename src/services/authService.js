import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,GoogleAuthProvider } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import app from '../config/firebaseConfig';
import { toast } from 'react-toastify';
import defaultProfilePicture from '../assets/defaultProfilePicturepng.png'
import useAuthStore from '../stores/userStore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebaseConfig'; // Asegúrate de importar el objeto de Storage

const auth = getAuth(app);
const db = getFirestore(app);

const defaultProfilePictureURL = "https://firebasestorage.googleapis.com/v0/b/linxapp-8be88.appspot.com/o/profilePictures%2FdefaultProfilePicturepng.png?alt=media&token=8ec0dab6-30bc-4885-b7c9-7c12bcf87491";

export const uploadProfilePicture = async (file, userId) => {
  if (!file) return defaultProfilePictureURL;

  const storageRef = ref(storage, `profilePictures/${userId}/${file.name}`);
  try {
    await uploadBytes(storageRef, file);
    const photoURL = await getDownloadURL(storageRef);
    return photoURL;
  } catch (error) {
    console.error("Error al subir la foto de perfil:", error);
    return defaultProfilePictureURL;
  }
};


export const createAccount = async (email, password, name, file) => {
  if (name) {
    const toastId = toast.loading("Procesando...");
    try {
      // Registra el usuario
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Subir la foto de perfil si existe
      const photoURL = file ? await uploadProfilePicture(file, user.uid) : defaultProfilePictureURL;

      // Actualiza el perfil del usuario con el nombre de usuario y foto de perfil
      await updateProfile(user, { displayName: name, photoURL });

      // Guarda el nombre de usuario, correo electrónico y foto de perfil en Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid, // Asegúrate de incluir el uid
        name,
        email,
        photoURL
      });

      const continueUrl = {
        url: window.location.origin + '/login',
      };
      // Envia verificación de correo electrónico
      await sendEmailVerification(user, continueUrl);

      auth.signOut();

      toast.update(toastId, {
        render: "¡Registro exitoso! Por favor, verifica tu correo electrónico.",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      return user;
    } catch (error) {
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      toast.update(toastId, {
        render: `Error: ${error.message}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      throw new Error(error.message);
    }
  } else {
    toast.error("Debe ingresar un nombre válido");
  }
};




export const createAccountWithGoogle = async (e) => {
  e.preventDefault();
  const provider = new GoogleAuthProvider();
  const toastId = toast.loading("Procesando...");

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Guarda la información del usuario en Firestore
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid, // Asegúrate de incluir el uid
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL // Guarda la URL de la foto de perfil
    });

    toast.update(toastId, {
      render: "¡Inicio de sesión exitoso!",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });

    useAuthStore.getState().setUser(user); // Actualiza el store

    return user;
  } catch (error) {
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    toast.update(toastId, {
      render: `Error: ${error.message}`,
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    throw new Error(error.message);
  }
};

export const logInAccount = async (email, password) => {
  const toastId = toast.loading("Ingresando...");

  try {
    console.log("Intentando iniciar sesión con:", email, password);

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user.emailVerified) {
      useAuthStore.getState().setUser(user); // Actualiza el store

      toast.update(toastId, {
        render: "¡Sesión iniciada!",
        type: "success",
        isLoading: false,
        autoClose: 3000, 
      });
    } else {
      // Aquí agregas un mensaje más específico para usuarios no verificados
      await signOut(auth);

      toast.update(toastId, {
        render: "¡Debe verificar el correo electrónico!",
        type: "warning",
        isLoading: false,
        autoClose: 5000, 
      });

      throw new Error("Debe verificar el correo electrónico");
    }

    console.log(user);
    
  } catch (error) {
    let errorMessage = "Error en el inicio de sesión";

    if (error.code === 'auth/invalid-email') {
      errorMessage = "El correo electrónico proporcionado es inválido.";
 
    } else if (error.code === 'auth/user-not-found') {
      errorMessage = "El usuario no se encuentra registrado.";
    }  else if (error.code === 'auth/too-many-requests') {
      errorMessage = "Demasiados intentos fallidos. Inténtelo de nuevo más tarde.";
    } else if (error.code === 'auth/invalid-credential') {
      errorMessage = "Credenciales inválidas.";
    } else if (error.message.includes("Debe verificar el correo electrónico")) {
      errorMessage = "Debe verificar el correo electrónico.";
    }

    toast.update(toastId, {
      render: `Error: ${errorMessage}`,
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    console.error("Error en el inicio de sesión:", error);
    
    throw new Error(errorMessage);
  }
}


export const logout = async () => {
  try {
    await signOut(auth);
    useAuthStore.getState().clearUser(); // Limpia el store

    toast.success("¡Has cerrado sesión con éxito!");
  } catch (error) {
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    toast.error(`Error: ${error.message}`);
  }
};