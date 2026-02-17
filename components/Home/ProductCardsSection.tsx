import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'EcoLoop',
    capacity: 'Societies & Hotels',
    description: 'A zero-maintenance workhorse designed for residential societies, hotels, and resorts. EcoLoop ensures waste management never impacts aesthetics or air quality. On-site composting, zero odor, and German-engineered reliability.',
    link: '/owc',
    image: '/ecoloop4.png',
  },
  {
    name: 'Fahaka Industrial',
    capacity: 'Universal Decomposer',
    description: "Traditional composters fail at contamination. Fahaka thrives on it. The world's first unified processor for Food, Plastics, Sanitary, and Biochemical Waste.",
    link: '/fahaka',
    image: '/fahaka.png',
  },
];

export const ProductCardsSection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5] pb-14 xs:pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 xs:gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#e9e9e9] flex flex-col overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[20px]"
            >
              {/* Card Image */}
              <div className="w-full relative overflow-hidden h-[160px] xs:h-[180px] sm:h-[200px] md:h-[230px] lg:h-[260px] xl:h-[280px]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                {/* Logo watermark */}
                <div className="absolute top-5 left-5">
                  <img src="/logo.png" alt="" className="w-6 h-6 object-contain opacity-40" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 xs:p-6 sm:p-7 md:p-8 pb-6 xs:pb-7 sm:pb-8 md:pb-10">
                <h3 className="font-bold text-black text-sm xs:text-base sm:text-lg md:text-xl">
                  {product.name}
                </h3>
                <p className="text-[#999] mt-1 text-[10px] xs:text-[11px] sm:text-xs">
                  {product.capacity}
                </p>
                <p className="text-[#777] mt-2.5 sm:mt-3 md:mt-4 text-[11px] xs:text-xs sm:text-[13px] md:text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 sm:mt-5 md:mt-6">
                  <Link
                    to={product.link}
                    className="inline-flex items-center gap-2 bg-black text-white font-medium hover:bg-gray-800 active:bg-gray-900 transition-colors rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] xs:text-[11px] sm:text-xs"
                  >
                    Learn More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
