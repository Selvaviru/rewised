import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    'Income Tax Return Filing',
    'GST Registration & Returns',
    'Business Registration',
    'Trademark Registration',
    'TDS Returns',
    'Audit Services',
    'Accounting Services',
    'Tax Planning'
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 animate-slideInDown">
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4 animate-fadeInLeft">
            <img src="/ChatGPT Image Jul 8, 2025, 05_11_48 PM.png" alt="TAXTIC Logo" className="w-12 h-12 rounded-2xl shadow-lg hover-scale animate-float" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">TAXTIC</h1>
              <span className="text-sm text-gray-600 italic">Your trusted tax buddy</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 animate-fadeInRight">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-2 z-50 animate-fadeInUp">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href="#services"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100 last:border-b-0 hover:translate-x-2"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105">Contact</a>

            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+91 97894 85470</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>taxtictt@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 transition-transform duration-300 rotate-90" /> : <Menu className="w-6 h-6 transition-transform duration-300" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 animate-fadeInUp">
            <div className="flex flex-col space-y-4 pt-4">
              <div className="space-y-2">
                <span className="text-gray-700 font-medium">Services</span>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href="#services"
                    className="block ml-4 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
                  >
                    {service}
                  </a>
                ))}
              </div>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2">Contact</a>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 97894 85470</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>taxtictt@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;