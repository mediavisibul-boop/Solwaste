import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/", description: "Welcome to Solwaste - Leading organic waste management solutions" },
        { name: "Contact Us", path: "/contact", description: "Get in touch with us for quotes, consultations, and support" },
      ]
    },
    {
      title: "Products & Solutions",
      links: [
        { name: "OWC (Organic Waste Composters)", path: "/owc", description: "EcoLoop, CompoGen, and CyberSoil composting solutions" },
        { name: "Fahaka", path: "/fahaka", description: "Universal waste decomposer for food, plastic, and sanitary waste" },
      ]
    },
    {
      title: "Company Information",
      links: [
        { name: "About Us", path: "/about", description: "Learn about our mission, vision, and commitment to sustainability" },
        { name: "Vision 2047", path: "/vision-2047", description: "Our roadmap towards a zero-waste India" },
        { name: "Sustainability", path: "/sustainability", description: "Our ESG goals and environmental impact metrics" },
        { name: "Case Studies", path: "/case-studies", description: "Successful implementations across India" },
        { name: "Gallery", path: "/gallery", description: "View our installations and projects in action" },
      ]
    },
    {
      title: "Partnerships & Careers",
      links: [
        { name: "Press and Media", path: "/press-media", description: "Latest news, installations, and media coverage" },
        { name: "Partner With Us", path: "/partner", description: "Become a Solwaste partner and join our mission" },
        { name: "Careers", path: "/careers", description: "Explore job opportunities at Solwaste" },
      ]
    },
    {
      title: "Legal & Policies",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy", description: "How we collect, use, and protect your information" },
        { name: "Accessibility Statement", path: "/accessibility-statement", description: "Our commitment to digital accessibility for all" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Sitemap - Solwaste Innovations"
        description="Navigate through all pages of Solwaste website. Quick access to products, company information, resources, and policies."
        keywords="sitemap, website navigation, site structure, page directory"
        type="website"
      />
      
      {/* Header */}
      <div className="bg-gray-900 text-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">Sitemap</h1>
          <p className="text-gray-300 text-base sm:text-lg">Navigate through all pages of our website</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          
          {sitemapSections.map((section, index) => (
            <section key={index} className="mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-5 sm:mb-6 border-b-2 border-gray-900 pb-2">
                {section.title}
              </h2>
              <div className="space-y-5 sm:space-y-6">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="group">
                    <Link 
                      to={link.path} 
                      className="block hover:translate-x-2 transition-transform duration-200"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-700 group-hover:text-gray-900 transition-colors mb-1">
                        {link.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {link.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Contact Information */}
          <section className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 border-t-2 border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-5 sm:mb-6">
              Need Help?
            </h2>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                Can't find what you're looking for? Get in touch with us:
              </p>
              <div className="space-y-2 text-base sm:text-lg text-gray-700">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:hello@solwaste.co" className="text-gray-900 hover:underline">
                    hello@solwaste.co
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+919429691308" className="text-gray-900 hover:underline">
                    +91-9429691308
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> Worli, 1st floor, 264-265, Dr. Annie Besant Road, Worli, Mumbai, MH 400025
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Sitemap;
