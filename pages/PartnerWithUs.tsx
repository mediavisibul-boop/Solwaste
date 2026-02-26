import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Box, IndianRupee, BookOpen, ShieldCheck, TrendingUp, UserPlus, Phone, Rocket, ArrowRight } from '../components/Icons';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

const BenefitCard: React.FC<{ title: string; text: string; icon: React.ReactNode }> = ({ title, text, icon }) => (
  <StaggerItem>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#BED754] shadow-sm hover:shadow-md transition-all duration-300 group h-full flex flex-col">
      <div className="text-gray-500 dark:text-gray-400 group-hover:text-[#BED754] mb-4 transition-colors">{icon}</div>
      <h3 className="text-lg font-heading font-bold text-[#44444E] dark:text-white mb-3 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">{text}</p>
    </div>
  </StaggerItem>
);

const PersonaTag: React.FC<{ label: string }> = ({ label }) => (
    <div className="bg-white border border-gray-200 px-4 py-3.5 flex items-center h-full min-h-[60px] shadow-sm hover:shadow-md hover:border-[#BED754] transition-all duration-300">
        <CheckCircle className="text-[#BED754] mr-2.5 w-5 h-5 flex-shrink-0" />
        <span className="font-heading font-semibold text-base text-[#44444E] dark:text-white uppercase tracking-wide">{label}</span>
    </div>
);

const Step: React.FC<{ number: string; title: string; text: string }> = ({ number, title, text }) => (
    <div className="flex items-start space-x-6 relative">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white flex items-center justify-center font-heading font-bold text-xl rounded-full shadow-lg z-10">
            {number}
        </div>
        <div className="pt-1">
            <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">{title}</h4>
            <p className="text-gray-700 font-medium">{text}</p>
        </div>
    </div>
);

export const PartnerWithUs: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="Partner with Us - Become a Solwaste Authorized Dealer"
        description="Join Solwaste's partner network. Become authorized dealer for organic waste composters. Attractive margins, marketing support, training programs. Expand your green business with India's leading waste management brand."
        keywords="solwaste partnership, composting machine dealership, OWC dealership India, waste management franchise, green business opportunity, authorized dealer, composting equipment distributor"
        type="website"
      />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop')] bg-cover bg-center"></div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10 py-24 sm:py-28 md:py-32 lg:py-36">
            <ScrollReveal variant="fadeInLeft" viewport={{ once: true, amount: 0.3 }}>
              <div className="max-w-4xl">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-3 sm:mb-4 md:mb-5 uppercase leading-[0.95]" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.9)' }}>
                    Partner With Us
                </h1>
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-white font-bold mb-4 sm:mb-5 md:mb-6 max-w-2xl lg:max-w-3xl leading-tight" style={{ textShadow: '0 3px 15px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>
                    Help us bring real waste solutions to more people.
                </p>
                <div className="w-20 h-1.5 bg-white mb-6"></div>
                <p className="text-lg text-white max-w-2xl leading-relaxed mb-6" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 1px 6px rgba(0,0,0,0.9)' }}>
                    We make composting machines. You know people who need them. Let's work together.
                </p>
                <button onClick={() => window.open('https://forms.gle/DWVkQwKJUFQUHMqv9', '_blank')} className="relative overflow-hidden min-h-[60px] xs:min-h-[64px] sm:min-h-[68px] flex items-center justify-center rounded-xl bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] active:scale-[0.98] hover:scale-[1.03] transition-all duration-300 touch-manipulation group">
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  
                  {/* Glow pulse */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900/10 animate-pulse"></div>
                  
                  {/* Button content */}
                  <div className="relative flex items-center justify-center gap-2.5 px-10 xs:px-12 sm:px-14 text-gray-900">
                    <span className="text-lg xs:text-xl sm:text-2xl font-bold uppercase tracking-wider group-hover:tracking-widest transition-all duration-300 leading-none">Apply Now</span>
                    <ArrowRight className="w-6 h-6 xs:w-7 xs:h-7 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                  </div>
                </button>
              </div>
            </ScrollReveal>
        </div>
      </section>

      {/* Is This You? */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="text-center mb-16">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 uppercase">Is This You?</h2>
                <div className="w-16 h-1 bg-gray-900 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {[
                    "Students",
                    "Consultants",
                    "Freelancers",
                    "Entrepreneurs",
                    "Sustainability Enthusiasts",
                    "Housing Society Connectors",
                    "Sales Professionals",
                    "Environmental Activists"
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
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
              <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 uppercase">A Partnership That <br/><span className="text-gray-700">Actually Makes Sense</span></h2>
                  <p className="text-xl text-gray-600 font-light">
                    No fluff. No empty promises. Just a clean, scalable way to earn while contributing to real environmental impact.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <BenefitCard 
                    icon={<Box size={32}/>}
                    title="Zero inventory responsibility"
                    text="Manufacturing, logistics, installation, warranties handled end to end by us."
                  />
                  <BenefitCard 
                    icon={<IndianRupee size={32}/>}
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
      <section className="py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
         <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-gray-900 rounded-full opacity-10 blur-[120px] hidden sm:block"></div>
         <div className="absolute -right-32 -top-32 w-96 h-96 bg-gray-900 rounded-full opacity-10 blur-[120px] hidden sm:block"></div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-10 uppercase text-gray-900 dark:text-white">What happens after you apply?</h2>
                      <div className="space-y-12 pl-4 border-l-4 border-gray-900/60">
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
                  
                  <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-sm shadow-2xl">
                        <div className="flex items-center mb-6">
                            <Rocket className="text-gray-900 mr-4" size={40} />
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold uppercase">Ready to Start?</h3>
                        </div>
                        <p className="text-gray-700 text-lg mb-8">
                            Join a network of changemakers who are turning waste management into a movement.
                        </p>
                        <button onClick={() => window.open('https://forms.gle/DWVkQwKJUFQUHMqv9', '_blank')} className="relative overflow-hidden w-full min-h-[64px] flex items-center justify-center rounded-xl bg-gray-900 backdrop-blur-md border-2 border-gray-700 hover:border-gray-600 shadow-2xl shadow-gray-900/20 hover:shadow-gray-900/40 active:scale-[0.98] hover:scale-[1.02] transition-all duration-300 touch-manipulation group">
                          {/* Corner accents */}
                          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white opacity-60"></div>
                          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white opacity-60"></div>
                          
                          {/* Animated gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Shine effect */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                          
                          {/* Button content */}
                          <div className="relative flex items-center justify-center gap-3 px-8 text-white">
                            <span className="text-xl sm:text-2xl font-bold uppercase tracking-wider transition-all duration-300 leading-none">Apply Now</span>
                            <ArrowRight className="w-6 h-6 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
                          </div>
                        </button>
                        <p className="text-center text-sm text-gray-500 mt-4">
                            Questions? <a href="mailto:hello@solwaste.co" className="underline hover:text-gray-900">Email us directly</a>
                        </p>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default PartnerWithUs;