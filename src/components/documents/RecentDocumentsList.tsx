import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { FileText, ChevronRight } from 'lucide-react';
import { Document } from '../../types';

interface RecentDocumentsListProps {
  documents: Document[];
  onDocumentClick: (document: Document) => void;
}

const RecentDocumentsList = ({ documents, onDocumentClick }: RecentDocumentsListProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">{t('documents.recentDocuments')}</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {documents.map((doc) => (
          <button
            key={doc.id}
            onClick={() => onDocumentClick(doc)}
            className="w-full px-4 py-3 flex items-center hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation"
          >
            <FileText className="flex-shrink-0 h-5 w-5 text-gray-400 mr-3" />
            <div className="flex-1 min-w-0 text-left">
              <p className="text-sm font-medium text-gray-900 truncate">{doc.title}</p>
              <p className="text-xs text-gray-500">
                {format(new Date(doc.updatedAt), 'MMM d, yyyy')}
              </p>
            </div>
            <ChevronRight className="flex-shrink-0 h-5 w-5 text-gray-400 ml-2" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentDocumentsList;