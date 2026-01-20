import React from 'react';
import { ArrowRight } from 'lucide-react';

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
  // Removed rounded corners, increased font weight, tracking
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 ease-in-out border-2 font-heading font-bold tracking-wider";
  
  const variants = {
    primary: "bg-brand-gold text-white border-brand-gold hover:bg-brand-olive hover:border-brand-olive",
    outline: "bg-transparent text-brand-gold border-brand-gold hover:bg-brand-gold hover:text-white",
    white: "bg-white text-brand-dark border-white hover:bg-brand-light border-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};