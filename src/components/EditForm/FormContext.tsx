'use client'
import React, { createContext, useContext, useState } from 'react';

interface StudentData {
  name: string;
  email:string;
  usn: string;
  photoURL: string|null;
  branch: string;
  year: number;
  tags: string[];
  about: string;
  linkedin: string |null;
  github: string |null;
  instagram: string |null;
}

interface FormContextType {
  data: StudentData;
  setData: React.Dispatch<React.SetStateAction<StudentData>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isLastStep: boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode,Sdata:StudentData}> = ({ children,Sdata }) => {
  const [data, setData] = useState<StudentData>(Sdata);
  const [step, setStep] = useState(1);
  const isLastStep = step === 3;

  return (
    <FormContext.Provider value={{ data, setData, step, setStep, isLastStep }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};