"use client";

import React, { useState, useRef, useEffect } from 'react';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);
    const hamburgerRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && hamburgerRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !hamburgerRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="w-full h-16 fixed bg-white z-10 flex pl-3 justify-between items-center gap-2 text-2xl font-bold text-indigo-600">
            <div className="z-20">
                Emma Parr
            </div>

            <nav>
                <ul className="hidden md:flex pr-6 space-x-10 font-bold text-lg text-indigo-600 ">
                    <li className="hover:text-indigo-400 hover:underline decoration-cyan-300 decoration-2 underline-offset-8 "><a href="#">Homepage</a></li>
                    <li className="hover:text-indigo-400 hover:underline decoration-cyan-300 decoration-2 underline-offset-8 "><a href="#">Blog</a></li>
                    <li className="hover:text-indigo-400 hover:underline decoration-cyan-300 decoration-2 underline-offset-8 "><a href="#">Projects</a></li>
                </ul>
            </nav>

            <div 
                ref={hamburgerRef}
                onClick={toggleMenu}
                className="space-y-1 md:hidden w-5 cursor-pointer z-20 mr-5 ml-4 mt-1.5"
            >
                <div className="w-6 h-0.5 bg-indigo-600"></div>
                <div className="w-6 h-0.5 bg-indigo-600"></div>
                <div className="w-6 h-0.5 bg-indigo-600"></div>
            </div>

            <ul 
                ref={menuRef}
                className={` font-normal  absolute top-16 left-0 bg-white min-h-[25vh] w-full rounded-b-3xl space-y-6 text-center text-indigo-600 transition-all duration-300 ease-in-out text-xl ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible' }`}
            >
                <li className="pt-6 active:text-indigo-300 hover:underline decoration-cyan-300 decoration-2 underline-offset-8"><a href="#">Homepage</a></li>
                <li className='active:text-indigo-300 hover:underline decoration-cyan-300 decoration-2 underline-offset-8'> <a href="#">Blog</a></li>
                <li className='active:text-indigo-300 hover:underline pb-5 decoration-cyan-300 decoration-2 underline-offset-8'><a href="#">Projects</a></li>
            </ul>
        </header>
    );
};
    


