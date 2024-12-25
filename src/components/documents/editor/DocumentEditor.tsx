import React, { useState, useRef } from 'react';
import { DocumentTemplate } from '../../../types/documents';
import DocumentContent from './DocumentContent';
import DocumentToolbar from './DocumentToolbar';
import LeftPane from './LeftPane';

interface DocumentEditorProps {
  template: DocumentTemplate;
  documentName: string;
  clientName: string;
}

const DocumentEditor = ({ template, documentName, clientName }: DocumentEditorProps) => {
  const [freeEditMode, setFreeEditMode] = useState(false);
  const [placeholderValues, setPlaceholderValues] = useState<Record<string, string>>({});
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePlaceholderUpdate = (values: Record<string, string>) => {
    setPlaceholderValues(values);
  };

  const handleEditableValueChange = (id: string, value: string) => {
    if (contentRef.current) {
      const element = contentRef.current.querySelector(`[data-editable-id="${id}"]`);
      if (element) {
        element.textContent = value;
      }
    }
  };

  return (
    <div className="flex h-full bg-white rounded-lg shadow-sm border border-gray-200">
      <LeftPane 
        content={template.content}
        onUpdatePlaceholders={handlePlaceholderUpdate}
        onEditableValueChange={handleEditableValueChange}
      />
      <div className="flex-1 flex flex-col">
        <DocumentToolbar onFreeEditToggle={setFreeEditMode} />
        <DocumentContent
          ref={contentRef}
          template={template}
          documentName={documentName}
          clientName={clientName}
          freeEditMode={freeEditMode}
          placeholderValues={placeholderValues}
        />
      </div>
    </div>
  );
};

export default DocumentEditor;