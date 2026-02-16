import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'CyberSoil',
    capacity: 'Smart Home Composting',
    description: 'Intelligent composting for modern homes. Smart sensors and app connectivity for effortless waste management and nutrient-rich compost.',
    link: '/owc',
    image: '/cybersoil.webp',
  },
  {
    name: 'Fahaka Industrial',
    capacity: 'High-Capacity Processing',
    description: 'With IPX5 protection that is designed for the most demanding environments. Clean energy for communities, real zero waste, and proven durability.',
    link: '/fahaka',
    image: '/fahaka.webp',
  },
];

export const ProductCardsSection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5]" style={{ padding: '0 0 clamp(60px, 10vw, 120px)' }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 'clamp(20px, 4vw, 40px)' }}>
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#e9e9e9] flex flex-col overflow-hidden"
              style={{ borderRadius: 'clamp(12px, 2vw, 20px)' }}
            >
              {/* Card Image */}
              <div 
                className="w-full relative overflow-hidden"
                style={{ height: 'clamp(180px, 30vw, 280px)' }}
              >
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
              <div style={{ padding: 'clamp(20px, 3vw, 32px) clamp(20px, 4vw, 40px) clamp(24px, 4vw, 40px)' }}>
                <h3 className="font-bold text-black" style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>
                  {product.name}
                </h3>
                <p className="text-[#999] mt-1" style={{ fontSize: 'clamp(10px, 1.2vw, 12px)' }}>
                  {product.capacity}
                </p>
                <p 
                  className="text-[#777] mt-3 sm:mt-4"
                  style={{ fontSize: 'clamp(11px, 1.3vw, 13px)', lineHeight: 1.7 }}
                >
                  {product.description}
                </p>
                <div className="mt-4 sm:mt-6">
                  <Link
                    to={product.link}
                    className="inline-flex items-center gap-2 bg-black text-white font-medium hover:bg-gray-800 active:bg-gray-900 transition-colors"
                    style={{ 
                      padding: 'clamp(8px, 1.2vw, 10px) clamp(16px, 2vw, 20px)', 
                      borderRadius: '999px',
                      fontSize: 'clamp(10px, 1.2vw, 12px)'
                    }}
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
