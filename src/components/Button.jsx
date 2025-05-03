import React from 'react'

const Button = ({content , color, IsWhite=false}) => {
  return (
    <a href="" className={`${IsWhite ? 'text-[var(--dark-blue)]': "text-white"}  font-regular rounded-sm flex items-center gap-2 w-max text-sm p-2 ${color}`}>{content}</a>
  )
}

export default Button