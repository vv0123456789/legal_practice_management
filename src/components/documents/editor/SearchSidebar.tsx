import React from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SearchContainer from '../../search/SearchContainer';

interface SearchSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchSidebar = ({ isOpen, onClose }: SearchSidebarProps) => {
  const { t } = useTranslation();
  
  if (!isOpen) return null;

  return (
    <div className="w-96 h-full border-l border-gray-200 bg-white flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="font-medium">{t('navigation.research')}</h3>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <SearchContainer />
      </div>
    </div>
  );
};

export default SearchSidebar;