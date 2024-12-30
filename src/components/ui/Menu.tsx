'use client'
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { signOut } from "@/auth";

const HamburgerMenu = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Hamburger toggle button */}
      <button
        className="md:hidden text-gray-600 cursor-pointer"
        onClick={toggleMenu}
      >
        <Menu size={24} />
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="absolute top-0 right-0 z-10 w-full bg-white shadow-lg transform transition-all ease-in-out duration-300"
        >
          <div className="flex justify-between items-center p-4">
            <h1 className="text-xl font-semibold">Menu</h1>
            {/* Close button */}
            <button onClick={toggleMenu}>
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col p-4 gap-4">
            <a
              href="/"
              className="text-lg text-gray-800 hover:text-indigo-600 transition duration-200"
            >
              Home
            </a>
            <form
              action={async () => {
                
                await signOut();
              }}
            >
              <button
                type="submit"
                className="text-lg text-red-500 hover:underline"
              >
                Log Out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
