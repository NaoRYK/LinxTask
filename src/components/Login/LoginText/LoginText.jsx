import React from 'react'

const LoginText = ({children}) => {
  return (
    <div className='w-[260px] h-[75] bg-[#D2F9E6] rounded-tr-[15px] rounded-br-[15px] flex items-center justify-center'><h2 className='text-[35px] font-semibold'>
        {children}</h2></div>
  )
}

export default LoginText