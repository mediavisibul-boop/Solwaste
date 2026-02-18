import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Mail, Phone } from '../components/Icons';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

const PressMedia = () => {
  const pressItems = [
    {
      title: "Fahaka Installation Success",
      description: "Revolutionary waste management solution successfully installed and operational",
      image: "/tweet1.png",
      link: "https://x.com/mopr_goi/status/1659152987162574848?s=20",
      category: "Installation",
      date: "2026"
    }
    // More items can be added here later
  ];

  return (
    <div>
      <SEO 
        title="Press & Media - Solwaste Innovations"
        description="Latest news, press releases, and media coverage of Solwaste's innovative waste management solutions and successful installations."
        keywords="press release, media coverage, news, fahaka installation, waste management news, solwaste media"
        type="website"
      />
      
      {/* Header */}
      <div className="bg-gray-900 text-white min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center relative z-10 py-24 sm:py-28 md:py-32 lg:py-36">
          <ScrollReveal variant="fadeInUp" viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block py-2 px-6 mb-4 sm:mb-6 text-xs sm:text-sm font-bold uppercase tracking-widest border-2 border-white text-white bg-gray-900/70 backdrop-blur-md rounded-lg">
              Press & Media
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              In The News
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}>
              Latest updates, installations, and media coverage of Solwaste's revolutionary waste management solutions
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Press Items Grid */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          {/* Section Title */}
          <ScrollReveal variant="fadeInUp" viewport={{ once: true, amount: 0.4 }}>
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
              Featured Installations
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing our successful deployments and media recognition
            </p>
            </div>
          </ScrollReveal>

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
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-gray-900"
              >
                {/* Image (clickable) */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  tabIndex={0}
                  aria-label={`Read more about ${item.title}`}
                >
                  <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </a>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-900 font-semibold">{item.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
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
            <div className="inline-block bg-white px-8 py-6 rounded-xl border-2 border-gray-200">
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
            className="mt-16 sm:mt-20 md:mt-24 bg-gray-900 text-white p-8 sm:p-10 md:p-12 rounded-2xl"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Media Inquiries
              </h3>
              <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                For press releases, media kits, or interview requests, please contact our media team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:hello@solwaste.co" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95"
                >
                  <Mail size={20} />
                  hello@solwaste.co
                </a>
                <a 
                  href="tel:+919429691308" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all hover:scale-105 active:scale-95 border border-white/20">
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
