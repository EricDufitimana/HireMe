import React, {useState} from 'react'

const skillcont = ({skill, extraclass}) => {
    const [click, setClick] = useState(false);
    const handleClick = () =>{
        setClick(!click)
    };
  return (
    <div
        onClick = {handleClick}
        className={`border p-[10px]  border-gray-400 rounded-2xl cursor-pointer transition-all duration-300 ${click ? 'bg-[var(--primary-green)] text-white': 'bg-white text-gray-700'} ${extraclass}`}
    >

        <p className='text-sm text-bold text-center'>{skill}</p>
    </div>
  )
}

export default skillcont