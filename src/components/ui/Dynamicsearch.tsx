"use client";

import React, { useState, MouseEvent } from 'react';
import { Search } from 'lucide-react';

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface FloatingParticleProps {
  index: number;
}

interface DynamicSearchFieldProps {
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const FloatingParticle: React.FC<FloatingParticleProps> = ({ index }) => {
  return (
    <div
      className={`
        absolute w-2 h-2
        bg-purple-300 rounded-full
        animate-float-particle${index + 1}
      `}
      style={{
        left: `${20 + index * 30}%`,
        top: `${20 + index * 20}%`,
      }}
    />
  );
};

const DynamicSearchField: React.FC<DynamicSearchFieldProps> = ({
  onSearch,
  placeholder = "Search...",
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addRipple = (event: MouseEvent<HTMLButtonElement>): void => {
    const button = event.currentTarget.getBoundingClientRect();
    const rippleSize = Math.max(button.width, button.height);
    const x = event.clientX - button.left - rippleSize / 2;
    const y = event.clientY - button.top - rippleSize / 2;
    
    const newRipple: Ripple = {
      x,
      y,
      size: rippleSize,
      id: Date.now(),
    };
    
    setRipples(prevRipples => [...prevRipples, newRipple]);
    setTimeout(() => {
      setRipples(prevRipples => prevRipples.filter(r => r.id !== newRipple.id));
    }, 1000);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  const handleSubmit = (event: React.FormEvent): void => {
    
    event.preventDefault();
    if (onSearch) {
      
      onSearch(inputValue);
    }else{
      location.href=`?name=${inputValue}`
    }
    
  };

  return (
    <div className={`flex items-center justify-start w-full max-w-xl ${className}`}>
      <div className="relative">
        <div
          className={`
            absolute inset-0 rounded-full
            bg-purple-500/20 dark:bg-purple-400/20
            animate-pulse
          `}
        />
        
        {/* Outer glow */}
        <div
          className={`
            absolute inset-0 rounded-full
            bg-gradient-to-r from-purple-500 to-violet-500
            opacity-30 blur-xl
            animate-pulse
          `}
        />

        <form
          onSubmit={handleSubmit}
          className={`
            relative flex items-center
            transition-all duration-500 ease-out
            ${isExpanded ? 'w-full sm:w-96' : 'w-14'}
            ${isHovered ? 'scale-105' : 'scale-100'}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main container */}
          <div
            className={`
              relative overflow-hidden
              w-full h-14 rounded-full
              bg-gradient-to-r from-purple-600 to-violet-600
              shadow-lg shadow-purple-500/50
              transition-all duration-500
              ${isHovered ? 'shadow-xl shadow-purple-500/60' : ''}
            `}
          >
            {/* Ripple effects */}
            {ripples.map((ripple: Ripple) => (
              <div
                key={ripple.id}
                className="absolute bg-white/30 rounded-full animate-ripple"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: ripple.size,
                  height: ripple.size,
                }}
              />
            ))}

            {/* Search input */}
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={placeholder}
              className={`
                w-full h-full pl-14 pr-4
                bg-transparent
                text-white placeholder-purple-200
                focus:outline-none
                transition-all duration-500
                ${isExpanded ? 'opacity-100' : 'opacity-0'}
              `}
              style={{ width: isExpanded ? '100%' : '0' }}
            />

            {/* Animated search button */}
            <button
              type="button"
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                setIsExpanded(!isExpanded);
                addRipple(e);
              }}
              className={`
                absolute left-0 top-0
                w-14 h-14
                flex items-center justify-center
                rounded-full
                transition-all duration-300
                hover:bg-white/10
                focus:outline-none
                group
              `}
            >
              <Search 
                className={`
                  w-6 h-6 text-white
                  transition-all duration-500
                  group-hover:scale-110
                  ${isExpanded ? 'rotate-90' : 'rotate-0'}
                  animate-float
                `}
              />
            </button>
          </div>
        </form>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <FloatingParticle key={i} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicSearchField;