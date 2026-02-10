import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Award, Users, ChevronRight, Building2, Hospital, Building, Store } from '../components/Icons';
import { SEO } from '../components/SEO';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

const Card: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
  <StaggerItem>
    <div className="bg-white dark:bg-gray-800 p-6 sm:p-7 md:p-8 border-l-4 border-gray-200 dark:border-gray-700 hover:border-brand-primary rounded-r-premium shadow-premium hover:shadow-premium-lg hover:bg-brand-cream/30 dark:hover:bg-gray-700 transition-all duration-400">
      <div className="text-brand-primary mb-5 sm:mb-6">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-charcoal dark:text-white mb-3 sm:mb-4 uppercase tracking-wide leading-tight">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{text}</p>
    </div>
  </StaggerItem>
);

export const About: React.FC = () => {
  return (
    <div className="">
      <SEO 
        title="About Us - Leading Waste Management Company in India"
        description="Solwaste provides composting solutions for large waste generators in India. We help organizations implement on-site composting solutions that reduce waste costs, ensure compliance, and support long-term sustainability goals. Trusted by 500+ clients including hotels, malls, IT parks, hospitals, and institutions."
        keywords="about solwaste, waste management company India, composting solutions for large waste generators, bulk waste generators, BWG, SWM Rules 2026, organic waste solutions, on-site composting, composting technology, sustainable waste management, waste compliance India, zero waste India, environmental solutions, green technology India, ESG sustainability"
        type="website"
      />
      {/* Header - Mobile Optimized */}
      <div className="bg-brand-dark text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-24 sm:py-28 md:py-32 lg:py-36">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
             <div className="flex items-center space-x-4 mb-6">
                <div className="h-1 w-12 sm:w-16 bg-brand-primary rounded-full"></div>
                <span className="text-brand-primary font-semibold uppercase tracking-wider text-sm">About Solwaste</span>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 sm:mb-7 md:mb-8 leading-tight">
              Engineering A <br className="hidden sm:block"/> Sustainable Tomorrow
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed border-l-4 border-brand-primary/50 pl-6">
              We help organizations across India implement on-site composting solutions that reduce waste costs, ensure compliance, and support long-term sustainability goals. Through proven technology, turnkey installation, and compliance-ready systems, we turn environmental challenges into economic resources.
            </p>
          </motion.div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-5 sm:opacity-10 transform translate-x-1/4 translate-y-1/4">
          <Globe size={300} className="sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]" />
        </div>
      </div>

      {/* Main Content - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-cream dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <ScrollReveal variant="fadeInLeft" viewport={{ once: true, amount: 0.3 }}>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl font-heading font-bold text-brand-charcoal dark:text-white mb-5 leading-tight">
                Our Story & Expertise
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-brand-primary rounded-full mb-6 sm:mb-7 md:mb-8"></div>
              <div className="space-y-5 sm:space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                <p>
                  Solwaste was founded with a singular vision: to address the growing organic waste crisis in urban environments through reliable, scalable, compliance-ready technology.
                </p>
                <p>
                  Leveraging <strong className="font-semibold text-brand-charcoal dark:text-white">German engineering</strong> principles, we developed a suite of Organic Waste Composters (OWC) that offer superior efficiency and durability compared to conventional methods. Our composting solutions help <strong className="font-semibold text-brand-charcoal dark:text-white">bulk waste generators (BWGs) in India</strong> including hotels, malls, IT parks, hospitals, educational institutions, and food processing units stay compliant with India's Solid Waste Management Rules 2026 (effective 1 April 2026) while reducing costs.
                </p>
                <p>
                  Today, with over <strong className="font-semibold text-brand-charcoal dark:text-white">500 installations</strong> across commercial, institutional, and residential sectors, we are a trusted partner in India's journey towards the "Waste to Wealth" and "Clean India" missions. Our on-site composting solutions reduce waste hauling costs, ensure compliance, and help organizations achieve their ESG and sustainability goals.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="scaleIn" delay={0.3} viewport={{ once: true, amount: 0.2 }}>
              <div className="relative mt-8 lg:mt-0">
                <div className="absolute top-0 right-0 -mr-4 sm:-mr-6 md:-mr-8 -mt-4 sm:-mt-6 md:-mt-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-brand-gold/10 z-0"></div>
                <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Engineering Team" 
                    className="shadow-2xl relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-500"
                />
               <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 border-2 sm:border-4 border-brand-brown z-20 hidden md:block"></div>
              </div>
            </ScrollReveal>
          </div>

          {/* Mission/Vision Grid - Migrated from Home - Mobile Optimized */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8" staggerDelay={0.12} viewport={{ once: true, amount: 0.15 }}>
            <Card 
              icon={<Target size={36} className="sm:w-10 sm:h-10 md:w-12 md:h-12" />}
              title="Our Mission"
              text="To provide robust, zero-landfill solutions that empower communities to manage their waste at the source, reducing environmental impact and generating value."
            />
            <Card 
              icon={<Globe size={36} className="sm:w-10 sm:h-10 md:w-12 md:h-12" />}
              title="Vision 2047"
              text="Supporting India's goal for sustainable cities by creating a circular economy where organic waste is universally viewed as a resource for energy and soil health."
            />
            <Card 
              icon={<Award size={36} className="sm:w-10 sm:h-10 md:w-12 md:h-12" />}
              title="Quality Promise"
              text="We commit to German-engineered precision, ensuring our machines deliver maximum uptime, minimal maintenance, and optimal output quality."
            />
          </StaggerContainer>
        </div>
      </section>

      {/* Clients / Who We Serve - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-light border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
           <ScrollReveal variant="fadeInDown" delay={0.1} viewport={{ once: true, amount: 0.5 }}>
             <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16 lg:mb-18">
                <h2 className="text-3xl xs:text-4xl sm:text-5xl font-heading font-bold text-brand-charcoal dark:text-white mb-4 uppercase tracking-wide leading-tight">Who We Serve</h2>
                <div className="w-16 sm:w-20 h-1 bg-brand-primary rounded-full mx-auto"></div>
             </div>
           </ScrollReveal>
           
           <StaggerContainer className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6" staggerDelay={0.08} viewport={{ once: true, amount: 0.1 }}>
             {[
               { icon: <Building2 size={32} className="sm:w-9 sm:h-9" />, label: "Hotels & Resorts", desc: "Hospitality Industry" },
               { icon: <Building size={32} className="sm:w-9 sm:h-9" />, label: "Corporate & IT Parks", desc: "Tech Parks & SEZs" },
               { icon: <Hospital size={32} className="sm:w-9 sm:h-9" />, label: "Hospitals & Institutions", desc: "Healthcare & Education" },
               { icon: <Store size={32} className="sm:w-9 sm:h-9" />, label: "Malls & Municipalities", desc: "Commercial & Government" },
             ].map((client, idx) => (
               <StaggerItem key={idx}>
                 <div className="p-6 sm:p-7 md:p-8 bg-white dark:bg-gray-800 rounded-premium border-b-4 border-transparent hover:border-brand-primary shadow-premium hover:shadow-premium-lg transition-all duration-400 group">
                   <div className="mb-5 sm:mb-6 text-brand-charcoal-light dark:text-gray-400 group-hover:text-brand-primary transition-colors flex justify-center items-center mx-auto">{client.icon}</div>
                   <h4 className="font-heading font-bold text-base sm:text-lg md:text-xl text-brand-charcoal dark:text-white text-center mb-2 uppercase tracking-wide leading-tight">{client.label}</h4>
                   <p className="text-center text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{client.desc}</p>
                 </div>
               </StaggerItem>
             ))}
           </StaggerContainer>
        </div>
      </section>
    </div>
  );
};