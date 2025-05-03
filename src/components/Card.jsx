import React from 'react'

const Card = ({image, heading, body, className}) => {
  return (
    <div className={`p-4 pt-4 rounded-lg shadow-xl w-[250px] flex flex-col items-center justify-center gap-2 ${className}`}>
        <img src={image} alt="" />
        <h1 className='text-[var(--grey)] text-2xl font-[600] text-center'>{heading}</h1>
        <p className='text-sm pb-4 text-center text-gray-600'>{body}</p>
    </div>
  )
}

export default Card