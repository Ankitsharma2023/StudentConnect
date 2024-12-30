'use client'
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 w-[50px] h-[50px] rounded-full bg-[#6a0dad] flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden shadow-[0_0_0_4px_rgba(180,160,255,0.25)] hover:w-[140px] hover:rounded-[50px] hover:bg-[#b5a0ff] group"
      aria-label="Scroll to top"
    >
      <svg 
        viewBox="0 0 384 512" 
        className="w-3 transition-transform duration-300 group-hover:translate-y-[-200%] fill-white"
      >
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
      <span className="absolute text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
        Back to Top
      </span>
    </button>
  );
};

export default ScrollToTopButton;
