import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f051d] text-white pt-32 pb-20">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-900/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-pink-400 uppercase bg-pink-400/10 border border-pink-400/20 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.15)]">
            AI-Powered Efficiency
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Transform Your Business with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500">
              Intelligent AI Automation
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Innowex Automation helps organizations streamline operations, reduce manual 
            work, and scale faster with custom AI-powered automation solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/get-started')}
              className="group flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(236,72,153,0.4)]"
            >
              <span>Get Started</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button
              onClick={() => navigate('/about')}
              className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              <Play size={18} className="text-pink-500 fill-pink-500" />
              <span>See How It Works</span>
            </button>
          </div>
        </motion.div>

        {/* Dashboard Image with Glassmorphism Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-20 relative px-2 sm:px-0"
        >
          <div className="relative mx-auto max-w-5xl border border-white/10 rounded-2xl overflow-hidden bg-[#1a0b2e]/60 backdrop-blur-md p-3 sm:p-4 shadow-2xl ring-1 ring-white/10">
             
             {/* Browser/Window Controls */}
             <div className="flex items-center space-x-2 mb-3 px-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
             </div>
             
             {/* Actual Image - Ab ye pakka load hogi */}
             <div className="relative aspect-video rounded-lg overflow-hidden bg-[#0f051d] border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                  alt="Innowex AI Workflow Dashboard" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Gradient Overlay for blending effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f051d] via-transparent to-transparent opacity-60"></div>
             </div>
             
          </div>
          
          {/* Subtle bottom glow for the image card */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-pink-600/20 blur-[60px] rounded-full z-[-1]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;