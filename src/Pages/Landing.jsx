import React, { useRef } from 'react'
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutMe from '../Components/AboutMe';
import Projects from '../Components/Projects';
import Testimonials from '../Components/Testimonials';

const Landing = () => {

    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const testimonialRef = useRef(null)
    return (
        <main className='flex w-screen bg-[#121212]'>
            <Navbar aboutRef={aboutRef} projectsRef={projectsRef} testimonialRef={testimonialRef}/>
            <div className='py-24'>
                <div className='px-16'>
                    <Hero />
                </div>

                <div ref={aboutRef} className='bg-[#1f1d1d] rounded-xl mt-10'>
                    <AboutMe/>
                </div>
                <div ref={projectsRef} className='px-16 mt-10'>
                    <Projects />
                </div>
                <div ref={testimonialRef} className=' mt-10 bg-[#1f1d1d] rounded-xl max-w-screen'>
                    <Testimonials />
                </div>

            </div>




        </main>

    )
}

export default Landing