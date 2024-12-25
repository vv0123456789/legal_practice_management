import React from 'react';
import { Scale, Calendar, Building } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';
import { getCourtName, getCategoryName } from '../../utils/courtMappings';
import type { SearchResultItem } from '../../types/search';

interface SearchResultProps {
  result: SearchResultItem;
  onClick: () => void;
}

const SearchResult = ({ result, onClick }: SearchResultProps) => {
  if (!result._source) {
    return null;
  }

  const { PetitionerArray = [], Respondent = '', Date = '', CourtId, CategoryId } = result._source;
  const title = `${PetitionerArray.join(', ')} vs ${Respondent}`;

  return (
    <button
      onClick={onClick}
      className="w-full flex items-start gap-3 p-4 hover:bg-gray-50 rounded-lg text-left border border-gray-200 transition-colors"
    >
      <Scale className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900">
          {title}
        </h3>
        
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {Date ? formatDate(Date) : 'No date'}
          </div>
          <div className="flex items-center gap-1">
            <Building className="h-4 w-4" />
            {getCourtName(CourtId)}
          </div>
          <div>
            {getCategoryName(CategoryId)}
          </div>
        </div>

        {result.highlight?.Judgment && result.highlight.Judgment.length > 0 && (
          <div className="mt-3 text-sm text-gray-600">
            <div 
              className="bg-blue-50 p-3 rounded-md"
              dangerouslySetInnerHTML={{ 
                __html: result.highlight.Judgment[0] 
              }} 
            />
          </div>
        )}
      </div>
    </button>
  );
};

export default SearchResult;