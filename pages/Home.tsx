import React, { useEffect } from 'react';
import PartnersSection from '../components/PartnersSection';
import { SEO, addSchemaToPage, generateFAQSchema } from '../components/SEO';
import { 
  GovernmentMandate, 
  BWGInfo, 
  ImpactStats, 
  ProcessAndValues,
  HeroSlider,
  StickyCTA,
  ExpertiseSection
} from '../components/Home';

export const Home: React.FC = () => {
  // Add FAQ schema for SEO
  useEffect(() => {
    const faqSchema = generateFAQSchema([
      {
        question: "What is a Bulk Waste Generator (BWG) under SWM Rules 2026?",
        answer: "Under SWM Rules 2026 effective from April 1, 2026, Bulk Waste Generators (BWGs) include facilities with built-up area of 20,000 sq.m or more, OR water consumption of 40,000 litres/day or more, OR waste generation of 100 kg/day or more. BWGs must process organic waste on-site."
      },
      {
        question: "What composting solutions does Solwaste offer?",
        answer: "Solwaste offers four main composting solutions: EcoLoop (50-1000kg/day for hotels and societies), CompoGen (1.5-50 tons/day for industrial and municipal sectors), CyberSoil (2-10kg/day for offices), and Fahaka (large-scale industrial wet waste processing)."
      },
      {
        question: "How does on-site composting help with SWM Rules 2026 compliance?",
        answer: "On-site composting helps bulk waste generators comply with SWM Rules 2026 by processing organic waste at source, reducing landfill dependency, and meeting regulatory requirements. This prevents penalties and regulatory action while supporting ESG goals."
      },
      {
        question: "What industries can benefit from Solwaste composting solutions?",
        answer: "Hotels, gated communities, shopping malls, IT parks, hospitals, educational institutions, corporate offices, industrial facilities, and municipal corporations can all benefit from Solwaste's composting solutions tailored to their waste generation capacity."
      },
      {
        question: "What are the benefits of choosing Solwaste composting machines?",
        answer: "Solwaste composting machines offer zero odor with HEPA filtration, German engineering quality, IoT monitoring for real-time tracking, reduced waste management costs, SWM Rules 2026 compliance, ESG sustainability achievements, and proven ROI across 500+ installations."
      }
    ]);
    
    const schemaScript = addSchemaToPage(faqSchema);
    return () => {
      if (schemaScript && schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
    };
  }, []);

  return (
    <>
      <SEO 
        title="Composting Solutions for Large Waste Generators in India"
        description="Solwaste provides composting solutions for bulk waste generators in India - hotels, malls, IT parks, hospitals & institutions. On-site waste management that reduces costs, ensures compliance with SWM Rules 2026 (Effective 1 April 2026), and supports ESG goals. BWGs include facilities with 20,000+ sq.m area, 40,000L/day water use, or 100kg/day waste. Process waste at source with proven German engineering. Zero landfill, maximum ROI."
        keywords="composting solutions for large waste generators in India, bulk waste generators, BWG, SWM Rules 2026, organic waste management India, on-site composting, hotel waste management, mall waste solutions, IT park composting, hospital waste management, institutional composting, waste to wealth India, zero waste India, ESG sustainability, EcoLoop, CompoGen, CyberSoil, Fahaka, composting machines India"
        type="website"
      />
      
      {/* Sticky CTA Button */}
      <StickyCTA />
      
      {/* Hero Slider Section */}
      <div data-hero-section style={{ margin: 0, padding: 0, display: 'block', lineHeight: 0 }}>
        <HeroSlider />
      </div>

      {/* Homesol Image Section */}
      <section className="w-full h-screen -mt-px" style={{ margin: 0, padding: 0, display: 'block', lineHeight: 0 }}>
        <img 
          src="/homesol.png" 
          alt="Solwaste Solutions"
          className="w-full h-full object-cover"
          style={{ display: 'block', margin: 0, padding: 0 }}
          loading="lazy"
        />
      </section>

      <GovernmentMandate />
      <BWGInfo />
      <ImpactStats />

      {/* Our Expertise Section */}
      <ExpertiseSection />

      {/* Process & Values Section */}
      <ProcessAndValues />

      {/* Partners and Testimonials Section */}
      <PartnersSection />
    </>
  );
};
