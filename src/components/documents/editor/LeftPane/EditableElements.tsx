import React, { useState } from 'react';
import { Edit } from 'lucide-react';
import { findEditableElements } from '../../../../utils/editorUtils';

interface EditableElementsProps {
  content: string;
  onValueChange: (id: string, value: string) => void;
}

const EditableElements = ({ content, onValueChange }: EditableElementsProps) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const editableElements = findEditableElements(content);

  if (editableElements.length === 0) {
    return null;
  }

  const handleChange = (id: string, value: string) => {
    setValues(prev => ({ ...prev, [id]: value }));
    onValueChange(id, value);
  };

  return (
    <div className="p-4 border-t border-gray-200">
      <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
        <Edit className="h-4 w-4 mr-2" />
        Editable Elements
      </h3>
      <div className="space-y-4">
        {editableElements.map((element) => (
          <div key={element.id} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {element.label || `Field ${element.id}`}
            </label>
            <input
              type="text"
              value={values[element.id] || ''}
              onChange={(e) => handleChange(element.id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder={element.label || `Enter value`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditableElements;