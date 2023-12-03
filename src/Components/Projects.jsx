import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion';
const Projects = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: false}}
    >
      <h2 className='text-center text-white font-bold text-4xl border-b border-green-500'>
        My Projects
      </h2>
      <p className='text-white text-center mt-2'>
        Unfortunately as a university student I do not have a lot of projects or real world experience but here are some related endeavours
      </p>
      <div>
        <ProjectCard />
      </div>
    </motion.div>
  )
}

export default Projects