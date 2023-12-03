import React from 'react'
import {motion}  from 'framer-motion'
const TabSwapper = ({ active, selectTab, children }) => {
    const inactive_button = "text-[#8f8b8b]"
    const active_button = "text-white border-b border-green-500"
    const buttonClasses = active ? active_button : inactive_button;

    return (
        <button onClick={selectTab} className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            <motion.div
                whileHover={{scale: 1.1}}
                transition={{type: 'spring'}}>
                {children}
            </motion.div>
        </button>
    )
}

export default TabSwapper