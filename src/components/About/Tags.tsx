import React from 'react';

const tags = [
  'Full Stack',
  'Finance',
  'Machine Learning',
  'Google Developer Group Lead',
  'Web Development',
  'AI'
];

export function Tags() {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm
                     hover:bg-gray-200 transition-colors duration-300 cursor-pointer
                     border border-gray-200"
          >
            #{tag.toLowerCase().replace(/\s+/g, '')}
          </span>
        ))}
      </div>
    </div>
  );
}