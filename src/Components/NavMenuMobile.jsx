import React from 'react'
import NavLink from './NavLink'
import { motion } from 'framer-motion';
const NavMenuMobile = ({ linklist }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {
                linklist.map((link, index) => (
                    <motion.div
                        initial={{scale: 0}}
                        whileInView={{scale: 1}}
                        transition={{type: 'spring', damping: 20, stiffness: 200, delay: 0.2 * (index + 1)}}
                    >
                        <li key={index}>
                            <NavLink href={link.href} title={link.title} image={link.image}/>
                        </li>
                    </motion.div>
                ))
            }
        </ul>
    )
}

export default NavMenuMobile