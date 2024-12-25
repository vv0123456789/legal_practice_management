import React from 'react';
import { Editor } from '@tiptap/react';
import { 
  Bold, Italic, Strikethrough, List, ListOrdered,
  AlignLeft, AlignCenter, AlignRight, Undo, Redo
} from 'lucide-react';

interface EditorToolbarProps {
  editor: Editor;
}

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const ToolbarButton = ({ 
    onClick, 
    isActive = false,
    children 
  }: { 
    onClick: () => void; 
    isActive?: boolean;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`p-2 rounded hover:bg-gray-100 ${
        isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-200">
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
      >
        <Bold className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
      >
        <Italic className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive('strike')}
      >
        <Strikethrough className="w-5 h-5" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive('bulletList')}
      >
        <List className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive('orderedList')}
      >
        <ListOrdered className="w-5 h-5" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        isActive={editor.isActive({ textAlign: 'left' })}
      >
        <AlignLeft className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        isActive={editor.isActive({ textAlign: 'center' })}
      >
        <AlignCenter className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        isActive={editor.isActive({ textAlign: 'right' })}
      >
        <AlignRight className="w-5 h-5" />
      </ToolbarButton>

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <ToolbarButton onClick={() => editor.chain().focus().undo().run()}>
        <Undo className="w-5 h-5" />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().redo().run()}>
        <Redo className="w-5 h-5" />
      </ToolbarButton>
    </div>
  );
};

export default EditorToolbar;