import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { OWC } from './pages/OWC';
import { Fahaka } from './pages/Fahaka';
import { Contact } from './pages/Contact';
import { Vision2047 } from './pages/Vision2047';
import { Sustainability } from './pages/Sustainability';
import { Careers } from './pages/Careers';
import { PartnerWithUs } from './pages/PartnerWithUs';
import { CaseStudies } from './pages/CaseStudies';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/owc" element={<OWC />} />
          <Route path="/fahaka" element={<Fahaka />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vision-2047" element={<Vision2047 />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partner" element={<PartnerWithUs />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;