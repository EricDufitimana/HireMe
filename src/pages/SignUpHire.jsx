import React from 'react'
import Rectangle from '../assets/Rectangle.svg'
import Input from '../components/Input'
import Button from '../components/Button'

const SignUpHire = () => {
  return (
    <section className='overflow-hidden flex items-center justify-center h-screen w-screen gap-[200px] ' >
            <div className="max-w-6/10 -ml-[500px]">
                <img src={Rectangle} alt="" className=''/>
            </div>
            <div className="flex flex-col items-center gap-[2px]  shadow-lg p-8 rounded-md ">
                <h1 className='text-[var(--dark-blue)] text-2xl font-semibold pb-4'>Sign Up As A Hirer</h1>
                <div className="flex flex-col items-start gap-[20px] max-w-[80%]">
                    <div className="flex gap-2">
                        <Input type='text' placeholder='First Name' name="first_name" className="max-w-[50%]"/>
                        <Input type='text' placeholder='Last Name' name="last_name" className="max-w-[50%]"/> 
                    </div>
                    <Input type='email' placeholder='Enter Your Email' name='email' className='' />
                    <Input type='text' placeholder='Enter Your Company Name' name="company_name"/>
                    <Input type='text' placeholder='Enter Your Position' name="position"/>
                    <Input type='text' placeholder='Enter Your Location' name='location'/>
                    <Button content='Sign Up' color='bg-[var(--dark-blue)] px-[144px]'/>

                </div>
            </div>
        </section>
  )
}

export default SignUpHire