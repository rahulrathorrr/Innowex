import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
  Factory, HeartPulse, ShoppingCart, Landmark, 
  Truck, Store, Headset, Users, CheckCircle2, 
  AlertCircle, Lightbulb, TrendingUp
} from 'lucide-react';

const UseCases = () => {
  // Custom Cursor Glow Logic
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

  // Data Array based on your content
  const cases = [
    {
      industry: "Manufacturing",
      title: "Production Automation",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1565514020179-026a92b84bb6?auto=format&fit=crop&w=800&q=80",
      challenge: "A mid-sized manufacturer struggled with manual production scheduling, leading to inefficiencies and delayed deliveries.",
      solution: "We implemented an AI-powered production planning system that analyzes historical data, current inventory, and order priorities to generate optimal production schedules.",
      results: ["35% improvement in production efficiency", "50% reduction in scheduling time", "20% decrease in production delays", "Better resource utilization"]
    },
    {
      industry: "Healthcare",
      title: "Medical Records Processing",
      icon: HeartPulse,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      challenge: "A healthcare provider spent hours manually processing patient intake forms and medical records, creating bottlenecks in patient care.",
      solution: "Deployed intelligent document processing to automatically extract and validate patient information from forms, integrating directly with their electronic health records system.",
      results: ["75% reduction in data entry time", "98% accuracy in information extraction", "Faster patient onboarding", "Improved staff productivity"]
    },
    {
      industry: "E-commerce",
      title: "Order Processing Automation",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      challenge: "An online retailer faced challenges processing high volumes of orders across multiple sales channels, leading to fulfillment delays.",
      solution: "Created an automated order processing workflow that consolidates orders from all channels, validates inventory, generates shipping labels, and updates customers automatically.",
      results: ["90% reduction in order processing time", "99% order accuracy", "Improved customer satisfaction", "Ability to scale during peak seasons"]
    },
    {
      industry: "Finance",
      title: "Invoice Processing",
      icon: Landmark,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      challenge: "An accounting firm manually processed thousands of invoices monthly, consuming significant time and introducing errors.",
      solution: "Implemented AI-powered invoice processing that automatically extracts data, validates against purchase orders, flags discrepancies, and routes for approval.",
      results: ["80% faster invoice processing", "95% reduction in data entry errors", "Improved cash flow management", "Significant cost savings"]
    },
    {
      industry: "Logistics",
      title: "Route Optimization",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1586528116493-a0282b5dc26f?auto=format&fit=crop&w=800&q=80",
      challenge: "A delivery service struggled with inefficient routing, leading to high fuel costs and delayed deliveries.",
      solution: "Developed an AI-based route optimization system that analyzes traffic patterns, delivery priorities, and vehicle capacity to generate optimal delivery routes daily.",
      results: ["25% reduction in fuel costs", "30% more deliveries per day", "Improved on-time delivery rates", "Enhanced customer satisfaction"]
    },
    {
      industry: "Retail",
      title: "Inventory Management",
      icon: Store,
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
      challenge: "A retail chain faced stockouts and overstock situations due to manual inventory forecasting.",
      solution: "Built a predictive inventory management system using machine learning to forecast demand based on historical sales, seasonality, and market trends.",
      results: ["40% reduction in stockouts", "30% decrease in excess inventory", "Improved profit margins", "Better customer experience"]
    },
    {
      industry: "Customer Support",
      title: "Ticket Automation",
      icon: Headset,
      image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80",
      challenge: "A SaaS provider's support team was overwhelmed with repetitive customer inquiries, leading to slow response times.",
      solution: "Deployed an AI chatbot integrated with their knowledge base to handle common queries, with automatic routing of complex issues to human agents.",
      results: ["60% of tickets resolved automatically", "70% reduction in average response time", "24/7 customer support availability", "Support team focused on complex issues"]
    },
    {
      industry: "HR",
      title: "Recruitment Automation",
      icon: Users,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      challenge: "An HR department spent excessive time screening resumes and scheduling interviews for multiple open positions.",
      solution: "Created an automated recruitment workflow that screens resumes based on criteria, ranks candidates, and automatically schedules interviews.",
      results: ["80% reduction in initial screening time", "More consistent candidate evaluation", "Faster time-to-hire", "Improved candidate experience"]
    }
  ];

  return (
    <div className="bg-[#0B0514] text-gray-300 font-sans min-h-screen overflow-hidden relative">
      
      {/* --- CUSTOM CURSOR GLOW (Z-0) --- */}
      <motion.div
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/30 blur-[150px] rounded-full z-[-1]" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
          <span className="inline-block px-5 py-2 mb-6 text-sm font-bold tracking-widest text-purple-300 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            Real-World Automation Success Stories
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            See How Organizations <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Transform with AI</span>
          </h1>
        </motion.div>
      </section>

      {/* 2. USE CASES GRID */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer} 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {cases.map((useCase, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp} 
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-[#0B0514]/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={useCase.image} 
                  alt={useCase.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Industry Tag Overlay */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#0B0514]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <useCase.icon className="text-purple-400 w-4 h-4" />
                  <span className="text-white text-xs font-bold uppercase tracking-wider">{useCase.industry}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-colors duration-500" />
                
                <h2 className="text-3xl font-bold text-white mb-8 group-hover:text-purple-300 transition-colors duration-300">
                  {useCase.title}
                </h2>

                <div className="space-y-6 flex-grow relative z-10">
                  {/* The Challenge */}
                  <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-2xl">
                    <h3 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" /> The Challenge
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{useCase.challenge}</p>
                  </div>

                  {/* Our Solution */}
                  <div className="bg-purple-500/5 border border-purple-500/10 p-5 rounded-2xl">
                    <h3 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" /> Our Solution
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{useCase.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="bg-emerald-500/5 border border-emerald-500/10 p-5 rounded-2xl mt-auto">
                    <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" /> Results
                    </h3>
                    <ul className="space-y-3">
                      {useCase.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. BOTTOM CTA / GLOW */}
      <div className="relative h-32 mt-10">
         <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-full max-w-3xl h-[200px] bg-gradient-to-t from-purple-900/40 to-transparent blur-[80px] rounded-full pointer-events-none" />
      </div>

    </div>
  );
};

export default UseCases;