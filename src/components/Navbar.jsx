import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../stores/userStore";
import appLogo from "../assets/icons/app-icon.png";
import LogoutModal from "./LogoutModal/LogoutModal";
import EditProfileModal from "./Login/EditProfileModal/EditProfileModal";

const Navbar = () => {
  const { user } = useAuthStore();
  const [openLogout, setOpenLogout] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);

  const handleOpenEditProfileModal = () => {
    setOpenLogout(false); // Cierra el modal de logout si está abierto
    setOpenEditProfile(true);
  };

  const handleCloseEditProfileModal = () => {
    setOpenEditProfile(false);
  };

  return (
    <nav className="h-[80px] border-b-[2px] fixed z-10 bg-mainGreen border-outlineGrey/50 shadow-md drop-shadow-lg px-[30px] top-0 left-0 w-full">
      <ul className="flex items-center h-full gap-2 justify-between">
        <li>
          <Link to="/">
            <div className="flex items-center justify-center">
              <img className="w-[50px] h-[50px]" src={appLogo} alt="logo" />
              <h1 className="font-semibold text-[32px]">Taskinx</h1>
            </div>
          </Link>
        </li>

        {user && (
          <li className="flex items-center justify-center gap-2">
            <button onClick={() => setOpenLogout(!openLogout)}>
              <img
                className="h-[50px] w-[50px] rounded-full"
                src={user.photoURL}
                alt={user.displayName}
              />
            </button>

            {openLogout && (
              <LogoutModal
                user={user}
                onEditProfileClick={handleOpenEditProfileModal}
              />
            )}
            {openEditProfile && (
              <EditProfileModal user={user} onClose={handleCloseEditProfileModal} />
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
