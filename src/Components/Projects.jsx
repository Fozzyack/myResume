import React from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
	return (
		<section id="projects">
			<div>
				<h2 className="text-center text-white font-bold text-4xl">
					My Projects
				</h2>
				<p className="text-white text-center mt-2">
					Unfortunately as a university student I do not have a lot of
					projects or real world experience but here are some related
					endeavours.
				</p>
				<p className="text-slate-500 text-center">
					All Tech Stacks can be found in the provided githubs (If the
					github is provided).
				</p>
				<div>
					<ProjectCard />
				</div>
			</div>
		</section>
	);
};

export default Projects;
