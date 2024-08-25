import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateProfile as updateProfileFirebase } from 'firebase/auth';
import useAuthStore from '../../../stores/userStore';
import { uploadProfilePicture } from '../../../services/authService';
import { auth } from '../../../config/firebaseConfig';

const EditProfileModal = ({ user, onClose }) => {
  const [displayName, setDisplayName] = useState(user.displayName);
  const [file, setFile] = useState(null);
  const { setUser } = useAuthStore.getState(); // Usar el hook de Zustand

  const handleClickOutside = (event) => {
    if (event.target.id === 'edit-profile-modal') {
      onClose();
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSaveChanges = async () => {
    const currentUser = auth.currentUser; // Obtener el usuario autenticado actual
  
    if (!currentUser) {
      toast.error("No se encontró al usuario autenticado.");
      return;
    }
  
    try {
      let photoURL = user.photoURL;
      if (file) {
        photoURL = await uploadProfilePicture(file, currentUser.uid);
      }
  
      await updateProfileFirebase(currentUser, { displayName, photoURL });
  
      setUser({
        ...user,
        displayName,
        photoURL,
      });
  
      toast.success("¡Perfil actualizado con éxito!");
      onClose();
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      toast.error("Error al actualizar el perfil");
    }
  };

  const handleClose = () => {
    setFile(null); // Limpiar el archivo seleccionado
    setDisplayName(user.displayName); // Restaurar el nombre de usuario original
    onClose();
  };

  return (
    <div
      id="edit-profile-modal"
      className="fixed inset-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
      onClick={handleClickOutside}
    >
      <div className="w-[500px] h-[500px] bg-[#D2F9E6] rounded-[20px] p-6 flex flex-col items-center relative">
        <h2 className="text-[48px] text-[#38CF9C] font-semibold mb-4">Editar perfil</h2>
        <img
          className="w-32 h-32 rounded-full mb-4"
          src={user.photoURL || '/path/to/default/profile.jpg'}
          alt={user.displayName}
        />
        <div className="relative cursor-pointer mb-4">
          <input
            type="file"
            accept="image/*"
            id="file-input"
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <label
            htmlFor="file-input"
            className="bg-[#38CF9C] cursor-pointer text-[#D2F9E6] py-2 px-4 rounded-[10px] cursor-pointer"
          >
            Seleccionar imagen
          </label>
        </div>
        <div className="w-full mb-4">
          <label className="block text-[#38CF9C] mb-1">Nombre de usuario</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full py-2 px-4 border border-[#38CF9C] bg-[#bce5d2] rounded-[10px]"
          />
        </div>
        <Link to="/reset">
          <button className="w-full p-2 mb-4 bg-[#38CF9C] text-[#D2F9E6] rounded-[10px]" onClick={handleClose}>
            Cambiar contraseña
          </button>
        </Link>
        <div className="flex w-full justify-between">
          <button
            className="py-2 px-4 bg-[#FF6B6B] text-[#D2F9E6] rounded-[10px]"
            onClick={handleClose}
          >
            Cerrar
          </button>
          <button
            className="py-2 px-4 bg-[#38CF9C] text-[#D2F9E6] rounded-[10px]"
            onClick={handleSaveChanges}
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
