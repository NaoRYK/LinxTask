import React from 'react'
import { Link } from 'react-router-dom'

const RedirectUser = ({isRegister}) => {
  return (
    <div className='bg-[#D2F9E6] w-[430px] h-[75px] text-primaryDark text-[15px] flex items-center font-bold justify-around p-4'>
        {isRegister ? <p>Si no tienes cuenta registrate aquí</p> : <p>Si ya tenes cuenta inicia sesión aquí</p>}
        {isRegister ? <Link className='bg-[#17CF97] rounded-[100px] text-[14px]  border-2 border-[#09926C] text-white w-[115px] h-[40px] flex items-center justify-center' to='/register'><p>Registrarse</p></Link> :  <Link className='bg-[#17CF97]  rounded-[100px] text-[14px]  border-2 border-[#09926C] text-white w-[115px] h-[40px] flex items-center justify-center' to='/login'><p>Iniciar sesión</p></Link>}
    </div>
  )
}

export default RedirectUser