import React from 'react'
import { motion } from 'framer-motion';
import AnimatedNumbers from 'react-animated-numbers';

const ACHIEVEMENT_INFO = [
    {
        name: 'Bugs Fixed',
        value: 1982,
        prefix: '~',
        postfix: ''
    },
    {
        name: 'Hours Wasted',
        value: 243,
        prefix: '~',
        postfix: ''
    },
    {
        name: 'Days Without Incident',
        value: 1,
        postfix: ''
    },
    {
        name: 'Longest Time without Distraction',
        value: 1,
        postfix: 'hr(s)'
    },
]
const Counter = () => {
    return (
        <motion.dv className='py-10'
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{once: true}}
            transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            <div className='mt-10 md:border rounded-xl py-8 md:flex-row flex-col items-center justify-between hidden md:flex'>
                {
                    ACHIEVEMENT_INFO.map((achievement, index) => (
                        <div key={index} className='text-center flex flex-col items-center p-5 md:p-0 border md:w-full rounded-xl my-1 md:my-0 md:border-none w-[150px]'>
                            <p className='text-base text-[#ADB7BE] font-bold'>{achievement.name}</p>
                            <div className='flex flex-row items-center'>
                                <h2 className="text-white text-2xl font-bold ">
                                    {achievement.prefix}
                                </h2>
                                <AnimatedNumbers includeComma
                                    transitions={(index) => ({
                                        type: "spring",
                                        duration: index + 0.3,
                                    })}
                                    animateToNumber={achievement.value}
                                    className='font-bold'
                                    fontStyle={{
                                        fontSize: 40,
                                        color: "white",
                                    }}
                                />
                                <h2 className="text-white text-4xl font-bold">
                                    {achievement.postfix}
                                </h2>
                            </div>

                        </div>
                    ))
                }
            </div>
        </motion.dv>
    )
}

export default Counter