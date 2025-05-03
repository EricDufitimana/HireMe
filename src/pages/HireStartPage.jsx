import React from 'react'
import Rectangle from '../assets/Rectangle.svg'
import Button from '../components/Button'

const HireStartPage = () => {
  return (
    <section className='overflow-hidden flex items-center justify-center h-screen w-screen gap-[200px] ' >
    <div className="max-w-6/10 -ml-[500px]">
        <img src={Rectangle} alt="" className=''/>
    </div>
    <div className="flex flex-col items-center gap-4 ">
        <h1 className='text-[var(--dark-blue)] font-bold text-4xl pb-[50px] text-center'>Ready To Find Your Next Employee</h1>
        <div className="px-4">

            <Button content='Click Here To Start Hiring' color="bg-[var(--dark-blue)] p-4 px-[115px]"/>

        </div>
    </div>
</section>
  )
}

export default HireStartPage