import React, { useState } from 'react'
import JapWeb from '../assets/ProjectImgs/JapWeb.png';
import timerIMG from '../assets/ProjectImgs/test.png'
import rowingIMG from '../assets/ProjectImgs/Rowing.png'
import webImage from '../assets/ProjectImgs/WebsiteUI.png'
import { useTransform } from 'framer-motion';
import { useTransition } from 'react';

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
    const [cardClass, setCardClass] = useState('')
    const [resetbackground, setResetBackground] = useState({ background: `url(${CARD_INFO[index].image})`, backgroundSize: 'cover', backgroundPosition: 'center' });
    const [cardDesc, setCardDesc] = useState({
        title: CARD_INFO[0].title,
        desc: CARD_INFO[0].description
    })
    const [isPending, startTransition] = useTransition();

    const handleNextSlide = () => {
        setCardClass('transition-opacity duration-200 ease-in opacity-0');
        setResetBackground({});

        setTimeout(() => {
            if (index === CARD_INFO.length - 1) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
            startTransition(() => {
                setCardDesc({ title: CARD_INFO[index].title, desc: CARD_INFO[index].description })
                setResetBackground({ background: `url(${CARD_INFO[index].image})`, backgroundSize: 'cover', backgroundPosition: 'center' });
            })
            setCardClass('transition-opacity duration-100 ease-in opacity-100');
        }, 600);

    };

    const handlePrevSlide = () => {
        setCardClass('transition-opacity duration-200 ease-in opacity-0');
        setResetBackground({ background: `url(${CARD_INFO[index].image})` });
        setTimeout(() => {
            if (index === 0) {
                setIndex(CARD_INFO.length - 1)
            } else {
                setIndex(index - 1);
            };

            setCardDesc({ title: CARD_INFO[index].title, desc: CARD_INFO[0].description })
            setResetBackground({ background: `url(${CARD_INFO[index].image})`, backgroundSize: 'cover', backgroundPosition: 'center' });
            setCardClass('transition-opacity duration-200 ease-in opacity-100');
        }, 300)

    };

    return (
        <div >
            <div className={`${cardClass} mt-10`}>
                <div className='lg:h-[700px] md:h-[500px] h-72 rounded-t-xl' style={resetbackground}>
                </div>
                <div className='text-white rounded-b-xl p-3 bg-[#1f1d1d]'>
                    <h4 className='font-bold text-lg'>{cardDesc.title}</h4>
                    <p>{cardDesc.desc}</p>
                </div>
            </div>

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
}

export default ProjectCard