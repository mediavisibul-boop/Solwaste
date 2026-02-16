import React from 'react';
import { motion } from 'framer-motion';

const leftFeatures = [
  {
    number: '01',
    title: 'Plug & Compost',
    description: 'Connectivity-enabled seamless plug-and-compost experience.',
  },
  {
    number: '02',
    title: 'Smart Opening',
    description: 'Automatic port cover opening when you load the waste.',
  },
  {
    number: '03',
    title: 'Auto Restart After Emergency Stops',
    description: 'Automatic system recovery when you restart the machine.',
  },
  {
    number: '04',
    title: 'Remote Control via App',
    description: 'Remote scheduling and real-time status checking.',
  },
];

const rightFeatures = [
  {
    number: '05',
    title: 'FOTA Upgrade',
    description: 'Continuous optimization for an evolving composting experience.',
  },
  {
    number: '06',
    title: 'Auto Current Down for Low Voltage',
    description: 'Automatic power cover protection when voltage drops.',
  },
  {
    number: '07',
    title: 'Automatic Authentication',
    description: 'Set authorized users to avoid unauthorized usage.',
  },
  {
    number: '08',
    title: 'Multi-User Sharing',
    description: 'Multi-user capability to make composting more accessible.',
  },
];

export const ProductDetailSection: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5]" style={{ padding: '120px 0 140px' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="font-bold text-black"
            style={{ fontSize: '28px', lineHeight: 1.3 }}
          >
            Solwaste Smart Home
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-[#777]"
            style={{ fontSize: '14px' }}
          >
            The ultimate home composting experience,<br />
            better than traditional methods.
          </motion.p>
        </div>

        {/* Feature Pointers Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6">
          {/* Left Features */}
          <div className="flex-1 space-y-8 lg:space-y-10">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-right"
              >
                <div className="flex items-start justify-end gap-3">
                  <div>
                    <div className="flex items-center justify-end gap-2 mb-1">
                      <span className="text-[11px] text-[#999] font-medium">{feature.number}</span>
                      <h4 className="font-semibold text-black" style={{ fontSize: '15px' }}>
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-[#777]" style={{ fontSize: '12px', lineHeight: 1.6 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 w-full lg:w-auto"
          >
            <div 
              className="mx-auto  flex items-center justify-center"
              style={{ 
                width: 'clamp(500px, 52vw, 580px)', 
                height: 'clamp(750px, 60vw, 700px)',
                borderRadius: '20px'
              }}
            >
              <img 
                src="/details.png" 
                alt="Solwaste Smart Home" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="flex-1 space-y-8 lg:space-y-10">
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-left"
              >
                <div className="flex items-start gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] text-[#999] font-medium">{feature.number}</span>
                      <h4 className="font-semibold text-black" style={{ fontSize: '15px' }}>
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-[#777]" style={{ fontSize: '12px', lineHeight: 1.6 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
