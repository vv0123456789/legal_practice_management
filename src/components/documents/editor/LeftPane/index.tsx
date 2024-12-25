import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import EditableElements from './EditableElements';
import PlaceholderEditor from '../PlaceholderEditor';

interface LeftPaneProps {
  content: string;
  onUpdatePlaceholders: (values: Record<string, string>) => void;
  onEditableValueChange: (id: string, value: string) => void;
}

const LeftPane = ({ 
  content, 
  onUpdatePlaceholders,
  onEditableValueChange 
}: LeftPaneProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div 
      className={`bg-white border-r border-gray-200 transition-all duration-300 ${
        isCollapsed ? 'w-12' : 'w-80'
      }`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-4 p-1 bg-white border border-gray-200 rounded-full shadow-sm z-10"
      >
        <ChevronLeft className={`h-4 w-4 transition-transform ${
          isCollapsed ? 'rotate-180' : ''
        }`} />
      </button>

      {!isCollapsed && (
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-auto">
            <PlaceholderEditor 
              content={content}
              onUpdate={onUpdatePlaceholders}
            />
            <EditableElements 
              content={content} 
              onValueChange={onEditableValueChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftPane;