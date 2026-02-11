import React from 'react';
import { SEO } from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Privacy Policy - Solwaste Innovations"
        description="Privacy and Data Protection Policy of Solwaste Innovations Private Limited. Learn how we collect, use, store, and protect your personal and business information."
        keywords="privacy policy, data protection, GDPR compliance, data security, personal information"
        type="article"
      />
      
      {/* Header */}
      <div className="bg-gray-900 text-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <p className="text-gray-200 text-sm sm:text-base font-semibold uppercase tracking-wider mb-3">Your Privacy Matters</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold">Privacy & Data Protection Policy</h1>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              Solwaste Innovations Private Limited is committed to protecting the privacy, confidentiality, and security of personal and business information entrusted to us. This Policy explains how we collect, use, store, process, disclose, and safeguard information when you interact with our services.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-900 p-4 sm:p-6 mb-8">
              <p className="text-sm sm:text-base font-semibold text-gray-800 mb-2">Last Updated: 12 December 2025</p>
              <p className="text-sm sm:text-base text-gray-700">
                This Policy applies globally to all users, customers, partners, vendors, employees, and visitors, with specific compliance to applicable Indian laws and internationally accepted data-protection principles.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">1. Company Information</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-3"><strong>Legal Entity:</strong> Solwaste Innovations Private Limited</p>
              <p className="text-base sm:text-lg text-gray-700 mb-3"><strong>Registered Office:</strong> 1st Floor, 264–265, Dr. Annie Besant Road, Worli, Mumbai, Maharashtra – 400025, India</p>
              <p className="text-base sm:text-lg text-gray-700 mb-3"><strong>Website:</strong> <a href="https://www.solwaste.co" className="text-gray-900 hover:underline">www.solwaste.co</a></p>
              <p className="text-base sm:text-lg text-gray-700"><strong>Mobile Application:</strong> Solwaste</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">2. Information We Collect</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                We may collect and process the following categories of information depending on your interaction with us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700">
                <li><strong>Personal Identification Data:</strong> Name, contact number, email address, postal address, date of birth (where required).</li>
                <li><strong>Customer & Business Information:</strong> Company name, designation, business contact details.</li>
                <li><strong>Payment & Financial Information:</strong> Transaction data processed through secure payment gateways such as Razorpay.</li>
                <li><strong>Know Your Customer (KYC) Data:</strong> Government-issued identification where legally or contractually required.</li>
                <li><strong>Employee Information:</strong> Aadhaar, PAN, employment records, payroll, and statutory compliance data.</li>
                <li><strong>Vendor Information:</strong> GST details, bank account information, contractual documents.</li>
                <li><strong>Technical & Usage Data:</strong> IP address, device identifiers, browser type, operating system, access logs.</li>
                <li><strong>Location Data:</strong> Site-visit locations, operational tracking where relevant.</li>
                <li><strong>CCTV Footage:</strong> Visual recordings captured at Solwaste premises for safety and security purposes.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">3. How We Use Information</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                Your information is used for legitimate business purposes, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700">
                <li>Providing and managing our services and solutions</li>
                <li>Processing transactions and payments</li>
                <li>Customer support, communication, and relationship management</li>
                <li>Legal, regulatory, tax, and compliance obligations</li>
                <li>Recruitment, employment, and workforce management</li>
                <li>Operational security, fraud prevention, and risk management</li>
                <li>Business analytics, performance monitoring, and service improvement</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">4. Cookies, Analytics & Tracking Technologies</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                We use cookies and similar technologies to enhance user experience, analyze traffic, and improve our digital services. These may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700 mb-4">
                <li>Google Analytics</li>
                <li>Meta (Facebook / Instagram) Pixel</li>
                <li>WhatsApp Business API</li>
                <li>Customer Relationship Management tools such as Salesforce</li>
              </ul>
              <p className="text-base sm:text-lg text-gray-700">
                You may control or disable cookies through your browser settings; however, certain features of our services may be limited as a result.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">5. Data Sharing & Disclosure</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                Solwaste does not sell or rent personal data. We may share information only under the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700">
                <li>With trusted service providers and technology partners under strict confidentiality obligations</li>
                <li>With payment processors for transaction fulfillment</li>
                <li>With regulatory, legal, or governmental authorities when required by law</li>
                <li>During mergers, acquisitions, restructuring, or asset transfers</li>
                <li>To protect the rights, safety, or property of Solwaste, users, or the public</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">6. Data Storage, Security & Retention</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                We implement appropriate technical, administrative, and physical safeguards to protect personal data against unauthorized access, loss, misuse, or disclosure.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Data may be stored within India or in other jurisdictions depending on operational requirements. We retain data only for as long as necessary to fulfill business, legal, or contractual obligations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">7. International Data Transfers</h2>
              <p className="text-base sm:text-lg text-gray-700">
                As a globally oriented organization, your information may be transferred across borders. Such transfers are conducted in compliance with applicable data-protection laws and with adequate safeguards in place.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">8. Your Rights</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                Subject to applicable laws, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-700 mb-4">
                <li>Access your personal data</li>
                <li>Request correction or updates</li>
                <li>Request deletion or restriction of processing</li>
                <li>Withdraw consent where processing is consent-based</li>
                <li>Opt out of non-essential communications</li>
              </ul>
              <p className="text-base sm:text-lg text-gray-700">
                Requests can be submitted using the contact details provided below.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">9. Minors</h2>
              <p className="text-base sm:text-lg text-gray-700">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from minors.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">10. Policy Updates</h2>
              <p className="text-base sm:text-lg text-gray-700">
                We may update this Policy periodically to reflect changes in legal requirements or business practices. Continued use of our services constitutes acceptance of the updated Policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">11. Contact – Data Protection Officer</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                For privacy-related questions, requests, or concerns, please contact:
              </p>
              <div className="bg-gray-900 text-white p-6 rounded-lg">
                <p className="text-lg font-semibold mb-3">Data Protection Officer</p>
                <p className="mb-2">Solwaste Innovations Private Limited</p>
                <p className="mb-2">1st Floor, 264–265, Dr. Annie Besant Road, Worli, Mumbai, Maharashtra – 400025, India</p>
                <p className="mb-2">
                  <strong>Email:</strong> <a href="mailto:privacy@solwaste.co" className="text-white hover:underline">privacy@solwaste.co</a>
                </p>
                <p>
                  <strong>Phone:</strong> <a href="tel:+919429691308" className="text-white hover:underline">+91-9429691308</a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
