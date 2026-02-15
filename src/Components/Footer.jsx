import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B0514] text-gray-400 border-t border-white/10 relative overflow-hidden z-10">
      
      {/* Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          
          {/* LEFT: Company Info */}
          <div className="lg:col-span-5">

            {/* ✅ Logo + Company Name */}
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Company Logo"
                className="h-11 w-auto object-contain"
              />

              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-white">
                  INNOWEX
                </span>
                <span className="text-xs tracking-widest text-gray-400">
                  AUTOMATION
                </span>
              </div>
            </Link>

            <p className="text-sm mb-6 leading-relaxed max-w-sm">
              Empowering businesses with intelligent AI automation solutions to eliminate repetitive tasks and accelerate growth.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-pink-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-sm leading-relaxed">
                  Innowex Automation Private Limited <br />
                  SEC6 P.NO 1 PRIVA COMPLEX SH.NO A/16 HAVELI <br />
                  Alandi Devachi, Pune, Khed <br />
                  Maharashtra, India - 412105
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-pink-500 shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:hello@autoinnowex.in"
                  className="text-sm hover:text-pink-400 transition-colors"
                >
                  hello@autoinnowex.in
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Quick Links */}
          <div className="lg:col-span-3 lg:col-start-9">
            <h3 className="text-white font-bold mb-6 tracking-wide">Quick Links</h3>

            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-pink-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-pink-400 transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="text-sm hover:text-pink-400 transition-colors">Solutions</Link></li>
              <li><Link to="/technology" className="text-sm hover:text-pink-400 transition-colors">Technology</Link></li>
              <li><Link to="/use-cases" className="text-sm hover:text-pink-400 transition-colors">Use Cases</Link></li>
              <li><Link to="/get-started" className="text-sm hover:text-pink-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Innowex Automation. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/privacy-policy" className="hover:text-pink-400 transition-colors">
              Privacy Policy
            </Link>

            <Link to="/terms-conditions" className="hover:text-pink-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-[-100px] right-0 w-[300px] h-[200px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none z-[-1]" />
    </footer>
  );
};

export default Footer;
