import React from 'react';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-20">
       <div className="bg-brand-dark text-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">GET IN TOUCH</h1>
          <p className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl px-4">Start your journey towards zero waste today.</p>
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-brown mb-6 sm:mb-8 md:mb-10">Contact Information</h2>
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                <div className="flex items-start">
                  <div className="bg-brand-light p-3 sm:p-4 rounded text-brand-gold mr-4 sm:mr-6 flex-shrink-0">
                    <MapPin size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2 text-lg sm:text-xl">Headquarters</h4>
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                      123 Green Tech Park, Industrial Sector 4<br/>
                      New Delhi, India 110020
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-light p-3 sm:p-4 rounded text-brand-gold mr-4 sm:mr-6 flex-shrink-0">
                    <Phone size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2 text-lg sm:text-xl">Phone</h4>
                    <a href="tel:+919876543210" className="block text-gray-800 text-base sm:text-lg font-medium hover:text-brand-gold transition-colors touch-manipulation">+91 987 654 3210</a>
                    <p className="text-gray-600 text-sm sm:text-base">Mon-Sat 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-light p-3 sm:p-4 rounded text-brand-gold mr-4 sm:mr-6 flex-shrink-0">
                    <Mail size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2 text-lg sm:text-xl">Email</h4>
                    <a href="mailto:info@solwaste.co" className="block text-gray-800 text-base sm:text-lg hover:text-brand-gold transition-colors touch-manipulation break-all">info@solwaste.co</a>
                    <a href="mailto:sales@solwaste.co" className="block text-gray-800 text-base sm:text-lg hover:text-brand-gold transition-colors touch-manipulation break-all">sales@solwaste.co</a>
                  </div>
                </div>
              </div>

              <div className="mt-10 sm:mt-12 md:mt-16 p-6 sm:p-8 md:p-10 bg-brand-light border border-gray-200 rounded">
                <h4 className="font-bold text-brand-brown mb-3 text-base sm:text-lg uppercase tracking-wide">Service Areas</h4>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  We currently serve clients across major metropolitan areas in India including Delhi NCR, Mumbai, Bangalore, Pune, and Hyderabad.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-2xl border border-gray-100 mt-8 lg:mt-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-brown mb-6 sm:mb-8">Request a Consultation</h3>
              <form className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label className="block text-sm sm:text-base font-bold text-gray-800 mb-2 sm:mb-3">First Name</label>
                    <input type="text" className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-brand-light border border-gray-200 rounded text-base sm:text-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all touch-manipulation" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-bold text-gray-800 mb-2 sm:mb-3">Last Name</label>
                    <input type="text" className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-brand-light border border-gray-200 rounded text-base sm:text-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all touch-manipulation" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-bold text-gray-800 mb-2 sm:mb-3">Email Address</label>
                  <input type="email" className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-brand-light border border-gray-200 rounded text-base sm:text-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all touch-manipulation" placeholder="john@company.com" />
                </div>

                <div>
                   <label className="block text-sm sm:text-base font-bold text-gray-800 mb-2 sm:mb-3">Organization Type</label>
                   <select className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-brand-light border border-gray-200 rounded text-base sm:text-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all touch-manipulation appearance-none bg-no-repeat bg-right pr-10" style={{backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundSize: "1.5em 1.5em"}}>
                     <option>Corporate Office</option>
                     <option>Residential Society</option>
                     <option>Educational Institution</option>
                     <option>Municipality</option>
                     <option>Other</option>
                   </select>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-bold text-gray-800 mb-2 sm:mb-3">Message</label>
                  <textarea rows={5} className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-brand-light border border-gray-200 rounded text-base sm:text-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all resize-y touch-manipulation" placeholder="Tell us about your waste management needs..."></textarea>
                </div>

                <Button className="w-full py-4 sm:py-5 text-lg sm:text-xl touch-manipulation">Send Message</Button>
                <p className="text-xs sm:text-sm text-center text-gray-500 mt-4 sm:mt-6">We respect your privacy. No spam.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};