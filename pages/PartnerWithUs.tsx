import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Box, DollarSign, BookOpen, ShieldCheck, TrendingUp, UserPlus, Phone, Rocket } from 'lucide-react';
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
      
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <div className="inline-block border border-brand-gold px-4 py-1 text-sm font-bold text-brand-gold uppercase tracking-widest mb-6 bg-black/50 backdrop-blur-md rounded-full">
                    Join The Movement
                </div>
                <h1 className="text-6xl md:text-8xl font-heading font-black mb-6 uppercase leading-none">
                    Partner With Us
                </h1>
                <p className="text-2xl md:text-3xl text-gray-200 font-bold mb-8 max-w-2xl">
                    Help us bring real waste solutions to more people.
                </p>
                <div className="w-24 h-2 bg-brand-gold mb-10"></div>
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-10 font-light">
                    We make composting machines. You know people who need them. Let's work together.
                </p>
                <Button className="py-5 px-10 text-xl" onClick={() => window.location.href = 'mailto:partners@solwaste.co'}>
                    Apply Now
                </Button>
            </motion.div>
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
                        <Button className="w-full py-5 text-xl uppercase tracking-widest shadow-xl" onClick={() => window.location.href = 'mailto:partners@solwaste.co'}>
                            Apply Now
                        </Button>
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