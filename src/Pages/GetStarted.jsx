import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
  MapPin, Mail, Globe, Clock, CheckCircle2, 
  ArrowRight, Sparkles, Zap, ShieldCheck, 
  TrendingUp, HelpCircle, Send, Check
} from 'lucide-react';

const GetStarted = () => {
  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Cursor Glow Logic
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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Fake API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  // Scroll to Form
  const scrollToForm = () => {
    const formEl = document.getElementById('contact-form');
    if (formEl) {
      const offset = formEl.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const faqs = [
    { q: "How long does implementation take?", a: "Depending on complexity, most automation solutions are deployed within 4-8 weeks from project kickoff." },
    { q: "Do we need technical expertise?", a: "No. We design our automation systems to be user-friendly and provide comprehensive training for your team." },
    { q: "Can you integrate with our existing systems?", a: "Yes. We specialize in integrating with existing CRMs, ERPs, databases, and business applications." },
    { q: "What ongoing support do you provide?", a: "We offer continuous monitoring, maintenance, optimization, and support to ensure your automation systems perform optimally." },
    { q: "How do you ensure data security?", a: "We implement industry-standard security practices including encryption, access controls, and compliance with data protection regulations." },
    { q: "What industries do you serve?", a: "We work with organizations across manufacturing, healthcare, finance, retail, logistics, and more." }
  ];

  return (
    <div className="bg-[#0B0514] text-gray-300 font-sans min-h-screen overflow-hidden relative">
      
      {/* Background Cursor Glow */}
      <motion.div
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/20 blur-[150px] rounded-full z-[-1]" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
          <span className="inline-block px-5 py-2 mb-6 text-sm font-bold tracking-widest text-pink-400 uppercase bg-pink-500/10 border border-pink-500/20 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.15)]">
            Let's Build Your Automation Solution
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Ready to Transform Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500">Business with AI?</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We'd love to understand your automation needs and explore how Innowex can help your organization work smarter.
          </p>
        </motion.div>
      </section>

      {/* 2. MAIN CONTENT (Contact Info + Form) */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Left Column: Info & Why Start Now */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2 space-y-8">
            
            {/* Contact Information Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="text-pink-500 w-6 h-6" /> Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-purple-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Headquarters</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Innowex Automation Private Limited<br/>
                      SEC6 P.NO 1 PRIVA COMPLEX SH.NO A/16 HAVELI PUNE<br/>
                      Alandi Devachi, Pune, Khed<br/>
                      Maharashtra, India - 412105
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0">
                    <Mail className="text-pink-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Email Us</p>
                    <a href="mailto:hello@autoinnowex.in" className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
                      hello@autoinnowex.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                    <Globe className="text-indigo-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Website</p>
                    <a href="https://www.autoinnowex.in" target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                      www.autoinnowex.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Start Now Card */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Why Start Now?</h3>
              <ul className="space-y-5">
                {[
                  { icon: Zap, title: "Immediate Benefits", desc: "See improvements in efficiency and cost savings within weeks of deployment." },
                  { icon: TrendingUp, title: "Competitive Advantage", desc: "Organizations that adopt AI early gain significant advantages over competitors." },
                  { icon: Sparkles, title: "Scalable Growth", desc: "Build a foundation for scalable operations that can grow without proportional cost increases." },
                  { icon: ShieldCheck, title: "Future-Ready", desc: "Prepare your organization for the AI-driven future of work." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <item.icon className="text-pink-400 w-5 h-5 shrink-0 mt-1" />
                    <div>
                      <p className="text-white text-sm font-bold mb-1">{item.title}</p>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3 relative" id="contact-form">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-purple-500/5 rounded-3xl transform rotate-1 z-0"></div>
            
            <div className="bg-[#120822] border border-white/10 rounded-3xl p-8 md:p-10 relative z-10 shadow-2xl">
              
              {isSubmitted ? (
                /* Success Message State */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[400px] py-10"
                >
                  <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/30 relative">
                    <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
                    <Check className="text-green-400 w-12 h-12 relative z-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Request Sent Successfully!</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    Thank you for reaching out. Our team has received your request and will get back to you within 24 hours to schedule your consultation/demo.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="mt-8 text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* The Form */
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Request a Demo / Consultation</h2>
                    <p className="text-gray-400 text-sm">Fill out the form below and we'll get back to you shortly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Full Name *</label>
                        <input required type="text" placeholder="John Doe" className="w-full bg-[#0B0514] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all placeholder:text-gray-600" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Work Email *</label>
                        <input required type="email" placeholder="john@company.com" className="w-full bg-[#0B0514] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all placeholder:text-gray-600" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Company Name</label>
                        <input type="text" placeholder="Your Organization" className="w-full bg-[#0B0514] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all placeholder:text-gray-600" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Interest Area</label>
                        <select className="w-full bg-[#0B0514] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all appearance-none cursor-pointer">
                          <option value="demo">Request a Demo</option>
                          <option value="consultation">Free Consultation</option>
                          <option value="usecase">Submit a Use Case</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Tell us about your automation challenge</label>
                      <textarea rows="4" placeholder="How can we help you work smarter?" className="w-full bg-[#0B0514] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all placeholder:text-gray-600 resize-none"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        <>Send Request <Send className="w-5 h-5" /></>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SCHEDULE A CONSULTATION (Steps) */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t border-white/5 mt-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">What to Expect</h2>
          <p className="text-gray-400">Our seamless process to transform your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "1", time: "30 minutes", title: "Discovery Call", desc: "We'll discuss your current workflows, pain points, and automation goals." },
            { step: "2", time: "1-2 weeks", title: "Solution Design", desc: "Our team will analyze your requirements and propose a tailored solution with clear timelines." },
            { step: "3", time: "2-4 weeks", title: "Proof of Concept", desc: "For larger projects, we build a small-scale POC to validate the approach before full deployment." },
            { step: "4", time: "Ongoing", title: "Implementation", desc: "Once approved, we'll build and deploy your automation solution with ongoing support." }
          ].map((s, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-gray-700">0{s.step}</span>
                <span className="flex items-center gap-1 text-xs font-semibold text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">
                  <Clock className="w-3 h-3" /> {s.time}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 relative z-10">{s.title}</h4>
              <p className="text-sm text-gray-400 relative z-10">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="relative py-20 bg-[#120822] border-y border-white/5 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="text-pink-500 w-8 h-8" /> Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors">
                <h4 className="text-white font-bold text-sm mb-3">{faq.q}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BUTTONS */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center z-10">
        <h2 className="text-3xl font-bold text-white mb-10">Start Your Automation Journey</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          
          <button onClick={scrollToForm} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all hover:-translate-y-1">
            <Clock className="w-5 h-5" /> Schedule Call
          </button>
          
          <button onClick={scrollToForm} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all hover:-translate-y-1">
            <CheckCircle2 className="w-5 h-5" /> Submit Use Case
          </button>
          
          <button onClick={scrollToForm} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-purple-500/30 text-purple-300 px-8 py-4 rounded-xl font-bold hover:bg-purple-500/10 hover:border-purple-500/50 transition-all hover:-translate-y-1 group">
             Request Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </section>

    </div>
  );
};

export default GetStarted;