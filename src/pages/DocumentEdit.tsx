import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Save, Search } from 'lucide-react';
import DocumentEditor from '../components/documents/editor/DocumentEditor';
import SearchSidebar from '../components/documents/editor/SearchSidebar';

const DocumentEdit = () => {
  const { t } = useTranslation();
  const location = useLocation(); // Fixed: Changed from useNavigate to useLocation
  const navigate = useNavigate();
  const { template, documentName, clientId, note } = location.state || {};
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  if (!template) {
    return (
      <div className="p-6">
        <p className="text-red-600">{t('documents.errors.templateNotFound')}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="mr-4 p-1 rounded-full hover:bg-gray-100"
            >
              <ArrowLeft className="h-5 w-5 text-gray-500" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{documentName}</h1>
              <p className="text-sm text-gray-500">{template.name}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-md ${
                isSearchOpen 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Search className="h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              <Save className="h-4 w-4 mr-2" />
              {t('common.save')}
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50">
          <DocumentEditor
            template={template}
            documentName={documentName}
            clientName={clientId}
          />
        </div>
        <SearchSidebar 
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>
    </div>
  );
};

export default DocumentEdit;