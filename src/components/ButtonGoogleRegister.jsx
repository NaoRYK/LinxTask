import React from 'react'
import { createAccountWithGoogle } from '../services/authService'

const ButtonGoogleRegister = () => {
  return (
    <button onClick={createAccountWithGoogle}>Ingresar con google</button>
  )
}

export default ButtonGoogleRegister