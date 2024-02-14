import React from "react";
import { motion } from "framer-motion";
const TechList = ({ title, list }) => {
	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-xl text-white font-bold">{title}</h3>
			<div className="flex flex-row gap-4 justify-center items-center flex-wrap">
				{list.map((tech, index) => (
					<motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{delay: Math.floor(Math.random() * 100) / 12 * 0.2 }}
						key={index}
                        viewport={{once: true}}
                    >
                        <motion.div 
                        whileHover={{y: -5}}
						className="bg-[#121212] p-2 flex flex-col gap-2 items-center justify-center rounded-md"
                    >
						<img
							src={tech.icon}
							alt={tech.name}
							className="h-12 w-12"
						/>
						<p className="text-sm text-white font-semibold">{tech.name}</p>
					</motion.div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default TechList;
