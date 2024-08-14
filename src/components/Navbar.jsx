// src/components/Navbar.jsx

import { Link } from 'react-router-dom';
import useAuthStore from '../stores/userStore';
import { logout } from '../services/authService';

const Navbar = () => {

    const {user} = useAuthStore();
  return (
    <nav className="navbar ">
      <ul className='flex gap-2'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><p className='text-red-400'>{user ? "Hay usuario registrado": "No lo hay"}</p></li>
        {user && <button onClick={logout}>Cerrar sesion</button>}
      </ul>
    </nav>
  );
};

export default Navbar;
