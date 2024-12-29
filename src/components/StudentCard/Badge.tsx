import React from 'react';

type BadgeProps = {
  year: number;
};

export const Badge: React.FC<BadgeProps> = ({ year }) => {
  const getYearText = (year: number) => {
    const suffixes = ['st', 'nd', 'rd', 'th'];
    const suffix = year <= 3 ? suffixes[year - 1] : suffixes[3];
    return `${year}${suffix} Year`;
  };

  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
      {getYearText(year)}
    </span>
  );
};