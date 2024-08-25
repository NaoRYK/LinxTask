import React from 'react'
import { Link } from 'react-router-dom'

const ForgottenPasswordButton = ({isRegister}) => {
  return (
    <div className='bg-[#D2F9E6] w-[430px] h-[75px] text-primaryDark text-[15px] flex items-center font-bold justify-around p-4'>
         <p className=''>Haz olvidado la contraseña? haz click aquí</p> 
        <Link to='/reset' className='bg-[#17CF97] rounded-[100px] text-[12px]  border-2 border-[#09926C] text-white w-[115px] h-[40px] flex items-center justify-center text-center'><p>Recuperar mi contraseña</p></Link>
    </div>
  )
}

export default ForgottenPasswordButton