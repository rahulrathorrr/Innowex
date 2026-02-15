import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Layers, FileText, Cpu, Zap, ShieldCheck, TrendingUp, 
  Factory, HeartPulse, Landmark, ShoppingCart, Truck, 
  Search, PenTool, Code, Rocket, Settings, BrainCircuit, 
  Eye, BarChart, Cloud, ArrowRight
} from 'lucide-react';

const HomeSections = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-[#0f051d] text-gray-300 font-sans overflow-hidden">
      
      {/* 1. WHAT WE DO SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-pink-600/10 blur-[120px] rounded-full z-[-1]" />
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Automation Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Modern Businesses</span>
          </h2>
          <p className="text-lg leading-relaxed">
            At Innowex Automation, we build intelligent automation solutions that help businesses eliminate repetitive tasks, make faster decisions, and focus on what truly matters-growth. From document processing to customer service, we deploy AI systems that work seamlessly with your existing tools.
          </p>
        </motion.div>

        {/* Three Core Pillars */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <motion.div id="workflow-auto" variants={fadeUp} className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Layers className="w-12 h-12 text-pink-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Process Automation</h3>
            <p className="text-gray-400">Automate repetitive workflows across departments-from invoice processing to customer onboarding. Our AI systems handle the heavy lifting while your team focuses on strategic work.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div id="doc-intel" variants={fadeUp} className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <FileText className="w-12 h-12 text-purple-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Intelligent Document Processing</h3>
            <p className="text-gray-400">Extract, analyze, and process documents automatically. Whether it's invoices, contracts, or forms, our AI reads, understands, and organizes your data with precision.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div id="custom-ai" variants={fadeUp} className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Cpu className="w-12 h-12 text-indigo-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Custom AI Solutions</h3>
            <p className="text-gray-400">Every organization is unique. We build tailored AI automation systems that fit your specific workflows, integrate with your tools, and scale with your needs.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. WHY CHOOSE INNOWEX */}
      <section className="relative py-24 bg-[#150a26] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Innowex</h2>
            <div className="h-1 w-20 bg-pink-500 rounded-full"></div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={fadeUp} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center border border-pink-500/30">
                <Zap className="text-pink-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Speed to Value</h4>
                <p className="text-gray-400">We deploy automation solutions that deliver results in weeks, not months. See tangible improvements in efficiency and cost savings from day one.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                <TrendingUp className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Built for Scale</h4>
                <p className="text-gray-400">Our automation systems grow with you. Whether you're processing 100 documents or 100,000, our solutions maintain consistency and accuracy.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                <ShieldCheck className="text-indigo-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">No Disruption</h4>
                <p className="text-gray-400">We integrate seamlessly with your existing systems-CRMs, ERPs, databases, and communication tools. No need to replace what already works.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <BrainCircuit className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Continuous Learning</h4>
                <p className="text-gray-400">Our AI systems improve over time, learning from patterns and adapting to your evolving business needs.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (Timeline) - FIXED VERSION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full z-[-1]" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A seamless 5-step process to bring intelligent automation to your business.</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Desktop: Center, Mobile: Left */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 opacity-30 md:-translate-x-1/2"></div>

          {[
            { step: '1', title: 'Discovery', icon: Search, desc: 'We start by understanding your workflows, pain points, and automation goals through detailed consultation.' },
            { step: '2', title: 'Design', icon: PenTool, desc: 'Our team maps out the automation architecture, identifying the best AI models and integration points.' },
            { step: '3', title: 'Build & Test', icon: Code, desc: 'We develop custom solutions, rigorously test them with your data, and ensure accuracy before deployment.' },
            { step: '4', title: 'Deploy & Scale', icon: Rocket, desc: 'Once validated, we deploy the automation into your environment and monitor performance.' },
            { step: '5', title: 'Optimize', icon: Settings, desc: 'We continuously monitor, analyze, and refine your automation systems to maximize efficiency and ROI.' },
          ].map((item, index) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-16 md:mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              {/* Spacer for Desktop Zig-Zag */}
              <div className="hidden md:block md:w-1/2"></div>
              
              {/* The Icon/Circle */}
              <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-[#1a0b2e] border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.4)] z-20 -translate-x-0 md:-translate-x-1/2">
                <item.icon className="text-white w-6 h-6" />
              </div>
              
              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-pink-500/30 transition-colors">
                  <span className="text-pink-400 font-bold text-sm mb-2 block">Step {item.step}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE + TECH STACK */}
      <section className="py-24 bg-[#150a26] border-t border-white/5 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-purple-900/10 blur-[120px] rounded-full z-[-1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Industries */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-bold text-white mb-8">Industries We Serve</h2>
              <div className="space-y-4">
                {[
                  { icon: Factory, name: 'Manufacturing', desc: 'Production scheduling, QC automation, supply chain.' },
                  { icon: HeartPulse, name: 'Healthcare', desc: 'Patient data, appointment scheduling, claim automation.' },
                  { icon: Landmark, name: 'Finance & Accounting', desc: 'Invoice processing, reconciliation, financial reporting.' },
                  { icon: ShoppingCart, name: 'Retail & E-commerce', desc: 'Order processing, customer service, recommendations.' },
                  { icon: Truck, name: 'Logistics', desc: 'Route optimization, tracking, warehouse management.' },
                ].map((ind, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400"><ind.icon size={20}/></div>
                    <div>
                      <h4 className="text-white font-semibold">{ind.name}</h4>
                      <p className="text-sm text-gray-400">{ind.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-bold text-white mb-8">Technology Stack</h2>
              <p className="text-gray-400 mb-8">We leverage cutting-edge AI and automation technologies to build robust, future-proof systems.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: FileText, title: 'Natural Language Processing', desc: 'For document understanding' },
                  { icon: Eye, title: 'Computer Vision', desc: 'For image and video analysis' },
                  { icon: BrainCircuit, title: 'Machine Learning', desc: 'Predictive analytics & patterns' },
                  { icon: Settings, title: 'RPA', desc: 'Robotic Process Automation' },
                  { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Scalable, secure deployment' },
                ].map((tech, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-xl flex flex-col gap-2">
                    <tech.icon className="text-purple-400" size={24} />
                    <h4 className="text-white font-semibold text-sm">{tech.title}</h4>
                    <span className="text-xs text-gray-400">{tech.desc}</span>
                  </div>
                ))}
              </div>
              
              {/* Image from Unsplash to give that modern tech vibe */}
              <div className="mt-8 rounded-xl overflow-hidden border border-white/10 relative h-48">
                 <img 
                   src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" 
                   alt="AI Technology Stack" 
                   className="w-full h-full object-cover opacity-60"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#150a26] to-transparent"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="relative py-24 overflow-hidden">
        {/* Massive Glow for CTA */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] bg-gradient-to-r from-pink-600/30 to-purple-600/30 blur-[150px] rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto px-4 text-center z-10 bg-white/5 border border-white/10 p-12 md:p-20 rounded-3xl backdrop-blur-md"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how AI automation can transform your operations. Schedule a free consultation with our team.
          </p>
          <button 
            onClick={() => navigate('/get-started')}
            className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all mx-auto hover:scale-105"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default HomeSections;