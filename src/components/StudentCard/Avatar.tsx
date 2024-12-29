import React from 'react';

type AvatarProps = {
  name: string;
};

export const Avatar: React.FC<AvatarProps> = ({ name }) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
      {initials}
    </div>
  );
};