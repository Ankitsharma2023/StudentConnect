import {  MoreHorizontalIcon } from 'lucide-react';
import React from 'react';

type MoreButtonProps = {
  onClick: () => void;
};
export const MoreButton: React.FC<MoreButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg font-medium 
        hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 
        flex items-center gap-2 shadow-md hover:shadow-lg"
    >
      More
     <MoreHorizontalIcon/>
    </button>
  );
};