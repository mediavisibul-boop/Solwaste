import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Award, Users, ChevronRight } from 'lucide-react';

const Card: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
  <div className="bg-brand-light p-8 border-l-4 border-gray-200 hover:border-brand-gold hover:bg-white hover:shadow-xl transition-all duration-300">
    <div className="text-brand-gold mb-6">{icon}</div>
    <h3 className="text-2xl font-heading font-bold text-brand-brown mb-4 uppercase">{title}</h3>
    <p className="text-gray-700 leading-relaxed font-light">{text}</p>
  </div>
);

export const About: React.FC = () => {
  return (
    <div className="">
      {/* Header */}
      <div className="bg-brand-dark text-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
             <div className="flex items-center space-x-4 mb-6">
                <div className="h-[2px] w-12 bg-brand-gold"></div>
                <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm">About Solwaste</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 uppercase leading-none">
              Engineering A <br/> Sustainable Tomorrow
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light border-l-4 border-gray-700 pl-6">
              Solwaste is dedicated to transforming the way India manages organic waste. Through innovation, technology, and commitment, we turn environmental challenges into economic resources.
            </p>
          </motion.div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
          <Globe size={500} />
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-4xl font-heading font-bold text-brand-brown mb-6 uppercase">Our Story & Expertise</h2>
              <div className="w-24 h-1 bg-brand-gold mb-8"></div>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Solwaste was founded with a singular vision: to address the growing organic waste crisis in urban environments through reliable, scalable technology.
                </p>
                <p>
                  Leveraging <strong>German engineering</strong> principles, we developed a suite of Organic Waste Converters (OTC) and Biogas solutions that offer superior efficiency and durability compared to conventional methods. We don't just assemble machines; we engineer ecosystems.
                </p>
                <p>
                  Today, with over <strong>500 installations</strong> across commercial, institutional, and residential sectors, we are a trusted partner in India's journey towards the "Waste to Wealth" and "Clean India" missions.
                </p>
              </div>
            </div>
            <div className="relative">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-brand-gold/10 z-0"></div>
                <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Engineering Team" 
                    className="shadow-2xl relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-500"
                />
               <div className="absolute -bottom-8 -left-8 w-64 h-64 border-4 border-brand-brown z-20 hidden md:block"></div>
            </div>
          </div>

          {/* Mission/Vision Grid - Migrated from Home */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              icon={<Target size={48} />}
              title="Our Mission"
              text="To provide robust, zero-landfill solutions that empower communities to manage their waste at the source, reducing environmental impact and generating value."
            />
            <Card 
              icon={<Globe size={48} />}
              title="Vision 2047"
              text="Supporting India's goal for sustainable cities by creating a circular economy where organic waste is universally viewed as a resource for energy and soil health."
            />
            <Card 
              icon={<Award size={48} />}
              title="Quality Promise"
              text="We commit to German-engineered precision, ensuring our machines deliver maximum uptime, minimal maintenance, and optimal output quality."
            />
          </div>
        </div>
      </section>

      {/* Clients / Who We Serve */}
      <section className="py-24 bg-brand-light border-t border-gray-200">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-heading font-bold text-brand-brown mb-4 uppercase">Who We Serve</h2>
                <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: <Users size={32} />, label: "Residential Societies", desc: "RWAs & Townships" },
               { icon: <div className="font-black text-2xl">🏢</div>, label: "Corporate Offices", desc: "Tech Parks & SEZs" },
               { icon: <div className="font-black text-2xl">🏨</div>, label: "Hotels & Resorts", desc: "Hospitality Industry" },
               { icon: <div className="font-black text-2xl">🏛️</div>, label: "Municipalities", desc: "Smart City Projects" },
             ].map((client, idx) => (
               <div key={idx} className="p-8 bg-white border-b-4 border-transparent hover:border-brand-gold shadow-sm hover:shadow-xl transition-all group">
                 <div className="mb-6 text-brand-brown group-hover:text-brand-gold transition-colors flex justify-center bg-brand-light w-16 h-16 rounded-full items-center mx-auto">{client.icon}</div>
                 <h4 className="font-heading font-bold text-xl text-brand-brown text-center mb-2 uppercase">{client.label}</h4>
                 <p className="text-center text-gray-600 text-sm">{client.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};