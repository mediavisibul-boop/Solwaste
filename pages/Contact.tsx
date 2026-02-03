import React from 'react';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock, Send } from '../components/Icons';
import { SEO } from '../components/SEO';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

export const Contact: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Contact Us - Get Quote for Waste Management Solutions"
        description="Contact Solwaste for organic waste management solutions. Request consultation for EcoLoop, CompoGen, CyberSoil or Fahaka. Serving Delhi NCR, Mumbai, Bangalore, Pune, Hyderabad. Call +91-987-654-3210"
        keywords="contact solwaste, waste management quote, composter price, OWC enquiry, waste management consultation, composting machine dealers, India waste solutions"
        type="website"
      />
       <div className="relative bg-brand-dark text-white min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80" 
            alt="Contact background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-olive-dark/80 to-brand-dark/95"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10 py-24 sm:py-28 md:py-32 lg:py-36">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight max-w-6xl mx-auto">GET IN TOUCH</h1>
          <p className="text-gray-300 mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-8 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">Start your journey towards zero waste today.</p>
        </div>
      </div>

      <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20">
            {/* Contact Info - Enhanced responsive design */}
            <div>
              <ScrollReveal variant="fadeInLeft" viewport={{ once: true, amount: 0.3 }}>
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-brown mb-5 xs:mb-6 sm:mb-7 md:mb-8 lg:mb-10">Contact Information</h2>
              </ScrollReveal>
              <StaggerContainer className="space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10" staggerDelay={0.1} viewport={{ once: true, amount: 0.2 }}>
                <StaggerItem>
                  <div className="flex items-start gap-4 xs:gap-5 sm:gap-6 p-4 xs:p-5 sm:p-6 rounded-xl hover:bg-brand-light/50 transition-colors">
                  <div className="bg-brand-light min-w-[48px] min-h-[48px] xs:min-w-[52px] xs:min-h-[52px] sm:min-w-[56px] sm:min-h-[56px] md:min-w-[60px] md:min-h-[60px] p-3 xs:p-3.5 sm:p-4 rounded-xl text-brand-gold flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-brand-brown mb-2 xs:mb-2.5 text-base xs:text-lg sm:text-xl md:text-2xl">Headquarters</h4>
                    <p className="text-gray-700 text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
                      Worli, 1st floor, 264-265,<br/>
                      Dr. Annie Besant Road,<br/>
                      Worli, Mumbai, MH 400025
                    </p>
                  </div>
                </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-4 xs:gap-5 sm:gap-6 p-4 xs:p-5 sm:p-6 rounded-xl hover:bg-brand-light/50 transition-colors">
                  <div className="bg-brand-light min-w-[48px] min-h-[48px] xs:min-w-[52px] xs:min-h-[52px] sm:min-w-[56px] sm:min-h-[56px] md:min-w-[60px] md:min-h-[60px] p-3 xs:p-3.5 sm:p-4 rounded-xl text-brand-gold flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-brand-brown mb-2 xs:mb-2.5 text-base xs:text-lg sm:text-xl md:text-2xl">Phone</h4>
                    <a href="tel:+919429691308" className="block text-gray-700 text-sm xs:text-base sm:text-lg md:text-xl font-semibold hover:text-brand-gold transition-colors min-h-[44px] flex items-center touch-manipulation active:scale-98">+91-9429691308</a>
                    <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg mt-1">Mon-Sat 9am to 6pm IST</p>
                  </div>
                </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-4 xs:gap-5 sm:gap-6 p-4 xs:p-5 sm:p-6 rounded-xl hover:bg-brand-light/50 transition-colors">
                  <div className="bg-brand-light min-w-[48px] min-h-[48px] xs:min-w-[52px] xs:min-h-[52px] sm:min-w-[56px] sm:min-h-[56px] md:min-w-[60px] md:min-h-[60px] p-3 xs:p-3.5 sm:p-4 rounded-xl text-brand-gold flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-brand-brown mb-2 xs:mb-2.5 text-base xs:text-lg sm:text-xl md:text-2xl">Email</h4>
                    <a href="mailto:hello@solwaste.co" className="block text-gray-700 text-sm xs:text-base sm:text-lg md:text-xl hover:text-brand-gold transition-colors min-h-[44px] flex items-center touch-manipulation active:scale-98 break-all font-medium">hello@solwaste.co</a>
                  </div>
                </div>
                </StaggerItem>
              </StaggerContainer>

              <ScrollReveal variant="scaleIn" delay={0.4} viewport={{ once: true, amount: 0.5 }}>
                <div className="mt-8 xs:mt-9 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 p-5 xs:p-6 sm:p-7 md:p-8 lg:p-10 bg-gradient-to-br from-brand-light to-white border-2 border-gray-200 rounded-xl shadow-lg">
                <h4 className="font-bold text-brand-brown mb-3 xs:mb-3.5 sm:mb-4 text-sm xs:text-base sm:text-lg md:text-xl uppercase tracking-wider">Service Areas</h4>
                <p className="text-gray-700 text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
                  We are delivering pan India with our comprehensive waste management solutions, serving clients across all states and union territories.
                </p>
              </div>
              </ScrollReveal>
            </div>

            {/* Form - Production-level mobile optimization */}
            <ScrollReveal variant="fadeInRight" delay={0.2} viewport={{ once: true, amount: 0.2 }}>
              <div className="bg-gradient-to-br from-brand-light/50 via-white to-brand-light/30 p-6 xs:p-7 sm:p-8 md:p-9 lg:p-10 xl:p-12 rounded-2xl shadow-2xl border-2 border-brand-gold/20 mt-6 lg:mt-0 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-300">
              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-brand-brown mb-5 xs:mb-6 sm:mb-7 md:mb-8 flex items-center gap-3">
                <span className="w-2 h-10 bg-brand-gold rounded-full"></span>
                Request a Consultation
              </h3>
              <form className="space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 xs:gap-5.5 sm:gap-6 md:gap-7 lg:gap-8">
                  <div>
                    <label htmlFor="firstName" className="block text-sm xs:text-base sm:text-lg font-bold text-gray-800 mb-2 xs:mb-2.5 sm:mb-3">First Name <span className="text-red-500">*</span></label>
                    <input 
                      id="firstName"
                      type="text" 
                      required
                      className="w-full min-h-[48px] sm:min-h-[52px] md:min-h-[56px] px-4 xs:px-4.5 sm:px-5 md:px-6 py-3.5 xs:py-4 sm:py-4.5 md:py-5 bg-brand-light border-2 border-gray-200 rounded-lg text-base xs:text-lg sm:text-xl focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20 hover:border-gray-300 transition-all duration-200 touch-manipulation" 
                      placeholder="Rajesh" 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm xs:text-base sm:text-lg font-bold text-gray-800 mb-2 xs:mb-2.5 sm:mb-3">Last Name <span className="text-red-500">*</span></label>
                    <input 
                      id="lastName"
                      type="text" 
                      required
                      className="w-full min-h-[48px] sm:min-h-[52px] md:min-h-[56px] px-4 xs:px-4.5 sm:px-5 md:px-6 py-3.5 xs:py-4 sm:py-4.5 md:py-5 bg-brand-light border-2 border-gray-200 rounded-lg text-base xs:text-lg sm:text-xl focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20 hover:border-gray-300 transition-all duration-200 touch-manipulation" 
                      placeholder="Kumar" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm xs:text-base sm:text-lg font-bold text-gray-800 mb-2 xs:mb-2.5 sm:mb-3">Email Address <span className="text-red-500">*</span></label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    inputMode="email"
                    autoComplete="email"
                    className="w-full min-h-[48px] sm:min-h-[52px] md:min-h-[56px] px-4 xs:px-4.5 sm:px-5 md:px-6 py-3.5 xs:py-4 sm:py-4.5 md:py-5 bg-brand-light border-2 border-gray-200 rounded-lg text-base xs:text-lg sm:text-xl focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20 hover:border-gray-300 transition-all duration-200 touch-manipulation" 
                    placeholder="rajesh@company.com" 
                  />
                </div>

                <div>
                   <label htmlFor="orgType" className="block text-sm xs:text-base sm:text-lg font-bold text-gray-800 mb-2 xs:mb-2.5 sm:mb-3">Organization Type <span className="text-red-500">*</span></label>
                   <div className="relative">
                     <select 
                       id="orgType"
                       required
                       className="w-full min-h-[48px] sm:min-h-[52px] md:min-h-[56px] px-4 xs:px-4.5 sm:px-5 md:px-6 py-3.5 xs:py-4 sm:py-4.5 md:py-5 bg-brand-light border-2 border-gray-200 rounded-lg text-base xs:text-lg sm:text-xl focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20 hover:border-gray-300 transition-all duration-200 touch-manipulation appearance-none cursor-pointer"
                       style={{backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 1rem center", backgroundSize: "1.5em 1.5em", backgroundRepeat: "no-repeat", paddingRight: "3rem"}}
                     >
                       <option value="">Select organization type</option>
                       <option>Corporate Office</option>
                       <option>Residential Society</option>
                       <option>Educational Institution</option>
                       <option>Municipality</option>
                       <option>Hotel/Restaurant</option>
                       <option>Hospital</option>
                       <option>Other</option>
                     </select>
                   </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm xs:text-base sm:text-lg font-bold text-gray-800 mb-2 xs:mb-2.5 sm:mb-3">Message <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message"
                    required
                    rows={5} 
                    className="w-full min-h-[120px] sm:min-h-[140px] px-4 xs:px-4.5 sm:px-5 md:px-6 py-3.5 xs:py-4 sm:py-4.5 md:py-5 bg-brand-light border-2 border-gray-200 rounded-lg text-base xs:text-lg sm:text-xl focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20 hover:border-gray-300 transition-all duration-200 resize-y touch-manipulation" 
                    placeholder="Tell us about your waste management needs..."
                  ></textarea>
                </div>

                <button type="submit" className="relative overflow-hidden w-full group">
                  {/* Main button with glass morphism */}
                  <div className="relative min-h-[56px] xs:min-h-[60px] sm:min-h-[64px] md:min-h-[68px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold/90 to-brand-olive/90 backdrop-blur-md border-2 border-brand-gold/40 hover:border-brand-gold shadow-2xl shadow-brand-gold/20 hover:shadow-brand-gold/40 active:scale-[0.97] hover:scale-[1.02] transition-all duration-300 touch-manipulation">
                    
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-olive to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"></div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/40 rounded-tr-lg group-hover:border-white/60 transition-colors"></div>
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/40 rounded-bl-lg group-hover:border-white/60 transition-colors"></div>
                    
                    {/* Button content */}
                    <div className="relative flex items-center justify-center gap-3 xs:gap-3.5 sm:gap-4 px-6 xs:px-7 sm:px-8 z-10">
                      <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-heading font-black uppercase tracking-wide group-hover:tracking-wider text-brand-dark dark:text-gray-900 drop-shadow-sm transition-all duration-300 leading-none">Send Message</span>
                      <div className="relative">
                        <Send className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-brand-dark flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
                        {/* Icon glow */}
                        <div className="absolute inset-0 bg-brand-dark/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </button>
                <p className="text-xs xs:text-sm sm:text-base text-center text-gray-500 mt-3 xs:mt-4 sm:mt-5">
                  We respect your privacy. No spam.
                </p>
              </form>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};