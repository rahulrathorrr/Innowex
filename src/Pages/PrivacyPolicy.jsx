import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Calendar } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0B0514] text-gray-300 font-sans min-h-screen relative overflow-hidden pt-32 pb-20">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <ShieldAlert className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Privacy Policy</h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Effective Date: February 15, 2026</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Last Updated: February 15, 2026</span>
          </div>
        </motion.div>

        {/* Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#120822]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl space-y-10"
        >
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Introduction</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Innowex Automation Private Limited ("Innowex," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website autoinnowex.in or use our AI automation solutions and services.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Please read this Privacy Policy carefully. By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">1.1 Personal Information</h3>
            <p className="text-gray-400 mb-3">We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4 ml-4">
              <li>Fill out contact forms or consultation requests</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Request a demo or trial</li>
              <li>Communicate with us via email or phone</li>
              <li>Use our automation solutions</li>
            </ul>
            <p className="text-gray-400 mb-3">Personal information may include: Full name, Email address, Phone number, Job title and organization name, Business address, Industry and use case details, Any other information you choose to provide.</p>

            <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">1.2 Automatically Collected Information</h3>
            <p className="text-gray-400 mb-3">When you visit our website, we may automatically collect certain information, including:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4 ml-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Date and time of visit</li>
              <li>Device information</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">1.3 Cookies and Tracking Technologies</h3>
            <p className="text-gray-400 mb-3">We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. Types of cookies we use:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4 ml-4">
              <li><strong className="text-gray-300">Essential Cookies:</strong> Necessary for website functionality</li>
              <li><strong className="text-gray-300">Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong className="text-gray-300">Functional Cookies:</strong> Remember your preferences and settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">1.4 Business Data</h3>
            <p className="text-gray-400 mb-3">When you use our automation solutions, we may process:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4 ml-4">
              <li>Documents and files you upload for processing</li>
              <li>Workflow and process data</li>
              <li>Integration data from connected systems</li>
              <li>Usage analytics and performance metrics</li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">2. How We Use Your Information</h2>
            <p className="text-gray-400 mb-4">We use the collected information for the following purposes:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-pink-300 mb-2">2.1 Service Delivery</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2 text-sm">
                  <li>Provide, maintain, and improve our automation solutions</li>
                  <li>Process your requests and consultations</li>
                  <li>Deploy and customize AI automation systems</li>
                  <li>Provide technical support and troubleshooting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-300 mb-2">2.2 Communication</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2 text-sm">
                  <li>Respond to your inquiries and requests</li>
                  <li>Send service-related announcements</li>
                  <li>Provide updates about our solutions</li>
                  <li>Send marketing communications (with consent)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-300 mb-2">2.3 Analytics and Improvement</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2 text-sm">
                  <li>Analyze usage patterns and trends</li>
                  <li>Improve our website and services</li>
                  <li>Develop new features and solutions</li>
                  <li>Conduct research and development</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-300 mb-2">2.4 Legal and Security</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2 text-sm">
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and unauthorized access</li>
                  <li>Enforce our terms and conditions</li>
                  <li>Resolve disputes and legal claims</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Other Sections (Summarized visually for brevity but containing full text) */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">3. Data Security</h2>
              <p className="text-gray-400 mb-3">We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. Security measures include: Data encryption in transit and at rest, Secure server infrastructure, Regular security audits, Access controls, Employee confidentiality, and Incident response procedures.</p>
              <p className="text-gray-400">However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-400 mb-2"><strong className="text-white">4.1 We Do Not Sell Your Data:</strong> We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
              <p className="text-gray-400 mb-2"><strong className="text-white">4.2 Service Providers:</strong> We may share information with trusted third-party service providers (Cloud hosting, Email services, Analytics, Payment processing). They are contractually obligated to protect your information.</p>
              <p className="text-gray-400 mb-2"><strong className="text-white">4.3 Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</p>
              <p className="text-gray-400"><strong className="text-white">4.4 Legal Requirements:</strong> We may disclose your information when required by law, court orders, or to protect our rights and safety.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">5. Data Retention</h2>
              <p className="text-gray-400 mb-3">We retain your personal information only for as long as necessary. Retention periods:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                <li>Contact inquiries: 2 years from last contact</li>
                <li>Client data: Duration of service agreement plus 5 years</li>
                <li>Website analytics: 26 months</li>
                <li>Marketing data: Until you unsubscribe or request deletion</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">6. Your Rights and Choices</h2>
              <p className="text-gray-400 mb-3">You have rights regarding your data: Access and Portability, Correction and Update, Deletion, Opt-Out (marketing/cookies), and Restriction of processing. To exercise these, contact <a href="mailto:privacy@autoinnowex.in" className="text-pink-400 hover:underline">privacy@autoinnowex.in</a>.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">7. International Transfers</h2>
                <p className="text-gray-400 text-sm">Our primary operations are based in India. If accessed outside India, information may be transferred/processed in India with appropriate safeguards.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">8. Children's Privacy</h2>
                <p className="text-gray-400 text-sm">Our services are not directed to individuals under 18. We do not knowingly collect data from children.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">9. Third-Party Links & 10. Changes</h2>
              <p className="text-gray-400 mb-3">Our website may contain links to third-party sites. We are not responsible for their privacy practices. We may update this policy periodically and will notify you via our website or email.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">11. Contact Us & 12. Governing Law</h2>
              <p className="text-gray-400 mb-3">
                <strong>Innowex Automation Private Limited</strong><br/>
                Email: <a href="mailto:privacy@autoinnowex.in" className="text-pink-400 hover:underline">privacy@autoinnowex.in</a><br/>
                Address: SEC6 P.NO 1 PRIVA COMPLEX SH.NO A/16 HAVELI PUNE, Alandi Devachi, Pune, Khed, Maharashtra, India - 412105
              </p>
              <p className="text-gray-400">This Policy is governed by the laws of India. Disputes are subject to the exclusive jurisdiction of courts in Pune, Maharashtra.</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;