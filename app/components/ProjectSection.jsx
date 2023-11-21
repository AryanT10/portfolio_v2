"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { useInView, motion } from "framer-motion"
const projectsData = [
	{
		id: 1,
		title: "Task Tracker (React)",
		description: "TASK TRACKING APP FOR EDITING TASKS , INSERTING TASKS AND DATE , REMINDER SETUP AND MANY OTHER FEATURES USING REACT.js",
		image: "/images/projects/taskTracker.png",
		tag: ["All","School"],
		gitUrl: `https://github.com/AryanT10/react-task-tracker.git`,
		previewUrl: `https://reacttasktrackingapp.netlify.app/`,
	},
	{
		id: 2,
		title: "YouTube Clone",
		description: "This project is a simple YouTube clone built with React, utilizing the React Router dom for routing and Material UI for component styling.",
		image: "/images/projects/ytclone.png",
		tag: ["All", "Web"],
		gitUrl: `https://github.com/AryanT10/youtubeClone_React.git`,
		previewUrl: `https://64d6b150aee173228c8eff59--melodious-lolly-00dd58.netlify.app/`,
	},
	{
		id: 3,
		title: "Gym App React",
		description: "The Workout App is a web application built using React that provides users with exercises and workout-related information. Users can browse through various exercises, watch exercise videos, and find similar exercises based on different criteria.",
		image: "/images/projects/gymreact.png",
		tag: ["All", "Web"],
		gitUrl: `https://github.com/AryanT10/workoutApp_React.git`,
		previewUrl: `https://gymappreact.netlify.app/`,
	},
	{
		id: 4,
		title: "Spotify (using Spotify API)",
		description: "A Spotify clone built using React and the Spotify Web API. This project aims to replicate some of the core features of the Spotify music streaming service, allowing users to browse playlists, play tracks, and manage their music library.",
		image: "/images/projects/spotify.png",
		tag: ["All", "Web"],
		gitUrl: `https://github.com/AryanT10/Spotify-lite_React`,
		previewUrl: ``,
	},
	{
		id: 5,
		title: "My Portfolio",
		description: "My Portfolio website made using Next.js, React, Tailwind, motion and many more..",
		image: "/images/projects/portfolio.png",
		tag: ["All", "School","Web"],
		gitUrl: `https://github.com/AryanT10/portfolio_v2`,
		previewUrl: `https://aryantuwar.vercel.app/`,
	},
	{
		id: 6,
		title: "Live Clock (JS,CSS)",
		description: "This Project code provides a stylish and eye-catching revolving Red, Blue, Green gradient effect",
		image: "/images/projects/liveclock.png",
		tag: ["All", "School"],
		gitUrl: `https://github.com/AryanT10/LIVE_CLOCK_JS`,
		previewUrl: `https://aryantuwar.vercel.app/`,
	},
];

const ProjectSection = () => {
	const [tag, setTag] = useState("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	}

	return (
		<section id='projects'>
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				• MY PROJECTS •
			</h2>
			<div className="text-white flex-row justify-center items-center gap-2 py-6">
				<ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
				<ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
				<ProjectTag onClick={handleTagChange} name="School" isSelected={tag === "School"} />
			</div>
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project) => (
					<motion.li key={project.id} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3 }}>
						<ProjectCard
							title={project.title}
							description={project.description}
							imageURL={project.image}
							tags={project}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	)
}

export default ProjectSection