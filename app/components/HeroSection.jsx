"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        {/* left side section  */}
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm{" "}</span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Alexina',
                1000, 
                'Software Developer',
                1000,
                'Project Manager',
                1000,
                'Entrepreneur',
                1000
              ]}
              wrapper="span"
              speed={50}
              // style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nisi non pretium consequat. Vivamus dignissim euismod ante, in scelerisque leo dapibus vitae. Praesent eu volutpat metus. Praesent ullamcorper semper nibh, et placerat justo scelerisque sit amet. Cras viverra posuere massa eget tempus. In a est at ex iaculis mollis. Curabitur congue justo vulputate est bibendum iaculis. Proin faucibus massa metus, eget bibendum metus porta nec. Quisque sit amet egestas turpis. Sed vitae auctor diam. Integer lacinia rhoncus odio cursus tincidunt. Sed commodo gravida dui, ac imperdiet massa tempor eget. Pellentesque est libero, volutpat in posuere congue, fringilla ac tortor.
          </p>
          <div>
            <button className='px-6 py-3 w-full rounded-full mt-2 sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
            <button className='px-6 py-3 w-full rounded-full mt-2 sm:w-fit mr-4 bg-transparent hover:bg-slate-800 text-white border border-white'>
              <span>Download CV</span>
            </button>
          </div>
        </div>
        {/* right side section  */}
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative'>
            <Image
            src="/images/profile-pic-alexina.jpg"
            alt="hero image"
            width={300}
            height={300}
            // className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
            className='rounded-full  w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]'
            />
          </div>
       
        </div>
      </div>
       
    </section>
  )
}

export default HeroSection;
