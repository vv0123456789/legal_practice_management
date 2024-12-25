import React from 'react';

interface PlaceholderFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const PlaceholderField = ({ placeholder, value, onChange }: PlaceholderFieldProps) => {
  const label = placeholder
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase()
    .replace(/^\w/, c => c.toUpperCase());

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
};

export default PlaceholderField;