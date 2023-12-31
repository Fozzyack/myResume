import React, { useState } from 'react'
import JapWeb from '../assets/ProjectImgs/JapWeb.png';
import timerIMG from '../assets/ProjectImgs/test.png'
import rowingIMG from '../assets/ProjectImgs/Rowing.png'
import webImage from '../assets/ProjectImgs/ACICIS.JPG'
import ThisWebsite from '../assets/HeroImage2-removebg.png'
import HiguVT from '../assets/ProjectImgs/HiguVT.png'
import OrangeJuice from '../assets/ProjectImgs/OrangeJuice.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CARD_INFO = [
    {
        id: 0,
        image: JapWeb,
        title: 'Midnight Mari',
        description: <p>A Japanese Web application I am currently constructing for my Japanese tutor - Expected Completion: Mid to Late 2024</p>,
        link: '',
        github: 'https://github.com/Fozzyack/JapApp'
    },
    {
        id: 1,
        image: webImage,
        title: 'ACICIS Student Organiser',
        description: <p>A University Project which was a WebApp that helped ACICIS with their student management in which it helped chose students to send on overseas scholarships - Completed: December 2024'. </p>,
        link: '',
        github: ''
    },
    {
        id: 2,
        image: ThisWebsite,
        title: 'This Website',
        description: <p>The Website you are currently looking at! Been in development for: 3 days The Github repo for this site can be found.</p>,
        link: 'https://frasier-sundra.netlify.app',
        github: 'https://github.com/Fozzyack/myResume'
    },
    {
        id: 3,
        image: HiguVT,
        title: 'HIGU VT',
        description: <p>I had a simple clean static website for a VTuber / Twitch Streamer.</p>,
        link: 'https://higu-vt.netlify.app',
        github: 'https://github.com/Fozzyack/higu-vt'
    },

    {
        id: 5,
        image: timerIMG,
        title: '3D Printing Timer',
        description: 'A 3D Printing Project to make mechanical 7 segment displays to make a timer with - Expected Completion: Jan 2024',
        link: '',
        github: ''
    },
    {
        id: 6,
        image: rowingIMG,
        title: 'Rowing Manager - MU Row',
        description: 'Rowing clubs record all their progress manually, this project attempts to solve this problem - Expected Completion: Mid 2024',
        link: '',
        github: ''
    },
    {
        id: 4,
        image: OrangeJuice,
        title: 'Active Orange',
        description: <p>A Simple fitness app that I use to track my gym progress.</p>,
        link: 'https://active-orange.comp',
        github: 'https://github.com/Fozzyack/activeorange'
    },

]
const ProjectCard = () => {


    return (
        <div className=' w-full flex flex-row flex-wrap gap-8 items-center justify-center mt-10'>
            {
                CARD_INFO.map((card, index) => (
                    <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.5 * index}}
                    viewport={{once: true}}
                    key={index} className='flex flex-col bg-black h-[550px] w-[250px] text-center items-center p-4 shadow-lg'>
            
                        <img src={card.image} alt='projectImg' className='border rounded-full h-[90px] w-[90px]'/>

                        <div className='text-white p-5 flex flex-col justify-center'>
                            <h2 className='font-bold'>{card.title}</h2>
                            <p>
                                {card.description}
                            </p>
                        </div>
                        <div className='flex flex-row justify-center gap-4 items-end h-full pb-4'>
                            {
                                card.link &&
                                <Link to={card.link}>
                                    <div className='p-4 rounded-xl border-slate-600 hover:bg-yellow-500 border transition ease-in-out duration-350'>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                        </svg>
                                    </div>

                                </Link>
                            }
                            {
                                card.github &&
                                <Link to={card.github}>
                                    <div className='p-4 rounded-xl border-slate-600 border hover:bg-green-500 transition ease-in-out duration-350'>
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                                        </svg>
                                    </div>
                                </Link>
                            }
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )

};

export default ProjectCard