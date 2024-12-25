import React from 'react';
import { FileText, Plus } from 'lucide-react';
import { DocumentTemplate } from '../../types/documents';

interface DocumentTemplateCardProps {
  template: DocumentTemplate;
  onClick: (template: DocumentTemplate) => void;
}

const DocumentTemplateCard = ({ template, onClick }: DocumentTemplateCardProps) => {
  return (
    <button
      onClick={() => onClick(template)}
      className="flex flex-col items-center w-full p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation group"
    >
      <div className="w-full aspect-[3/4] rounded-lg mb-3 overflow-hidden relative">
        {template.isBlank ? (
          <div className="w-full h-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <Plus className="h-8 w-8 sm:h-12 sm:w-12 text-blue-600" />
          </div>
        ) : template.thumbnail ? (
          <img
            src={template.thumbnail}
            alt={template.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-full h-full bg-gray-50 flex items-center justify-center">
            <FileText className="h-8 w-8 sm:h-12 sm:w-12 text-blue-600" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
      <h3 className="text-xs sm:text-sm font-medium text-gray-900 text-center line-clamp-2">
        {template.name}
      </h3>
      <p className="text-xs text-gray-500 mt-1">{template.category}</p>
    </button>
  );
};

export default DocumentTemplateCard;