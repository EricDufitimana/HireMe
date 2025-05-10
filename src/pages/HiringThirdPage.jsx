import React from 'react'
import Rectangle from '../assets/Rectangle.svg'
import Button from '../components/Button'
import Profile from '../components/Profile'
import profile_1 from '../assets/profile_1.jpg'
import profile_2 from '../assets/profile_2.jpg'
import profile_3 from '../assets/profile_3.jpg'
import profile_4 from '../assets/profile_4.jpg'

const HiringSecondPage = () => {
  return (
    <section className='overflow-hidden flex items-center justify-center h-screen w-screen gap-[200px] ' >
        <div className="max-w-6/10 -ml-[500px]">
            <img src={Rectangle} alt="" className=''/>
        </div>
        <div className="flex flex-col items-center gap-[2px]  shadow-lg p-8 rounded-md">
        <h2 className='text-green-500 text-sm font-black relative bottom-[10px] left-[220px]'>3 of 3</h2>
        <h1 className='text-[var(--dark-blue)] text-2xl font-semibold pb-4'>Here are your matches</h1>
            <div className="flex flex-col gap-4">
                <Profile name="Eric Dufitimana" title="Full-Stack Engineer, Strategic Advisor" image="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"/>
                <Profile name="Jabo Gabiro Junior" title="Ethical Hacker, Machine Learning Specialist" image={profile_2}/>
                <Profile name="Nasabato Sandra" title="Back-end Developer, DevOps Engineer" image={profile_1}/>
                <Profile name="Ishimwe Lucky" title="Data Scientist, BlockChain Developer" image={profile_3}/>
                <Profile name="Akankunda Jacky" title="Aviation Engineer, Mobile Game Developer" image={profile_4}/>
            </div>
            
        </div>  
    </section>

  )
}

export default HiringSecondPage