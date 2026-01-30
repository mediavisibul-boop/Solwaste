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
  asChild?: boolean; // New prop to indicate if it's wrapped in Link
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
    primary: 'bg-gradient-to-br from-brand-gold via-brand-gold-dark to-brand-gold text-white shadow-2xl hover:shadow-brand-gold/50',
    secondary: 'bg-gradient-to-br from-brand-olive via-brand-olive-dark to-brand-olive text-white shadow-2xl hover:shadow-brand-olive/50',
    glass: 'bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white shadow-xl hover:bg-white/20 hover:border-white/40',
    outline: 'bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white'
  };

  const glowStyles = glow ? 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000' : '';

  const buttonContent = (
    <>
      {/* Animated background layer */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {Icon && iconPosition === 'left' && (
          <motion.span 
            whileHover={{ x: -4 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : size === 'lg' ? 20 : 24} />
          </motion.span>
        )}
        {children}
        {Icon && iconPosition === 'right' && (
          <motion.span 
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : size === 'lg' ? 20 : 24} />
          </motion.span>
        )}
      </span>
      
      {/* Ripple effect - only visible on tap */}
      <motion.div 
        className="absolute inset-0 bg-white/20 pointer-events-none"
        style={{ borderRadius: 'inherit' }}
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${glowStyles} ${className}`;

  // If used as child of Link component, render as div
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
