import React from 'react';
import { motion } from 'framer-motion';

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white border-t border-gray-200">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image - Shows first on mobile, second on desktop */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
              <img 
                src="/about.webp" 
                alt="German Engineering Indian Innovation"
                className="h-64 sm:h-80 lg:h-96 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white border-2 border-gray-900 px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-gray-900 font-heading font-bold text-sm sm:text-base uppercase tracking-wide">
                500+ Installations
              </div>
            </motion.div>
          </motion.div>

          {/* Text - Shows second on mobile, first on desktop */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-16 bg-gray-900 rounded-full"></div>
              <span className="text-gray-900 font-semibold uppercase tracking-wide text-sm">Our Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              German Engineering. <span className="text-gray-700">Indian Innovation.</span>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>Solwaste was founded with a singular vision: to address the growing organic waste crisis in urban environments through reliable, scalable technology.</p>
              <p>Leveraging <strong className="font-semibold text-gray-900">German engineering</strong> principles, we developed a suite of Organic Waste Composters (OWC) that offer superior efficiency and durability.</p>
              <p>Today, with over <strong className="font-semibold text-gray-900">500 installations</strong> across commercial, institutional, and residential sectors, we are a trusted partner in India's journey towards the "Waste to Wealth" mission.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
