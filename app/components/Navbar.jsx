"use client"
import Link from 'next/link'
import React, { useState } from "react"
import NavLink from './NavLink'
import Image from 'next/image'
import { XIcon as XmarkIcon, MenuIcon as Bars3Icon } from "@heroicons/react/solid";
import MenuOverlay from './MenuOverlay';

const navLink = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	}
]

const Navbar = () => {
	const [navBarOpen, setNavBarOpen] = useState(false);

	const toggleNavBar = () => {
		setNavBarOpen(!navBarOpen);
	};

	return (
		<nav className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md bg-[#121212]/70 border-b border-[#33353F]">
			<div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto p-4">
				<Link href={'/'} className="text-xl md:text-5xl text-white font-semibold">
					<Image src="/images/s3.png" className="bg-slate-200 rounded-full" alt="alt" width={35}
						height={35} />
				</Link>
				<div className="mobile-menu block md:hidden">
					<button
						onClick={toggleNavBar}
						className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
					>
						{navBarOpen ? (
							<XmarkIcon className="h-5 w-5" />
						) : (
							<Bars3Icon className="h-5 w-5" />
						)}
					</button>
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8  mt-0">
						{navLink.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
					</ul>
				</div>
			</div>
			{navBarOpen ? <MenuOverlay links={navLink} /> : null}
		</nav>
	)
}

export default Navbar;
