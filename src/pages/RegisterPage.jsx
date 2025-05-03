import React from 'react'
import Rectangle from '../assets/Rectangle.svg'
import Button from '../components/Button'

const RegisterPage = () => {
  return (
    <section className='overflow-hidden flex items-center justify-center h-screen w-screen gap-[200px] ' >
        <div className="max-w-6/10 -ml-[500px]">
            <img src={Rectangle} alt="" className=''/>
        </div>
        <div className="flex flex-col items-center gap-4 ">
            <h1 className='text-[var(--dark-blue)] font-bold text-4xl pb-[50px] text-center'>Your Future Starts Here</h1>
            <div className="px-4">
                <Button content='I am Hiring' color="bg-[var(--dark-blue)] p-4 px-[115px]"/>
                <div className="flex items-center gap-2">
                    <div className="flex-grow border-t w-[2px]"></div>
                    <span>or</span>
                    <div className='flex-grow border-t'></div>
                </div>
                <Button content="I am looking for a job" color="bg-white border-1 border-[var(--grey)] font-semibold p-4 px-[80px]" IsWhite="true" /> 
            </div>
        </div>
    </section>
  )
}

export default RegisterPage