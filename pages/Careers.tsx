import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Globe, Users, Zap, Layers, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

const BenefitCard: React.FC<{ title: string; text: string; icon: React.ReactNode }> = ({ title, text, icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-gray-50 p-8 border-l-4 border-transparent hover:border-brand-gold hover:bg-white hover:shadow-xl transition-all duration-300 group"
  >
    <div className="text-gray-400 group-hover:text-brand-gold mb-4 transition-colors">{icon}</div>
    <h3 className="text-xl font-heading font-bold text-brand-brown mb-3 uppercase">{title}</h3>
    <p className="text-gray-700 text-base leading-relaxed">{text}</p>
  </motion.div>
);

const Step: React.FC<{ number: string; title: string; text: string }> = ({ number, title, text }) => (
    <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 w-12 h-12 bg-brand-gold text-white flex items-center justify-center font-heading font-bold text-xl rounded-full shadow-lg">
            {number}
        </div>
        <div>
            <h4 className="text-xl font-heading font-bold text-brand-brown mb-2">{title}</h4>
            <p className="text-gray-700 font-medium">{text}</p>
        </div>
    </div>
);

export const Careers: React.FC = () => {
  const roles = [
    "Sustainability Research", "Operations", "Sales & Partnerships", 
    "Marketing & Content", "Design", "Technology", 
    "Data & Impact", "Community Engagement", "Business Development"
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <div className="inline-block border border-brand-gold px-4 py-1 text-sm font-bold text-brand-gold uppercase tracking-widest mb-6 bg-black/50 backdrop-blur-md rounded-full">
                    We Are Hiring
                </div>
                <h1 className="text-6xl md:text-8xl font-heading font-black mb-6 uppercase leading-none">
                    Join Solwaste
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 font-medium mb-8">
                    Careers | Internships | Volunteering
                </p>
                <div className="w-24 h-2 bg-brand-gold mb-10"></div>
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
                    We're not just managing waste. We're redesigning how cities think about it. 
                    If sustainability excites you, climate action matters to you, and you want real-world exposure (not just certificates), you're in the right place.
                </p>
                <Button className="py-4 px-10 text-lg" onClick={() => document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth'})}>
                    View Open Roles
                </Button>
            </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-brown mb-6 uppercase">Why Join Us?</h2>
                  <p className="text-xl text-gray-600 font-light">
                    No greenwashing. No vanity projects. Just real impact, real learning, and work you can be proud of.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <BenefitCard 
                    icon={<Globe size={32}/>}
                    title="Real projects, real impact"
                    text="Work on live deployments with cities, corporates, and communities - not just PowerPoint decks."
                  />
                  <BenefitCard 
                    icon={<Zap size={32}/>}
                    title="Learn by doing"
                    text="Hands-on exposure to waste management, sustainability consulting, and climate solutions."
                  />
                  <BenefitCard 
                    icon={<Users size={32}/>}
                    title="Ownership from day one"
                    text="You own your work. No micromanagement. Just clear goals and the freedom to execute."
                  />
                  <BenefitCard 
                    icon={<Layers size={32}/>}
                    title="Build your portfolio"
                    text="Whether it's case studies, campaigns, or field reports - leave with work you can showcase."
                  />
                  <BenefitCard 
                    icon={<Briefcase size={32}/>}
                    title="Cross-functional learning"
                    text="Collaborate across teams - operations, tech, sales, design. See how everything connects."
                  />
                  <BenefitCard 
                    icon={<Heart size={32}/>}
                    title="Growth mindset culture"
                    text="We value hustle, curiosity, and grit. Top performers move fast here."
                  />
              </div>
          </div>
      </section>

      {/* Roles */}
      <section id="roles" className="py-24 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-brown mb-12 uppercase">Open Roles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {roles.map((role, idx) => (
                      <a 
                        key={idx} 
                        href="mailto:careers@solwaste.co"
                        className="bg-white p-6 border border-gray-200 flex justify-between items-center group hover:border-brand-gold transition-all cursor-pointer shadow-sm hover:shadow-md"
                      >
                          <span className="font-heading font-bold text-lg text-brand-brown group-hover:text-brand-gold transition-colors">{role}</span>
                          <ChevronRight className="text-gray-300 group-hover:text-brand-gold transition-colors" />
                      </a>
                  ))}
              </div>
               <div className="mt-12 p-8 bg-brand-dark text-white rounded-sm flex flex-col md:flex-row items-center justify-between shadow-xl">
                  <div className="mb-6 md:mb-0">
                      <h3 className="text-2xl font-heading font-bold mb-2">Don't see your role?</h3>
                      <p className="text-gray-400">We are always looking for exceptional talent. Pitch us your role.</p>
                  </div>
                  <Button variant="white" className="px-8 py-3" onClick={() => window.location.href = 'mailto:careers@solwaste.co'}>
                      Email Us
                  </Button>
              </div>
          </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-brown mb-10 uppercase">What Happens Next?</h2>
                      <div className="space-y-12">
                          <Step 
                            number="1" 
                            title="We review on a rolling basis" 
                            text="Applications are evaluated as they come in. No long black-hole waiting periods." 
                          />
                          <Step 
                            number="2" 
                            title="Shortlisted candidates contacted" 
                            text="Via email or WhatsApp — usually within a week of application." 
                          />
                          <Step 
                            number="3" 
                            title="No spam, just real conversations" 
                            text="If we reach out, it means we see potential. We value your time." 
                          />
                      </div>
                  </div>
                  <div className="bg-brand-gold p-12 text-center text-white rounded-sm shadow-2xl relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                      <div className="relative z-10">
                          <h3 className="text-3xl font-heading font-bold mb-6 uppercase">Let's build a cleaner future — together ♻️</h3>
                          <p className="text-white/90 text-lg mb-10 font-medium">
                              Ready to make a difference? Apply now and start your journey with Solwaste.
                          </p>
                          <Button variant="white" className="w-full py-5 text-xl font-bold uppercase tracking-widest" onClick={() => window.location.href = 'mailto:careers@solwaste.co'}>
                              Apply Now
                          </Button>
                      </div>
                      {/* CSS-only pattern - no external image */}
                      <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{
                        backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.05) 3px),
                                         repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.05) 3px)`,
                        backgroundSize: '4px 4px'
                      }}></div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};