import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    const phoneNumber = '919789485470';
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  const services = [
    'Income Tax Return Filing',
    'GST Registration & Returns',
    'Business Registration',
    'Trademark Registration',
    'TDS Services',
    'Audit Services',
    'Accounting Services',
    'Tax Planning'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Refund Policy', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white animate-fadeInUp">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-fadeInLeft">
            <div className="flex items-center space-x-3 hover-scale transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-2 rounded-xl shadow-lg">
                <img src="/ChatGPT Image Jul 8, 2025, 05_11_48 PM.png" alt="TAXTIC Logo" className="w-8 h-8 rounded-full animate-float" />
              </div>
              <div>
                <h3 className="text-2xl font-bold hover:text-blue-400 transition-colors duration-300">TAXTIC</h3>
                <p className="text-gray-400 text-sm">Your trusted tax buddy</p>
              </div>
            </div>
            <p className="text-gray-300">
              India's most trusted tax platform serving 1000+ happy customers with comprehensive 
              tax solutions and business services.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-white transition-all duration-300 text-sm hover:translate-x-2 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-all duration-300 text-sm flex items-center space-x-1 hover:translate-x-2">
                    <span>{link.name}</span>
                    {link.href === '#' && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fadeInRight">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3 hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-sm">Parthasarathy Street, SS Colony, Madurai - 625003, Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">+91 97894 85470</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">taxtictt@gmail.com</span>
              </div>
            </div>
            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-lg animate-pulse-custom"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat with us</span>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-800 mt-8 pt-8 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <div className="grid md:grid-cols-4 gap-6 text-center mb-8">
            <div className="hover-scale transition-all duration-300">
              <div className="text-2xl font-bold text-blue-400">1000+</div>
              <p className="text-gray-400 text-sm">Happy Customers</p>
            </div>
            <div className="hover-scale transition-all duration-300" style={{animationDelay: '0.1s'}}>
              <div className="text-2xl font-bold text-green-400">5000+</div>
              <p className="text-gray-400 text-sm">ITR Filed</p>
            </div>
            <div className="hover-scale transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="text-2xl font-bold text-purple-400">500+</div>
              <p className="text-gray-400 text-sm">Businesses Registered</p>
            </div>
            <div className="hover-scale transition-all duration-300" style={{animationDelay: '0.3s'}}>
              <div className="text-2xl font-bold text-orange-400">99.9%</div>
              <p className="text-gray-400 text-sm">Accuracy Rate</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>&copy; {currentYear} TAXTIC. All rights reserved. | Your trusted tax buddy</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
          <p className="text-sm mt-4 text-gray-500">
            TAXTIC is a registered tax consultancy firm providing comprehensive tax and business solutions across India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;