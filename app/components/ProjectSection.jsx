"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { useInView, motion } from "framer-motion"
const projectsData = [
	{
		id: 1,
		title: "Task Tracker (React)",
		description: "saccadcads",
		image: "/images/projects/taskTracker.png",
		tag: ["All"],
		gitUrl: `https://github.com/AryanT10/react-task-tracker.git`,
		previewUrl: `https://reacttasktrackingapp.netlify.app/`,
	},
	{
		id: 2,
		title: "YT-Clone",
		description: "saccadcads",
		image: "/images/projects/ytclone.png",
		tag: ["All", "Web"],
		gitUrl: `https://github.com/AryanT10/youtubeClone_React.git`,
		previewUrl: `https://64d6b150aee173228c8eff59--melodious-lolly-00dd58.netlify.app/`,
	},
	{
		id: 3,
		title: "Gym App React",
		description: "saccadcads",
		image: "/images/projects/gymreact.png",
		tag: ["All", "Web"],
		gitUrl: `https://github.com/AryanT10/workoutApp_React.git`,
		previewUrl: `https://gymappreact.netlify.app/`,
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
		<section>
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