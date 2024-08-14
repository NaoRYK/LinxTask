import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import useAuthStore from './stores/userStore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebaseConfig';
import { useEffect } from 'react';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';
function AppRoutes() {

  const {setUser,clearUser} = useAuthStore()
  useEffect(() => {
    // Suscribirse a los cambios en el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Actualiza el store con el usuario
      } else {
        clearUser(); // Limpia el store si no hay usuario
      }
    });

    // Limpiar la suscripción al desmontar el componente
    return () => unsubscribe();
  }, [setUser, clearUser]);

  return (
    <Router>
       <Navbar />

      <Routes>
        <Route path="/" element={<ProtectedRoute component={Home} />} />
        <Route path="/login" element={<PublicRoute component={Login} />} />
        <Route path="/register" element={<PublicRoute component={Register}/>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <ToastContainer
  position="bottom-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  theme='dark'
  draggable
  pauseOnHover
/>
    </Router>
  );
}

export default AppRoutes;
