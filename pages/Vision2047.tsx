import React from 'react';
import { SEO } from '../components/SEO';
import {
  HeroSection,
  MirrorSection,
  InvisibleCrisisSection,
  FailureOfIntentionSection,
  SatireTruthSection,
  LossSection,
  CallToActionSection
} from '../components/Vision2047';

export const Vision2047: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      <SEO 
        title="Vision 2047 - Building a Zero-Waste India by 2047"
        description="Solwaste's vision for India@100. Achieving zero landfills, 100% waste processing, decentralized waste management across all 4000+ cities. Join the mission for a waste-free independent India by 2047."
        keywords="Vision 2047, zero waste India, waste management vision, India@100, zero landfill, sustainable India 2047, waste-free cities, environmental mission, climate goals India"
        type="article"
      />
      
      <HeroSection />
      <MirrorSection />
      <InvisibleCrisisSection />
      <FailureOfIntentionSection />
      <SatireTruthSection />
      <LossSection />
      <CallToActionSection />
    </div>
  );
};