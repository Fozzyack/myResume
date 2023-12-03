import React from 'react'
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutMe from '../Components/AboutMe';
import Projects from '../Components/Projects';
import Testimonials from '../Components/Testimonials';

const Landing = () => {

    return (
        <main className='flex w-screen border border-green-500 min-h-screen bg-[#121212]'>
            <Navbar />
            <div className='py-24'>
                <div className='px-16'>
                    <Hero />
                </div>

                <div className='bg-[#1f1d1d] rounded-xl mt-10'>
                    <AboutMe />
                </div>
                <div className='px-16 mt-10'>
                    <Projects />
                </div>
                <div className=' mt-10 bg-[#1f1d1d] rounded-xl max-w-screen'>
                    <Testimonials />
                </div>

            </div>




        </main>

    )
}

export default Landing