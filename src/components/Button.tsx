import React from 'react'

export const Button = ({onClick, children}: {onClick:() => void, children: React.ReactNode}) => {
  return (
    <button onClick={onClick} className="bg-[#81b64c] drop-shadow-lg w-full hover:blue-400 text-white font-bold py-5 px-4 rounded-xl">
    <div className="flex justify-center flex-row">
      
        {children}
       
      </div>
   
  </button>
  )
}
