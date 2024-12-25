import React, { useEffect, useRef } from 'react';
import { DocumentTemplate } from '../../../types/documents';
import { replacePlaceholders } from '../../../utils/templateUtils';
import { setupEditableFields, updateEditableContent } from '../../../utils/editorUtils';

interface DocumentContentProps {
  template: DocumentTemplate;
  documentName: string;
  clientName: string;
  freeEditMode: boolean;
  placeholderValues: Record<string, string>;
}

const DocumentContent = ({ 
  template, 
  documentName, 
  clientName, 
  freeEditMode,
  placeholderValues 
}: DocumentContentProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && template.content) {
      // Process the template content with client data and placeholder values
      const initialValues = {
        clientName,
        documentName,
        date: new Date().toLocaleDateString(),
        ...placeholderValues
      };
      
      const processedContent = replacePlaceholders(template.content, initialValues);
      
      // Set the HTML content
      contentRef.current.innerHTML = processedContent;
      
      // Setup editable fields behavior if not in free edit mode
      if (!freeEditMode) {
        setupEditableFields(contentRef.current);
      }
    }
  }, [template, clientName, documentName, placeholderValues, freeEditMode]);

  return (
    <div 
      ref={contentRef}
      className="flex-1 p-8 overflow-auto bg-white"
      contentEditable={freeEditMode}
    />
  );
};

export default DocumentContent;