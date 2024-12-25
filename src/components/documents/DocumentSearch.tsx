import React from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DocumentSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const DocumentSearch = ({ searchQuery, onSearchChange }: DocumentSearchProps) => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="search"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
        placeholder={t('documents.searchPlaceholder')}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        enterKeyHint="search"
      />
    </div>
  );
};

export default DocumentSearch;