"use client";
import React,{useState} from 'react';
import GithubIcon from "../../public/github-svgrepo-com.svg";
import LinkedIn from "../../public/linkedin-svgrepo-com.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		}
		const JSONdata = JSON.stringify(data);
		const endpoint = "/api/send";

		const option = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', },
			body: JSONdata,
		}
		const response = await fetch(endpoint, option);
		const resdata = await response.json();
		if (response.status === 200) {
			console.log('Message sent.');
			setEmailSubmitted(true);
		}
	}
	return (
		<section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
			<div className="z-10">
				<h5 className="text-xl font-bold text-white my-2">Let's connect !!</h5>
				<p className="text-[#ADB7BE] mb-4 max-2-md">
					{" "} I'm Full-Stack Aspirant: Eager to Embark on a Co-op Adventure and new
					Opportunities, my inbox is always open. Wheteher you have any questions or just want to drop by and say HI,
					I'll try my best to get backto you !!
				</p>
				<div className="socials flex flex-row gap-2">
					<Link href="https://github.com/AryanT10/INTRO"><Image src={GithubIcon} className="h-12 w-12" /></Link>
					<Link href="https://www.linkedin.com/in/aryan-tuwar-6b29291a9/" className="h-12 w-12"><Image src={LinkedIn} /></Link>
				</div>
			</div>
			<div>
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<div className="mb-6">
						<label htmlFor="email" className="text-white mb-2 block text-sm font-medium"> Your Email </label>
						<input name="email" type="email" id="email" required className="bg-[#18191E] placeholder-[#9ca2a9] text-gray-100 text-sm border border-[#33353F] rounded-lg block w-full p-2.5" placeholder="johndoe@gmail.com" />
					</div>
					<div className="mb-6 ">
						<label htmlFor="subject" className="text-white mb-2 block text-sm font-medium"> Subject </label>
						<input name="subject" type="text" id="subject" required className="bg-[#18191E] placeholder-[#9ca2a9] text-gray-100 text-sm border border-[#33353F] rounded-lg block w-full p-2.5" placeholder="Come to Drop By" />
					</div>
					<div className="mb-6">
						<label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
						<textarea name="message" id="message" className="bg-[#18191E] placeholder-[#9ca2a9] text-gray-100 text-sm border border-[#33353F] rounded-lg block w-full p-2.5" placeholder=" Hi Aryan, I came here to talk about ..." />
					</div>
					<button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>
					{emailSubmitted && (
						<p className="text-green-500 text-sm mt-2">Email Sent successfully!</p>
				)}
				</form>
			</div>
		</section>
	)
}

export default EmailSection