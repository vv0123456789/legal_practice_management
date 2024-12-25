import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  percentage: number;
}

const ProgressBar = ({ current, total, percentage }: ProgressBarProps) => {
  return (
    <div>
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span>Progress</span>
        <span>{current} of {total}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full">
        <div 
          className="h-full bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;