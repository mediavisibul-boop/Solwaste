import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const MinimalHero: React.FC = () => {
  return (
    <div className="relative" style={{ margin: 0, padding: 0 }}>
      {/* Hero Content */}
      <div className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 80px)', padding: 0, margin: 0 }}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1678924587605-95551474f015?q=80&w=2942&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center text-center" style={{ paddingTop: '40px' }}>
          

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-extrabold tracking-tight text-white"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05 }}
          >
            Solwaste Power
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-white/80 max-w-md mx-auto"
            style={{ fontSize: '14px', lineHeight: 1.7 }}
          >
            The ultimate composting experience,<br />
            better than traditional methods.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-0"
          >
            <Link
              to="/owc"
              className="inline-flex items-center gap-2 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300"
              style={{ 
                padding: '14px 28px', 
                borderRadius: '999px',
                fontSize: '13px',
                letterSpacing: '0.02em'
              }}
            >
              Get Yours Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Hero Machine Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 w-full max-w-[1100px] mx-auto px-5"
          >
            <img 
              src="/ecoloopwbg.png" 
              alt="EcoLoop Machine" 
              className="w-full object-contain transition-all duration-700 ease-in-out grayscale hover:grayscale-0"
              style={{ 
                maxHeight: 'clamp(300px, 45vw, 580px)', 
                borderRadius: '16px' 
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Circle Button - overlapping next section */}
      <div className="relative z-20 flex justify-center" style={{ marginTop: '-32px' }}>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => {
            const next = document.getElementById('feature-section');
            next?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};
