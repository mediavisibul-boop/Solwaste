import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Mail, Phone } from '../components/Icons';

const PressMedia = () => {
  const pressItems = [
    {
      title: "Fahaka Installation Success",
      description: "Revolutionary waste management solution successfully installed and operational",
      image: "/tweet1.png",
      category: "Installation",
      date: "2026"
    }
    // More items can be added here later
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Press & Media - Solwaste Innovations"
        description="Latest news, press releases, and media coverage of Solwaste's innovative waste management solutions and successful installations."
        keywords="press release, media coverage, news, fahaka installation, waste management news, solwaste media"
        type="website"
      />
      
      {/* Header */}
      <div className="bg-brand-dark text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-olive-dark to-brand-dark opacity-90"></div>
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center relative z-10 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-6 mb-4 sm:mb-6 text-xs sm:text-sm font-bold uppercase tracking-widest border-2 border-brand-gold text-brand-gold bg-brand-dark/70 backdrop-blur-md rounded-lg">
              Press & Media
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              In The News
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}>
              Latest updates, installations, and media coverage of Solwaste's revolutionary waste management solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Press Items Grid */}
      <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          {/* Section Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-3 sm:mb-4">
              Featured Installations
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing our successful deployments and media recognition
            </p>
          </motion.div>

          {/* Press Items */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 max-w-md mx-auto md:max-w-none">
              {pressItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 bg-brand-gold text-brand-dark text-xs font-bold uppercase tracking-wider rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-brand-gold font-semibold">{item.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-dark mb-3 group-hover:text-brand-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
            </div>
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 sm:mt-16 md:mt-20 text-center"
          >
            <div className="inline-block bg-gray-50 px-8 py-6 rounded-xl border-2 border-gray-200">
              <p className="text-base sm:text-lg text-gray-600 font-semibold">
                More press releases and media coverage coming soon!
              </p>
            </div>
          </motion.div>

          {/* Media Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 md:mt-24 bg-brand-dark text-white p-8 sm:p-10 md:p-12 rounded-2xl"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
                Media Inquiries
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                For press releases, media kits, or interview requests, please contact our media team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:hello@solwaste.co" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95"
                >
                  <Mail size={20} />
                  hello@solwaste.co
                </a>
                <a 
                  href="tel:+919429691308" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all hover:scale-105 active:scale-95 border border-white/20"
                >
                  <Phone size={20} />
                  +91-9429691308
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PressMedia;
