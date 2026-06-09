import React, { useState, KeyboardEvent } from 'react';
import { useFormContext } from './FormContext';
import { Tag, X, Plus } from 'lucide-react';

export const StepTwo: React.FC = () => {
  const { data, setData } = useFormContext();
  const [tagInput, setTagInput] = useState('');

  const addTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim().toLowerCase().replaceAll("#","");
      if (!data.tags.includes(newTag)) {
        setData(prev => ({
          ...prev,
          tags: [...prev.tags, newTag]
        }));
      }
      setTagInput('');
    }
  };

  const removeTag = (indexToRemove: number) => {
    setData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleAddClick = () => {
    if (tagInput.trim()) {
      const newTag = tagInput.trim().toLowerCase().replaceAll("#","");
      if (!data.tags.includes(newTag)) {
        setData(prev => ({
          ...prev,
          tags: [...prev.tags, newTag]
        }));
      }
      setTagInput('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Add Tags About Yourself
        </label>
        <div className="flex flex-wrap gap-2 p-3 border rounded-md bg-white min-h-[100px]">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                       bg-indigo-100 text-indigo-800 animate-fadeIn"
            >
              <Tag className="w-4 h-4 mr-1" />
              {tag}
              <button
                onClick={() => removeTag(index)}
                className="ml-2 hover:text-indigo-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          ))}
          <div className="flex-1 flex items-center gap-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={addTag}
              placeholder="Type and press Enter to add tags"
              className="flex-1 outline-none bg-transparent"
            />
            <button
              onClick={handleAddClick}
              disabled={!tagInput.trim()}
              className="p-1 hover:text-indigo-600 disabled:opacity-50 
                       disabled:cursor-not-allowed transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Press Enter or click the plus icon to add a tag
        </p>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Tell us about yourself
        </label>
        <textarea
          value={data.about}
          onChange={(e) => setData(prev => ({ ...prev, about: e.target.value }))}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                   focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Share something about yourself..."
        />
      </div>
    </div>
  );
};