'use client'
import React from 'react';
import { useFormContext } from './FormContext';
import { Input } from '../ui/Input';
import { Github, Linkedin, Instagram } from 'lucide-react';

export const StepThree: React.FC = () => {
  const { data, setData } = useFormContext();

  return (
    <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Optional</h2>

      <div className="space-y-4">
        <div className="relative">
          <Input
            label="LinkedIn Profile"
            value={data.linkedin??""}
            onChange={(e) => setData(prev => ({ ...prev, linkedin: e.target.value }))}
            placeholder="https://linkedin.com/in/username"
            icon={<Linkedin className="w-5 h-5 text-gray-400" />}
          />
        </div>

        <div className="relative">
          <Input
            label="GitHub Profile"
            value={data.github??""}
            onChange={(e) => setData(prev => ({ ...prev, github: e.target.value }))}
            placeholder="https://github.com/username"
            icon={<Github className="w-5 h-5 text-gray-400" />}
          />
        </div>

        <div className="relative">
          <Input
            label="Instagram Profile"
            value={data.instagram??""}
            onChange={(e) => setData(prev => ({ ...prev, instagram: e.target.value }))}
            placeholder="https://instagram.com/username"
            icon={<Instagram className="w-5 h-5 text-gray-400" />}
          />
        </div>
      </div>
    </div>
  );
};