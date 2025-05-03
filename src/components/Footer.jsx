import React from 'react'
import icon from '../assets/icon.svg'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import Button from './Button'
import {FaPaperPlane} from 'react-icons/fa'
import { SiPanasonic } from 'react-icons/si'


const Footer = () => {
  return (
    <footer className='px-[100px] py-[10px] p-4  pb-[90px] bg-[var(--dark-blue)] text-white flex gap-[100px]'>
        <div className="p-4 flex flex-col gap-[30px]">
            <img src={icon} alt="" className='w-[70px]'/>
            <p>Copyright © 2025 HireMe. <br/> All rights reserved</p>
            <div className="flex gap-4">
                <FaYoutube className='text-2xl'/>
                <FaInstagram className='text-2xl' />
                <FaTwitter className='text-2xl'/>
            </div>

        </div>
        <div className="p-4 ">
            <h2 className='text-xl font-semibold pb-4'>Company</h2>
            <ul className='flex flex-col gap-2'>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
            </ul>
        </div>
        <div className="p-4">
            <h2 className='text-xl font-semibold pb-4'>Support</h2>
            <ul className='flex flex-col gap-2'>
                <li>Help Center</li>
                <li>Terms Of Service</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Status</li>
            </ul>
        </div>
        <div className="p-4">
            <h2 className='text-xl font-semibold pb-4'>Stay Up To date</h2>
            <Button content={<><span>Your Email Adress</span> <FaPaperPlane /></>} color="bg-gray-700 p-4 flex gap-[100px]" />

        </div>
    </footer>
  )
}

export default Footer