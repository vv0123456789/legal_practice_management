import React, { useState } from 'react';
import { 
  Bold, Italic, Strikethrough, List, ListOrdered,
  AlignLeft, AlignCenter, AlignRight, Undo, Redo,
  Edit
} from 'lucide-react';

interface DocumentToolbarProps {
  onFreeEditToggle: (enabled: boolean) => void;
}

const DocumentToolbar = ({ onFreeEditToggle }: DocumentToolbarProps) => {
  const [freeEditEnabled, setFreeEditEnabled] = useState(false);

  const ToolbarButton = ({ 
    onClick, 
    children,
    title,
    isActive = false
  }: { 
    onClick: () => void;
    children: React.ReactNode;
    title: string;
    isActive?: boolean;
  }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-2 rounded hover:bg-gray-100 ${
        isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
      }`}
    >
      {children}
    </button>
  );

  const handleFormat = (command: string) => {
    document.execCommand(command, false);
  };

  const toggleFreeEdit = () => {
    const newState = !freeEditEnabled;
    setFreeEditEnabled(newState);
    onFreeEditToggle(newState);
  };

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-200">
      <ToolbarButton
        onClick={toggleFreeEdit}
        title="Free Edit Mode"
        isActive={freeEditEnabled}
      >
        <Edit className="w-5 h-5" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <ToolbarButton
        onClick={() => handleFormat('bold')}
        title="Bold"
      >
        <Bold className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => handleFormat('italic')}
        title="Italic"
      >
        <Italic className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => handleFormat('strikethrough')}
        title="Strikethrough"
      >
        <Strikethrough className="w-5 h-5" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <ToolbarButton
        onClick={() => handleFormat('insertUnorderedList')}
        title="Bullet List"
      >
        <List className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => handleFormat('insertOrderedList')}
        title="Numbered List"
      >
        <ListOrdered className="w-5 h-5" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <ToolbarButton
        onClick={() => handleFormat('justifyLeft')}
        title="Align Left"
      >
        <AlignLeft className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => handleFormat('justifyCenter')}
        title="Align Center"
      >
        <AlignCenter className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => handleFormat('justifyRight')}
        title="Align Right"
      >
        <AlignRight className="w-5 h-5" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <ToolbarButton
        onClick={() => handleFormat('undo')}
        title="Undo"
      >
        <Undo className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => handleFormat('redo')}
        title="Redo"
      >
        <Redo className="w-5 h-5" />
      </ToolbarButton>
    </div>
  );
};

export default DocumentToolbar;