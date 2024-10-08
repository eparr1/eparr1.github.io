"use client";
import Link from 'next/link';
import Image from 'next/image';
import { HeroHighlight, Highlight } from './UI/animated';
import { Children } from 'react';
import { AuroraBackground } from './UI/aurora-background';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalProvider, ModalTrigger } from './UI/button';
import { TypeAnimation } from 'react-type-animation';
import { SparklesCore } from './UI/sparkles';

const Hero = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12 min-h-screen relative mx-auto lg:w-full h-screen container overflow-hidden z-0">
            <div className="absolute inset-0 -z-5">
                <SparklesCore
                    id="sparkles-hero-section"
                    background="transparent"
                    minSize={0.2}
                    maxSize={0.9}
                    particleDensity={10}
                    className="h-full w-full"
                    particleColor="#FFFFFF"
                />
            </div>
                <div className="col-span-7 flex justify-center items-center sm-text-left">
                    <div className="absolute mb-4 text-4xl sm:text-5xl text-white font-extrabold align-top left-5 sm:left-10 md:text-6xl lg:left-5 xl:left-5 z-20">
                        <h1>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700 z-20">
                                Hello, I&apos;m&nbsp;
                            </span>
                            <br />
                            <TypeAnimation
                                sequence={[
                                    'Emma',
                                    1500, 
                                    'A Wanna-Be Developer',
                                    1500,
                                ]}
                                wrapper="span"
                                speed={20}
                                repeat={Infinity}
                            />
                        </h1>

                        <p className="hidden text-base md:block lg:block lg:text-xl w-1/2 py-5 font-thin">
                            I&apos;m Emma Parr based in Edinburgh, Scotland 📍<br></br>
                            I&apos;ve been learning to code for the past 8 months now and I feel like I&apos;ve learnt so much and yet so little about the world of tech. I am documenting my journey
                            and you can follow along 👋

                        </p>

                        <div className="lg:text-xl text-sm">
                            <button className="px-6 py-3 w-fit sm:w-fit rounded-full mr-4 font-semibold bg-white hover:bg-slate-200 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
                            <Link href='https://github.com/eparr1/portfolio.github.io'>Github</Link>
                            </button>
                            <button className="px-1 py-1 justify-end w-fit sm:w-fit rounded-full mr-4 font-semibold bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                     <Link href='/blog'>My Blog</Link>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Container for Circle and Image */}
                {/* Wrapper to position circle and image correctly */}
                <div className="relative col-span-5 flex justify-center items-end w-full">
                    {/* Circle */}
                    <div className="hidden lg:block absolute w-[525px] h-[525px] -bottom-[25%] transform -translate-x-1/2 left-1/2 rounded-full z-10 bg-indigo-900/40"></div>

                    {/* Image */}
                    <Image
                        src="/avater.png"
                        priority={false}
                        alt="emma&apos;s avatar"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20"
                        width={350}
                        height={350}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;