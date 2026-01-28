import React from 'react';
import { ArrowRight } from '../Icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  withArrow = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md transition-colors duration-150 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';

  const size = 'px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base';

  const variants: Record<string, string> = {
    primary: 'bg-[var(--accent,#d4af37)] text-white border-transparent hover:bg-opacity-95 shadow-sm',
    outline: 'bg-transparent text-[var(--accent,#111827)] border border-gray-200 hover:bg-gray-50',
    white: 'bg-white text-[var(--text,#111827)] border border-gray-100 hover:bg-gray-50',
  };

  return (
    <button
      className={`${baseStyles} ${size} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="leading-none">{children}</span>
      {withArrow && (
        <ArrowRight className="ml-3 w-4 h-4" />
      )}
    </button>
  );
};