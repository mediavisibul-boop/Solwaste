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
    <section className="bg-[#f5f5f5]" style={{ padding: '0 0 120px' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '40px' }}>
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#e9e9e9] flex flex-col overflow-hidden"
              style={{ borderRadius: '20px' }}
            >
              {/* Card Image */}
              <div 
                className="w-full relative overflow-hidden"
                style={{ height: '280px' }}
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
              <div style={{ padding: '32px 40px 40px' }}>
                <h3 className="font-bold text-black" style={{ fontSize: '20px' }}>
                  {product.name}
                </h3>
                <p className="text-[#999] mt-1" style={{ fontSize: '12px' }}>
                  {product.capacity}
                </p>
                <p 
                  className="text-[#777] mt-4"
                  style={{ fontSize: '13px', lineHeight: 1.7 }}
                >
                  {product.description}
                </p>
                <div className="mt-6">
                  <Link
                    to={product.link}
                    className="inline-flex items-center gap-2 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                    style={{ 
                      padding: '10px 20px', 
                      borderRadius: '999px',
                      fontSize: '12px'
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
