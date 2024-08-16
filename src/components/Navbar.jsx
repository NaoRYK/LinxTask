// src/components/Navbar.jsx

import { Link } from 'react-router-dom';
import useAuthStore from '../stores/userStore';
import { logout } from '../services/authService';
import appLogo from '../assets/icons/app-icon.png'

const Navbar = () => {

    const {user} = useAuthStore();
  return (
    <nav className="navbar  w-full h-[80px] border-b-[2px]  border-outlineGrey shadow-md drop-shadow-lg">
      <ul className='flex items-center h-full gap-2 justify-between '>
        <li><Link to="/"><div className='flex items-center justify-center'>
          <img  className="w-[50px] h-[50px]" src={appLogo} alt="logo" />
          <h1 className='font-semibold text-[32px]'>Taskinx</h1>
          </div></Link></li>

        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
          {user && <li> <img className='h-[50px] w-[50px] rounded-full' src={user.photoURL} alt={user.displayName} /></li>}
        {user && <button onClick={logout}>Cerrar sesion</button>}
      </ul>
    </nav>
  );
};

export default Navbar;
