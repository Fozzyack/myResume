import React from 'react';
import githublogo from '../assets/ContactIcons/github-mark-white.png'
import facebookicon from '../assets/ContactIcons/facebookicon.png'
import { Link } from 'react-router-dom';
import EmailForm from './EmailForm';
import { motion } from 'framer-motion';

const Contact = () => {



    return (
        <section id='contacts'>
            <div>
                <h3 className='text-white font-bold  text-center text-3xl mb-10'>
                    Contact
                </h3>
                <div className='md:grid md:grid-cols-2 mt-4'>
                    <motion.div className='md:col-span-1 md:flex md:justify-start md:flex-col items-start text-white p-5'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{once: true}}
                        transition={{duration: 1, delay: 0.8, ease: 'easeIn'}}

                    >
                        <h5 className='text-2xl text-center font-bold'>Get in Touch!</h5>
                        <p className='text-center  md:text-left'>I'm always excited to connect with new people. Whether you have a professional inquiry, want to discuss potential collaborations, or just want to say hello, I'd love to hear from you. Your messages are important, and I'm here and ready to respond. Feel free to reach out – I look forward to connecting with you! </p>
                        <div className='grid md:grid-cols-4 grid-cols-2 mt-5'>
                            <Link className='flex flex-col items-center' to={'https://github.com/Fozzyack'}>
                                <img src={githublogo} alt='Github Logo' className='w-[50px] ' />
                                <p className='text-white mt-1 font-bold'>Github</p>
                            </Link>
                            <Link className='flex items-center align-center flex-col ' to={'https://www.facebook.com/Fozzyack/'}>
                                <img className='bg-white rounded-full w-[50px]' src={facebookicon} alt='Facebook Logo' />
                                <p className='text-white mt-1 font-bold'>Facebook</p>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{once: true}}
                    transition={{duration: 1, delay: 1.6, ease: 'easeIn'}}
                    
                    >
                        <EmailForm />
                    </motion.div>

                </div>
            </div>
        </section >
    )
}

export default Contact