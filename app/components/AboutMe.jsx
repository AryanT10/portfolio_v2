"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
	{
	  title: "Skills",
	  id: "skills",
	  content: (
		<div className="flex flex-wrap gap-3 mt-6">
		  {["Node.js", "Express", "MongoDB", "React", "JavaScript"].map((skill) => (
			<span
			  key={skill}
			  className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-md"
			>
			  {skill}
			</span>
		  ))}
		</div>
	  )
	},
	{
	  title: "Education",
	  id: "education",
	  content: (
		<div className="mt-6">
		  <h3 className="text-xl font-semibold mb-2">🎓 Seneca College</h3>
		  <p className="text-gray-300 text-base">
			Advanced Diploma in Computer Programming and Analysis
		  </p>
		  <p className="text-gray-400 text-sm mt-1">2023 - 2027</p>
		</div>
	  )
	},
	{
	  title: "Certification",
	  id: "certification",
	  content: (
		<div className="flex flex-col gap-3 mt-6">
		  <div className="bg-gray-800 hover:bg-purple-600 transition p-4 rounded-lg shadow-md">
			<h4 className="font-bold text-white">✅ JavaScript Basics</h4>
			<p className="text-gray-300 text-sm mt-1">Certified by HackerRank</p>
		  </div>
		  <div className="bg-gray-800 hover:bg-purple-600 transition p-4 rounded-lg shadow-md">
			<h4 className="font-bold text-white">✅ JavaScript Intermediate</h4>
			<p className="text-gray-300 text-sm mt-1">Certified by HackerRank</p>
		  </div>
		</div>
	  )
	}
  ];

const AboutMe = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section id="about" className="text-white py-12">
			<div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
			<Image
  			className="rounded-lg shadow-lg"
  			src="/images/mario.gif"
  			alt="Mario Animation"
  			width={600}
  			height={400}
			/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold txt-white mt-4 mb-4">About Me</h2>
					<p className="txt-base lg:text-lg">
					I'm a passionate Full-Stack Developer with a strong foundation in both front-end and back-end technologies.
					I love turning ideas into functional, impactful applications that resonate with users.
					Always eager to explore, collaborate, and grow, I thrive in dynamic environments that challenge me to level up every day.
					Let’s build something meaningful together.
					</p>
					<div className="flex flex-row justify-start mt-8 tab-container">
						<TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills{" "} </TabButton>
						<TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education{" "} </TabButton>
						<TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>Certification{" "} </TabButton>
					</div>
					<div className="mt-8 transition-opacity duration-300 ease-in-out" key={tab}>
  						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutMe;
