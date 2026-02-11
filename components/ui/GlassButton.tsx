import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  className?: string;
  href?: string;
  glow?: boolean;
  asChild?: boolean;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  className = '',
  href,
  glow = false,
  asChild = false
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center gap-3 font-bold uppercase tracking-wider transition-all duration-500 group overflow-hidden cursor-pointer select-none';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs rounded-lg min-h-[40px] touch-manipulation',
    md: 'px-6 py-3 text-sm rounded-xl min-h-[48px] touch-manipulation',
    lg: 'px-8 py-4 text-base rounded-xl min-h-[56px] touch-manipulation',
    xl: 'px-10 py-5 text-lg rounded-2xl min-h-[64px] touch-manipulation'
  };

  const variantStyles = {
    primary: 'bg-gray-900 text-white shadow-2xl hover:shadow-lg hover:bg-gray-800 border border-gray-700 [&>span]:text-white hover:[&>span]:text-white',
    secondary: 'bg-gray-800 text-white shadow-2xl hover:shadow-lg hover:bg-gray-700 border border-gray-600 [&>span]:text-white hover:[&>span]:text-white',
    glass: 'bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white shadow-xl hover:bg-white/20 hover:border-white/40 [&>span]:text-white hover:[&>span]:text-white',
    outline: 'bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white [&>span]:text-gray-900 hover:[&>span]:text-white'
  };

  const glowStyles = glow ? 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000' : '';

  const buttonContent = (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <span className="relative z-10 flex items-center gap-2 text-inherit">
        {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : size === 'lg' ? 20 : 24} />}
        {children}
        {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : size === 'lg' ? 20 : 24} />}
      </span>
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${glowStyles} ${className}`;

  if (asChild) {
    return (
      <motion.div
        className={combinedClasses}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {buttonContent}
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClasses}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default GlassButton;
