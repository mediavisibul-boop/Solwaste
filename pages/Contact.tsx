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
       <div className="relative bg-gray-900 text-white min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80" 
            alt="Contact background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-800/80 to-gray-900/95"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl text-center relative z-10 py-16 sm:py-20 md:py-24 lg:py-28">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white uppercase leading-tight max-w-5xl mx-auto">GET IN TOUCH</h1>
          <p className="text-gray-300 mt-3 xs:mt-4 sm:mt-5 text-xs xs:text-sm sm:text-base md:text-lg px-4 sm:px-6 max-w-2xl mx-auto leading-relaxed">Start your journey towards zero waste today.</p>
        </div>
      </div>

      <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20">
            {/* Contact Info - Enhanced responsive design */}
            <div>
              <ScrollReveal variant="fadeInLeft" viewport={{ once: true, amount: 0.3 }}>
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 xs:mb-6 sm:mb-7">Contact Information</h2>
              </ScrollReveal>
              <StaggerContainer className="space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10" staggerDelay={0.1} viewport={{ once: true, amount: 0.2 }}>
                <StaggerItem>
                  <div className="flex items-start gap-4 xs:gap-5 sm:gap-6 p-4 xs:p-5 sm:p-6 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="bg-gray-100 min-w-[48px] min-h-[48px] xs:min-w-[52px] xs:min-h-[52px] sm:min-w-[56px] sm:min-h-[56px] md:min-w-[60px] md:min-h-[60px] p-3 xs:p-3.5 sm:p-4 rounded-xl text-gray-900 flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm xs:text-base sm:text-lg">Headquarters</h4>
                    <p className="text-gray-700 text-xs xs:text-sm sm:text-base leading-relaxed">
                      Worli, 1st floor, 264-265,<br/>
                      Dr. Annie Besant Road,<br/>
                      Worli, Mumbai, MH 400025
                    </p>
                  </div>
                </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-4 xs:gap-5 sm:gap-6 p-4 xs:p-5 sm:p-6 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="bg-gray-100 min-w-[48px] min-h-[48px] xs:min-w-[52px] xs:min-h-[52px] sm:min-w-[56px] sm:min-h-[56px] md:min-w-[60px] md:min-h-[60px] p-3 xs:p-3.5 sm:p-4 rounded-xl text-gray-900 flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm xs:text-base sm:text-lg">Phone</h4>
                    <a href="tel:+919429691308" className="block text-gray-700 text-sm xs:text-base sm:text-lg font-semibold hover:text-gray-900 transition-colors min-h-[44px] flex items-center touch-manipulation active:scale-98">+91-9429691308</a>
                    <p className="text-gray-600 text-xs xs:text-sm sm:text-base mt-1">Mon-Sat 9am to 6pm IST</p>
                  </div>
                </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-4 xs:gap-5 sm:gap-6 p-4 xs:p-5 sm:p-6 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="bg-gray-100 min-w-[48px] min-h-[48px] xs:min-w-[52px] xs:min-h-[52px] sm:min-w-[56px] sm:min-h-[56px] md:min-w-[60px] md:min-h-[60px] p-3 xs:p-3.5 sm:p-4 rounded-xl text-gray-900 flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm xs:text-base sm:text-lg">Email</h4>
                    <a href="mailto:hello@solwaste.co" className="block text-gray-700 text-sm xs:text-base sm:text-lg hover:text-gray-900 transition-colors min-h-[44px] flex items-center touch-manipulation active:scale-98 break-all font-medium">hello@solwaste.co</a>
                  </div>
                </div>
                </StaggerItem>
              </StaggerContainer>

              <ScrollReveal variant="scaleIn" delay={0.4} viewport={{ once: true, amount: 0.5 }}>
                <div className="mt-8 xs:mt-9 sm:mt-10 p-5 xs:p-6 sm:p-7 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl shadow-lg">
                <h4 className="font-bold text-gray-900 mb-3 text-xs xs:text-sm sm:text-base uppercase tracking-wider">Service Areas</h4>
                <p className="text-gray-700 text-xs xs:text-sm sm:text-base leading-relaxed">
                  We are delivering pan India with our comprehensive waste management solutions, serving clients across all states and union territories.
                </p>
              </div>
              </ScrollReveal>
            </div>

            {/* Form - Production-level mobile optimization */}
            <ScrollReveal variant="fadeInRight" delay={0.2} viewport={{ once: true, amount: 0.2 }}>
              <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6 xs:p-7 sm:p-8 rounded-2xl shadow-2xl border-2 border-gray-200 mt-6 lg:mt-0 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-5 xs:mb-6 flex items-center gap-3">
                <span className="w-2 h-10 bg-gray-900 rounded-full"></span>
                Request a Consultation
              </h3>
              <form className="space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 xs:gap-5.5 sm:gap-6 md:gap-7 lg:gap-8">
                  <div>
                    <label htmlFor="firstName" className="block text-xs xs:text-sm sm:text-base font-bold text-gray-800 mb-2">First Name <span className="text-red-500">*</span></label>
                    <input 
                      id="firstName"
                      type="text" 
                      required
                      className="w-full min-h-[44px] sm:min-h-[48px] px-3 xs:px-4 sm:px-4 py-2.5 xs:py-3 sm:py-3 bg-white border-2 border-gray-200 rounded-lg text-sm xs:text-base sm:text-base focus:outline-none focus:border-gray-900 focus:ring-4 focus:ring-gray-900/20 hover:border-gray-300 transition-all duration-200 touch-manipulation" 
                      placeholder="Rajesh" 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs xs:text-sm sm:text-base font-bold text-gray-800 mb-2">Last Name <span className="text-red-500">*</span></label>
                    <input 
                      id="lastName"
                      type="text" 
                      required
                      className="w-full min-h-[44px] sm:min-h-[48px] px-3 xs:px-4 sm:px-4 py-2.5 xs:py-3 sm:py-3 bg-white border-2 border-gray-200 rounded-lg text-sm xs:text-base sm:text-base focus:outline-none focus:border-gray-900 focus:ring-4 focus:ring-gray-900/20 hover:border-gray-300 transition-all duration-200 touch-manipulation" 
                      placeholder="Kumar" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs xs:text-sm sm:text-base font-bold text-gray-800 mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    inputMode="email"
                    autoComplete="email"
                    className="w-full min-h-[44px] sm:min-h-[48px] px-3 xs:px-4 sm:px-4 py-2.5 xs:py-3 sm:py-3 bg-white border-2 border-gray-200 rounded-lg text-sm xs:text-base sm:text-base focus:outline-none focus:border-gray-900 focus:ring-4 focus:ring-gray-900/20 hover:border-gray-300 transition-all duration-200 touch-manipulation" 
                    placeholder="rajesh@company.com" 
                  />
                </div>

                <div>
                   <label htmlFor="orgType" className="block text-xs xs:text-sm sm:text-base font-bold text-gray-800 mb-2">Organization Type <span className="text-red-500">*</span></label>
                   <div className="relative">
                     <select 
                       id="orgType"
                       required
                       className="w-full min-h-[44px] sm:min-h-[48px] px-3 xs:px-4 sm:px-4 py-2.5 xs:py-3 sm:py-3 bg-white border-2 border-gray-200 rounded-lg text-sm xs:text-base sm:text-base focus:outline-none focus:border-gray-900 focus:ring-4 focus:ring-gray-900/20 hover:border-gray-300 transition-all duration-200 touch-manipulation appearance-none cursor-pointer"
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
                  <label htmlFor="message" className="block text-xs xs:text-sm sm:text-base font-bold text-gray-800 mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message"
                    required
                    rows={5} 
                    className="w-full min-h-[120px] px-3 xs:px-4 sm:px-4 py-2.5 xs:py-3 sm:py-3 bg-white border-2 border-gray-200 rounded-lg text-sm xs:text-base sm:text-base focus:outline-none focus:border-gray-900 focus:ring-4 focus:ring-gray-900/20 hover:border-gray-300 transition-all duration-200 resize-y touch-manipulation" 
                    placeholder="Tell us about your waste management needs..."
                  ></textarea>
                </div>

                <button type="submit" className="relative overflow-hidden w-full group">
                  {/* Main button with glass morphism */}
                  <div className="relative min-h-[48px] xs:min-h-[52px] sm:min-h-[56px] flex items-center justify-center rounded-2xl bg-gray-900 border-2 border-gray-900 hover:bg-gray-800 shadow-2xl hover:shadow-3xl active:scale-[0.97] hover:scale-[1.02] transition-all duration-300 touch-manipulation">
                    
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"></div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/40 rounded-tr-lg group-hover:border-white/60 transition-colors"></div>
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/40 rounded-bl-lg group-hover:border-white/60 transition-colors"></div>
                    
                    {/* Button content */}
                    <div className="relative flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 px-6 xs:px-7 sm:px-8 z-10">
                      <span className="text-sm xs:text-base sm:text-lg font-heading font-black uppercase tracking-wide group-hover:tracking-wider text-white drop-shadow-sm transition-all duration-300 leading-none">Send Message</span>
                      <div className="relative">
                        <Send className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 text-white flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
                        {/* Icon glow */}
                        <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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