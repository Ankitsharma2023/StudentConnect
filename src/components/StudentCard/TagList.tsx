import React from 'react';

type TagListProps = {
  tags: string[];
};

export const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex flex-nowrap overflow-ellipsis gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full 
            hover:bg-indigo-100 hover:text-indigo-700 cursor-pointer
            transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};