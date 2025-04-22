"use client"
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
	return (
		<section className="relative overflow-hidden lg:py-16">
  {/* Floating Blobs Background */}
  <div className="absolute inset-0 flex justify-center items-center z-0 overflow-hidden">
    {/* Top Left Blob */}
    <div className="absolute w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-2xl animate-float-slow" style={{ top: '10%', left: '10%' }} />
    {/* Bottom Right Blob */}
    <div className="absolute w-40 h-40 bg-pink-500 rounded-full opacity-20 blur-2xl animate-float-slower" style={{ bottom: '10%', right: '15%' }} />
  </div>

  {/* Actual Hero Content */}
  <div className="relative grid grid-cols-1 sm:grid-cols-12 z-10">
    {/* Text Section */}
    <div className="col-span-8 lg:col-span-6 place-self-center text-center sm:text-left justify-self-start">
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
          Hello, I'm
        </span>
        <br />
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
        A dedicated programmer and enthusiast. I primarily work with JavaScript and am actively engaged in learning the intricacies of web development.
      </p>

      <button
        onClick={() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            window.scrollTo({
              top: contactSection.offsetTop,
              behavior: 'smooth',
            });
          }
        }}
        className="px-6 w-full py-3 bg-gradient-to-br from-blue-600 via-purple-500 to-red-500 sm:w-fit rounded-full mb-4 mr-4 hover:bg-slate-200 text-white transition "
      >
        Contact
      </button>
    </div>

    {/* Image Section */}
    <div className="col-span-4 lg:col-span-6 place-self-center flex justify-center items-center mt-4 lg:mt-0">
	<div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#181818] glow-avatar flex justify-center items-center mx-auto mt-6">
        <Image
          src="/images/ARY.PNG"
          alt="Hero Image"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  </div>
</section>

	);
};

export default HeroSection;
