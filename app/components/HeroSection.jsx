"use client"
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
	return (
		<section className="lg:py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-8 lg:col-span-6 place-self-center text-center sm:text-left justify-self-start">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal  font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Hello, I'm </span>
						<br></br>
						<TypeAnimation
							sequence={[
								'Aryan',
								1000,
								'Web Developer',
								1000,
								'Programmer',
								1000,
								'Learner',
								1000
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						A dedicated programmer and co-op enthusiast. I primarily work with JavaScript and am actively engaged in learning the intricacies of web development.
					</p>
					{/* BUTTONS */}
					<button onClick={() => {
						const contactSection = document.getElementById('contact');
						if (contactSection) {
							window.scrollTo({
								top: contactSection.offsetTop,
								behavior: 'smooth',
							});
						}
					}} className="px-6 w-full py-3 bg-gradient-to-br from-blue-600 via-purple-500 to-red-500 sm:w-fit rounded-full mb-4 mr-4 bg-white hover:bg-slate-200 text-white">
						Contact Me
					</button>
				</div>
				{/* IMAGE */}
				<div className="col-span-4 lg:col-span-6 place-self-center mt-4 lg:mt-0">
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<Image src="/images/ARY.PNG"
							alt="Hero Image"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300}
							height={300}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
