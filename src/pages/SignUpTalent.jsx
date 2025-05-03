import React from 'react'
import Input from '../components/Input'
import Rectangle from '../assets/Rectangle.svg'
import Button from '../components/Button'
const SignUpTalent = () => {
  return (
       <section className='overflow-hidden flex items-center justify-center h-screen w-screen gap-[200px] ' >
            <div className="max-w-6/10 -ml-[500px]">
                <img src={Rectangle} alt="" className=''/>
            </div>
            <div className="flex flex-col items-center gap-[2px]  shadow-lg p-8 rounded-md ">
                <h1 className='text-[var(--dark-blue)] text-2xl font-semibold pb-4'>Sign Up As A Talent</h1>
                <div className="flex flex-col items-start gap-[20px] max-w-[80%]">
                    <div className="flex gap-2">
                        <Input type='text' placeholder='First Name' name="first_name" className="max-w-[50%]"/>
                        <Input type='text' placeholder='Last Name' name="last_name" className="max-w-[50%]"/> 
                    </div>
                    <Input type='email' placeholder='Enter Your Email' name='email' className='' />
                    <Input type='text' placeholder='Enter Your Major' name="major"/>
                    <Input type='text' placeholder='Enter Your Degree' name="degree"/>
                    <textarea name="description" id="description" placeholder='Enter a Short Description About Yourself' className='border border-gray-400 rounded-md text-sm p-2 focus:outline-none focus:ring-1 focus:ring-[var(--dark-blue)] focus:border-[var(--dark-blue)] w-full h-[80px]'></textarea>
                    <Input type='text' placeholder="Career Field" name='career'/>
                    <Input type='text' placeholder='Skills' name='Skills'/>
                    <Button content='Sign Up' color='bg-[var(--dark-blue)] px-[144px]'/>

                </div>
            </div>
        </section>
  )
}

export default SignUpTalent