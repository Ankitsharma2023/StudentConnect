"use client";

import React, { useState } from 'react';
import { User } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a 
    href={href} 
    className="relative text-purple-100 font-medium tracking-wide group"
  >
    <span className="relative z-10 transition-colors duration-300 group-hover:text-pink-200">
      {children}
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 transition-all duration-300 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100" />
  </a>
);

type NavigationProps ={
    name:string;
    children:React.ReactNode
}
const Navbar: React.FC<NavigationProps> = ({name,children}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <nav className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between pb-2">
          {/* Animated Logo */}
          <div className="hidden md:flex items-center group cursor-pointer">
            <span className="text-2xl font-extrabold tracking-tight transition-all duration-300 group-hover:scale-105">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400 group-hover:from-purple-300 group-hover:to-purple-500">
                Student
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-200 group-hover:from-purple-500 group-hover:to-pink-300">
                Connect
              </span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">About me</NavLink>
            <NavLink href="/">Features</NavLink>
            
            {/* Account Dropdown */}
            <div className="relative items-center">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-2 hover:bg-purple-800/50 flex flex-row justify-center items-start rounded-full transition-all duration-300 focus:outline-none hover:scale-110 active:scale-95"
                aria-label="Account menu"
              >
                <User className="w-5 h-5 items-center text-purple-100 hover:text-pink-200 transition-colors duration-300" />
                {name}
              </button>
              {isDropdownOpen && (
                
                  children
                
              )}
            </div>
          </div>
        </div>
        
        {/* Small Waves Pattern */}
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