import React from 'react';
import { SEO } from '../components/SEO';

const AccessibilityStatement = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Accessibility Statement - Solwaste Innovations"
        description="Solwaste's commitment to digital accessibility for people of all abilities. Learn about our accessibility features, standards, and how to request assistance."
        keywords="accessibility statement, WCAG compliance, digital accessibility, inclusive design, assistive technology"
        type="article"
      />
      
      {/* Header */}
      <div className="bg-brand-dark text-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <p className="text-brand-gold text-sm sm:text-base font-semibold uppercase tracking-wider mb-3">Inclusion & Access</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold">Accessibility Statement</h1>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              Solwaste Innovations Private Limited is committed to ensuring digital accessibility for people of all abilities. We continuously work to improve the accessibility and usability of our website, mobile application, and digital services, so that everyone can access information, products, and services without barriers.
            </p>

            <div className="bg-gray-50 border-l-4 border-brand-gold p-4 sm:p-6 mb-8">
              <p className="text-sm sm:text-base font-semibold text-gray-800 mb-2">Last Updated: 12 December 2025</p>
              <p className="text-sm sm:text-base text-gray-700">
                This Accessibility Statement applies to our website <a href="https://www.solwaste.co" className="text-brand-gold hover:underline">www.solwaste.co</a> and our mobile application <strong>Solwaste</strong>.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mb-4 border-b-2 border-brand-gold pb-2">1. Our Commitment to Accessibility</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                We believe accessibility is an essential part of inclusion, sustainability, and responsible innovation. Solwaste strives to ensure that individuals with disabilities (including visual, auditory, motor, cognitive, and neurological impairments) can access our digital platforms with ease and dignity.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Our approach to accessibility is guided by internationally recognised standards and best practices.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mb-4 border-b-2 border-brand-gold pb-2">2. Accessibility Standards</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                We aim to conform, wherever reasonably possible, to the following accessibility standards:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700 mb-4">
                <li><strong>Web Content Accessibility Guidelines (WCAG) 2.1</strong> – Level AA</li>
                <li>Principles of <strong>Perceivable, Operable, Understandable, and Robust (POUR)</strong></li>
                <li>Relevant accessibility guidance under applicable Indian and international laws</li>
              </ul>
              <p className="text-base sm:text-lg text-gray-700">
                While we strive for full compliance, some content or features may not yet be fully accessible due to technical limitations or legacy design constraints.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mb-4 border-b-2 border-brand-gold pb-2">3. Accessibility Features</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                Our digital platforms are designed with accessibility in mind and may include the following features:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700">
                <li>Clear and consistent navigation structure</li>
                <li>Readable fonts with adequate contrast ratios</li>
                <li>Responsive design for different devices and screen sizes</li>
                <li>Compatibility with common screen readers and assistive technologies</li>
                <li>Keyboard navigability for core functions</li>
                <li>Descriptive text for links and important interface elements</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mb-4 border-b-2 border-brand-gold pb-2">4. Ongoing Efforts & Improvements</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                Accessibility is an ongoing process. We regularly review our website and application to identify and address accessibility gaps. Our teams consider accessibility during design, development, content creation, and platform updates.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Where third-party tools or platforms are used (such as analytics, payment gateways, or embedded services), we encourage vendors to meet accessibility standards; however, we may have limited control over their accessibility features.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mb-4 border-b-2 border-brand-gold pb-2">5. Known Limitations</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                Despite our best efforts, some areas of our digital platforms may not yet be fully accessible. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700 mb-4">
                <li>Older content or documents not originally designed with accessibility standards</li>
                <li>Third-party integrations beyond our direct control</li>
                <li>Certain multimedia content lacking captions or transcripts</li>
              </ul>
              <p className="text-base sm:text-lg text-gray-700">
                We are actively working to address these limitations wherever feasible.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mb-4 border-b-2 border-brand-gold pb-2">6. Feedback & Assistance</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                We welcome feedback on the accessibility of our digital platforms. If you experience any difficulty accessing content, using features, or navigating our website or mobile app, please let us know.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                You may contact us for accessibility support or to report an issue:
              </p>
              <div className="bg-brand-dark text-white p-6 rounded-lg mb-4">
                <p className="text-lg font-semibold mb-3">Accessibility & Data Protection Officer</p>
                <p className="mb-2">Solwaste Innovations Private Limited</p>
                <p className="mb-2">1st Floor, 264–265, Dr. Annie Besant Road, Worli, Mumbai, Maharashtra – 400025, India</p>
                <p className="mb-2">
                  <strong>Email:</strong> <a href="mailto:privacy@solwaste.co" className="text-brand-gold hover:underline">privacy@solwaste.co</a>
                </p>
                <p>
                  <strong>Phone:</strong> <a href="tel:+919429691308" className="text-brand-gold hover:underline">+91-9429691308</a>
                </p>
              </div>
              <p className="text-base sm:text-lg text-gray-700">
                We aim to respond to accessibility-related requests within a reasonable timeframe and will make reasonable efforts to provide information in an accessible format upon request.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mb-4 border-b-2 border-brand-gold pb-2">7. Policy Review & Updates</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                This Accessibility Statement may be updated periodically to reflect improvements, changes in standards, or regulatory requirements. We encourage users to review this page regularly.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Continued use of our digital platforms constitutes acceptance of this Accessibility Statement.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityStatement;
