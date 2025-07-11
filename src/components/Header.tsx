import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: 'Income Tax Return Filing', price: '₹4,000 - ₹6,000' },
    { name: 'GST Registration & Returns', price: '₹5,000 - ₹8,000' },
    { name: 'Business Registration', price: '₹6,000 - ₹10,000' },
    { name: 'Trademark Registration', price: '₹5,000 - ₹8,000' },
    { name: 'TDS Returns', price: '₹4,000 - ₹6,000' },
    { name: 'Audit Services', price: '₹7,000 - ₹10,000' },
    { name: 'Accounting Services', price: '₹4,500 - ₹7,000' },
    { name: 'Tax Planning', price: '₹5,000 - ₹8,000' }
  ];

  const openWhatsApp = (service: string) => {
    const phoneNumber = '919789485470';
    const message = `Hi TAXTIC Team,

I'm interested in ${service}. Please provide me with more details about:
- Service process
- Required documents
- Timeline
- Exact pricing

Please contact me to get started.

Thank you!`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 animate-slideInDown">
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4 animate-fadeInLeft">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-full shadow-lg">
              <img 
                src="/ChatGPT Image Jul 8, 2025, 05_11_48 PM.png" 
                alt="TAXTIC Logo" 
                className="w-10 h-10 rounded-full hover-scale animate-float" 
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">TAXTIC</h1>
              <span className="text-sm text-gray-600 italic">Your trusted tax buddy</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 animate-fadeInRight">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-600 transition-all duration-300 font-medium hover:scale-105"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border py-4 z-50 transition-all duration-300 transform ${
                  isServicesOpen 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                }`}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="px-4 pb-3 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800">Our Services</h3>
                  <p className="text-sm text-gray-600">Professional tax and business solutions</p>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => openWhatsApp(service.name)}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-600 transition-all duration-300 border-b border-gray-50 last:border-b-0 group"
                      style={{animationDelay: `${index * 0.05}s`}}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium group-hover:translate-x-2 transition-transform duration-300">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-600 font-semibold">
                            {service.price}
                          </div>
                        </div>
                        <div className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Get Started
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="px-4 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => openWhatsApp('General Inquiry')}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Contact for Custom Service
                  </button>
                </div>
              </div>
            </div>

            <a href="#about" className="text-gray-700 hover:text-gray-600 transition-all duration-300 font-medium hover:scale-105">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-600 transition-all duration-300 font-medium hover:scale-105">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-600 transition-all duration-300 font-medium hover:scale-105">Contact</a>

            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={() => window.open('tel:+919789485470', '_self')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-600 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>+91 97894 85470</span>
              </button>
              <button
                onClick={() => window.open('mailto:taxtictt@gmail.com', '_self')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-600 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span>taxtictt@gmail.com</span>
              </button>
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
                  <button
                    key={index}
                    onClick={() => openWhatsApp(service.name)}
                    className="block w-full text-left ml-4 text-gray-600 hover:text-gray-600 transition-all duration-300 hover:translate-x-2 py-1"
                  >
                    <div className="flex justify-between items-center">
                      <span>{service.name}</span>
                      <span className="text-xs text-gray-600 font-semibold">{service.price}</span>
                    </div>
                  </button>
                ))}
              </div>
              <a href="#about" className="text-gray-700 hover:text-gray-600 transition-all duration-300 hover:translate-x-2">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-600 transition-all duration-300 hover:translate-x-2">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-600 transition-all duration-300 hover:translate-x-2">Contact</a>
              
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => window.open('tel:+919789485470', '_self')}
                  className="flex items-center space-x-2 text-gray-600 mb-2 hover:text-gray-600 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 97894 85470</span>
                </button>
                <button
                  onClick={() => window.open('mailto:taxtictt@gmail.com', '_self')}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-600 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>taxtictt@gmail.com</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;