import React from 'react';
import SearchContainer from '../components/search/SearchContainer';

const Research = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Research</h1>
      <div className="max-w-2xl mx-auto">
        <SearchContainer autoFocus className="bg-white rounded-lg shadow-sm p-4" />
      </div>
    </div>
  );
};

export default Research;