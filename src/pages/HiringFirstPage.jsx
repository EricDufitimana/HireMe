import React from 'react'
import {useState, useEffect} from 'react'
import Rectangle from '../assets/Rectangle.svg'
import Button from '../components/Button'

const HiringFirstPage = () => {
    const [careers, setCareers] = useState([]);
    useEffect(() => {
        const fetchCareers = async() => {
            try{
                const res = await fetch('http://localhost:8000/Careers');
                if(!res.ok){
                    throw new Error(`HTTP error! Status: ${res.status}`)
                }
                const data = await res.json();
                setCareers(data);
            } catch (error){
                console.log("Error: ", error)
            }
        }
        fetchCareers();
    },[])
  return (
    <section className='overflow-hidden flex items-center justify-center h-screen w-screen gap-[200px] ' >
            <div className="max-w-6/10 -ml-[500px]">
                <img src={Rectangle} alt="" className=''/>
            </div>
            <div className="flex flex-col items-center gap-[2px]  shadow-lg p-8 rounded-md ">
                <h1 className='text-[var(--dark-blue)] text-2xl font-semibold pb-4'>Start The Process Of Hiring</h1>
                <div className="flex flex-col items-start gap-[20px] max-w-[80%]">
                    <input 
                        id="ageInput"
                        list="ageOptions"
                        className="border border-gray-400 rounded-md text-sm p-2 focus:outline-none focus:ring-1 focus:ring-[var(--dark-blue)] focus:border-[var(--dark-blue)] w-full"
                        name="age"
                        placeholder="Select Age Group"
                    />
                    <datalist id="ageOptions">
                        <option value="18-24"></option>
                        <option value="25-29"></option>
                        <option value="30-34"></option>
                        <option value="35-39"></option>
                        <option value="40-44"></option>
                        <option value="45-49"></option>
                        <option value="50+"></option>
                    </datalist>
                    <input 
                        id="degreeInput"
                        list="degreeOptions"
                        className="border border-gray-400 rounded-md text-sm p-2 focus:outline-none focus:ring-1 focus:ring-[var(--dark-blue)] focus:border-[var(--dark-blue)] w-full"
                        name="degree"
                        placeholder="Select Degree"
                    />
                    <datalist id="degreeOptions">
                        <option value="Certificate"></option>
                        <option value="High School"></option>
                        <option value="Bachelor's Degree"></option>
                        <option value="Master's Degree"></option>
                        <option value="Doctorate (Phd)"></option>
                  
                    </datalist>
                    <div className="">
                        <input 
                            id="careerInput"
                            list="careerOptions"
                            className="border border-gray-400 rounded-md text-sm p-2 focus:outline-none focus:ring-1 focus:ring-[var(--dark-blue)] focus:border-[var(--dark-blue)] w-full"
                            name="degree"
                            placeholder="Select Degree"
                        />
                        <datalist id="degreeOptions">
                            {careers.map((careers, index) => (
                                <option key={index} value={careers}></option>
                            ))}
                    
                        </datalist>
                    </div>
                    <Button content='Sign Up' color='bg-[var(--dark-blue)] px-[144px]'/>

                </div>
            </div>
        </section>
  )
}

export default HiringFirstPage