import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

interface FloatingCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      {/* Glass background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl" />
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)',
          backgroundSize: '200% 100%'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '200% 50%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Inner border glow */}
      <div className="absolute inset-[2px] bg-gradient-to-br from-brand-dark/90 via-brand-dark/95 to-brand-dark/90 rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-brand-gold/10 blur-3xl rounded-full" />
    </motion.div>
  );
};

interface AnimatedIconProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  size?: number;
  className?: string;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon: Icon, size = 32, className = '' }) => {
  return (
    <motion.div
      className={`inline-block ${className}`}
      whileHover={{ 
        scale: 1.2,
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={size} />
    </motion.div>
  );
};

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, speed = 0.5, className = '' }) => {
  const [offsetY, setOffsetY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={className}
      style={{ transform: `translateY(${offsetY * speed}px)` }}
    >
      {children}
    </div>
  );
};

interface PulseGlowProps {
  className?: string;
  color?: string;
}

export const PulseGlow: React.FC<PulseGlowProps> = ({ className = '', color = 'brand-gold' }) => {
  return (
    <motion.div
      className={`absolute inset-0 rounded-full ${className}`}
      style={{
        background: `radial-gradient(circle, var(--${color}), transparent 70%)`
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.3, 0, 0.3]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
};

export const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Main glass background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{
          background: [
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)'
          ],
          backgroundPosition: ['-200% 0', '200% 0']
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default { FloatingCard, AnimatedIcon, ParallaxSection, PulseGlow, GlassCard };
