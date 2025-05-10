import React from 'react'
import Rectangle from '../assets/Rectangle.svg'
import Button from '../components/Button'
import SkillCont from '../components/SkillCont'

const HiringSecondPage = () => {
  return (
    <section className='overflow-hidden flex items-center justify-center h-screen w-screen gap-[200px] ' >
        <div className="max-w-6/10 -ml-[500px]">
            <img src={Rectangle} alt="" className=''/>
        </div>
        <div className="flex flex-col items-center gap-[2px]  shadow-lg p-8 rounded-md">
        <h2 className='text-green-500 text-sm font-black relative bottom-[10px] left-[160px]'>2 of 3</h2>
        <h1 className='text-[var(--dark-blue)] text-2xl font-semibold pb-4'>Select All The Skills You Want</h1>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <SkillCont skill='HTML & CSS' extraclass="pr-8"/>
                    <SkillCont skill='Python' extraclass="pr-8"/>
                    <SkillCont skill='Javascript' extraclass="pr-8"/>
                </div>
                <div className="flex gap-2 pl-8">
                    <SkillCont skill='Typescript' extraclass='pr-16'/>
                    <SkillCont skill='Ruby' extraclass='pr-24'/>
                </div>
                <div className="flex gap-2 pl-16">
                    <SkillCont skill='Java' extraclass='pr-8'/>
                    <SkillCont skill='C++' extraclass='pr-8'/>
                    <SkillCont skill='PHP' extraclass='pr-8'/>
                </div>
                <div className="flex gap-2">
                    <SkillCont skill='C#' extraclass='pr-16'/>
                    <SkillCont skill='Django' extraclass='pr-16'/>
                    <SkillCont skill='Next.js' extraclass='pr-16'/>
                </div>
                <div className="pl-1 pt-4">
                <Button content='Continue' color='bg-[var(--dark-blue)] px-[144px] '/>

                </div>

            </div>
            
        </div>  
    </section>

  )
}

export default HiringSecondPage