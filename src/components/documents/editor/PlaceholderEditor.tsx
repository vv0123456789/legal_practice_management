import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { extractPlaceholders } from '../../../utils/templateUtils';

interface PlaceholderEditorProps {
  content: string;
  onUpdate: (updates: Record<string, string>) => void;
}

const PlaceholderEditor = ({ content, onUpdate }: PlaceholderEditorProps) => {
  const [placeholders, setPlaceholders] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const extracted = extractPlaceholders(content);
    setPlaceholders(extracted);
  }, [content]);

  const handleNext = () => {
    if (currentIndex < placeholders.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onUpdate(values);
    }
  };

  const handleValueChange = (value: string) => {
    const placeholder = placeholders[currentIndex];
    const newValues = { ...values, [placeholder]: value };
    setValues(newValues);
  };

  if (placeholders.length === 0) {
    return null;
  }

  const currentPlaceholder = placeholders[currentIndex];
  const progress = ((currentIndex + 1) / placeholders.length) * 100;

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col h-full">
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Progress</span>
          <span>{currentIndex + 1} of {placeholders.length}</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {currentPlaceholder}
        </label>
        <input
          type="text"
          value={values[currentPlaceholder] || ''}
          onChange={(e) => handleValueChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={`Enter ${currentPlaceholder.toLowerCase()}`}
        />
      </div>

      <button
        onClick={handleNext}
        className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {currentIndex < placeholders.length - 1 ? (
          <>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </>
        ) : (
          'Complete'
        )}
      </button>
    </div>
  );
};

export default PlaceholderEditor;