'use client'
import React, { createContext, useContext, useState } from 'react';
import type { Branch } from '../../data/branches';

interface StudentData {
  name: string;
  email:string;
  usn: string;
  photo: string|null;
  branch: Branch | '';
  year: number;
  tags: string[];
  about: string;
  linkedin: string;
  github: string;
  instagram: string;
}

interface FormContextType {
  data: StudentData;
  setData: React.Dispatch<React.SetStateAction<StudentData>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isLastStep: boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode,email:string,photo:string|null }> = ({ children,email,photo }) => {
  const [data, setData] = useState<StudentData>({
    name: '',
    email:email,
    photo:photo,
    usn: '',
    branch: '',
    year: 0,
    tags: [],
    about: '',
    linkedin: '',
    github: '',
    instagram: '',
  });
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