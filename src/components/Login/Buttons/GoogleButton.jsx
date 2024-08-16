import React from 'react'
import { createAccountWithGoogle } from '../../../services/authService'
import googleIcon from '../../../assets/icons/google-icon.png'
const GoogleButton = () => {
  return (
    <button className='w-[400px] h-[50px] bg-white text-primaryDark font-semibold rounded-[30px] grid grid-cols-[20%,70%] p-2 items-center shadow-md' onClick={createAccountWithGoogle}><img src={googleIcon} alt="google-icon" /> <p className='text-[15px]'>Iniciar sesion con Google</p></button>
  )
}

export default GoogleButton