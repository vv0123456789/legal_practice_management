import React from 'react';
import { DocumentTemplate } from '../../types';
import DocumentTemplateCard from './DocumentTemplateCard';

interface TemplateGridProps {
  templates: DocumentTemplate[];
  searchQuery: string;
  onTemplateSelect: (template: DocumentTemplate) => void;
}

const TemplateGrid = ({ templates, searchQuery, onTemplateSelect }: TemplateGridProps) => {
  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayTemplates = searchQuery
    ? filteredTemplates.slice(0, 18)
    : filteredTemplates.slice(0, 6);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
      {displayTemplates.map((template) => (
        <DocumentTemplateCard
          key={template.id}
          template={template}
          onClick={onTemplateSelect}
        />
      ))}
    </div>
  );
};

export default TemplateGrid;