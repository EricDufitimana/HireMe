import React from 'react'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import Button from './Button'

const statistics = () => {
  return (  
    <section className='bg-[var(--light-grey)] px-[100px]  p-4  pb-[90px] flex flex-col gap-4 items-center '>
        <div className="flex justify-between items-end">        
            <div className="pt-8">
                <h1 className='text-2xl text-[var(--grey)] font-semibold text-[40px] pb-4'>Built for Impact. <br /> <span className='text-[var(--primary-green)]'>Backed by Numbers.</span></h1>
                <p className='max-w-7/10 text-gray-600'>HireMe is more than just a platform — it’s a growing network of talent and opportunity. Here’s what we’ve done so far (and we’re just getting started).</p>
            </div>
            <div className="grid [grid-template-columns:160px_150px]  gap-x-[80px] gap-y-[40px]">
                <div className="flex gap-2 items-center">
                    <img src={icon1} alt="" className='w-[50px]'/>
                    <div className="flex flex-col items center" >
                        <h2 className='text-[var(--grey)] text-2xl font-semibold'>4200+</h2>
                        <p className='text-md text-gray-600 max-w-[100px]'>Job Seekers</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={icon2} alt="" className='w-[50px] ' />
                    <div className="flex flex-col">
                        <h2 className='text-[var(--grey)] text-2xl font-semibold'>1300+</h2>
                        <p className='text-md text-gray-600 max-w-[100px] '>Employers</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={icon3} alt="" className='w-[50px]'/>
                    <div className="flex flex-col">
                        <h2 className='text-[var(--grey)] text-2xl font-semibold'>850</h2>
                        <p className='text-md text-gray-600 max-w-[100px] whitespace-nowrap'>Successful Matches</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={icon4} alt="" className='w-[50px]' />
                    <div className="flex flex-col">
                        <h2 className='text-[var(--grey)] text-2xl font-semibold'>95%</h2>
                        <p className='text-md text-gray-600 max-w-[100px] whitespace-nowrap'>Positive Feedback</p>
                    </div>
                </div>

            </div>
        </div>
        <h1 className='text-center text-[var(--grey)] text-[50px] font-semibold pt-[90px]'>Ready To Make You Next <br/>Move?</h1>
        <Button content="Register" color="bg-[var(--primary-green)] p-4 "/>
    </section>
  )
}

export default statistics