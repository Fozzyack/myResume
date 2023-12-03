import React, { useState } from 'react'
import JapWeb from '../assets/ProjectImgs/JapWeb.png';
import timerIMG from '../assets/ProjectImgs/test.png'
import rowingIMG from '../assets/ProjectImgs/Rowing.png'
import webImage from '../assets/ProjectImgs/WebsiteUI.png'
import { motion } from 'framer-motion';

const CARD_INFO = [
    {
        id: 0,
        image: JapWeb,
        title: 'Japanese Web Application',
        description: 'A Japanese Web application I am currently constructing for my Japanese tutor - Expected Completion: Mid to Late 2024'
    },
    {
        id: 1,
        image: timerIMG,
        title: '3D Printing Timer',
        description: 'A 3D Printing Project to make mechanical 7 segment displays to make a timer with - Expected Completion: Jan 2024'
    },
    {
        id: 2,
        image: rowingIMG,
        title: 'Rowing Manager',
        description: 'Rowing clubs record all their progress manually, this project attempts to solve this problem - Expected Completion: Mid 2024'
    },
    {
        id: 3,
        image: webImage,
        title: 'ACICIS Student Organiser',
        description: 'A University Project which was a WebApp that helped ACICIS with their student management in which it helped chose students to send on overseas scholarships - Completed: December 2024'
    },
]
const ProjectCard = () => {

    const [index, setIndex] = useState(0);
    const variants = {
        showSlide: { opacity: 1, x: 0 },
        closeSlide: { opacity: 0, x: '100%' }
    }
    const [show, setShow] = useState(true);

    const handleNextSlide = () => {
        setShow(false);
        
        setTimeout(() => {
            if (index === CARD_INFO.length - 1) {
                setIndex(0);
            }
            else {setIndex(prevIndex => prevIndex + 1)};
        }, 200)

        setTimeout(() => {
            setShow(true);
        }, 1000);
        

    };

    const handlePrevSlide = () => {

        setShow(false);
        
        setTimeout(() => {
            if (index === 0) {
                setIndex(CARD_INFO.length - 1);
            }
            else {setIndex(prevIndex => prevIndex - 1)};
        }, 200)

        setTimeout(() => {
            setShow(true);
        }, 1000);

    };

    return (
        <div >
            <motion.div className={` mt-10`}
                initial={true}
                animate={show ? 'showSlide' : 'closeSlide'}
                variants={variants}
            >
                <div className='lg:h-[700px] md:h-[500px] h-72 rounded-t-xl' style={{ background: `url(${CARD_INFO[index].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <div className='text-white rounded-b-xl p-3 bg-[#1f1d1d]'>
                    <h4 className='font-bold text-lg'>{CARD_INFO[index].title}</h4>
                    <p>{CARD_INFO[index].description}</p>
                </div>
            </motion.div>

            <div className='text-white text-center space-x-3 mt-3'>
                <button onClick={() => { handlePrevSlide() }}>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                    </svg>
                </button>
                <button onClick={() => { handleNextSlide() }}>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                    </svg>
                </button>

            </div>
        </div>
    )

};

export default ProjectCard