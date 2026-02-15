import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const solutions = [
    { name: 'Document Intelligence & Processing', id: 'doc-intel' },
    { name: 'Workflow Automation', id: 'workflow-auto' },
    { name: 'Intelligent Data Analysis', id: 'data-analysis' },
    { name: 'Customer Service Automation', id: 'customer-service' },
    { name: 'Email & Communication Automation', id: 'email-auto' },
    { name: 'Custom AI Solutions', id: 'custom-ai' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smart Scroll
  const handleScroll = (id) => {
    setIsOpen(false);
    setIsMobileMenuOpen(false);

    const scrollToElement = () => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    if (location.pathname !== "/solutions") {
      navigate("/solutions");
      setTimeout(scrollToElement, 300);
    } else {
      scrollToElement();
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md border-b border-gray-200 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* ✅ Logo + Company Name */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Company Logo"
              className="h-11 w-auto object-contain"
            />

            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg text-gray-900">
                INNOWEX
              </span>
              <span className="text-xs tracking-widest text-gray-500">
                AUTOMATION
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            <Link to="/" className="font-medium hover:text-pink-600 transition-colors">
              Home
            </Link>

            <Link to="/about" className="font-medium hover:text-pink-600 transition-colors">
              About
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1 font-medium hover:text-pink-600 transition-colors py-2"
              >
                <span>Solution</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-pink-600" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-4 w-80 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50"
                  >
                    {solutions.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleScroll(item.id)}
                        className="w-full text-left px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-pink-600 text-sm font-medium"
                      >
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/technology" className="font-medium hover:text-pink-600 transition-colors">
              Technology
            </Link>

            <Link to="/use-cases" className="font-medium hover:text-pink-600 transition-colors">
              Use Cases
            </Link>

            <Link
              to="/get-started"
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-pink-600 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">

              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 font-medium hover:text-pink-600"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 font-medium hover:text-pink-600"
              >
                About
              </Link>

              <div className="px-3 py-2">
                <p className="text-sm font-bold text-gray-400 uppercase mb-2">
                  Solutions
                </p>

                {solutions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="block w-full text-left px-2 py-2 text-sm hover:text-pink-600"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <Link
                to="/technology"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 font-medium hover:text-pink-600"
              >
                Technology
              </Link>

              <Link
                to="/use-cases"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 font-medium hover:text-pink-600"
              >
                Use Cases
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
