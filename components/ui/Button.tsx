import React from 'react';
import { ArrowRight } from '../Icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center 
    rounded-lg font-heading font-semibold
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
    active:transform active:scale-[0.98]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `.trim().replace(/\s+/g, ' ');

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-sm tracking-wide',
    md: 'px-5 py-2.5 text-sm sm:text-base tracking-wide',
    lg: 'px-6 py-3 text-base sm:text-lg tracking-wide',
    xl: 'px-8 py-4 text-lg sm:text-xl tracking-wide',
  };

  const variants: Record<string, string> = {
    primary: `
      bg-gray-900 text-white border border-gray-700
      hover:bg-gray-800 hover:border-gray-600
      shadow-md hover:shadow-lg
    `.trim().replace(/\s+/g, ' '),
    
    secondary: `
      bg-gray-700 text-white border border-gray-600
      hover:bg-gray-600 hover:border-gray-500
      shadow-md hover:shadow-lg
    `.trim().replace(/\s+/g, ' '),
    
    outline: `
      bg-transparent text-gray-900 border-2 border-gray-900
      hover:bg-gray-900 hover:text-white
    `.trim().replace(/\s+/g, ' '),
    
    white: `
      bg-white text-black border border-gray-200
      hover:bg-gray-50 hover:border-gray-300
      shadow-sm hover:shadow-md
    `.trim().replace(/\s+/g, ' '),
    
    ghost: `
      bg-transparent text-black border border-transparent
      hover:bg-black/5 hover:border-black/10
    `.trim().replace(/\s+/g, ' '),
  };

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="leading-none">{children}</span>
      {withArrow && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </button>
  );
};