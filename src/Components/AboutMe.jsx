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
                <li className='text-white font-bold'>Web Development</li>
                <ul className='list-disc ml-4'>
                    <li>PostgreSQL</li>
                    <li>ExpressJS</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>NextJS</li>
                    <li>Bootstrap</li>
                    <li>TailwindCSS</li>
                    <li>MUI</li>
                </ul>
                <li className='text-white font-bold mt-1'>Machine Learning</li>
                <ul className='list-disc ml-4'>
                    <li>pyTorch</li>
                    <li>Deep Neural Networks</li>
                </ul>
                <li className='text-white font-bold mt-1'>Deployment</li>
                <ul className='list-disc ml-4'>
                    <li>Digital Ocean</li>
                    <li>Google Cloud</li>
                    <li>My Home Raspberry Pi Server</li>
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
                <li className='mt-1'><span className='font-bold text-white'>University:</span> Bachelor of Commerce and 
            Engineering Science (Software Pathway) - <span className='font-italic italic underline'>Still Studying</span></li>
                <li className='font-bold'> Related Courses</li>
                <ul className='ml-3 list-disc'>
                    <li>Computer Networks</li>
                    <li>Digital Embedded Systems</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Web Development</li>
                    <li>Professional Computer</li>
                    <li>CyberSecurity</li>
                </ul>
            </ul>
        )
    },
    {
        title: 'Languages and Other Skills',
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
                    <li>TypeScript</li>
                </ul>

            </ul>
        )
    },
    {
        title: 'Hobbies',
        id: 'hobbies',
        content: (
            <ul className='list-disc'>
                <li>Scuba Diving (Advanced Scuba Certification) 🤿</li>
                <li>Studying Japanese 日本語！ 🎌</li>
                <li>Muay Thai 🥊</li>
                <li>Gym 💪</li>
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
                <div className='md:grid md:grid-cols-2 gap-5 justify-center items-center py-8 px-4 xl:gap-16 sm:py-16 md:px-24 over'>

                    <img src={setup} className='rounded-xl max-h-[700px]' alt="Setup"/>
                    <div className='mt-4 md:mt-0 text-left flex flex-col h-full min-h-[600px]'>
                        <h2 className='text-white text-4xl font-semibold mb-4'>
                            About Me
                        </h2>
                        <p className='text-base md:text-lg'>
                            Hey there! I'm Frasier, a university student delving into the exciting realm of full-stack web development. Currently pursuing a degree in Software Engineering at The University of Western Australia, I'm enthusiastic about applying my academic knowledge to real-world applications.

                            While navigating the academic landscape, I've been actively engaged in honing my skills and creating intuitive web experiences. My portfolio offers a glimpse into my journey, featuring a few impactful projects that showcase my proficiency in both front-end and back-end technologies. Despite having a modest collection of web projects, I'm driven and eager to contribute my skills to innovative initiatives through an internship. Let's connect and explore the possibilities of creating something awesome together!
                        </p>
                        <div className='flex flex-row mt-8'>
                            <TabSwapper disabled={isPending} selectTab={() => changeTab("hardskills")} active={tab === "hardskills"}>Hard Skills</TabSwapper>
                            <TabSwapper disabled={isPending} selectTab={() => changeTab("softskills")} active={tab === "softskills"}>Soft Skills</TabSwapper>
                            <TabSwapper disabled={isPending} selectTab={() => changeTab("education")} active={tab === "education"}>Education</TabSwapper>
                            <TabSwapper disabled={isPending} selectTab={() => changeTab("other")} active={tab === "other"}>Languages and Other Skills</TabSwapper>
                            <TabSwapper disabled={isPending} selectTab={() => changeTab("hobbies")} active={tab === "hobbies"}>Hobbies</TabSwapper>
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
