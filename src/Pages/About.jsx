import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
  Target, Eye, Lightbulb, HeartHandshake, 
  Wrench, BookOpen, ShieldCheck, Award, Users, MapPin 
} from 'lucide-react';

const About = () => {
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
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-[#fafafa] text-gray-800 font-sans overflow-hidden relative">
      
      {/* --- CUSTOM CURSOR GLOW (Moved to Background: z-0) --- */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        // Z-index 0 kar diya hai taaki ye content ke peeche rahe
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-[100px] pointer-events-none z-0"
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-300/30 blur-[120px] rounded-full z-[-1]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-pink-300/20 blur-[120px] rounded-full z-[-1]" />

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-purple-700 uppercase bg-purple-100 border border-purple-200 rounded-full">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Future of Work</span> <br/> 
            Through Intelligent Automation
          </h1>
        </motion.div>
      </section>

      {/* 2. OUR STORY (Glassmorphism bg taaki glow peeche se dikhe) */}
      <section className="relative py-20 bg-white/70 backdrop-blur-md border-y border-gray-100 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It All Started</h2>
              <div className="w-16 h-1 bg-purple-600 rounded-full mb-8"></div>
              <p className="text-lg text-gray-800 font-medium leading-relaxed mb-6">
                Founded in 2024 by <strong>Sumit Mehta</strong> and <strong>Neha Chauhan</strong>, Innowex Automation was born from a simple observation: businesses lose countless hours on repetitive tasks that AI can handle better, faster, and more accurately.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Based in Pune, Maharashtra, we're on a mission to make intelligent automation accessible to organizations of all sizes. We believe that AI shouldn't be a luxury reserved for large corporations-it should empower every team to work smarter.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-20">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-pink-50 rounded-3xl transform rotate-3 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                alt="Team collaborating" 
                className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[4/3] border border-gray-100"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-1/2 bg-purple-200/40 blur-[100px] rounded-full z-[-1]" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cards solid white rakhe hain for maximum readability */}
          <motion.div variants={fadeUp} className="bg-white p-10 rounded-3xl shadow-lg border border-purple-50 hover:shadow-xl hover:border-purple-200 transition-all duration-300 relative z-20">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-purple-600 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To democratize AI automation by delivering intelligent solutions that eliminate busywork, accelerate growth, and unlock human potential.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-10 rounded-3xl shadow-lg border border-pink-50 hover:shadow-xl hover:border-pink-200 transition-all duration-300 relative z-20">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="text-pink-600 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              A world where organizations spend zero time on repetitive tasks, and teams are free to focus entirely on innovation, strategy, and meaningful work.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. WHAT DRIVES US */}
      <section className="py-24 bg-purple-50/70 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 relative z-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">The core principles that guide our approach to building intelligent automation.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: 'Innovation First', desc: 'We stay at the forefront of AI technology, continuously exploring new models, techniques, and approaches.' },
              { icon: HeartHandshake, title: 'Customer Success', desc: 'Your success is our success. We measure ourselves by the value we create for your organization.' },
              { icon: Wrench, title: 'Practical Solutions', desc: 'Every solution we build solves a real problem and delivers measurable business impact.' },
              { icon: BookOpen, title: 'Continuous Learning', desc: 'We invest heavily in research, training, and experimentation to ensure we deliver the best solutions.' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 hover:-translate-y-2 hover:shadow-md transition-all duration-300 relative z-20">
                <item.icon className="text-purple-600 w-10 h-10 mb-6" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. MEET THE FOUNDERS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Founders</h2>
          <div className="w-20 h-1 bg-pink-500 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 items-start bg-white p-6 rounded-3xl shadow-md border border-gray-100 hover:border-purple-200 transition-colors relative z-20">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-purple-100 flex-shrink-0 overflow-hidden border-4 border-white shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-purple-400">
                <Users size={48} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Sumit Mehta</h3>
              <p className="text-purple-600 font-medium mb-3">Co-Founder</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Sumit brings expertise in AI development and system architecture. With a passion for solving complex technical challenges, he leads our engineering and solution design efforts.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 items-start bg-white p-6 rounded-3xl shadow-md border border-gray-100 hover:border-pink-200 transition-colors relative z-20">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-pink-100 flex-shrink-0 overflow-hidden border-4 border-white shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-pink-400">
                <Users size={48} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Neha Chauhan</h3>
              <p className="text-pink-600 font-medium mb-3">Co-Founder</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Neha specializes in business operations and client success. She ensures our automation solutions align perfectly with client needs and deliver maximum value.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 6. OUR VALUES & WHY PUNE */}
      <section className="py-24 bg-white/70 backdrop-blur-md border-t border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
              <div className="space-y-6">
                {[
                  { icon: Eye, title: 'Transparency', desc: "We believe in clear communication. You'll always know what we're building, why, and how it impacts your business." },
                  { icon: ShieldCheck, title: 'Quality', desc: "We don't cut corners. Every automation system we deploy is thoroughly tested, secure, and built to perform reliably at scale." },
                  { icon: Award, title: 'Partnership', desc: "We're not just a vendor-we're your automation partner. Your challenges become our challenges." },
                  { icon: Target, title: 'Accessibility', desc: "Advanced AI automation shouldn't be complicated. We make powerful technology simple and accessible for everyone." },
                ].map((val, i) => (
                  <div key={i} className="flex gap-4 group relative z-20">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors flex items-center justify-center">
                      <val.icon className="text-purple-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{val.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-20">
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl p-1 shadow-2xl overflow-hidden h-full">
                <div className="bg-white w-full h-full rounded-[23px] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                  <MapPin className="absolute -bottom-10 -right-10 w-64 h-64 text-purple-50 opacity-50 z-0" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-6">
                      <MapPin className="text-pink-500 w-8 h-8" />
                      <h2 className="text-3xl font-bold text-gray-900">Why Pune?</h2>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      Located in one of India's fastest-growing tech hubs, Pune provides us access to exceptional talent, a thriving innovation ecosystem, and proximity to diverse industries that benefit from automation.
                    </p>

                    <div className="rounded-2xl overflow-hidden shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80" 
                        alt="Pune City Skyline" 
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;