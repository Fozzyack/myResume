import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion';
const Projects = () => {
  return (
    <section id='projects'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8, ease: 'easeIn' }}
      >
        <h2 className='text-center text-white font-bold text-4xl'>
          My Projects
        </h2>
        <p className='text-white text-center mt-2'>
          Unfortunately as a university student I do not have a lot of projects or real world experience but here are some related endeavours.
        </p>
        <p className='text-white text-center'>All Tech Stacks can be found in the provided githubs.</p>
        <div>
          <ProjectCard />
        </div>
      </motion.div>
    </section>

  )
}

export default Projects