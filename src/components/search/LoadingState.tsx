import React from 'react';

const LoadingState = () => {
  return (
    <div className="space-y-4 mt-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse">
          <div className="h-32 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingState;