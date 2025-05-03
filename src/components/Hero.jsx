import React from 'react'
import Button from './Button'
import Illustration from '../assets/Illustration.svg'

const Hero = () => {
  return (
    <section className='bg-[var(--light-grey)] flex justify-between items-center px-[100px]  py-[80px]'>
        <div className="max-w-5/10 flex flex-col gap-[32px]">
            <h1 className='text-[var(--grey)] text-[50px] font-semibold' >Hire. Get Hired. <span className='text-[var(--primary-green)]'>Fast</span></h1>
            <p className='text-[var(--body-size)] text-gray-600'>Join a platform where skills speak louder than résumés. Whether you’re hiring or looking to be hired, HireMe helps you connect faster, easier, and better.</p>
            <Button content="Register" color="bg-[var(--primary-green)] px-[50px]"/>
        </div>
        <div className="">
            <img src={Illustration} alt="Illustration" className='w-[320px]' />
        </div>
    </section>
  )
}

export default Hero