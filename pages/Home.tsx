import React from 'react';
import { SEO } from '../components/SEO';
import { MinimalHero } from '../components/Home/MinimalHero';
import { FeatureSection } from '../components/Home/FeatureSection';
import { ImageVideoSection } from '../components/Home/ImageVideoSection';
import { ProductDetailSection } from '../components/Home/ProductDetailSection';
import { ProductCardsSection } from '../components/Home/ProductCardsSection';
import { CommunitySection } from '../components/Home/CommunitySection';

const Home = () => {
  return (
    <>
      <SEO
        title="Solwaste - Sustainable Waste Management Solutions"
        description="Innovative and eco-friendly waste management solutions for a cleaner future. Explore our products and services."
        name="Solwaste"
        type="website"
      />
      <MinimalHero />
      <FeatureSection />
      <ImageVideoSection />
      <ProductDetailSection />
      <ProductCardsSection />
      <CommunitySection />
    </>
  );
};

export default Home;
