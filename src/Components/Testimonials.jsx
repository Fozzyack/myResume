import React from 'react'
import { motion } from 'framer-motion'

const TESTIMONIAL_INFO = [
    {
        id: 0,
        name: 'Valerie',
        relation: 'Grandma',
        job: '',
        content: "Witnessing my grandchild's journey has been a treasure. Their resilience, compassion, and zest for life inspire everyone around. A true gem, they fill our days with laughter and love. I'm immensely proud and blessed to be their grandma. Much love, Grandma.",
    },
    {
        id: 1,
        name: 'Ian',
        relation: 'Boss',
        job: ', SUPA IGA Northbridge',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ullam praesentium aliquid rem beatae sit repellendus pariatur, voluptate quaerat, tempora ducimus quos est vero laborum! Dolor quibusdam ratione architecto illo.',
    },
    {
        id: 1,
        name: 'Luke',
        relation: 'Friend',
        job: '',
        content: "F**k he's good",
    },

]
const Testimonials = () => {
    return (
        <section id='testimonials'>
            <motion.div className='p-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            >
                <h5 className='font-bold text-white text-center text-3xl'>
                    Testimonials
                </h5>
                <div className='md:grid md:grid-cols-3 gap-5 my-4 text-white'>
                    {
                        TESTIMONIAL_INFO.map((testimonial, index) => (
                            <motion.div key={index} className=''
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: (index + 1) * 0.7 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className='flex mt-3 p-1 bg-gradient-to-br from-[#31CB00] via-[#2a7221] to-[#1766b5] rounded-xl h-full'>
                                    <div className='bg-[#121212] p-4 border rounded-xl w-full'

                                    >
                                        <p>"{testimonial.content}"</p>
                                        <br></br>
                                        <p>- {testimonial.name}, {testimonial.relation} {testimonial.job}</p>
                                    </div>
                                </motion.div>

                            </motion.div>
                        ))
                    }
                </div>
            </motion.div>
        </section>

    )
}

export default Testimonials