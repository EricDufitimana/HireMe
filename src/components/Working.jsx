import React from 'react'
import Card from './Card'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'

const Working = () => {
  return (
    <section className='px-8 flex flex-col justify-center items-center gap-[40px] p-4 py-[80px]'>
        <div className="">
            <h1 className='text-4xl font-[600] text-[var(--grey)]'>Find the Right Talent in 3 Simple Steps</h1>
            <p className='text-center py-2 text-[var(--body-size)] text-gray-600'>No Stress. Just recruit with ease</p>
        </div>

        <div className="flex gap-[120px]">
            <Card image={image1} heading="1. Post What You Need" body="Quickly enter the career field and the specific skills you're looking for — like HTML, Figma, or AI."/>
            <Card image={image2} heading="2. Filter What you need" body="Browse a list of job seekers based on your selected field and specs. Instantly see who fits your vibe."/>
            <Card image={image3} heading="3. Connect & Hire" body="Click a profile, check out their details, and reach out directly. Boom — you just found your next team member."/>
        </div>
    </section>
  )
}

export default Working