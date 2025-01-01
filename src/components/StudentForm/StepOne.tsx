'use client'
import React from 'react';
import { useFormContext } from './FormContext';
import { Input } from '../ui/Input';
import { branches } from '../../data/branches';

export const StepOne: React.FC = () => {
  const { data, setData } = useFormContext();


  return (
    <div className="space-y-4">
      <Input
        label="Full Name"
        value={data.name}
        onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))}
        required
        placeholder="John Doe"
      />
      
      <Input
        label="USN"
        value={data.usn}
        onChange={(e) => setData(prev => ({ ...prev, usn: e.target.value }))}
        required
        placeholder="1XX21XX000"
        pattern="^[1-9][A-Za-z0-9]{9}$"
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Branch</label>
        <select
          value={data.branch}
          onChange={(e) => setData(prev => ({ ...prev, branch: e.target.value as typeof data.branch }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                   focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3"
          required
        >
          <option value="">Select Branch</option>
          {branches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Year</label>
        <select
          value={data.year}
          onChange={(e) => setData(prev => ({ ...prev, year: parseInt(e.target.value??0) }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                   focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3"
          required
        >
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
      </div>

    
    </div>
  );
};