import React, { useRef } from 'react'
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutMe from '../Components/AboutMe';
import Projects from '../Components/Projects';
import Testimonials from '../Components/Testimonials';
import Contact from '../Components/Contact';
import TechStack from '../Components/TechStack';

const Landing = () => {

    return (
        <main id='main' className='flex bg-[#121212]'>
            <Navbar />

            <div className='py-32'>
                <div className='px-16'>
                    <Hero />
                </div>

                <div className='bg-[#070606] mt-10'>
                    <AboutMe />
                </div>
                
                <div className='px-16 my-10'>
                    <Projects />
                </div>
                
                {/* <div className=' mt-10 bg-[#1f1d1d] rounded-xl max-w-screen'>
                    <Testimonials />
                </div> */}

                <div className=' mt-10 px-16 py-12 bg-[#070606]'>
                    <TechStack />
                </div>
                
                <div className=' mt-10 px-16 bg-[#070606] py-12'>
                    <Contact />
                </div>

            </div> 




        </main>

    )
}

export default Landing
