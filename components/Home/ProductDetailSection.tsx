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
    <section className="bg-[#f5f5f5] py-14 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 pb-16 xs:pb-18 sm:pb-24 md:pb-28 lg:pb-32 xl:pb-36">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="font-bold text-black text-lg xs:text-xl sm:text-[22px] md:text-2xl lg:text-[28px] xl:text-3xl leading-tight"
          >
            Solwaste Smart Home
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 sm:mt-3 text-[#777] text-xs sm:text-[13px] md:text-sm"
          >
            The ultimate home composting experience,<br />
            better than traditional methods.
          </motion.p>
        </div>

        {/* Feature Pointers Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
          {/* Left Features */}
          <div className="flex-1 w-full grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 lg:space-y-10 lg:gap-0">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-left lg:text-right"
              >
                <div className="flex items-start lg:justify-end gap-2 sm:gap-3">
                  <div>
                    <div className="flex items-center lg:justify-end gap-1.5 sm:gap-2 mb-1">
                      <span className="text-[10px] sm:text-[11px] text-[#999] font-medium">{feature.number}</span>
                      <h4 className="font-semibold text-black text-[11px] xs:text-xs sm:text-[13px] md:text-sm lg:text-[15px]">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-[#777] hidden sm:block text-[10px] sm:text-[11px] md:text-xs" style={{ lineHeight: 1.6 }}>
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
            className="flex-shrink-0 w-full lg:w-auto order-first lg:order-none"
          >
            <div className="mx-auto flex items-center justify-center w-[260px] xs:w-[300px] sm:w-[380px] md:w-[440px] lg:w-[480px] xl:w-[540px] 2xl:w-[580px] h-[320px] xs:h-[360px] sm:h-[440px] md:h-[520px] lg:h-[580px] xl:h-[650px] 2xl:h-[700px] rounded-2xl">
              <img 
                src="/details.png" 
                alt="Solwaste Smart Home" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="flex-1 w-full grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 lg:space-y-10 lg:gap-0">
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-left"
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                      <span className="text-[10px] sm:text-[11px] text-[#999] font-medium">{feature.number}</span>
                      <h4 className="font-semibold text-black text-[11px] xs:text-xs sm:text-[13px] md:text-sm lg:text-[15px]">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-[#777] hidden sm:block text-[10px] sm:text-[11px] md:text-xs" style={{ lineHeight: 1.6 }}>
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
