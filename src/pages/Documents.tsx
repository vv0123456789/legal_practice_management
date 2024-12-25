import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DocumentSearch from '../components/documents/DocumentSearch';
import TemplateGrid from '../components/documents/TemplateGrid';
import RecentDocumentsList from '../components/documents/RecentDocumentsList';
import CreateDocumentModal from '../components/documents/CreateDocumentModal';
import { mockTemplates, mockDocuments } from '../data/mockDocuments';
import { DocumentTemplate, DocumentType } from '../types/documents';

const Documents = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showTemplates, setShowTemplates] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);

  const handleTemplateSelect = (template: DocumentTemplate) => {
    setSelectedTemplate(template);
  };

  const handleDocumentClick = (document: DocumentType) => {
    console.log('Clicked document:', document);
  };

  const handleCreateDocument = (data: { clientId: string; documentName: string; note?: string }) => {
    console.log('Creating document:', { template: selectedTemplate, ...data });
    setSelectedTemplate(null);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold text-gray-900">{t('documents.title')}</h1>
      </div>

      <div className="flex-1 px-4 py-4 sm:px-6 lg:px-8 space-y-4">
        {/* Mobile tabs */}
        <div className="sm:hidden flex space-x-2 border-b border-gray-200">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              showTemplates
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}
            onClick={() => setShowTemplates(true)}
          >
            {t('documents.templates')}
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              !showTemplates
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}
            onClick={() => setShowTemplates(false)}
          >
            {t('documents.recentDocuments')}
          </button>
        </div>

        {/* Templates section */}
        <div className={`sm:block ${showTemplates ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">
                {t('documents.templates')}
              </h2>
              <div className="w-64">
                <DocumentSearch
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
              </div>
            </div>
            <TemplateGrid
              templates={mockTemplates}
              searchQuery={searchQuery}
              onTemplateSelect={handleTemplateSelect}
            />
          </div>
        </div>

        {/* Recent documents section */}
        <div className={`sm:block ${!showTemplates ? 'block' : 'hidden'}`}>
          <RecentDocumentsList
            documents={mockDocuments}
            onDocumentClick={handleDocumentClick}
          />
        </div>
      </div>

      {selectedTemplate && (
        <CreateDocumentModal
          template={selectedTemplate}
          isOpen={true}
          onClose={() => setSelectedTemplate(null)}
          onSubmit={handleCreateDocument}
        />
      )}
    </div>
  );
};

export default Documents;