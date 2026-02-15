import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
  Cpu, MessageSquare, Camera, Bot, Cloud, 
  ShieldCheck, RefreshCw, Webhook, CheckCircle2, Layers 
} from 'lucide-react';

const Technology = () => {
  // Custom Cursor Glow Logic (Background)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-[#fafafa] text-gray-800 font-sans min-h-screen overflow-hidden relative">
      
      {/* --- CUSTOM CURSOR GLOW (Z-0) --- */}
      <motion.div
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center z-10">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-300/30 blur-[150px] rounded-full z-[-1]" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-5 py-2 mb-6 text-sm font-bold tracking-widest text-purple-700 uppercase bg-purple-100/80 backdrop-blur-sm border border-purple-200 rounded-full shadow-sm">
            The Technology Behind Innowex
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
            Cutting-Edge AI, Built for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Real-World Impact</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We leverage state-of-the-art machine learning frameworks and models to build intelligent automation systems that learn and improve over time.
          </p>
        </motion.div>
      </section>

      {/* 2. CORE TECHNOLOGIES (Detailed Alternating Sections) */}
      <section className="relative py-16 bg-white/60 backdrop-blur-md border-t border-gray-100 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {/* Machine Learning & AI */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 lg:order-1 relative">
               <div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-pink-50 rounded-3xl transform -rotate-2 z-0"></div>
               <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" alt="AI Core" className="relative z-10 rounded-2xl shadow-xl w-full object-cover border border-purple-100" />
               <div className="mt-4">
                  
               </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="text-purple-600 w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
              <p className="text-lg text-gray-600 mb-8">Core Technologies powering our Machine Learning & AI solutions:</p>
              <ul className="space-y-4">
                {['TensorFlow and PyTorch for deep learning', 'Scikit-learn for classical ML algorithms', 'Hugging Face Transformers for NLP', 'OpenCV for computer vision', 'Custom-trained models for specialized tasks'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 w-6 h-6 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Natural Language Processing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="text-pink-600 w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Natural Language Processing</h2>
              <h3 className="text-xl text-pink-600 font-semibold mb-6">Understanding Human Language at Scale</h3>
              <p className="text-lg text-gray-600 mb-8">Our NLP capabilities enable machines to understand, interpret, and generate human language with remarkable accuracy.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-50">
                  <h4 className="font-bold text-gray-900 mb-4">What We Can Do</h4>
                  <ul className="space-y-2">
                    {['Document classification', 'Named entity recognition', 'Sentiment analysis', 'Text summarization', 'Language translation', 'Intent detection'].map((item, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-400" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-50">
                  <h4 className="font-bold text-gray-900 mb-4">Applications</h4>
                  <ul className="space-y-2">
                    {['Processing customer feedback', 'Extracting info from contracts', 'Automating email responses', 'Analyzing support tickets'].map((item, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
               <div className="absolute -inset-4 bg-gradient-to-bl from-pink-100 to-purple-50 rounded-3xl transform rotate-2 z-0"></div>
               <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80" alt="Code and Text" className="relative z-10 rounded-2xl shadow-xl w-full object-cover border border-pink-100" />
            </motion.div>
          </div>

          {/* Computer Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 lg:order-1 relative">
               <div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-blue-50 rounded-3xl transform -rotate-2 z-0"></div>
               <img src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=800&q=80" alt="Computer Vision" className="relative z-10 rounded-2xl shadow-xl w-full object-cover border border-purple-100" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <Camera className="text-indigo-600 w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Computer Vision</h2>
              <h3 className="text-xl text-indigo-600 font-semibold mb-6">Teaching Machines to See</h3>
              <p className="text-lg text-gray-600 mb-8">Our computer vision systems can analyze images and videos to extract meaningful information and automate visual tasks.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Capabilities</h4>
                  <ul className="space-y-3">
                    {['Object detection & recognition', 'Document scanning and OCR', 'Quality inspection automation', 'Image classification', 'Visual data extraction'].map((item, i) => (
                      <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                        <CheckCircle2 className="text-indigo-500 w-4 h-4 shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Use Cases</h4>
                  <ul className="space-y-3">
                    {['Automated quality control', 'Document digitization', 'Inventory visual recognition', 'Security and surveillance'].map((item, i) => (
                      <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                        <CheckCircle2 className="text-indigo-500 w-4 h-4 shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. GRID CAPABILITIES (RPA, Cloud, Security, Dev, APIs) */}
      <section className="py-24 bg-purple-50/50 relative z-10 border-t border-purple-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* RPA */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 hover:shadow-lg transition-all">
              <Bot className="text-purple-600 w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Robotic Process Automation</h3>
              <p className="text-sm font-semibold text-purple-600 mb-4">Automating Repetitive Digital Tasks</p>
              <p className="text-gray-600 text-sm mb-6">RPA bots mimic human actions to automate rule-based tasks across applications and systems.</p>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-2">What RPA Handles:</p>
                  <p className="text-xs text-gray-600">Data entry, Form filling, Report generation, System integration, Scheduled tasks.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-2">Benefits:</p>
                  <p className="text-xs text-gray-600">24/7 operation, Zero errors, Faster processing, Easy scalability.</p>
                </div>
              </div>
            </motion.div>

            {/* Cloud Infrastructure */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 hover:shadow-lg transition-all">
              <Cloud className="text-blue-500 w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Cloud Infrastructure</h3>
              <p className="text-sm font-semibold text-blue-500 mb-4">Scalable, Secure, and Reliable</p>
              <p className="text-gray-600 text-sm mb-6">We deploy our solutions on enterprise-grade cloud infrastructure ensuring high availability and performance.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"/> Auto-scaling capabilities</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"/> 99.9% uptime guarantee</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"/> Enterprise-grade security</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"/> Regular backups & disaster recovery</li>
              </ul>
              <div className="mt-6">
                  
              </div>
            </motion.div>

            {/* Security */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 hover:shadow-lg transition-all">
              <ShieldCheck className="text-green-500 w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Security & Compliance</h3>
              <p className="text-sm font-semibold text-green-500 mb-4">Your Data, Protected</p>
              <p className="text-gray-600 text-sm mb-6">Security is built into every layer of our automation solutions.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"/> End-to-end encryption</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"/> Role-based access control</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"/> Regular security audits</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"/> GDPR & ISO standards compliance</li>
              </ul>
            </motion.div>

            {/* Development Approach */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 hover:shadow-lg transition-all md:col-span-2 lg:col-span-1">
              <RefreshCw className="text-pink-500 w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Development Approach</h3>
              <p className="text-sm font-semibold text-pink-500 mb-4">Agile & Iterative</p>
              <p className="text-gray-600 text-sm mb-6">We follow agile development practices to deliver value quickly while maintaining flexibility.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-pink-500 rounded-full"/> Rapid prototyping</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-pink-500 rounded-full"/> Iterative development</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-pink-500 rounded-full"/> Continuous testing</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-pink-500 rounded-full"/> Regular client feedback</li>
              </ul>
            </motion.div>

            {/* APIs & Integrations */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 hover:shadow-lg transition-all md:col-span-2 lg:col-span-2">
              <Webhook className="text-indigo-500 w-10 h-10 mb-6" />
              <div className="lg:flex gap-8 items-start">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">APIs & Integrations</h3>
                  <p className="text-sm font-semibold text-indigo-500 mb-4">Connect Everything</p>
                  <p className="text-gray-600 text-sm mb-6">Our solutions feature robust APIs that integrate seamlessly with your existing technology ecosystem.</p>
                </div>
                <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">Integration Capabilities:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2"><Layers className="w-4 h-4 text-indigo-400" /> RESTful APIs</li>
                    <li className="flex items-center gap-2"><Layers className="w-4 h-4 text-indigo-400" /> Webhook support</li>
                    <li className="flex items-center gap-2"><Layers className="w-4 h-4 text-indigo-400" /> Pre-built connectors</li>
                    <li className="flex items-center gap-2"><Layers className="w-4 h-4 text-indigo-400" /> Custom integrations</li>
                    <li className="flex items-center gap-2 sm:col-span-2"><Layers className="w-4 h-4 text-indigo-400" /> Real-time data synchronization</li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Technology;