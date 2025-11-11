import * as React from "react";
import { AlertCircle } from "lucide-react";

export interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "checkbox";
  value: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  rows?: number;
  description?: string;
  disabled?: boolean;
  theme?: "light" | "dark";
}

export function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  placeholder,
  options,
  rows = 4,
  description,
  disabled = false,
  theme = "light",
}: FormFieldProps) {
  const fieldId = `field-${name}`;
  const errorId = `error-${name}`;
  const descriptionId = description ? `desc-${name}` : undefined;
  
  const hasError = !!error;
  
  const isDark = theme === "dark";
  
  const baseInputClasses = isDark
    ? `w-full px-4 py-3 rounded-lg border transition-all outline-none
      ${hasError 
        ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent bg-red-900/20 text-white placeholder:text-red-300' 
        : 'border-white/20 focus:ring-2 focus:ring-white/50 focus:border-transparent bg-white/10 text-white placeholder:text-gray-400'
      }
      ${disabled ? 'opacity-50 cursor-not-allowed bg-white/5' : ''}
    `
    : `w-full px-4 py-3 rounded-lg border transition-all outline-none
      ${hasError 
        ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-50' 
        : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
      }
      ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''}
    `;

  const labelClasses = isDark ? "text-sm text-white cursor-pointer" : "text-sm text-gray-700 cursor-pointer";
  const blockLabelClasses = isDark ? "block text-sm text-white mb-2" : "block text-sm text-gray-700 mb-2";
  const descriptionClasses = isDark ? "text-xs text-gray-300 mt-1" : "text-xs text-gray-500 mt-1";
  const errorClasses = isDark ? "flex items-center gap-1 mt-1 text-sm text-red-300" : "flex items-center gap-1 mt-1 text-sm text-red-600";
  const checkboxClasses = isDark 
    ? "mt-1 w-4 h-4 rounded border-white/20 bg-white/10 text-blue-600 focus:ring-2 focus:ring-white/50 focus:ring-offset-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    : "mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  if (type === "checkbox") {
    return (
      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id={fieldId}
          name={name}
          checked={value as boolean}
          onChange={onChange}
          disabled={disabled}
          className={checkboxClasses}
          aria-describedby={descriptionId}
          aria-invalid={hasError}
          aria-errormessage={hasError ? errorId : undefined}
        />
        <div className="flex-1">
          <label htmlFor={fieldId} className={labelClasses}>
            {label}
            {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
          </label>
          {description && (
            <p id={descriptionId} className={descriptionClasses}>{description}</p>
          )}
          {hasError && (
            <div id={errorId} className={errorClasses} role="alert">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={fieldId} className={blockLabelClasses}>
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>
      
      {description && (
        <p id={descriptionId} className={isDark ? "text-xs text-gray-300 mb-2" : "text-xs text-gray-500 mb-2"}>{description}</p>
      )}

      {type === "textarea" ? (
        <textarea
          id={fieldId}
          name={name}
          value={value as string}
          onChange={onChange}
          rows={rows}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          className={`${baseInputClasses} resize-none`}
          aria-describedby={descriptionId}
          aria-invalid={hasError}
          aria-errormessage={hasError ? errorId : undefined}
          aria-required={required}
        />
      ) : type === "select" ? (
        <select
          id={fieldId}
          name={name}
          value={value as string}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={baseInputClasses}
          aria-describedby={descriptionId}
          aria-invalid={hasError}
          aria-errormessage={hasError ? errorId : undefined}
          aria-required={required}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={fieldId}
          name={name}
          value={value as string}
          onChange={onChange}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          className={baseInputClasses}
          aria-describedby={descriptionId}
          aria-invalid={hasError}
          aria-errormessage={hasError ? errorId : undefined}
          aria-required={required}
        />
      )}

      {hasError && (
        <div id={errorId} className={`flex items-center gap-1 mt-2 text-sm ${isDark ? 'text-red-300' : 'text-red-600'}`} role="alert">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
