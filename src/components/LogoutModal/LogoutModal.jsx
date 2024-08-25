import React from 'react';
import { logout } from '../../services/authService';

const LogoutModal = ({ user, onEditProfileClick }) => {
  return (
    <div className="w-[250px] h-[190px] fixed top-16 right-0 m-4 flex items-center justify-center gap-1 flex-col bg-secondaryGreen rounded-[10px]">
      <img className="rounded-full w-[65px] h-[65px]" src={user.photoURL} alt={user.displayName} />
      <h3 className="font-semibold text-[20px]">{user.displayName}</h3>
      <p className="text-[10px]">{user.email}</p>
      <button
        className="w-[90px] h-[25px] bg-buttonGreen rounded-[10px]"
        onClick={() => {
          localStorage.removeItem('pinnedProjects');
          logout();
        }}
      >
        <p className="text-textGreen text-[10px]">Cerrar sesión</p>
      </button>

      <button
        className="w-[90px] h-[25px] mb-2 bg-[#17CF97] rounded-[10px]"
        onClick={onEditProfileClick}
      >
        <p className="text-textGreen text-[10px]">Editar Perfil</p>
      </button>
    </div>
  );
};

export default LogoutModal;
