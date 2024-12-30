import React from 'react';
import { DollarSign, Leaf } from 'lucide-react';

interface EditFormLayoutProps {
  children: React.ReactNode;
}

export const EditFormLayout: React.FC<EditFormLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 text-emerald-200 animate-float-slow">
          <Leaf className="w-16 h-16 transform -rotate-45" />
        </div>
        <div className="absolute top-20 right-20 text-emerald-200 animate-float">
          <DollarSign className="w-12 h-12" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-emerald-200 animate-float-delayed">
          <Leaf className="w-10 h-10 transform rotate-45" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-emerald-200 animate-float-slow">
          <DollarSign className="w-8 h-8" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center">
                <DollarSign className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Student Profile</h2>
          <p className="text-sm text-gray-600">
            Edit your profile
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden p-8 relative">
          {children}
        </div>
      </div>
    </div>
  );
};