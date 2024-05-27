"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-2">
				<li>Node.js</li>
				<li>Express</li>
				<li>MongoDB</li>
				<li>React</li>
				<li>Javascript</li>
			</ul>
		)
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>Seneca College, Computer Programming and Analysis</li>
			</ul>
		)
	},
	{
		title: "Certification",
		id: "certification",
		content: (
			<ul className="list-disc pl-2">
				<li>Javascript Basic</li>
				<li>Javascript Intermediate</li>
			</ul>
		)
	}
]

const AboutMe = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section id="about" className="text-white">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src="/images/mario.gif"
					alt="alt"
					width={600}
					height={400}
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold txt-white mt-4 mb-4">About Me</h2>
					<p className="txt-base lg:text-lg">
						As a Full-Stack Aspirant, I am fueled by eagerness to embark on a co-op adventure and explore new opportunities in the dynamic realm of technology. With a fervent passion for both front-end and back-end development. Equipped with a solid foundation in programming languages. My goal is not just to build applications, but to create meaningful and impactful solutions that resonate with users. Eager to collaborate, learn, and thrive in a professional environment along with contributing in the field of Full-Stack development.</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills{" "} </TabButton>
						<TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education{" "} </TabButton>
						<TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>Certification{" "} </TabButton>
					</div>
					<div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
				</div>
			</div>
		</section>
	)
}

export default AboutMe;
