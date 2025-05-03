import React from 'react'
import Card from './Card'
import group8 from '../assets/group8.png'
import group9 from '../assets/group9.png'
import group10 from '../assets/group10.png'
import line1 from '../assets/line1.svg'
import line2 from '../assets/line2.svg'

const GetHired = () => {
  return (
    <section className='px-8 flex flex-col justify-center items-center gap-[40px] p-4 py-[20px]'>
        <div className="">
            <h1 className='text-4xl font-[600] text-[var(--grey)] text-center'>Show Up. Stand Out. Get Hired.</h1>
            <p className='text-center py-2 text-gray-600'>On HireMe, all you do is list your skills, and let the right opportunities come to you.</p>
        </div>
        <div className="flex flex-col gap-[100px]">
            <div className="flex flex-row-reverse items-center relative right-[100px]">
                <Card image={group8} heading="1. Create Your Profile" body="Fill in your background — your name, degree, skills, and career goals." className="relative"/>
                <img src={line1} alt="" className='w-[200px] relative top-[100px]'/>

            </div>
            <div className="flex flex-col">
                
                <Card image={group9} heading="2. Show Off Your Skills" body="Add specific tools and technologies you know, from Figma to JavaScript and more." className="relative right-[250px] "/>
                <img src={line2} alt="" className='relative right-[200px] ' />

            </div>
            <div className="">
                <Card image={group10} heading="3. Get Matched & Contacted" body="Employers browse by career field and skill set. If you match, they reach out directly to you." className="relative top-[-220px] left-[280px]" />


            </div>

        </div>
    </section>
  )
}

export default GetHired