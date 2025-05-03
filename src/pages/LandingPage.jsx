import React from 'react'
import NavBar from "../components/NavBar";
import Hero from '../components/Hero';
import Working from '../components/Working';
import GetHired from '../components/GetHired';
import Statistics from '../components/Statistics';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <Working />
        <GetHired />
        <Statistics />
        <Footer />
    </>
  )
}

export default LandingPage