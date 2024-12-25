import React from 'react';

const QuickActions = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button className="p-4 text-left border rounded-lg hover:bg-gray-50">
        <span className="block font-medium">New Case</span>
        <span className="text-sm text-gray-500">Create a new case file</span>
      </button>
      <button className="p-4 text-left border rounded-lg hover:bg-gray-50">
        <span className="block font-medium">Add Task</span>
        <span className="text-sm text-gray-500">Create new task</span>
      </button>
      <button className="p-4 text-left border rounded-lg hover:bg-gray-50">
        <span className="block font-medium">New Document</span>
        <span className="text-sm text-gray-500">Draft a document</span>
      </button>
      <button className="p-4 text-left border rounded-lg hover:bg-gray-50">
        <span className="block font-medium">Add Client</span>
        <span className="text-sm text-gray-500">Register new client</span>
      </button>
    </div>
  );
};

export default QuickActions;