import React, { useEffect } from 'react';
import { useFormContext } from './FormContext';
import { CheckCircle } from 'lucide-react';
import { redirect } from 'next/navigation';
import { update } from '../update';

export const Confirmation: React.FC = () => {
  const { data } = useFormContext();

  
  useEffect(() => {
    const timer = setTimeout(() => {
      redirect('/'); 
    }, 5000); 
    update(data);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">Profile Complete!</h2>
      <p className="text-gray-600">Thank you for submitting your details, {data.name}!</p>
      
      <div className="mt-8 p-6 bg-gray-50 rounded-lg text-left">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Profile Summary</h3>
        <dl className="space-y-2">
          <div>
            <dt className="text-sm font-medium text-gray-500">USN</dt>
            <dd className="text-gray-900">{data.usn}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Branch</dt>
            <dd className="text-gray-900">{data.branch}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Year</dt>
            <dd className="text-gray-900">{data.year}th Year</dd>
          </div>
          {data.tags.length > 0 && (
            <div>
              <dt className="text-sm font-medium text-gray-500">Tags</dt>
              <dd className="flex flex-wrap gap-2 mt-1">
                {data.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};
