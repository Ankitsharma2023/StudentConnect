"use client";

import React, { useState, useRef } from "react";
import { User } from "lucide-react";
import NavLink from "./Navlink";
import Link from "next/link";
import { Button } from "../ui/button";

type NavigationProps = {
  name: string;
  children: React.ReactNode;
};

const Navbar: React.FC<NavigationProps> = ({ name, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative">
      <nav className="bg-white text-black border-4 border-black shadow-[4px_4px_0px_#000] p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            className="hidden md:flex items-center group cursor-pointer"
            href="/"
          >
            <span className="text-3xl font-extrabold tracking-tighter uppercase">
              <span className="px-1 bg-yellow-300">Student</span>
              <span className="px-1 bg-blue-300">Connect</span>
            </span>
          </Link>

          <button
            className="md:hidden p-2 border-2 border-black bg-yellow-300 shadow-[2px_2px_0px_#000]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden md:flex items-center text-black space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/">Features</NavLink>

            <div className="relative items-center">
              <Button
                ref={buttonRef}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-label="Account menu"
                variant={"neutral"}
              >
                <User className="w-5 h-5" />
                <span className="ml-2">{name}</span>
              </Button>
              {isDropdownOpen && <div ref={dropdownRef}>{children}</div>}
            </div>
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 w-64 h-full bg-yellow-300 border-r-4 border-black transform z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden transition-transform duration-300 shadow-[4px_0_0_#000]`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Button
              onClick={() => setIsMenuOpen(false)}
              className="text-black text-2xl absolute top-4 right-4"
              aria-label="Close menu"
            >
              &times;
            </Button>

            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/">Features</NavLink>

            <div className="relative items-center">
              <Button
                ref={buttonRef}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-label="Account menu"
              >
                <User className="w-5 h-5" />
                <span className="ml-2">{name}</span>
              </Button>
              {isDropdownOpen && <div ref={dropdownRef}>{children}</div>}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
