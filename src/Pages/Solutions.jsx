import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, GitMerge, BarChart3, Headset, Mail, Cpu, 
  CheckCircle2, Target, TrendingUp, LayoutDashboard, 
  Briefcase, MessageCircle, Cloud, Database 
} from 'lucide-react';

const Solutions = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const solutionsData = [
    {
      id: "doc-intel",
      title: "1. Document Intelligence & Processing",
      icon: FileText,
      color: "from-blue-500 to-cyan-400",
      bgGlow: "bg-blue-500/10",
      whatItDoes: "Automatically extract, classify, and process information from any document type-invoices, receipts, contracts, forms, medical records, and more.",
      features: [
        "Optical Character Recognition (OCR) for scanned documents",
        "Intelligent data extraction and validation",
        "Multi-language support",
        "Integration with existing document management systems",
        "Automated workflows for document routing and approval"
      ],
      perfectFor: ["Finance teams processing invoices and receipts", "HR departments handling employee documents", "Legal teams managing contracts", "Healthcare providers processing patient records"],
      impact: ["80% reduction in manual data entry time", "95% accuracy in data extraction", "Faster document processing cycles", "Reduced operational costs"]
    },
    {
      id: "workflow-auto",
      title: "2. Workflow Automation",
      icon: GitMerge,
      color: "from-pink-500 to-rose-400",
      bgGlow: "bg-pink-500/10",
      whatItDoes: "Automate end-to-end business processes across departments, from simple task automation to complex multi-step workflows.",
      features: [
        "Visual workflow designer",
        "Conditional logic and branching",
        "Multi-system integration",
        "Real-time monitoring and alerts",
        "Error handling and recovery"
      ],
      perfectFor: ["Order processing and fulfillment", "Customer onboarding workflows", "Approval processes", "Data synchronization between systems", "Report generation and distribution"],
      impact: ["60% faster process completion times", "Elimination of manual handoffs", "Improved process consistency", "Better compliance and audit trails"]
    },
    {
      id: "data-analysis",
      title: "3. Intelligent Data Analysis",
      icon: BarChart3,
      color: "from-purple-500 to-indigo-400",
      bgGlow: "bg-purple-500/10",
      whatItDoes: "Transform raw data into actionable insights using AI-powered analytics and pattern recognition.",
      features: [
        "Automated data cleaning and preparation",
        "Predictive analytics and forecasting",
        "Anomaly detection",
        "Trend analysis and visualization",
        "Natural language query interface"
      ],
      perfectFor: ["Sales forecasting and pipeline analysis", "Inventory optimization", "Customer behavior analysis", "Financial planning and budgeting", "Quality control monitoring"],
      impact: ["Data-driven decision making", "Early identification of issues and opportunities", "Improved forecasting accuracy", "Reduced analysis time from days to hours"]
    },
    {
      id: "customer-service",
      title: "4. Customer Service Automation",
      icon: Headset,
      color: "from-green-500 to-emerald-400",
      bgGlow: "bg-green-500/10",
      whatItDoes: "Enhance customer experience with AI-powered chatbots, automated ticket routing, and intelligent response systems.",
      features: [
        "Natural language understanding",
        "Multi-channel support (chat, email, phone)",
        "Automated ticket classification and routing",
        "Sentiment analysis",
        "Knowledge base integration"
      ],
      perfectFor: ["E-commerce customer support", "SaaS product support", "Booking and reservation systems", "Technical support queries", "Order status inquiries"],
      impact: ["24/7 customer support availability", "70% reduction in response times", "Improved customer satisfaction scores", "Reduced support team workload"]
    },
    {
      id: "email-auto",
      title: "5. Email & Communication Automation",
      icon: Mail,
      color: "from-yellow-500 to-orange-400",
      bgGlow: "bg-yellow-500/10",
      whatItDoes: "Automatically process, categorize, and respond to emails and messages using intelligent AI systems.",
      features: [
        "Email classification and prioritization",
        "Automated response generation",
        "Attachment processing",
        "CRM integration",
        "Follow-up automation"
      ],
      perfectFor: ["Sales teams managing lead inquiries", "Support teams handling customer emails", "Administrative teams processing requests", "Marketing teams managing campaigns"],
      impact: ["Zero missed inquiries", "Faster response times", "Improved lead conversion rates", "Better email organization"]
    },
    {
      id: "custom-ai",
      title: "6. Custom AI Solutions",
      icon: Cpu,
      color: "from-red-500 to-pink-500",
      bgGlow: "bg-red-500/10",
      whatItDoes: "Tailored automation solutions designed specifically for your unique business challenges and workflows.",
      features: [
        "Custom ML models for specialized predictions",
        "Industry-specific automation workflows",
        "Proprietary data processing pipelines",
        "Unique integration requirements"
      ],
      perfectFor: ["Organizations with specialized processes that require custom automation solutions."],
      impact: ["Highly specialized workflows optimized", "Complete alignment with business logic", "Scalable proprietary AI infrastructure", "Maximum ROI on complex processes"]
    }
  ];

  return (
    <div className="bg-[#0f051d] text-gray-300 font-sans min-h-screen overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 blur-[150px] rounded-full z-[-1]" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-pink-400 uppercase bg-pink-500/10 border border-pink-500/20 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.15)]">
            Our Automation Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            Intelligent Automation for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500">Every Business Need</span>
          </h1>
        </motion.div>
      </section>

      {/* 2. SOLUTIONS LIST */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="space-y-24">
          {solutionsData.map((solution, index) => (
            <motion.div 
              key={solution.id}
              id={solution.id} // <-- YAHAN ID LAGAYI HAI SCROLL KE LIYE
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={fadeUp}
              className="relative scroll-mt-32" // scroll-mt-32 taaki fixed header text hide na kare
            >
              {/* Background Glow per card */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] ${solution.bgGlow} blur-[100px] rounded-full z-[-1]`} />
              
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm hover:border-white/20 transition-colors duration-300">
                <div className="flex items-center gap-6 mb-8 border-b border-white/10 pb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} p-[1px] shadow-lg`}>
                    <div className="w-full h-full bg-[#150a26] rounded-2xl flex items-center justify-center">
                      <solution.icon className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{solution.title}</h2>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Target className="text-pink-400 w-5 h-5" /> What It Does
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed">{solution.whatItDoes}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {/* Features */}
                  <div className="md:col-span-1 bg-[#0f051d]/50 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="text-purple-400 w-5 h-5 shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Perfect For */}
                  <div className="md:col-span-1 bg-[#0f051d]/50 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-4">Perfect For</h4>
                    <ul className="space-y-3">
                      {solution.perfectFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0" />
                          <span className="text-gray-400 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Business Impact */}
                  <div className="md:col-span-1 bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-2xl border border-pink-500/20">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="text-pink-400 w-5 h-5" /> Business Impact
                    </h4>
                    <ul className="space-y-4">
                      {solution.impact.map((impact, i) => (
                        <li key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                          <span className="text-gray-200 text-sm font-medium">{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. INTEGRATION CAPABILITIES */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-indigo-600/10 blur-[150px] rounded-full z-[-1]" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Integration Capabilities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Our solutions integrate seamlessly with your existing tech stack.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "CRM Systems", desc: "Salesforce, HubSpot, Zoho", icon: LayoutDashboard, color: "text-orange-400" },
            { title: "ERP Systems", desc: "SAP, Oracle, MS Dynamics", icon: Briefcase, color: "text-blue-400" },
            { title: "Communication", desc: "Slack, MS Teams, Email", icon: MessageCircle, color: "text-purple-400" },
            { title: "Cloud Platforms", desc: "AWS, Google Cloud, Azure", icon: Cloud, color: "text-cyan-400" },
            { title: "Databases", desc: "PostgreSQL, MySQL, MongoDB", icon: Database, color: "text-emerald-400" },
          ].map((integration, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors text-center group"
            >
              <integration.icon className={`w-10 h-10 mx-auto mb-4 ${integration.color} group-hover:scale-110 transition-transform`} />
              <h4 className="text-white font-bold mb-2">{integration.title}</h4>
              <p className="text-xs text-gray-400">{integration.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
          className="text-center text-gray-500 mt-10 text-sm font-medium tracking-wide uppercase"
        >
          And many more...
        </motion.p>
      </section>

    </div>
  );
};

export default Solutions;