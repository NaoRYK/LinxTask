import React from 'react'

const AccedButton = ({children}) => {
  return (
    <button className="bg-[#17CF97] rounded-[100px] w-[100px] h-[40px] text-mainGreen text-[14px]" type="submit"><p>{children}</p></button>
    )
}

export default AccedButton