import React from 'react'

const LoginContainer = ({children}) => {
  return (
    <div className='w-[750px] h-[350px] rounded-tr-[15px] rounded-br-[15px] flex items-center justify-center p-4 bg-[#D2F9E6]'>
      {children}
    </div>
  )
}

export default LoginContainer