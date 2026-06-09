import React from 'react';

interface ProgressBarProps {
  step: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  const progress = Math.round((step / 3) * 100);

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div className="text-xs font-semibold inline-block text-emerald-600">
          Step {step} of 3
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-emerald-600">
            {progress}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-emerald-100">
        <div
          style={{ width: `${progress}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500 transition-all duration-500"
        />
      </div>
    </div>
  );
};