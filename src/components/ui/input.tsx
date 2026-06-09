import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, icon, id, ...props }, ref) => {
    const input = (
      <input
        type={type}
        id={id}
        className={cn(
          "flex h-10 w-full rounded-base border-2 text-text font-base selection:bg-main selection:text-mtext border-border bg-bw px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          icon && "pl-10",
          className
        )}
        ref={ref}
        {...props}
      />
    );

    const field = icon ? (
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
          {icon}
        </span>
        {input}
      </div>
    ) : (
      input
    );

    if (!label) return field;

    return (
      <div className="space-y-2">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        {field}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
