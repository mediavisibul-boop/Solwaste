import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Box, DollarSign, BookOpen, ShieldCheck, TrendingUp, UserPlus, Phone, Rocket, ArrowRight } from '../components/Icons';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

const BenefitCard: React.FC<{ title: string; text: string; icon: React.ReactNode }> = ({ title, text, icon }) => (
  <StaggerItem>
    <div className="bg-gray-50 p-8 border-l-4 border-transparent hover:border-brand-gold hover:bg-white hover:shadow-xl transition-all duration-300 group">
      <div className="text-gray-400 group-hover:text-brand-gold mb-4 transition-colors">{icon}</div>
      <h3 className="text-xl font-heading font-bold text-brand-brown mb-3 uppercase">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">{text}</p>
    </div>
  </StaggerItem>
);

const PersonaTag: React.FC<{ label: string }> = ({ label }) => (
    <div className="bg-white border border-gray-200 px-6 py-4 flex items-center shadow-sm hover:shadow-md hover:border-brand-gold transition-all duration-300">
        <CheckCircle className="text-brand-gold mr-3 w-5 h-5" />
        <span className="font-heading font-bold text-lg text-brand-brown uppercase tracking-wide">{label}</span>
    </div>
);

const Step: React.FC<{ number: string; title: string; text: string }> = ({ number, title, text }) => (
    <div className="flex items-start space-x-6 relative">
        <div className="flex-shrink-0 w-12 h-12 bg-brand-dark text-white flex items-center justify-center font-heading font-bold text-xl rounded-full shadow-lg z-10">
            {number}
        </div>
        <div className="pt-1">
            <h4 className="text-xl font-heading font-bold text-brand-dark mb-2">{title}</h4>
            <p className="text-gray-700 font-medium">{text}</p>
        </div>
    </div>
);

export const PartnerWithUs: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      <SEO 
        title="Partner with Us - Become a Solwaste Authorized Dealer"
        description="Join Solwaste's partner network. Become authorized dealer for organic waste composters. Attractive margins, marketing support, training programs. Expand your green business with India's leading waste management brand."
        keywords="solwaste partnership, composting machine dealership, OWC dealership India, waste management franchise, green business opportunity, authorized dealer, composting equipment distributor"
        type="website"
      />
      
      {/* Hero Section */}
      <section className="bg-brand-dark text-white min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/35 via-white/25 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal variant="fadeInLeft" viewport={{ once: true, amount: 0.3 }}>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-3 sm:mb-4 md:mb-5 uppercase leading-[0.95] max-w-5xl">
                    Partner With Us
                </h1>
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-200 font-bold mb-4 sm:mb-5 md:mb-6 max-w-2xl lg:max-w-3xl leading-tight">
                    Help us bring real waste solutions to more people.
                </p>
                <div className="w-20 h-1.5 bg-brand-gold mb-6"></div>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-6 font-light">
                    We make composting machines. You know people who need them. Let's work together.
                </p>
                <button onClick={() => window.open('https://quark-cornflower-fe8.notion.site/2cc84662572280d786f1f62594f9327f?pvs=105', '_blank')} className="relative overflow-hidden min-h-[60px] xs:min-h-[64px] sm:min-h-[68px] flex items-center justify-center rounded-xl bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] active:scale-[0.98] hover:scale-[1.03] transition-all duration-300 touch-manipulation group">
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  
                  {/* Glow pulse */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-gold/10 animate-pulse"></div>
                  
                  {/* Button content */}
                  <div className="relative flex items-center justify-center gap-2.5 px-10 xs:px-12 sm:px-14 text-brand-dark">
                    <span className="text-lg xs:text-xl sm:text-2xl font-bold uppercase tracking-wider group-hover:tracking-widest transition-all duration-300 leading-none">Apply Now</span>
                    <ArrowRight className="w-6 h-6 xs:w-7 xs:h-7 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                  </div>
                </button>
            </ScrollReveal>
        </div>
      </section>

      {/* Is This You? */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-brown mb-4 uppercase">Is This You?</h2>
                <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {[
                    "Sustainability Enthusiasts",
                    "Students",
                    "Consultants",
                    "Housing Society Connectors",
                    "Sales Professionals",
                    "Environmental Activists",
                    "Freelancers",
                    "Entrepreneurs"
                ].map((label, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <PersonaTag label={label} />
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-brown mb-6 uppercase">A Partnership That <br/><span className="text-brand-gold">Actually Makes Sense</span></h2>
                  <p className="text-xl text-gray-600 font-light">
                    No fluff. No empty promises. Just a clean, scalable way to earn while contributing to real environmental impact.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <BenefitCard 
                    icon={<Box size={32}/>}
                    title="Zero inventory responsibility"
                    text="Manufacturing, logistics, installation, warranties — handled end to end by us."
                  />
                  <BenefitCard 
                    icon={<DollarSign size={32}/>}
                    title="Straightforward earnings"
                    text="Bring a deal. Close it. Get paid. Transparent commissions with no fine print."
                  />
                  <BenefitCard 
                    icon={<BookOpen size={32}/>}
                    title="Real sustainability exposure"
                    text="Understand how organic waste systems actually work, beyond surface-level claims."
                  />
                  <BenefitCard 
                    icon={<ShieldCheck size={32}/>}
                    title="Proven deployments"
                    text="Already active in housing societies, corporates, and institutions across cities."
                  />
                  <BenefitCard 
                    icon={<UserPlus size={32}/>}
                    title="Training & backup"
                    text="Structured onboarding, pitch support, demos, and technical assistance when needed."
                  />
                  <BenefitCard 
                    icon={<TrendingUp size={32}/>}
                    title="Growth beyond referrals"
                    text="Top partners move into city ownership, strategic roles, and leadership tracks."
                  />
              </div>
          </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
         <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-brand-gold rounded-full opacity-10 blur-[100px]"></div>
          <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-10 uppercase">What happens after you apply?</h2>
                      <div className="space-y-12 pl-4 border-l-2 border-gray-700">
                          <Step 
                            number="1" 
                            title="We review your application" 
                            text="Usually takes us 48 hours max. We look for intent and potential." 
                          />
                          <Step 
                            number="2" 
                            title="Quick call" 
                            text="If it looks good, we'll schedule a chat to align goals." 
                          />
                          <Step 
                            number="3" 
                            title="Get started" 
                            text="Access training materials, pitch decks, and everything you need to begin." 
                          />
                      </div>
                  </div>
                  
                  <div className="bg-white text-brand-dark p-10 rounded-sm shadow-2xl">
                        <div className="flex items-center mb-6">
                            <Rocket className="text-brand-gold mr-4" size={40} />
                            <h3 className="text-3xl font-heading font-bold uppercase">Ready to Start?</h3>
                        </div>
                        <p className="text-gray-700 text-lg mb-8">
                            Join a network of changemakers who are turning waste management into a movement.
                        </p>
                        <button onClick={() => window.open('https://quark-cornflower-fe8.notion.site/2cc84662572280d786f1f62594f9327f?pvs=105', '_blank')} className="relative overflow-hidden w-full min-h-[60px] xs:min-h-[64px] sm:min-h-[68px] flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-dark via-brand-olive to-brand-dark hover:from-brand-olive hover:via-brand-dark hover:to-brand-olive shadow-[0_0_25px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] active:scale-[0.98] hover:scale-[1.03] transition-all duration-300 touch-manipulation group">
                          {/* Shine effect */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>
                          
                          {/* Glow pulse */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-gold/10 animate-pulse"></div>
                          
                          {/* Button content */}
                          <div className="relative flex items-center justify-center gap-2.5 px-8 text-white">
                            <span className="text-lg xs:text-xl sm:text-2xl font-bold uppercase tracking-widest group-hover:tracking-[0.3em] transition-all duration-300 leading-none">Apply Now</span>
                            <ArrowRight className="w-6 h-6 xs:w-7 xs:h-7 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                          </div>
                        </button>
                        <p className="text-center text-sm text-gray-500 mt-4">
                            Questions? <a href="mailto:partners@solwaste.co" className="underline hover:text-brand-gold">Email us directly</a>
                        </p>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default PartnerWithUs;