'use client'
import React, { useState, useEffect } from 'react';
import { useFormContext } from './FormContext';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { Confirmation } from './Confirmation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';
import { ToastContainer, toast } from 'react-toastify';
import { val } from '../validate';
export const FormSteps: React.FC = () => {
  const { step, setStep, isLastStep, data } = useFormContext();
  const [isValid, setIsValid] = useState<boolean | null>(null); 

  useEffect(() => {
    const validate = async () => {
      const valid = await validateStep();
      setIsValid(valid);
    };

    validate();
  }, [step]); 

  
   
   const validateStep = async (): Promise<boolean> => {
     switch (step) {
       case 1:
         if (data.name && data.usn && data.branch && data.year) {
             const usnPattern = /^\d[a-zA-Z]{2}\d{2}[a-zA-Z]{2}\d{3}$/;
             if (!usnPattern.test(data.usn)&&data.year!==1) {
                 toast.error('Invalid USN format. Correct format: 1BIYYBB00N');
                 return false;
             }
              const usnValid = await val(data.email, data.usn);
              if (!usnValid) {
                toast.error('Account for this USN is already used!');
              }
              return usnValid;

             
         } else {
           toast.error('Please fill in all fields: Name, USN, Branch, and Year.');
           return false;
         }
       case 2:
         if (data.tags.length === 0 && data.about.length === 0) {
           toast.error('Please provide at least one tag or a description about yourself.');
           return false;
         }
         return true;
       case 3:
        
 
        //  if (!data.linkedin && !data.github && !data.instagram) {
        //    toast.error('Please provide at least one social link (LinkedIn, GitHub, Instagram).');
        //    return false;
        //  }
 
        
         const isLinkedInValid = (url: string | undefined): boolean => {
           if (!url) return true;
           const linkedinPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
           return linkedinPattern.test(url);
         };
 
         const isGitHubValid = (url: string | undefined): boolean => {
           if (!url) return true;
           const githubPattern = /^https:\/\/github\.com\/[a-zA-Z0-9-]+\/?$/;
           return githubPattern.test(url);
         };
 
         const isInstagramValid = (url: string | undefined): boolean => {
           if (!url) return true;
           const instagramPattern = /^https:\/\/www\.instagram\.com\/[a-zA-Z0-9._-]+\/?$/;
           return instagramPattern.test(url);
         };
 
         if (data.linkedin && !isLinkedInValid(data.linkedin)) {
           toast.error('Invalid LinkedIn URL format. Please ensure it starts with "https://www.linkedin.com/in/".');
           return false;
         }
 
         if (data.github && !isGitHubValid(data.github)) {
           toast.error('Invalid GitHub URL format. Please ensure it starts with "https://github.com/".');
           return false;
         }
 
         if (data.instagram && !isInstagramValid(data.instagram)) {
           toast.error('Invalid Instagram URL format. Please ensure it starts with "https://www.instagram.com/".');
           return false;
         }
 
         return true;
       default:
         return true;
     }
   };

  
  const handleNext = async () => {
    if (await validateStep()) {
      setStep((s) => s + 1);
    }
  };

  
  const handleBack = () => {
    setStep((s) => s - 1);
  };

  if (step === 4) {
    return <Confirmation />;
  }

  return (
    <div className="space-y-8 text-black">
        <ToastContainer/>
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
          disabled={isValid === null || !isValid} 
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-md
            ${isValid === null || !isValid
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
        >
          {isLastStep ? 'Submit' : 'Next'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};
