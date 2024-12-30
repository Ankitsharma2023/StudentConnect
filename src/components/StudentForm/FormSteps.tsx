'use client'
import React from 'react';
import { useFormContext } from './FormContext';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { Confirmation } from './Confirmation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';

export const FormSteps: React.FC = () => {
  const { step, setStep, isLastStep, data } = useFormContext();

  const validateStep = () => {
    switch (step) {
      case 1:
        return data.name && data.usn && data.branch && data.year;
      case 2:
        return data.tags.length > 0 || data.about;
      case 3:
        return data.linkedin || data.github || data.instagram;
      default:
        return true;
    }
  };

  const handleNext = () => {
    
      if (validateStep()) {
        setStep(s => s + 1);
      }
   

  };

  const handleBack = () => {
    
      setStep(s => s - 1);
  
  };

  if (step === 4) {
    return <Confirmation />;
  }

  return (
    <div className="space-y-8 text-black">
      <ProgressBar step={step} />

      <div className="transition-all duration-500 transform">
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={handleBack}
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-md
            ${step === 1 ? 'invisible' : 'text-gray-600 hover:text-gray-900'}`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!validateStep()}
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-md
            ${validateStep()
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          {isLastStep ? 'Submit' : 'Next'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};