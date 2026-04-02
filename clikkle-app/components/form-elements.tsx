"use client";

import { forwardRef } from "react";

// --- TextInput ---
type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;
    const errorId = `${inputId}-error`;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-sm font-semibold text-[var(--text-primary)]">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none transition-all focus:border-[var(--color-primary)] focus:bg-[var(--bg-primary)] focus:ring-1 focus:ring-[var(--color-primary)] ${
            error ? "border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]" : ""
          } ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        {error && (
          <span id={errorId} className="text-sm text-[var(--color-danger)] mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);
TextInput.displayName = "TextInput";

// --- Textarea ---
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const textareaId = id || `textarea-${label.replace(/\s+/g, '-').toLowerCase()}`;
    const errorId = `${textareaId}-error`;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={textareaId} className="text-sm font-semibold text-[var(--text-primary)]">
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          className={`w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none transition-all focus:border-[var(--color-primary)] focus:bg-[var(--bg-primary)] focus:ring-1 focus:ring-[var(--color-primary)] resize-y min-h-[100px] ${
            error ? "border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]" : ""
          } ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        {error && (
          <span id={errorId} className="text-sm text-[var(--color-danger)] mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

// --- Select ---
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: { label: string; value: string }[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = "", id, ...props }, ref) => {
    const selectId = id || `select-${label.replace(/\s+/g, '-').toLowerCase()}`;
    const errorId = `${selectId}-error`;

    return (
      <div className="flex flex-col gap-1.5 w-full relative">
        <label htmlFor={selectId} className="text-sm font-semibold text-[var(--text-primary)]">
          {label}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={`w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] appearance-none outline-none transition-all focus:border-[var(--color-primary)] focus:bg-[var(--bg-primary)] focus:ring-1 focus:ring-[var(--color-primary)] ${
            error ? "border-[var(--color-danger)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]" : ""
          } ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        
        {/* Custom Dropdown Arrow */}
        <div className="absolute right-4 top-[38px] pointer-events-none text-[var(--text-secondary)]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {error && (
          <span id={errorId} className="text-sm text-[var(--color-danger)] mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

// --- Checkbox ---
type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string | React.ReactNode;
  error?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${typeof label === 'string' ? label.replace(/\s+/g, '-').toLowerCase() : Math.random()}`;

    return (
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-start gap-3">
          <div className="relative flex items-center justify-center mt-0.5 shrink-0">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              className={`peer w-5 h-5 appearance-none rounded border border-[var(--border-color)] bg-[var(--bg-secondary)] checked:bg-[var(--color-primary)] checked:border-[var(--color-primary)] outline-none transition-all focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] ${className}`}
              {...props}
            />
            <svg
              className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <label htmlFor={checkboxId} className="text-sm text-[var(--text-secondary)] leading-tight cursor-pointer select-none">
            {label}
          </label>
        </div>
        {error ? (
          <span className="text-sm text-[var(--color-danger)] mt-1 ml-8">
            {error}
          </span>
        ) : null}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
