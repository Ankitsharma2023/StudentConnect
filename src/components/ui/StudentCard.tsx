'use client'
import React, { useState } from 'react';
import { TagList } from '@/components/StudentCard/TagList';
import { StudentInfo } from '@/components/StudentCard/StudentInfo';
import { Badge } from '@/components/StudentCard/Badge';
import { ActionButtons } from '@/components/StudentCard/ActionButtons';
import { Avatar } from '@/components/StudentCard/Avatar';

export type StudentCardProps = {
  name: string;
  photoURL: string|null;
  usn: string;
  branch: string;
  year: number;
  tags: string[];
};

export const StudentCard: React.FC<StudentCardProps> = ({
  name,
  photoURL,
  usn,
  branch,
  year,
  tags,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleTalkClick = () => {
    console.log('Initiating chat with', name);
  };

  return (
    <div className="w-md bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <Avatar img={photoURL??name}/>
          <div className="flex-1">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h2 className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                {name}
              </h2>
              <StudentInfo usn={usn} branch={branch} />
            </div>
          </div>
        </div>
        
        <Badge year={year} />
        
        <div className="pt-4 border-t-2 border-gray-200">
          <TagList tags={tags} />
        </div>

        <ActionButtons 
          isLiked={isLiked}
          onLikeToggle={() => setIsLiked(!isLiked)}
          onTalkClick={handleTalkClick}
        />
      </div>
    </div>
  );
};