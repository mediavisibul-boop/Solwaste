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
    focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2
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
      bg-brand-primary text-black border border-brand-primary
      hover:bg-brand-primary-dark hover:border-brand-primary-dark
      shadow-md hover:shadow-lg
    `.trim().replace(/\s+/g, ' '),
    
    secondary: `
      bg-brand-charcoal text-white border border-brand-charcoal
      hover:bg-brand-dark-muted hover:border-brand-dark-muted
      shadow-md hover:shadow-lg
    `.trim().replace(/\s+/g, ' '),
    
    outline: `
      bg-transparent text-brand-charcoal border-2 border-brand-charcoal
      hover:bg-brand-charcoal hover:text-white
      dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black
    `.trim().replace(/\s+/g, ' '),
    
    white: `
      bg-white text-brand-charcoal border border-gray-200
      hover:bg-gray-50 hover:border-gray-300
      shadow-sm hover:shadow-md
    `.trim().replace(/\s+/g, ' '),
    
    ghost: `
      bg-transparent text-brand-charcoal border border-transparent
      hover:bg-black/5 hover:border-black/10
      dark:text-white dark:hover:bg-white/10 dark:hover:border-white/20
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