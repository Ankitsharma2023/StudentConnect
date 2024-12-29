import React from 'react';

type LikeButtonProps = {
  isLiked: boolean;
  onToggle: () => void;
};

export const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`
        group flex items-center gap-2 px-4 py-2 rounded-lg 
        ${isLiked 
          ? 'bg-red-50 border border-red-200' 
          : 'border border-gray-200 hover:border-gray-300'
        } 
        transition-all duration-300 ease-in-out
      `}
    >
      <svg
        className={`w-5 h-5 transition-transform duration-300 ${
          isLiked ? 'text-red-500 fill-red-500 scale-110' : 'text-gray-400 group-hover:scale-110'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span className={`font-medium ${isLiked ? 'text-red-500' : 'text-gray-600'}`}>
        {isLiked ? 'Liked' : 'Like'}
      </span>
    </button>
  );
};