"use client";

import Image from 'next/image';
import { useState, useTransition } from 'react';
import TabButton from './UI/tabButton';
import { TracingBeam } from './UI/tracing-beam';
import { Button, MovingBorder } from './UI/moving-border';
import { Skills } from './Skills';

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-20 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: 'url(/noise.webp)',
        backgroundSize: '20%',
      }}
    ></div>
  );
};

const About = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <div id="about" className="flex flex-col lg:flex-row justify-between items-center h-1/2 p-4 lg:p-8 gap-8">
      <div className="hidden lg:block w-full lg:w-1/3 mb-8 lg:mb-0">
        <Button
          borderRadius="1.75rem"
          className="bg-slate-900 text-white border-neutral-200 "
          containerClassName="h-[550px] w-[400px]"
          duration={2000}
        
        >
          <div className="p-3 py-3 flex justify-center  items-center  h-full">
            <Image
              src="/gradphoto.jpg"
              alt="graduation photo"
              width={500}
              height={500}
              className=" object-cover rounded-full"
            />
          </div>
        </Button>
      </div>

      <div className="w-full lg:w-2/3">
        <h1 className="text-white text-center block font-bold text-3xl">About Me</h1>
        <div className="p-5 w-[850px] h-[500px] inline-flex  border-white border-2 space-y-4 text-white bg-indigo-800/60 relative rounded-2xl overflow-hidden">
           
          <div className='w-[450px] h-[200px] pr-5 flex text-balance'>
            <p className="text-lg text-white">
              I am a wanna-be developer and only just started on my journey into tech this year (2024).
             I&apos;ve currently been focusing on front-end at the moment. I started on Codecademy on their full-stack
              developer course and developed my skills starting with HTML, CSS, and Javascript.
              Next, I knew I needed to get with the times and what developers are working with now, so I
              started to learn Tailwind CSS, React, TypeScript, and have now moved on to Next.js.
              I&apos;m a quick learner, and being able to be creative and yet problem-solve every day is what I&apos;ve loved about coding and one of the reasons
              why I want the career change from Psychology. If you want to know more, check out my <a href="#">blog</a>!
            </p>
          </div>
          <div className='justify-end hidden lg:block'>
            <Skills />
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default About;
