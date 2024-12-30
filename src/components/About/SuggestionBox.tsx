import React, { useState } from 'react';

export function SuggestionBox() {
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle suggestion submission here
    console.log('Suggestion submitted:', suggestion);
    setSuggestion('');
  };

  return (
    <div className="bg-gray-50 p-8 border-t border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leave a Suggestion</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 
                   focus:ring-2 focus:ring-gray-400 focus:border-transparent
                   transition-all duration-300 resize-none h-32"
          placeholder="Share your thoughts or suggestions..."
        ></textarea>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-lg
                   hover:bg-gray-700 transition-colors duration-300
                   focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          Submit Suggestion
        </button>
      </form>
    </div>
  );
}