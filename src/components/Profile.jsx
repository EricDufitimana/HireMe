import React from 'react'
import Button from './Button'

const Profile = ({name, title, image}) => {
  return (
    <div className='flex justify-between border border-gray-400 rounded-lg p-2 gap-[70px] items-center'>
        <div className="flex gap-4 items-center">
            <img src={image} alt="" className='w-[50px] h-[40px] rounded-[120px]' />
            <div className="">
                <h1 className='text-[var(--dark-blue)] font-bold text-sm leading-[15px]'>{name}</h1>
                <h1 className='text-[12px] text-gray-500'>{title}</h1>
            </div>
        </div>

        <Button content="Hire" color="bg-[var(--dark-blue)] px-4"/>

    </div>
  )
}

export default Profile