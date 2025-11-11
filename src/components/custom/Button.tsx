import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

export function Button({
  className = "",
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  // Check if className contains custom background or text colors
  const hasCustomBg = className.includes('bg-');
  const hasCustomText = className.includes('text-');
  
  const variantStyles = {
    default: `${!hasCustomBg ? 'bg-[#6366F1]' : ''} ${!hasCustomText ? 'text-white' : ''} ${!hasCustomBg ? 'hover:bg-[#5558E3]' : ''}`,
    outline: `border border-gray-300 ${!hasCustomBg ? 'bg-white' : ''} ${!hasCustomText ? 'text-gray-900' : ''} ${!hasCustomBg ? 'hover:bg-gray-50' : ''}`,
    ghost: `${!hasCustomBg ? 'hover:bg-gray-100' : ''} ${!hasCustomText ? 'text-gray-900' : ''}`,
    link: `${!hasCustomText ? 'text-[#6366F1]' : ''} underline-offset-4 hover:underline`,
  };
  
  const sizeStyles = {
    default: "h-10 px-6 py-2",
    sm: "h-9 px-4 py-2 text-sm",
    lg: "h-12 px-8 py-3 text-lg",
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.replace(/\s+/g, ' ').trim();
  
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
