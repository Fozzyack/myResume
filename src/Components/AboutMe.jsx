import React, { useState, useTransition } from 'react';
import setup from '../assets/greensetup.png';
import TabSwapper from './TabSwapper';
import { motion } from 'framer-motion';


const SECTION_INFO = [
    {
        title: 'hardskills',
        id: 'hardskills',
        content: (
            <ul>
                <li className='text-white font-bold'>Web Development (PERN STACK)</li>
                <ul className='list-disc ml-4'>
                    <li>PostgreSQL</li>
                    <li>ExpressJS</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>Bootstrap</li>
                    <li>TailwindCSS</li>
                    <li>MUI</li>
                </ul>
                <li className='text-white font-bold mt-1'>Deployment</li>
                <ul className='list-disc ml-4'>
                    <li>Digital Ocean</li>
                </ul>


            </ul>
        )
    },
    {
        title: 'softskills',
        id: 'softskills',
        content: (
            <ul>
                <li className='text-white font-bold'>Communication</li>
                <ul className='list-disc ml-4'>
                    <li>Effective Written and Verbal Communication</li>
                    <li>Active listener</li>
                    <li>Clear and concise expression of ideas</li>
                </ul>
                <li className='text-white font-bold'>Teamwork</li>
                <ul className='list-disc ml-4'>
                    <li>Collaboration and cooperation</li>
                    <li>Conflict resolution</li>
                    <li>Being a team player</li>
                </ul>
                <li className='text-white font-bold'>Adaptability</li>
                <ul className='list-disc ml-4'>
                    <li>Flexibility in handling change</li>
                    <li>Ability to learn and adapt quickly</li>
                </ul>
                <li className='text-white font-bold'>Problem Solving</li>
                <ul className='list-disc ml-4'>
                    <li>Critical Thinking</li>
                    <li>Decision-making</li>
                </ul>


            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul>
                <li>
                    <span className='font-bold text-white'>HighSchool:</span> Trinity College 2017 Graduate</li>
                <li className='mt-1'><span className='font-bold text-white'>University:</span> Bachelor of Commerce and Master of Professional Engineering Pathway - <span className='font-italic italic underline'>Still Studying</span></li>
            </ul>
        )
    },
    {
        title: 'Other Skills',
        id: 'other',
        content: (
            <ul>
                <li className='font-bold  text-white'>Programming Related Hobbies:</li>
                <ul className='list-disc ml-4'>
                    <li>3D Printing</li>
                    <li>AI Art - Stable Diffusion - ComfyUI</li>
                </ul>

                <li className='mt-1'>
                    <span className='font-bold text-white'>Languages:</span>
                </li>
                <ul className='list-disc ml-4'>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>JavaScript</li>
                </ul>

            </ul>
        )
    },
    {
        title: 'Hobbies',
        id: 'hobbies',
        content: (
            <ul className='list-disc'>
                <li>Scuba Diving (Advanced Scuba Certification)</li>
                <li>Studying Japanese 日本語！</li>
                <li>Muay Thai</li>
                <li>Gyms</li>
            </ul>
        )
    }
]
const AboutMe = () => {

    const [tab, setTab] = useState('hardskills');
    const [isOpen, setIsOpen] = useState(true);
    const [isPending, startTransition] = useTransition();

    const changeTab = (name) => {
        setIsOpen(false);
        setTimeout(() => {
            startTransition(() => {
                setTab(name);
            })
            setIsOpen(true);
        }, 200);

    };

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: '100%' },
    }


    return (
        <section className='text-white' id='aboutme'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeIn' }}
            >
                <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 md:px-24'>

                    <img src={setup} className='rounded-xl' />
                    <div className='mt-4 md:mt-0 text-left flex flex-col h-full min-h-[600px]'>
                        <h2 className='text-white text-4xl font-semibold mb-4'>
                            About Me
                        </h2>
                        <p className='text-base md:text-lg'>
                            I am a University student who does some fullstack web development on the side and am currently looking for an internship.
                        </p>
                        <div className='flex flex-row mt-8'>
                            <TabSwapper selectTab={() => changeTab("hardskills")} active={tab === "hardskills"}>Hard Skills</TabSwapper>
                            <TabSwapper selectTab={() => changeTab("softskills")} active={tab === "softskills"}>Soft Skills</TabSwapper>
                            <TabSwapper selectTab={() => changeTab("education")} active={tab === "education"}>Education</TabSwapper>
                            <TabSwapper selectTab={() => changeTab("other")} active={tab === "other"}>Other Skills</TabSwapper>
                            <TabSwapper selectTab={() => changeTab("hobbies")} active={tab === "hobbies"}>Hobbies</TabSwapper>
                        </div>
                        <motion.div className='px-5 mt-4'
                            animate={isOpen ? 'open' : 'closed'}
                            variants={variants}
                        >
                            {SECTION_INFO.find((t) => t.id === tab).content}
                        </motion.div>
                    </div>


                </div>
            </motion.div>

        </section >
    )
}

export default AboutMe