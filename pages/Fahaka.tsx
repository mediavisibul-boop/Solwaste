import React from 'react';
import { SEO } from '../components/SEO';
import { FahakaHero, ProblemSolution, ProcessFlow, TechSpecs } from '../components/Fahaka';

export const Fahaka: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white min-h-screen">
      <SEO 
        title="Fahaka - Universal Waste Decomposer for Large Generators | Food, Plastic & Sanitary"
        description="Revolutionary Fahaka technology for large waste generators in India. Processes food waste, plastic bottles & sanitary waste into sterile resources. Ideal for hospitals, institutions, food courts, and municipalities. Plasma pyrolysis technology, 850°C thermal decomposition, zero landfill, complete compliance. The future of sustainable waste management."
        keywords="Fahaka waste processor, universal waste decomposer, composting solutions for bulk waste generators, BWG, hospital waste management, institutional waste processor, plasma pyrolysis India, plastic waste management, sanitary waste disposal, biomedical waste, mixed waste processing, thermal decomposition, zero landfill, zero waste India, advanced waste technology, SWM Rules 2026 compliance, ESG sustainability"
        type="product"
      />
      
      <FahakaHero />
      <ProblemSolution />
      <ProcessFlow />
      <TechSpecs />
    </div>
  );
};