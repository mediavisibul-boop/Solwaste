import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Government of Kerala", logo: "/partnerLogo/kerela.webp", location: "Kerala", type: "Government", capacity: "500kg/day" },
  { name: "LuLu Group", logo: "/partnerLogo/mall.webp", location: "Pan India", type: "Retail", capacity: "1.5T/day" },
  { name: "ONGC", logo: "/partnerLogo/ongc.webp", location: "Multiple Sites", type: "PSU", capacity: "2T/day" },
  { name: "Petronet LNG", logo: "/partnerLogo/petronet.webp", location: "Kochi", type: "Industrial", capacity: "800kg/day" },
  { name: "Adani, Ports and Logistics", logo: "/partnerLogo/adani.webp", location: "Gujarat", type: "Infrastructure", capacity: "3T/day" },
  { name: "Aizwal Municipal Corporation, Mizoram", logo: "/partnerLogo/logo4.webp", location: "Aizwal", type: "Municipal", capacity: "5T/day" },
  { name: "Assam Pollution Control Board, Nagaon, Assam", logo: "/partnerLogo/logo5.webp", location: "Nagaon", type: "Government", capacity: "1T/day" },
  { name: "Defence colony, Shankar Vihar, New Delhi", logo: "/partnerLogo/logo6.webp", location: "New Delhi", type: "Residential", capacity: "300kg/day" },
  { name: "Department of Urban Development & Housing Ziro Valley, Arunachal Pradesh", logo: "/partnerLogo/logo7.webp", location: "Ziro Valley", type: "Government", capacity: "400kg/day" },
  { name: "Kartarpur Land Port, Punjab", logo: "/partnerLogo/logo8.webp", location: "Punjab", type: "Infrastructure", capacity: "600kg/day" },
  { name: "Don Boscho University, Guwahati, Assam", logo: "/partnerLogo/logo9.webp", location: "Guwahati", type: "Education", capacity: "750kg/day" },
  { name: "Ruby Clinic", logo: "/partnerLogo/logo10.webp", location: "Bangalore", type: "Healthcare", capacity: "150kg/day" },
  { name: "Guntur Municipal Corporation, Andhra Pradesh", logo: "/partnerLogo/logo11.webp", location: "Guntur", type: "Municipal", capacity: "4T/day" },
  { name: "55 Engineer Regiment, Indian Army, Rajasthan", logo: "/partnerLogo/logo12.webp", location: "Rajasthan", type: "Defence", capacity: "1T/day" },
  { name: "Indira Gandhi Centre for Atomic Research, Kalpakkam, Tamil Nadu.", logo: "/partnerLogo/logo13.webp", location: "Kalpakkam", type: "Research", capacity: "500kg/day" },
  { name: "IndLab Equipments Pvt. Ltd.", logo: "/partnerLogo/logo14.webp", location: "Chennai", type: "Corporate", capacity: "200kg/day" },
  { name: "Kakinada Municipal Corporation, Andhra Pradesh", logo: "/partnerLogo/logo15.webp", location: "Kakinada", type: "Municipal", capacity: "3.5T/day" },
  { name: "Numaligarh Refinery Limited, Assam", logo: "/partnerLogo/logo16.webp", location: "Numaligarh", type: "Industrial", capacity: "2.5T/day" },
  { name: "Sam Foundation for Eco friendly Environmental, Chennai, TN", logo: "/partnerLogo/logo17.webp", location: "Chennai", type: "NGO", capacity: "350kg/day" },
  { name: "Telangana Institute of Medical Science, Hyderabad", logo: "/partnerLogo/logo18.webp", location: "Hyderabad", type: "Healthcare", capacity: "900kg/day" },
  { name: "Tirupati Municipal Corporation, Tirupati", logo: "/partnerLogo/logo19.webp", location: "Tirupati", type: "Municipal", capacity: "6T/day" },
];

const testimonials = [
  {
    quote: "Processing 100 kg daily, saving ₹15,000 monthly. Game-changer for our society.",
    name: "Rajesh Kumar",
    role: "Green Valley Apartments, Mumbai"
  },
  {
    quote: "Zero odour, minimal maintenance. Perfect for our resort's sustainability goals.",
    name: "Priya Malhotra",
    role: "Taj Resorts, Goa"
  },
  {
    quote: "IoT monitoring made compliance seamless across our 3 campuses.",
    name: "Amit Sharma",
    role: "Tech Corp India, Bangalore"
  },
  {
    quote: "Manages massive waste efficiently and educates our students too.",
    name: "Dr. Meera Reddy",
    role: "National University, Hyderabad"
  }
];

const PartnersSection = () => {
  const partnersRow1 = partners.slice(0, 11);
  const partnersRow2 = partners.slice(11, 21);
  
  const duplicatedPartnersRow1 = [...partnersRow1, ...partnersRow1, ...partnersRow1];
  const duplicatedPartnersRow2 = [...partnersRow2, ...partnersRow2, ...partnersRow2];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-100 border-t border-gray-200 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-10 md:mb-12"
          >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black">
                Trusted By Leading Organizations
              </h2>
          </motion.div>
          
          <div className="relative space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              
              <div className="overflow-hidden py-2 sm:py-3 md:py-4">
                  <motion.div
                      className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20"
                      animate={{ x: [0, -1 * (partnersRow1.length * 300)] }}
                      transition={{ x: { duration: 60, repeat: Infinity, ease: "linear" } }}
                  >
                      {duplicatedPartnersRow1.map((partner, index) => (
                          <div
                              key={`row1-${partner.name}-${index}`}
                              className="flex flex-col items-center justify-start min-w-[180px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[260px] group cursor-pointer"
                          >
                              <div className="h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] flex items-center justify-center mb-2">
                                  <img
                                      src={partner.logo}
                                      alt={partner.name}
                                      width="200"
                                      height="100"
                                      className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-110"
                                  />
                              </div>
                              <span className="opacity-0 group-hover:opacity-100 text-xs sm:text-sm font-medium text-black transition-opacity duration-300 text-center px-2 h-6 flex items-center justify-center">
                                  {partner.name}
                              </span>
                          </div>
                      ))}
                  </motion.div>
              </div>

              <div className="overflow-hidden py-2 sm:py-3 md:py-4">
                  <motion.div
                      className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20"
                      animate={{ x: [-1 * (partnersRow2.length * 300), 0] }}
                      transition={{ x: { duration: 55, repeat: Infinity, ease: "linear" } }}
                  >
                      {duplicatedPartnersRow2.map((partner, index) => (
                          <div
                              key={`row2-${partner.name}-${index}`}
                              className="flex flex-col items-center justify-start min-w-[180px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[260px] group cursor-pointer"
                          >
                              <div className="h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] flex items-center justify-center mb-2">
                                  <img
                                      src={partner.logo}
                                      alt={partner.name}
                                      width="200"
                                      height="100"
                                      className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-110"
                                  />
                              </div>
                              <span className="opacity-0 group-hover:opacity-100 text-xs sm:text-sm font-medium text-black transition-opacity duration-300 text-center px-2 h-6 flex items-center justify-center">
                                  {partner.name}
                              </span>
                          </div>
                      ))}
                  </motion.div>
              </div>

              <div className="overflow-hidden py-2 sm:py-3 md:py-4">
                  <motion.div
                      className="flex gap-4 sm:gap-6 md:gap-8"
                      animate={{ x: [0, -1 * (testimonials.length * 380)] }}
                      transition={{ x: { duration: 35, repeat: Infinity, ease: "linear" } }}
                  >
                      {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                          <div
                              key={`testimonial-${index}`}
                              className="relative min-w-[280px] sm:min-w-[320px] md:min-w-[360px] p-4 sm:p-5 bg-white rounded-lg sm:rounded-xl border-l-4 border-gray-300 hover:border-black transition-all hover:shadow-lg group cursor-pointer"
                          >
                              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-2 sm:mb-3 italic">
                                  "{testimonial.quote}"
                              </p>
                              <div className="pt-2 border-t border-gray-200">
                                  <p className="font-bold text-black text-xs sm:text-sm">{testimonial.name}</p>
                                  <p className="text-[10px] sm:text-xs text-gray-600 mt-1">{testimonial.role}</p>
                              </div>
                          </div>
                      ))}
                  </motion.div>
              </div>
          </div>
              
          <p className="text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8 md:mt-10 text-center px-4">
            Hotels • Builders • Institutions • Corporate Clients • Government Bodies
          </p>
      </div>
    </section>
  );
};

export default PartnersSection;
