import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';

// Lazy load all secondary pages for better performance
const OWC = lazy(() => import('./pages/OWC').then(m => ({ default: m.OWC })));
const Fahaka = lazy(() => import('./pages/Fahaka').then(m => ({ default: m.Fahaka })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Vision2047 = lazy(() => import('./pages/Vision2047').then(m => ({ default: m.Vision2047 })));
const Sustainability = lazy(() => import('./pages/Sustainability').then(m => ({ default: m.Sustainability })));
const Careers = lazy(() => import('./pages/Careers').then(m => ({ default: m.Careers })));
const PartnerWithUs = lazy(() => import('./pages/PartnerWithUs').then(m => ({ default: m.PartnerWithUs })));
const CaseStudies = lazy(() => import('./pages/CaseStudies').then(m => ({ default: m.CaseStudies })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const AccessibilityStatement = lazy(() => import('./pages/AccessibilityStatement'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const PressMedia = lazy(() => import('./pages/PressMedia'));
const Gallery = lazy(() => import('./pages/Gallery'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-light to-white">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-brand-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-brand-dark font-heading text-lg">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/owc" element={<OWC />} />
            <Route path="/fahaka" element={<Fahaka />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision-2047" element={<Vision2047 />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/partner" element={<PartnerWithUs />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/press-media" element={<PressMedia />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;