import React from 'react'
import JapWeb from '../assets/ProjectImgs/JapWeb.png';
import webImage from '../assets/ProjectImgs/ACICIS.JPG'
import ThisWebsite from '../assets/HeroImage2-removebg.png'
import HiguVT from '../assets/ProjectImgs/HiguVT.png'
import HeroShiba from '../assets/ProjectImgs/HeroShiba.png'
import OrangeJuice from '../assets/ProjectImgs/OrangeJuice.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CARD_INFO = [
    {
        id: 0,
        image: JapWeb,
        title: 'Midnight Mari',
        description: <p>A Japanese Web application I am currently constructing for my Japanese tutor 
        - Expected Completion: Mid to Late 2024. 
        As of January this project is on halt and will be merged with JLSM at a later date.(JLSM is another project on this list)</p>,
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
        description: <p>My Portfolio, used to help display my achievements (or lack thereof...)</p>,
        link: 'https://frasier-sundra.netlify.app',
        github: 'https://github.com/Fozzyack/myResume'
    },
    {
        id: 3,
        image: HiguVT,
        title: 'HIGU VT',
        description: <p>A simple clean static website I build 
        for a VTuber / Twitch Streamer.</p>,
        link: 'https://higu-vt.netlify.app',
        github: 'https://github.com/Fozzyack/higu-vt'
    },
    {
        id: 4,
        image: OrangeJuice,
        title: 'Active Orange',
        description: <p>A Simple fitness app that I use to track my gym progress.</p>,
        link: 'https://active-orange.comp',
        github: 'https://github.com/Fozzyack/activeorange'
    },
    {
        id: 4,
        image: HeroShiba, 
        title: 'JLSM',
        description: <p>A learning management system that is being built for a Japanese language learning school.
        It's current objective is to help automate and ease the organisation of students and payments.
        Later on, it will help set up school events and will include some aspects of popular language learning apps.</p>,
        link: '',
        github: 'https://github.com/Fozzyack/JLSM_v2.0'
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
                    transition={{delay:0.2 * index}}
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
