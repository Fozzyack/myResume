import React from 'react'
import HeroImag from '../assets/abo4.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion';
import Counter from './Counter';
import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <section>
            <motion.div className='grid grid-cols-1 sm:grid-cols-12 xl:px-16'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}

            >
                <div className='col-span-7 place-self-center  text-center sm:text-left justify-self-start'>
                    <h1 className='text-white mb-4 lg:text-6xl sm:text-5xl text-4xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#31CB00] to-[#1766b5]'>
                            Hello, I'm {' '} <br></br>
                        </span>
                        <div>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Frasier',
                                    2500, // wait 1s before replacing "Mice" with "Hamsters"
                                    'a University Student',
                                    2500,
                                    'a Web Developer',
                                    1000,
                                    'a Web Developer (kinda)',
                                    2500
                                ]}

                                wrapper="span"
                                speed={55}
                                repeat={Infinity}
                            />
                        </div>

                    </h1>
                        <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
                            and I'm looking for an Internship :).
                            <br></br>
                            Please feel free to have a look through my website!
                            
                        </p>
                        

                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-white bg-white hover:bg-slate-200 bg-gradient-to-br from-[#31CB00] via-[#2a7221] to-[#1766b5] mt-3'>Hire Me</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-transparent text-white hover:bg-slate-800 bg-gradient-to-br from-[#31CB00] via-[#2a7221] to-[#1766b5] mt-3 hover:animate-pulse'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>

                <div className='col-span-5 place-self-center mt-4 lg:mt-0 '>
                    <img
                        src={HeroImag}
                        className='rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-[#1f1d1d]'
                    />
                </div>
            </motion.div>
            <Counter />
        </section>

    )
}

export default Hero