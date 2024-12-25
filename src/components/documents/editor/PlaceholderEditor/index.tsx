import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import ProgressBar from './ProgressBar';
import PlaceholderField from './PlaceholderField';
import { extractPlaceholders } from '../../../../utils/templateUtils';

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
    }
    onUpdate(values);
  };

  const handleValueChange = (value: string) => {
    const placeholder = placeholders[currentIndex];
    const newValues = { ...values, [placeholder]: value };
    setValues(newValues);
    onUpdate(newValues);
  };

  if (placeholders.length === 0) {
    return null;
  }

  const progress = ((currentIndex + 1) / placeholders.length) * 100;
  const currentPlaceholder = placeholders[currentIndex];
  const isLastField = currentIndex === placeholders.length - 1;

  return (
    <div className="w-80 bg-white border-r border-gray-200 p-4 flex flex-col h-full">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Fill Document Details</h2>
      
      <ProgressBar 
        current={currentIndex + 1}
        total={placeholders.length}
        percentage={progress}
      />

      <div className="flex-1 mt-6">
        <PlaceholderField
          placeholder={currentPlaceholder}
          value={values[currentPlaceholder] || ''}
          onChange={handleValueChange}
        />
      </div>

      <button
        onClick={handleNext}
        className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {!isLastField ? (
          <>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </>
        ) : (
          'Complete'
        )}
      </button>

      <div className="mt-4">
        <details className="text-sm text-gray-500">
          <summary className="cursor-pointer hover:text-gray-700">View all fields</summary>
          <div className="mt-2 space-y-2">
            {placeholders.map((placeholder, index) => (
              <div 
                key={placeholder}
                className={`flex items-center justify-between ${
                  index === currentIndex ? 'text-blue-600 font-medium' : ''
                }`}
              >
                <span>{placeholder}</span>
                {values[placeholder] ? (
                  <span className="text-green-500">✓</span>
                ) : (
                  <span className="text-gray-400">Pending</span>
                )}
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
};

export default PlaceholderEditor;