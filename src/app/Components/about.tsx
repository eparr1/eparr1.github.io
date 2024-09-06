"use client";

import Image from 'next/image';
import { useState, useTransition } from 'react';
import TabButton from './UI/tabButton';
import { TracingBeam } from './UI/tracing-beam';
import { Button, MovingBorder } from './UI/moving-border';
import { Skills } from './Skills';


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
          <div className="p-2 py-3 flex justify-center  items-center  h-full">
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
    {/* about section */}

      <div className="md:grid  gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 bg">
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full w-full text-white">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg pb-3 text-[#D8D8D8]">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set.</p>
          <Skills />
      </div>
  
        
      </div>
      

    </div>
  );
};

export default About;
