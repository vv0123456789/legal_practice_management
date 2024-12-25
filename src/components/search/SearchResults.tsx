import React from 'react';
import SearchResult from './SearchResult';
import type { SearchResultItem } from '../../types/search';

interface SearchResultsProps {
  results: SearchResultItem[];
  onResultClick: (result: SearchResultItem) => void;
}

const SearchResults = ({ results, onResultClick }: SearchResultsProps) => {
  return (
    <div className="space-y-4">
      {results.map((result) => (
        <SearchResult
          key={result._id}
          result={result}
          onClick={() => onResultClick(result)}
        />
      ))}
    </div>
  );
};

export default SearchResults;