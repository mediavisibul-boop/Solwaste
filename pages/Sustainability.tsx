import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Leaf, Scale, Building2, Truck, Lightbulb, Users, FileText, RefreshCw, Mail, Phone, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';

const Section: React.FC<{ number: string; title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ number, title, children, icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="flex flex-col md:flex-row gap-6 md:gap-10 border-t border-gray-200 py-12 first:border-t-0"
  >
    <div className="md:w-1/4 flex-shrink-0">
        <div className="flex items-center space-x-3 text-brand-gold mb-3">
            {icon}
            <span className="font-heading font-bold text-4xl opacity-20">{number}</span>
        </div>
        <h3 className="text-2xl font-heading font-bold text-brand-brown uppercase leading-tight pr-4">
            {title}
        </h3>
    </div>
    <div className="md:w-3/4">
        <div className="text-lg text-gray-700 leading-relaxed font-light space-y-4">
            {children}
        </div>
    </div>
  </motion.div>
);

export const Sustainability: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="Sustainability & ESG Solutions for Large Waste Generators in India"
        description="Solwaste helps large waste generators achieve ESG and sustainability goals through on-site composting solutions. Carbon footprint reduction, circular economy principles, SWM compliance, and environmental impact metrics. Building a zero-waste future for India's hotels, malls, IT parks, hospitals, and institutions."
        keywords="sustainability report, ESG solutions India, composting solutions for large waste generators, environmental impact, ESG goals large organizations, circular economy India, carbon footprint reduction, zero waste India, sustainable waste management, green technology, climate action India, waste to wealth, SWM compliance"
        type="article"
      />
      {/* Header */}
      <div className="bg-gray-50 min-h-screen flex items-center border-b border-gray-200">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block border border-brand-gold px-3 py-1 text-xs font-bold text-brand-gold uppercase tracking-widest mb-6 bg-white">
                    Our Commitment
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-brown mb-8 uppercase max-w-4xl leading-none">
                    Environmental & <br/><span className="text-gray-400">Sustainability Commitment</span>
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                    <div className="md:col-span-2 text-xl text-gray-800 leading-relaxed font-medium">
                        <p className="mb-6">
                            At Solwaste Innovations Private Limited, sustainability is not an add-on — it is the foundation of our purpose, our technology, and our operations. We are committed to advancing responsible waste management, environmental protection, and resource efficiency through innovation, integrity, and measurable impact.
                        </p>
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">
                            Last Updated: 12 December 2025
                        </p>
                    </div>
                    <div className="bg-white p-6 border-l-4 border-brand-gold shadow-sm">
                        <p className="text-gray-600 text-sm italic">
                            "This commitment outlines how we integrate environmental responsibility into our products, services, operations, partnerships, and decision-making processes."
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-20">
          <Section number="01" title="Our Sustainability Vision" icon={<Eye size={28} />}>
              <p>
                We envision a future where waste is treated as a valuable resource, not a liability. Our goal is to enable cleaner cities, healthier communities, and resilient ecosystems by deploying smart, scalable, and environmentally responsible waste-management solutions.
              </p>
              <p>
                Solwaste aligns its sustainability efforts with globally recognised environmental principles and national sustainability priorities, while maintaining a practical, outcome-driven approach.
              </p>
          </Section>

          <Section number="02" title="Environmental Responsibility in Our Solutions" icon={<Leaf size={28} />}>
              <p>Our products and services are designed to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li>Reduce the environmental impact of organic and solid waste</li>
                  <li>Minimise landfill dependency and uncontrolled dumping</li>
                  <li>Lower greenhouse gas emissions associated with traditional waste handling</li>
                  <li>Promote circular-economy principles through recovery, reuse, and resource efficiency</li>
                  <li>Enable decentralised, on-site waste processing wherever feasible</li>
              </ul>
              <p>
                We continuously evaluate the environmental footprint of our technologies and seek opportunities to improve efficiency, durability, and performance.
              </p>
          </Section>

          <Section number="03" title="Compliance & Regulatory Responsibility" icon={<Scale size={28} />}>
              <p>
                Solwaste is committed to complying with all applicable environmental, health, and safety laws and regulations in the jurisdictions where we operate, including those related to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li>Waste management and environmental protection</li>
                  <li>Air, water, and soil safety</li>
                  <li>Occupational health and safety</li>
                  <li>Local, state, national, and international regulatory standards</li>
              </ul>
              <p>
                Where regulations evolve, we proactively adapt our practices to meet or exceed compliance requirements.
              </p>
          </Section>

          <Section number="04" title="Responsible Operations" icon={<Building2 size={28} />}>
              <p>Within our own operations, we strive to reduce environmental impact by:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li>Optimising energy and water usage in offices and facilities</li>
                  <li>Encouraging responsible waste segregation and recycling practices internally</li>
                  <li>Reducing paper use through digital workflows</li>
                  <li>Promoting sustainable procurement and supplier practices</li>
                  <li>Implementing health, safety, and environmental controls at operational sites</li>
              </ul>
              <p>Environmental performance is considered an integral part of operational excellence.</p>
          </Section>

          <Section number="05" title="Supply Chain & Partner Expectations" icon={<Truck size={28} />}>
              <p>
                We work with suppliers, vendors, contractors, and partners who share our commitment to ethical conduct and environmental responsibility.
              </p>
              <p>Where practical, we encourage our partners to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li>Adopt environmentally responsible manufacturing and sourcing practices</li>
                  <li>Comply with applicable environmental laws and standards</li>
                  <li>Minimise waste, emissions, and resource consumption</li>
                  <li>Support transparency and accountability in sustainability practices</li>
              </ul>
          </Section>

          <Section number="06" title="Innovation, Research & Continuous Improvement" icon={<Lightbulb size={28} />}>
              <p>Innovation is central to our sustainability mission. Solwaste invests in research, development, and continuous improvement to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li>Enhance the environmental performance of our solutions</li>
                  <li>Incorporate emerging technologies and best practices</li>
                  <li>Adapt solutions to diverse geographic, climatic, and operational conditions</li>
                  <li>Support long-term environmental and economic viability</li>
              </ul>
              <p>We believe sustainability must be measurable, scalable, and practical.</p>
          </Section>

          <Section number="07" title="Community & Stakeholder Engagement" icon={<Users size={28} />}>
              <p>Sustainable waste management requires collaboration. Solwaste engages with:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li>Local communities and residential societies</li>
                  <li>Commercial and institutional clients</li>
                  <li>Municipal bodies and public authorities</li>
                  <li>Industry stakeholders and sustainability networks</li>
              </ul>
              <p>We support awareness, education, and responsible behaviour related to waste reduction, segregation, and environmental stewardship.</p>
          </Section>

          <Section number="08" title="Transparency & Accountability" icon={<FileText size={28} />}>
              <p>
                We are committed to transparent communication regarding our sustainability approach and performance. Where appropriate, we track and evaluate environmental metrics related to our operations and solutions.
              </p>
              <p>
                We recognise that sustainability is an ongoing journey and remain accountable for continuous progress.
              </p>
          </Section>

          <Section number="09" title="Review & Continuous Commitment" icon={<RefreshCw size={28} />}>
              <p>
                This Environmental & Sustainability Commitment is reviewed periodically to reflect changes in business operations, technology, and regulatory expectations.
              </p>
              <p>
                By integrating environmental responsibility into every level of our organisation, Solwaste aims to deliver meaningful, long-term impact for people, communities, and the planet.
              </p>
          </Section>
      </div>

      {/* Footer Contact Section */}
      <div className="bg-brand-dark text-white py-20">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                      <h2 className="text-4xl font-heading font-bold uppercase mb-6">Get in Touch</h2>
                      <p className="text-gray-400 mb-8 text-lg">
                          For questions or information regarding this Environmental & Sustainability Commitment, please contact us.
                      </p>
                      
                      <div className="space-y-6">
                          <div className="flex items-start">
                              <MapPin className="text-brand-gold mt-1 mr-4 flex-shrink-0" />
                              <p className="text-gray-300">
                                  Solwaste Innovations Private Limited<br/>
                                  1st Floor, 264–265, Dr. Annie Besant Road,<br/>
                                  Worli, Mumbai, Maharashtra – 400025, India
                              </p>
                          </div>
                          <div className="flex items-center">
                              <Mail className="text-brand-gold mr-4" />
                              <a href="mailto:privacy@solwaste.co" className="text-gray-300 hover:text-white transition-colors">privacy@solwaste.co</a>
                          </div>
                          <div className="flex items-center">
                              <Phone className="text-brand-gold mr-4" />
                              <a href="tel:+919429691308" className="text-gray-300 hover:text-white transition-colors">+91 9429691308</a>
                          </div>
                      </div>
                  </div>
                  <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
                      <p className="text-xl font-heading font-bold mb-4">"Sustainability starts with a decision."</p>
                      <p className="text-gray-400">Join us in creating a zero-landfill future.</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};