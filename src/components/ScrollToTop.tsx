'use client'
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null; 

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 p-2 px-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
