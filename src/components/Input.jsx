import React from 'react'


const Input = ({type, placeholder,name, className, divClass }) => {
  return (
    <div className={divClass}>
         <input type={type} placeholder={placeholder} id={name} name={name} className={`border border-gray-400 rounded-md text-sm p-2 focus:outline-none focus:ring-1 focus:ring-[var(--dark-blue)] focus:border-[var(--dark-blue)] w-full ${className}`}/>
    </div>
  )
}

export default Input