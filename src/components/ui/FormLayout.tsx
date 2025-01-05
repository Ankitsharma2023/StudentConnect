import React from "react";

import { MarqueeBG } from "../common/MarqueeBG";

interface FormLayoutProps {
  children: React.ReactNode;
}

export const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <MarqueeBG />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-5">
        <div className="mx-auto my-5 max-w-2xl text-center">
          <h1 className="bg-gradient-to-r from-black to-black/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Join BS NOW
          </h1>
        </div>
        {children}
      </main>
    </div>
  );
};
