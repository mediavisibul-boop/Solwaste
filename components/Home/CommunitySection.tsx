import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CommunitySection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5]" style={{ padding: '0 0 clamp(60px, 10vw, 120px)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden"
          style={{ borderRadius: 'clamp(12px, 2.5vw, 24px)' }}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img 
              src="/about.webp" 
              alt="Community Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>
            

          {/* Content */}
          <div 
            className="relative z-10 text-center text-white flex flex-col items-center justify-center"
            style={{ padding: 'clamp(40px, 8vw, 120px) clamp(20px, 4vw, 40px)' }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold text-white"
              style={{ fontSize: 'clamp(18px, 3vw, 28px)', lineHeight: 1.3 }}
            >
              Be Part of the Sustainable Movement
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 sm:mt-4 text-white/70 max-w-lg mx-auto px-2"
              style={{ fontSize: 'clamp(12px, 1.5vw, 14px)', lineHeight: 1.8 }}
            >
              Join a community that is redefining waste management. As a member of the Solwaste family, 
              you get access to exclusive events, insights, and a network of like-minded individuals who 
              share a passion for innovation and sustainability.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8"
            >
              <Link
                to="/partner"
                className="inline-flex items-center gap-2 bg-white text-black font-medium hover:bg-gray-100 active:bg-gray-200 transition-colors"
                style={{ 
                  padding: 'clamp(10px, 1.5vw, 14px) clamp(20px, 3vw, 28px)', 
                  borderRadius: '999px',
                  fontSize: 'clamp(11px, 1.3vw, 13px)'
                }}
              >
                Join Our Community
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
