import React from 'react';

type AvatarProps = {
  img: string;
};

export const Avatar: React.FC<AvatarProps> = ({ img }) => {
 

  return (
    <img className="w-12 h-12 rounded-full flex items-center justify-centershadow-lg" src={img} alt='Profile Photo' referrerPolicy="no-referrer"/>
   
  );
};