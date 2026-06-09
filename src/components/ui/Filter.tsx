'use client';
import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { branches, years } from '@/data/branches';

type FilterType = 'usn' | 'name' | 'branch' | 'year' | 'tags';

interface FilterValues {
  usn: string;
  name: string;
  branch: string;
  year: string;
  tags: string;
}

const StudentFilter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);
  const [inputValues, setInputValues] = useState<FilterValues>({
    usn: '',
    name: '',
    branch: '',
    year: '',
    tags: ''
  });
  const [selectedValues, setSelectedValues] = useState<FilterValues>({
    usn: '',
    name: '',
    branch: '',
    year: '',
    tags: ''
  });
  const filterRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter(); 

 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setActiveFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  
  const handleInputChange = (filter: keyof FilterValues, value: string) => {
    setInputValues(prev => ({
      ...prev,
      [filter]: value
    }));
  };

  const handleInputKeyPress = (e: KeyboardEvent<HTMLInputElement>, filter: keyof FilterValues) => {
    if (e.key === 'Enter' && inputValues[filter].trim()) {
      setSelectedValues(prev => ({
        ...prev,
        [filter]: inputValues[filter].trim()
      }));
      setInputValues(prev => ({
        ...prev,
        [filter]: ''
      }));
      setActiveFilter(null);
    }
  };

  const handleOptionSelect = (filter: keyof FilterValues, value: string) => {
    setSelectedValues(prev => ({
      ...prev,
      [filter]: value
    }));
    setActiveFilter(null);
  };

  const clearFilter = (filter: keyof FilterValues) => {
    setSelectedValues(prev => ({
      ...prev,
      [filter]: ''
    }));
    setInputValues(prev => ({
      ...prev,
      [filter]: ''
    }));
    setActiveFilter(null);
    router.push("/")
  };

  const renderFilterInput = () => {
    switch (activeFilter) {
      case 'branch':
        return (
          <div className="absolute mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-10">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-violet-50 cursor-pointer text-gray-700 hover:text-violet-700 transition-colors"
                onClick={() => handleOptionSelect('branch', branch)}
              >
                {branch}
              </div>
            ))}
          </div>
        );
      case 'year':
        return (
          <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
            {years.map((year, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-violet-50 cursor-pointer text-gray-700 hover:text-violet-700 transition-colors"
                onClick={() => handleOptionSelect('year', year)}
              >
                {year}
              </div>
            ))}
          </div>
        );
      case 'usn':
      case 'name':
      case 'tags':
        return (
          <div className="absolute mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-10">
            <div className="relative">
              <input
                type="text"
                placeholder={`Enter ${activeFilter} and press Enter...`}
                value={inputValues[activeFilter]}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(activeFilter, e.target.value)}
                onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => handleInputKeyPress(e, activeFilter)}
                className="w-full p-2 pr-8 rounded-md border border-gray-300 focus:outline-none focus:border-violet-500 text-gray-700"
                autoFocus
              />
              <Search className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  
  const handleFilterApply = () => {
    let queryParams="";

    
    Object.entries(selectedValues).forEach(([key, value]) => {
      
      if (value) {
        if(queryParams!==""){
          queryParams+="&";
        }
        queryParams+= `${key}=${encodeURIComponent(value)}`;
      }
    });

    router.push(`?${queryParams}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter Students</h2>
        
        <div className="flex flex-wrap gap-4 mb-4" ref={filterRef}>
          {['usn', 'name', 'branch', 'year', 'tags'].map((filter) => (
            <div key={filter} className="relative">
              <button
                onClick={() => handleFilterClick(filter as FilterType)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                  activeFilter === filter
                    ? 'bg-violet-100 text-violet-700 shadow-sm'
                    : selectedValues[filter as keyof FilterValues]
                    ? 'bg-violet-100 text-violet-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="capitalize">{filter}</span>
                {selectedValues[filter as keyof FilterValues] && (
                  <X 
                    className="h-4 w-4 text-violet-500 hover:text-violet-700" 
                    onClick={(e) => {
                      e.stopPropagation();
                      clearFilter(filter as keyof FilterValues);
                    }}
                  />
                )}
              </button>
              {activeFilter === filter && renderFilterInput()}
            </div>
          ))}
        </div>

        {/* Active Filters Display */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(selectedValues).map(([filter, value]) =>
            value ? (
              <div
                key={filter}
                className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
              >
                <span className="capitalize">{filter}: {value}</span>
                <X
                  className="h-4 w-4 cursor-pointer hover:text-violet-900"
                  onClick={() => clearFilter(filter as keyof FilterValues)}
                />
              </div>
            ) : null
          )}
        </div>

        {/* Button to apply filters and update URL */}
        <div className="mt-4">
          <button
            onClick={handleFilterApply}
            className="px-4 py-2 bg-violet-600 text-white rounded-lg shadow-md hover:bg-violet-700 focus:outline-none"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentFilter;
