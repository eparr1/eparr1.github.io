"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Blog from '../blog/page';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);
    const hamburgerRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && hamburgerRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !hamburgerRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
        <div className="flex justify-center items-center w-full h-16 z-10 pt-2 text-2xl font-bold">

            <nav className=" hidden lg:flex md:flex justify-center w-1/3 bg-[#4d4f4d22] py-2 rounded-3xl px-2">
                 <ul className="flex space-x-10 font-semibold text-lg text-slate-300">
                     <li className="hover:text-slate-100 hover:underline decoration-indigo-400 underline-offset-8">
                        <Link href="/">Homepage</Link>
                    </li>
                    <li className="hover:text-slate-100 hover:underline decoration-indigo-400 underline-offset-8">
                         <Link href="/blog">Blog</Link>
                    </li>
                    <li className="hover:text-slate-100 hover:underline decoration-indigo-400 underline-offset-8">
                         <Link href="#">Projects</Link>
                    </li>
                </ul>
            </nav>
        </div>


    
      {/* Left: Image 
      <div className="flex items-center ml-6">
        <Image
          src="/gradphoto.jpg"
          alt="graduation photo"
          width={75}
          height={75} 
          className="object-cover rounded-full"
        />
      </div>
      */}

      {/* Center: Navigation */}
      
        <div className='w-full flex justify-end pt-0'>
        <div
                ref={hamburgerRef}
                onClick={toggleMenu}
                className="space-y-1 md:hidden w-5 cursor-pointer z-20 mr-5 ml-4 "
            >
                <div className="w-8 h-1 bg-indigo-600"></div>
                <div className="w-8 h-1 bg-indigo-600"></div>
                <div className="w-8 h-1 bg-indigo-600"></div>
            </div>

            <ul
                ref={menuRef}
                className={`font-normal absolute top-10 left-0 bg-white min-h-[25vh] w-full rounded-b-3xl space-y-6 text-center text-indigo-600 transition-all duration-300 ease-in-out text-xl ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <li className="pt-6 active:text-indigo-300 hover:underline decoration-cyan-300 decoration-2 underline-offset-8">
                        <Link href="/">Homepage</Link>
                </li>
                <li className="active:text-indigo-300 hover:underline decoration-cyan-300 decoration-2 underline-offset-8">
                    <Link href='/blog'>Blog</Link>
                </li>
                <li className="active:text-indigo-300 hover:underline pb-2 decoration-cyan-300 decoration-2 underline-offset-8">
                    <a href="#">Contact Me</a>
                </li>
            </ul>
        </div>
           
        </header>
    );
};
