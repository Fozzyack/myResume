import React from "react";
import { Link } from "react-router-dom";
import TechList from "./TechList";

const LANGUAGES = [
	{
		name: "JavaScipt",
		icon: "https://img.icons8.com/color/48/000000/javascript.png",
	},
	{
		name: "TypeScript",
		icon: "https://img.icons8.com/color/48/000000/typescript.png",
	},
	{
		name: "Python",
		icon: "https://img.icons8.com/color/48/000000/python.png",
	},
	{
		name: "Go",
		icon: "https://img.icons8.com/color/48/000000/golang.png",
	},
	{
		name: "HTML",
		icon: "https://img.icons8.com/color/48/000000/html-5.png",
	},
	{
		name: "CSS",
		icon: "https://img.icons8.com/color/48/000000/css3.png",
	},
];

const FRAMEWORKS = [
	{
		name: "ReactJS",
		icon: "https://img.icons8.com/color/48/000000/react-native.png",
	},
	{
		name: "NextJS",
		icon: "https://img.icons8.com/nolan/64/nextjs.png",
	},
	{
        name: "NodeJS",
		icon: "https://img.icons8.com/color/48/000000/nodejs.png",
	},
	{
		name: "TailwindCSS",
		icon: "https://img.icons8.com/color/48/tailwindcss.png",
	},
	{
		name: "Material-UI",
		icon: "https://img.icons8.com/color/48/000000/material-ui.png",
	},
];

const TOOLS_LIBRARIES = [
	{
		name: "Docker",
		icon: "https://img.icons8.com/color/48/000000/docker.png",
	},
	{
		name: "PostgreSQL",
		icon: "https://img.icons8.com/color/48/000000/postgreesql.png",
	},
	{
		name: "Git",
		icon: "https://img.icons8.com/color/48/000000/git.png",
	},
	{
		name: "pyTorch",
		icon: "https://img.icons8.com/fluency/48/pytorch.png",
	},
	{
		name: "Jira",
		icon: "https://img.icons8.com/color/48/000000/jira.png",
	},
	{
		name: "Google Cloud",
		icon: "https://img.icons8.com/color/96/google-cloud.png",
	},
];
const OPERATING_SYSTEMS_DISTROS = [
	{
		name: "Windows",
		icon: "https://img.icons8.com/color/48/000000/windows-10.png",
	},
	{
		name: "I use arch btw...",
		icon: "https://img.icons8.com/material-outlined/96/1ca7c9/arch-linux.png",
	},
	{
		name: "Ubuntu",
		icon: "https://img.icons8.com/color/48/000000/ubuntu--v1.png",
	},
	{
		name: "Raspberry Pi OS",
		icon: "https://img.icons8.com/color/48/000000/raspberry-pi.png",
	},
];

const TechStack = () => {
	return (
		<div className="flex flex-col items-center text-center">
			<h3 className="text-3xl font-bold text-white">Tech Stack</h3>
			<p className="text-base text-white">
				{" "}
				What I have learnt or am learning 
			</p>

			<div className="my-4 flex flex-col gap-4 items-center text-center">
                <TechList title="Languages" list={LANGUAGES} />
                <TechList title="Frameworks" list={FRAMEWORKS} />
                <TechList title="Libraries and Tools" list={TOOLS_LIBRARIES} />
                <TechList title="Operating Systems and Distros" list={OPERATING_SYSTEMS_DISTROS} />
				<div>
					<span className="text-white">Icons provided by: </span>
					<Link
						href="https://icons8.com"
						className="text-white underline"
					>
						Icons8
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TechStack;
