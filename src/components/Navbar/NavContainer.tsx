"use client";

import React, { useState, useRef } from 'react';
import { User } from 'lucide-react';
import NavLink from './Navlink';
import Link from 'next/link';

type NavigationProps = {
  name: string;
  children: React.ReactNode;
}

const Navbar: React.FC<NavigationProps> = ({ name, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative">
      <nav className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between pb-2">
          
          <Link className="hidden md:flex items-center group cursor-pointer" href='/'>
            <span className="text-2xl font-extrabold tracking-tight transition-all duration-300 group-hover:scale-105">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400 group-hover:from-purple-300 group-hover:to-purple-500">
                Student
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-200 group-hover:from-purple-500 group-hover:to-pink-300">
                Connect
              </span>
            </span>
          </Link>

          
          <button 
            className="md:hidden p-2 text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About me</NavLink>
            <NavLink href="/">Features</NavLink>

            
            <div className="relative items-center">
              <button
                ref={buttonRef}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-2 hover:bg-purple-800/50 flex flex-row justify-center items-start rounded-full transition-all duration-300 focus:outline-none hover:scale-110 active:scale-95"
                aria-label="Account menu"
              >
                <User className="w-5 h-5 items-center text-purple-100 hover:text-pink-200 transition-colors duration-300" />
                {name}
              </button>
              {isDropdownOpen && (
                <div ref={dropdownRef}>
                  {children}
                </div>
              )}
            </div>
          </div>
        </div>

        
        <div className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-r from-indigo-900 to-purple-900 transform z-50 ${isMenuOpen ? 'translate-x-0 ' : '-translate-x-full'} md:hidden transition-transform duration-300`}>
          <div className="flex flex-col p-4 space-y-4">
            
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl absolute top-4 right-4"
              aria-label="Close menu"
            >
              &times;
            </button>

            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About me</NavLink>
            <NavLink href="/">Features</NavLink>

            
            <div className="relative items-center">
              <button
                ref={buttonRef}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-2 hover:bg-purple-800/50 flex flex-row justify-center items-start rounded-full transition-all duration-300 focus:outline-none hover:scale-110 active:scale-95"
                aria-label="Account menu"
              >
                <User className="w-5 h-5 items-center text-purple-100 hover:text-pink-200 transition-colors duration-300" />
                {name}
              </button>
              {isDropdownOpen && (
                <div ref={dropdownRef}>
                  {children}
                </div>
              )}
            </div>
          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 w-full h-2 overflow-hidden">
          <div className="relative w-full h-full">
            <svg 
              viewBox="0 0 1200 12" 
              className="absolute w-full h-4 transform -translate-y-2"
              preserveAspectRatio="none"
            >
              <path 
                d="M0 10 C 30 4, 60 4, 90 10 C 120 16, 150 16, 180 10 C 210 4, 240 4, 270 10 C 300 16, 330 16, 360 10 C 390 4, 420 4, 450 10 C 480 16, 510 16, 540 10 C 570 4, 600 4, 630 10 C 660 16, 690 16, 720 10 C 750 4, 780 4, 810 10 C 840 16, 870 16, 900 10 C 930 4, 960 4, 990 10 C 1020 16, 1050 16, 1080 10 C 1110 4, 1140 4, 1170 10 L 1200 10 L 1200 0 L 0 0 Z" 
                fill="rgba(255,255,255,0.1)"
              />
              <path 
                d="M0 10 C 30 16, 60 16, 90 10 C 120 4, 150 4, 180 10 C 210 16, 240 16, 270 10 C 300 4, 330 4, 360 10 C 390 16, 420 16, 450 10 C 480 4, 510 4, 540 10 C 570 16, 600 16, 630 10 C 660 4, 690 4, 720 10 C 750 16, 780 16, 810 10 C 840 4, 870 4, 900 10 C 930 16, 960 16, 990 10 C 1020 4, 1050 4, 1080 10 C 1110 16, 1140 16, 1170 10 L 1200 10 L 1200 0 L 0 0 Z" 
                fill="rgba(255,255,255,0.15)"
                transform="translate(-60 0)"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
