import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar } from 'lucide-react';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on load
  }, []);

  return (
    <div className="bg-[#0B0514] text-gray-300 font-sans min-h-screen relative overflow-hidden pt-32 pb-20">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[400px] bg-pink-900/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <FileText className="w-8 h-8 text-pink-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Terms and Conditions</h1>
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
          {/* 1. Agreement to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">1. Agreement to Terms</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and Innowex Automation Private Limited ("Innowex," "we," "us," or "our") concerning your access to and use of the autoinnowex.in website and our AI automation solutions and services.
            </p>
            <p className="text-gray-400 leading-relaxed">
              By accessing our website or using our services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our website or services.
            </p>
          </section>

          {/* 2 & 3. Definitions and Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">2. Definitions & 3. Services Overview</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6 ml-4">
              <li><strong className="text-gray-300">"Services"</strong> means all AI automation solutions, software, platforms, consulting, and related services provided by Innowex.</li>
              <li><strong className="text-gray-300">"Client Data"</strong> means any data, documents, files, or information provided by you or processed through our services.</li>
            </ul>
            <p className="text-gray-400 mb-2">Innowex provides AI-powered automation solutions including Document intelligence, Workflow automation, Intelligent data analysis, Customer service automation, and Custom AI solutions.</p>
            <p className="text-gray-400 text-sm">We reserve the right to modify, suspend, or discontinue any aspect of our services. Beta features are provided "as is" without warranties.</p>
          </section>

          {/* 4. User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">4. User Responsibilities</h2>
            <p className="text-gray-400 mb-3">You must be at least 18 years old. You are responsible for providing accurate information and maintaining account confidentiality. You agree NOT to:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4 text-sm">
              <li>Use our services for illegal purposes</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services or upload malicious code</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Violate any applicable laws or intellectual property rights</li>
            </ul>
          </section>

          {/* 5. Intellectual Property & 6. Payment */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">5. Intellectual Property</h2>
              <p className="text-gray-400 text-sm mb-2">All software, AI models, algorithms, and brand assets are owned by Innowex. We grant you a limited, revocable license to use our services.</p>
              <p className="text-gray-400 text-sm">You retain ownership of your Client Data and grant us a license to process it solely to provide the services.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">6. Payment Terms</h2>
              <p className="text-gray-400 text-sm mb-2">Fees are specified in your service agreement (in INR). Invoices are due within 30 days. Late payments may incur 1.5% monthly interest.</p>
              <p className="text-gray-400 text-sm">Fees are exclusive of taxes and generally non-refundable unless required by law.</p>
            </div>
          </section>

          {/* 9 & 10. Warranties and Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">9. Warranties & 10. Limitation of Liability</h2>
            <p className="text-gray-400 mb-4">
              EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS". WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, NON-INFRINGEMENT, AND ACCURACY. You acknowledge that AI systems may produce unexpected results and you are responsible for validating outputs.
            </p>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <p className="text-red-200 text-sm uppercase font-bold tracking-wider mb-2">Maximum Liability</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY SHALL NOT EXCEED THE FEES PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM. WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, OR LOSS OF PROFITS OR DATA.
              </p>
            </div>
          </section>

          {/* 12. Term and Termination */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">12. Term and Termination</h2>
            <p className="text-gray-400 mb-2">These Terms remain in effect while you have an active service agreement. You may terminate via written notice. We may suspend access if you breach terms or fail to pay.</p>
            <p className="text-gray-400 text-sm">Upon termination, access ceases, you remain liable for incurred fees, and we may delete your Client Data after a retention period.</p>
          </section>

          {/* 15 & 17. Governing Law & Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">15. Governing Law & 17. Contact</h2>
            <p className="text-gray-400 mb-4">
              These Terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Pune, Maharashtra. Parties agree to attempt 30-day good faith negotiation before legal proceedings.
            </p>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-white font-bold mb-2">Innowex Automation Private Limited</p>
              <p className="text-gray-400 text-sm mb-1">Email: <a href="mailto:legal@autoinnowex.in" className="text-pink-400 hover:underline">legal@autoinnowex.in</a></p>
              <p className="text-gray-400 text-sm">Address: SEC6 P.NO 1 PRIVA COMPLEX SH.NO A/16 HAVELI PUNE, Alandi Devachi, Pune, Khed, Maharashtra, India - 412105</p>
            </div>
            <p className="text-gray-500 text-xs mt-6 text-center uppercase tracking-widest font-bold">
              By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>
          
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;