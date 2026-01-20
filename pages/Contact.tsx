import React from 'react';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20">
       <div className="bg-brand-dark text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black uppercase">GET IN TOUCH</h1>
          <p className="text-gray-300 mt-6 text-xl">Start your journey towards zero waste today.</p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-brand-brown mb-10">Contact Information</h2>
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="bg-brand-light p-4 rounded text-brand-gold mr-6">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2 text-xl">Headquarters</h4>
                    <p className="text-gray-800 text-lg leading-relaxed">
                      123 Green Tech Park, Industrial Sector 4<br/>
                      New Delhi, India 110020
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-light p-4 rounded text-brand-gold mr-6">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2 text-xl">Phone</h4>
                    <p className="text-gray-800 text-lg font-medium">+91 987 654 3210</p>
                    <p className="text-gray-600 text-base">Mon-Sat 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-light p-4 rounded text-brand-gold mr-6">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-2 text-xl">Email</h4>
                    <p className="text-gray-800 text-lg">info@solwaste.co</p>
                    <p className="text-gray-800 text-lg">sales@solwaste.co</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-10 bg-brand-light border border-gray-200 rounded">
                <h4 className="font-bold text-brand-brown mb-3 text-lg uppercase tracking-wide">Service Areas</h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We currently serve clients across major metropolitan areas in India including Delhi NCR, Mumbai, Bangalore, Pune, and Hyderabad.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 md:p-12 rounded-xl shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-brand-brown mb-8">Request a Consultation</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-base font-bold text-gray-800 mb-3">First Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-brand-light border border-gray-200 rounded text-lg focus:outline-none focus:border-brand-gold transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-base font-bold text-gray-800 mb-3">Last Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-brand-light border border-gray-200 rounded text-lg focus:outline-none focus:border-brand-gold transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-base font-bold text-gray-800 mb-3">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 bg-brand-light border border-gray-200 rounded text-lg focus:outline-none focus:border-brand-gold transition-colors" placeholder="john@company.com" />
                </div>

                <div>
                   <label className="block text-base font-bold text-gray-800 mb-3">Organization Type</label>
                   <select className="w-full px-5 py-4 bg-brand-light border border-gray-200 rounded text-lg focus:outline-none focus:border-brand-gold transition-colors">
                     <option>Corporate Office</option>
                     <option>Residential Society</option>
                     <option>Educational Institution</option>
                     <option>Municipality</option>
                     <option>Other</option>
                   </select>
                </div>

                <div>
                  <label className="block text-base font-bold text-gray-800 mb-3">Message</label>
                  <textarea rows={5} className="w-full px-5 py-4 bg-brand-light border border-gray-200 rounded text-lg focus:outline-none focus:border-brand-gold transition-colors" placeholder="Tell us about your waste management needs..."></textarea>
                </div>

                <Button className="w-full py-5 text-xl">Send Message</Button>
                <p className="text-sm text-center text-gray-500 mt-6">We respect your privacy. No spam.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};