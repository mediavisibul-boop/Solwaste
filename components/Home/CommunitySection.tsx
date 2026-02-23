import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CommunitySection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5] pb-14 xs:pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl"
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
            className="relative z-10 text-center text-white flex flex-col items-center justify-center py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-5 sm:px-8 md:px-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold text-white text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-3xl leading-tight"
            >
              Start with a Free Waste Assessment
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 sm:mt-4 text-white/70 max-w-lg mx-auto px-2 text-xs sm:text-[13px] md:text-sm leading-relaxed"
            >
              Discover how much waste your facility generates and uncover opportunities to reduce costs, improve efficiency, and move toward sustainable operations at no cost to you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8"
            >
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSdJoK4BsvHgAj48wjr94IZNKtQHWlpo7pK905muYs-vrBksJQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-medium hover:bg-gray-100 active:bg-gray-200 transition-colors rounded-full px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-[11px] xs:text-xs sm:text-[13px] md:text-sm"
              >
                Get Free Assessment
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
