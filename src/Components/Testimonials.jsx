import React from 'react'
import { motion } from 'framer-motion'

const TESTIMONIAL_INFO = [
    {
        id: 0,
        name: 'Valerie',
        relation: 'Grandma',
        job: '',
        content: "Sweetie, I am bursting with pride for my wonderful grandchild! They possess a heart of gold, kindness that knows no bounds, and a brilliant mind that lights up our world. I am beyond grateful to be their grandma. They bring so much joy and warmth to our family. Love, Grandma.",
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
            <div className='p-10'>
                <h5 className='font-bold text-white text-center text-3xl'>
                    Testimonials
                </h5>
                <div className='md:grid md:grid-cols-3 gap-5 my-4 text-white'>
                    {
                        TESTIMONIAL_INFO.map((testimonial, index) => (
                            <motion.div key={index} className='flex p-1 bg-gradient-to-br from-[#31CB00] via-[#2a7221] to-[#1766b5] rounded-xl mt-3'
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className='bg-[#121212] p-4 border rounded-xl w-full '>
                                    <p>"{testimonial.content}"</p>
                                    <br></br>
                                    <p>- {testimonial.name}, {testimonial.relation} {testimonial.job}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default Testimonials