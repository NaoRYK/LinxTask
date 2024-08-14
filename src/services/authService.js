import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import app from '../config/firebaseConfig';
import { toast } from 'react-toastify';
import defaultProfilePicture from '../assets/defaultProfilePicturepng.png'
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

const auth = getAuth(app);
const db = getFirestore(app);

export const createAccount = async (email, password, name) => {
  if (name) {
    const toastId = toast.loading("Procesando...");
    try {
      // Registra el usuario
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Actualiza el perfil del usuario con el nombre de usuario
      await updateProfile(user, { displayName: name,photoURL:defaultProfilePicture });

      // Guarda el nombre de usuario y otros datos en Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email
      });


      const continueUrl = {
        url:  window.location.origin + '/login', 
      }
      // Envia verificación de correo electrónico
      await sendEmailVerification(user,continueUrl);

      auth.signOut()

      

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

export const createAccountWithGooglee = async (e) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
export const createAccountWithGoogle = async (e) => {

  e.preventDefault();
  const provider = new GoogleAuthProvider();
  const toastId = toast.loading("Procesando...");
  try {
    const result = await signInWithPopup(auth,provider)
    const user = result.user;

    await setDoc(doc(db, 'users', user.uid), {
      name: user.displayName,
      email: user.email
    });

    toast.update(toastId, {
      render: "¡Inicio de sesión exitoso!",
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
}

export const logInAccount = async (email,password) => {

  const toastId = toast.loading("Ingresando...");

  try {


    const userCredential =await signInWithEmailAndPassword(auth,email,password)
    const user = userCredential.user;

    if(user.emailVerified){
      toast.update(toastId, {
        render: "¡Sesion iniciada!",
        type: "success",
        isLoading: false,
        autoClose: 3000, 
      });
    }
    else{
      auth.signOut()

      toast.update(toastId, {
        render: "¡Debe verificar el correo electronico!",
        type: "warning",
        isLoading: false,
        autoClose: 5000, 
      });

      throw new Error("Debe verificar el correo")
    }

    console.log(user);
    

  } catch (error) {
    toast.update(toastId, {
      render: `Error: ${error.message}`,
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    console.log(error);
    
    throw new Error(error.message)
  }
}

export const logout = async () => {
  try {
    await signOut(auth);
    toast.success("¡Has cerrado sesión con éxito!");
  } catch (error) {
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    toast.error(`Error: ${error.message}`);
  }
};