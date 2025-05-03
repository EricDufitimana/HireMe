import React from 'react'
import icon from '../assets/icon.svg'
import Button from './button'
import {FaArrowRight} from 'react-icons/fa'


const NavBar = () => {
  return (
    <nav className='flex justify-between px-8 p-4'> 
        <div className="flex items-center gap-2">
          <img src={icon} alt="HireMe Logo" />
          <h1 className='text-lg'>HireMe</h1>
        </div>
        <ul className='flex items-center gap-[32px]'>
          <li className='text-[var(--body-size)]'>Home</li>
          <li>Hire</li>
          <li>Get Hired</li>
          <Button content={<> <span>Register</span> <FaArrowRight /></>} color='bg-[var(--primary-green)]'/>
        </ul>
    </nav>
  )
}

export default NavBar