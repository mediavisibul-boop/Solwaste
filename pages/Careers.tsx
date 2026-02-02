import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Globe, Users, Zap, Layers, ChevronRight, ChevronDown, ArrowRight } from '../components/Icons';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

const BenefitCard: React.FC<{ title: string; text: string; icon: React.ReactNode }> = ({ title, text, icon }) => (
  <StaggerItem>
    <div className="bg-gray-50 p-8 border-l-4 border-transparent hover:border-brand-gold hover:bg-white hover:shadow-xl transition-all duration-300 group">
      <div className="text-gray-600 group-hover:text-brand-gold mb-4 transition-colors">{icon}</div>
      <h3 className="text-xl font-heading font-bold text-brand-brown mb-3 uppercase">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">{text}</p>
    </div>
  </StaggerItem>
);

const Step: React.FC<{ number: string; title: string; text: string }> = ({ number, title, text }) => (
    <StaggerItem>
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 w-12 h-12 bg-brand-gold text-white flex items-center justify-center font-heading font-bold text-xl rounded-full shadow-lg">
            {number}
        </div>
        <div>
            <h4 className="text-xl font-heading font-bold text-brand-brown mb-2">{title}</h4>
            <p className="text-gray-700 font-medium">{text}</p>
        </div>
      </div>
    </StaggerItem>
);

export const Careers: React.FC = () => {
  const roles = [
    "Sustainability Research", "Operations", "Sales & Partnerships", 
    "Marketing & Content", "Design", "Technology", 
    "Data & Impact", "Community Engagement", "Business Development"
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Careers at Solwaste - Join India's Leading Waste Management Team"
        description="Join Solwaste's mission to transform India's waste management. Open positions in sustainability research, operations, sales, marketing, technology & more. Build a cleaner future with us. Apply now!"
        keywords="solwaste careers, waste management jobs, sustainability jobs India, environmental careers, green technology jobs, composting industry jobs, cleantech careers India"
        type="website"
      />
      {/* Hero */}
      <section className="bg-brand-dark text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>
        
        <div className="container mx-auto px-6 relative z-10 py-24 sm:py-28 md:py-32 lg:py-36">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <h1 className="text-4xl md:text-6xl font-heading font-black mb-4 uppercase leading-none" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.9)' }}>
                    Join Solwaste
                </h1>
                <p className="text-lg md:text-xl text-white font-bold mb-5" style={{ textShadow: '0 3px 15px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>
                    Careers | Internships | Volunteering
                </p>
                <div className="w-20 h-1.5 bg-brand-gold mb-6"></div>
                <p className="text-lg text-white max-w-2xl leading-relaxed mb-6" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 1px 6px rgba(0,0,0,0.9)' }}>
                    We're not just managing waste. We're redesigning how cities think about it. 
                    If sustainability excites you, climate action matters to you, and you want real-world exposure (not just certificates), you're in the right place.
                </p>
                <button onClick={() => document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth'})} className="relative overflow-hidden min-h-[56px] xs:min-h-[60px] sm:min-h-[64px] flex items-center justify-center rounded-xl bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] active:scale-[0.98] hover:scale-[1.03] transition-all duration-300 touch-manipulation group">
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  
                  {/* Glow pulse */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-gold/10 animate-pulse"></div>
                  
                  {/* Button content */}
                  <div className="relative flex items-center justify-center gap-2.5 px-10 xs:px-12 sm:px-14 text-brand-dark">
                    <span className="text-base xs:text-lg sm:text-xl font-bold uppercase tracking-wider group-hover:tracking-widest transition-all duration-300 leading-none">View Open Roles</span>
                    <ChevronDown className="w-5 h-5 xs:w-6 xs:h-6 flex-shrink-0 group-hover:translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
                  </div>
                </button>
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

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08} viewport={{ once: true, amount: 0.15 }}>
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
              </StaggerContainer>
          </div>
      </section>

      {/* Roles */}
      <section id="roles" className="py-24 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-6">
              <ScrollReveal variant="fadeInUp" viewport={{ once: true, amount: 0.5 }}>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-brown mb-12 uppercase">Open Roles</h2>
              </ScrollReveal>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06} viewport={{ once: true, amount: 0.1 }}>
                  {roles.map((role, idx) => (
                      <StaggerItem key={idx}>
                        <a 
                          href="https://quark-cornflower-fe8.notion.site/2cc84662572280318ff3ff2d5f2f0fee?pvs=105"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-6 border border-gray-200 flex justify-between items-center group hover:border-brand-gold transition-all cursor-pointer shadow-sm hover:shadow-md"
                        >
                            <span className="font-heading font-bold text-lg text-brand-brown group-hover:text-brand-gold transition-colors">{role}</span>
                            <ChevronRight className="text-gray-300 group-hover:text-brand-gold transition-colors" />
                        </a>
                      </StaggerItem>
                  ))}
              </StaggerContainer>
               <ScrollReveal variant="scaleIn" delay={0.3} viewport={{ once: true, amount: 0.8 }}>
                 <div className="mt-12 p-8 bg-brand-dark text-white rounded-sm flex flex-col md:flex-row items-center justify-between shadow-xl">
                  <div className="mb-6 md:mb-0">
                      <h3 className="text-2xl font-heading font-bold mb-2">Don't see your role?</h3>
                      <p className="text-gray-600">We are always looking for exceptional talent. Pitch us your role.</p>
                  </div>
                  <button onClick={() => window.open('https://quark-cornflower-fe8.notion.site/2cc84662572280318ff3ff2d5f2f0fee?pvs=105', '_blank')} className="relative overflow-hidden min-h-[52px] xs:min-h-[56px] flex items-center justify-center rounded-xl bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] active:scale-[0.98] hover:scale-[1.03] transition-all duration-300 touch-manipulation group">
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    
                    {/* Glow pulse */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-gold/10 animate-pulse"></div>
                    
                    {/* Button content */}
                    <div className="relative flex items-center justify-center gap-2 px-8 xs:px-10 text-brand-dark">
                      <span className="text-base xs:text-lg font-bold uppercase tracking-wider group-hover:tracking-widest transition-all duration-300 leading-none">Apply Now</span>
                      <ArrowRight className="w-5 h-5 xs:w-6 xs:h-6 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                    </div>
                  </button>
              </div>
               </ScrollReveal>
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
                            text="Via email or WhatsApp, usually within a week of application." 
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
                          <h3 className="text-3xl font-heading font-bold mb-6 uppercase">Let's build a cleaner future together ♻️</h3>
                          <p className="text-white/90 text-lg mb-10 font-medium">
                              Ready to make a difference? Apply now and start your journey with Solwaste.
                          </p>
                          <button onClick={() => window.open('https://quark-cornflower-fe8.notion.site/2cc84662572280318ff3ff2d5f2f0fee?pvs=105', '_blank')} className="relative overflow-hidden w-full min-h-[60px] xs:min-h-[64px] sm:min-h-[68px] flex items-center justify-center rounded-xl bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.7)] active:scale-[0.98] hover:scale-[1.03] transition-all duration-300 touch-manipulation group">
                            {/* Shine effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                            
                            {/* Glow pulse */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-gold/10 animate-pulse"></div>
                            
                            {/* Button content */}
                            <div className="relative flex items-center justify-center gap-2.5 px-8 text-brand-dark">
                              <span className="text-lg xs:text-xl sm:text-2xl font-bold uppercase tracking-widest group-hover:tracking-[0.3em] transition-all duration-300 leading-none">Apply Now</span>
                              <ArrowRight className="w-6 h-6 xs:w-7 xs:h-7 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                            </div>
                          </button>
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