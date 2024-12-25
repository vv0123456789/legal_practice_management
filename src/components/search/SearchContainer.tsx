import React, { useState, useCallback } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import LoadingState from './LoadingState';
import CaseDetailsModal from './CaseDetailsModal';
import Pagination from './Pagination';
import { searchJudgments } from '../../services/search/searchService';
import { getCaseDetails } from '../../services/search/caseService';
import type { SearchResultItem } from '../../types/search';

interface SearchContainerProps {
  className?: string;
  autoFocus?: boolean;
}

const SearchContainer: React.FC<SearchContainerProps> = ({ className, autoFocus }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [info, setInfo] = useState<{ totalResults: number; totalPages: number } | null>(null);
  
  // Case details state
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [isCaseLoading, setIsCaseLoading] = useState(false);
  const [caseError, setCaseError] = useState<string | null>(null);
  const [showCaseDetails, setShowCaseDetails] = useState(false);

  const handleSearch = useCallback(async (page = 1) => {
    if (!query.trim()) {
      setResults([]);
      setInfo(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await searchJudgments(query, page);
      setResults(data.results);
      setInfo({
        totalResults: data.info.totalResults,
        totalPages: data.info.totalPages
      });
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
      setResults([]);
      setInfo(null);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  const handlePageChange = (page: number) => {
    handleSearch(page);
  };

  const handleResultClick = async (result: SearchResultItem) => {
    setShowCaseDetails(true);
    setIsCaseLoading(true);
    setCaseError(null);

    try {
      const details = await getCaseDetails(result._id);
      setSelectedCase(details);
    } catch (err) {
      setCaseError(err instanceof Error ? err.message : 'Failed to load case details');
    } finally {
      setIsCaseLoading(false);
    }
  };

  return (
    <div className={className}>
      <SearchInput
        value={query}
        onChange={setQuery}
        onSearch={() => handleSearch(1)}
        placeholder="Search judgments..."
        autoFocus={autoFocus}
      />
      
      {info && !isLoading && !error && (
        <div className="mt-3 text-sm text-gray-500">
          Found {info.totalResults.toLocaleString()} results
        </div>
      )}
      
      {isLoading && <LoadingState />}
      
      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}
      
      {!isLoading && !error && results.length > 0 && (
        <>
          <div className="mt-4">
            <SearchResults 
              results={results}
              onResultClick={handleResultClick}
            />
          </div>
          {info && info.totalPages > 1 && (
            <div className="mt-4">
              <Pagination
                currentPage={currentPage}
                totalPages={info.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      )}
      
      {!isLoading && !error && query && results.length === 0 && (
        <div className="mt-4 text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No results found for "{query}"</p>
          <p className="text-sm text-gray-400 mt-1">Try adjusting your search terms</p>
        </div>
      )}

      <CaseDetailsModal
        isOpen={showCaseDetails}
        onClose={() => setShowCaseDetails(false)}
        caseDetails={selectedCase}
        isLoading={isCaseLoading}
        error={caseError}
      />
    </div>
  );
};

export default SearchContainer;