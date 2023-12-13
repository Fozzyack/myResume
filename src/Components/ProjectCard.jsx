import React, { useState } from 'react'
import JapWeb from '../assets/ProjectImgs/JapWeb.png';
import timerIMG from '../assets/ProjectImgs/test.png'
import rowingIMG from '../assets/ProjectImgs/Rowing.png'
import webImage from '../assets/ProjectImgs/Github.JPG'
import ThisWebsite from '../assets/ProjectImgs/ThisWebsite.JPG'
import HiguVT from '../assets/ProjectImgs/HiguVt.JPG'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CARD_INFO = [
    {
        id: 0,
        image: JapWeb,
        title: 'Japanese Web Application',
        description: <p>A Japanese Web application I am currently constructing for my Japanese tutor - Expected Completion: Mid to Late 2024. The link to the <Link to='https://github.com/Fozzyack/JapApp' className='text-green-500 border-b border-green-500'>github</Link></p>
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
        description: <p>A University Project which was a WebApp that helped ACICIS with their student management in which it helped chose students to send on overseas scholarships - Completed: December 2024' <br></br> The Link is <Link to='https://github.com/incman7/CITS3200_Group12' className='text-green-500 border-b border-green-500'>here.</Link> However, it may be privated</p>
    },
    {
        id: 4,
        image: ThisWebsite,
        title: 'This Website',
        description: <p>The Website you are currently looking at! Been in development for: 3 days The Github repo for this site can be found <Link to='https://github.com/Fozzyack/myResume' className='text-green-500 border-b border-green-500'>here</Link></p>
    },
    {
        id: 5,
        image: HiguVT,
        title: 'HIGU VT',
        description: <p>I had a simple clean static website for a VTuber / Twitch Streamer. <Link to='https://higu-vt.netlify.app' className='text-blue-300'>The Site Can be Found here</Link> || <Link to='https://github.com/Fozzyack/higu-vt' className='text-green-500 border-b border-green-500'>Github</Link></p>
    },

]
const ProjectCard = () => {


    return (
        <div className=' flex flex-col md:grid md:grid-cols-3 gap-10 mt-10 '>
            {
                CARD_INFO.map((card, index) => (
                    <div key={index}  className='flex flex-col bg-[#1f1d1d] rounded-xl'>
                        <img src={card.image} alt='image' className='max-w-full rounded-t-xl'/>
                        <div className='text-white p-5 border-t'>
                            <h2  className='font-bold'>{card.title}</h2>
                            <p>
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )

};

export default ProjectCard