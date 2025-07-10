import React, { useState, useEffect } from 'react';
import { MessageCircle, FileText, Calculator, TrendingUp, Users, Award, Clock, AlertTriangle, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification after 15 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-close notification after 8 seconds of display
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const openWhatsApp = (message: string) => {
    const phoneNumber = '919789485470';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const openPhone = () => {
    window.open('tel:+919789485470', '_self');
  };

  const openEmail = () => {
    window.open('mailto:taxtictt@gmail.com', '_self');
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center overflow-hidden relative">
      {/* Tax Notice Notification Popup */}
      {showNotification && (
        <div className="fixed top-20 left-4 z-50 bg-blue-500 text-white rounded-xl p-4 shadow-2xl max-w-sm animate-slideInLeft">
          <button
            onClick={() => setShowNotification(false)}
            className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1 animate-pulse" />
            <div>
              <h4 className="font-bold text-sm mb-1">Tax Notice Alert!</h4>
              <p className="text-xs mb-3 opacity-90">Get expert help to respond and resolve tax notices quickly.</p>
              <button
                onClick={() => {
                  openWhatsApp('Hi, I have received a tax notice and need expert help to respond and resolve it. Please guide me through the process.');
                  setShowNotification(false);
                }}
                className="bg-white text-blue-600 text-xs font-semibold py-1.5 px-3 rounded-md hover:bg-gray-100 transition-all duration-300"
              >
                Get Help Now
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-3 rounded-full shadow-lg">
                <img 
                  src="/ChatGPT Image Jul 8, 2025, 05_11_48 PM.png" 
                  alt="TAXTIC Logo" 
                  className="w-12 h-12 rounded-full hover-scale animate-float" 
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">TAXTIC</h1>
                <span className="text-sm text-gray-600 italic">Your trusted tax buddy</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="block text-blue-600 gradient-animate bg-clip-text text-transparent">INDIA'S #1</span>
                <span className="block text-gray-800 text-3xl md:text-4xl mt-2">Most Trusted Tax Platform</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl">
                <span className="text-blue-600 font-bold">File ITR, GST Returns & Business Registration</span> with India's Leading Tax Experts
              </p>
              
              <p className="text-lg text-gray-600 max-w-2xl">
                Over <span className="font-bold text-blue-600">1000+ satisfied customers</span> trust TAXTIC for all their tax and compliance needs
              </p>
            </div>

            {/* Stats */}
            <div className="flex space-x-8 py-6">
              <div className="text-left hover-scale transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <p className="text-gray-600 font-medium">Happy Customers</p>
              </div>
              <div className="text-left hover-scale transition-all duration-300" style={{animationDelay: '0.1s'}}>
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
              <div className="text-left hover-scale transition-all duration-300" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <p className="text-gray-600 font-medium">Expert Support</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openWhatsApp('Hi, I would like to start my tax filing process. Please help me get started.')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg"
              >
                <FileText className="w-5 h-5" />
                <span>Start Filing Now</span>
              </button>
              
              <button
                onClick={() => openWhatsApp('Hi, I would like to consult with a CA. Please guide me through the process and share the consultation fees.')}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Consult a CA</span>
              </button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={openPhone}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-blue-100 rounded-full p-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="font-medium">+91 97894 85470</span>
              </button>
              
              <button
                onClick={openEmail}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-blue-100 rounded-full p-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="font-medium">taxtictt@gmail.com</span>
              </button>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="space-y-6 animate-fadeInRight">
            {/* Consult a CA Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover-lift transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-600 rounded-full p-4">
                  <MessageCircle className="w-8 h-8 text-white animate-bounce-custom" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Consult a CA</h3>
                  <p className="text-gray-600">Get expert advice from certified tax professionals</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Personalized tax planning advice</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Compliance guidance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Tax saving strategies</span>
                </li>
              </ul>
              <div className="text-center mb-4">
                <span className="text-lg font-bold text-blue-600">₹4,000 - ₹10,000</span>
                <p className="text-sm text-gray-500">Consultation fees based on complexity</p>
              </div>
              <button
                onClick={() => openWhatsApp('Hi, I would like to consult with a CA. Please guide me through the process and share the consultation fees.')}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Consult a CA</span>
              </button>
            </div>

            {/* Start Filing Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover-lift transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-orange-600 rounded-full p-4">
                  <FileText className="w-8 h-8 text-white animate-pulse-custom" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Start Your Tax Filing</h3>
                  <p className="text-gray-600">Quick, secure, and hassle-free tax return filing</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Maximum refund guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Expert review included</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>E-filing & ITR-V support</span>
                </li>
              </ul>
              <button
                onClick={() => openWhatsApp('Hi, I would like to start my tax filing process. Please help me get started.')}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg"
              >
                <FileText className="w-5 h-5" />
                <span>Start Filing Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-4 gap-8 mt-20 animate-fadeInUp" style={{animationDelay: '1s'}}>
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '1.1s'}}>
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Expert Team</h4>
            <p className="text-gray-600">Certified tax professionals with years of experience</p>
          </div>
          
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '1.2s'}}>
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">100% Accurate</h4>
            <p className="text-gray-600">Error-free filing with maximum refund guarantee</p>
          </div>
          
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '1.3s'}}>
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Quick Processing</h4>
            <p className="text-gray-600">Fast turnaround time for all tax services</p>
          </div>
          
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '1.4s'}}>
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale">
              <TrendingUp className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Tax Savings</h4>
            <p className="text-gray-600">Maximize your tax savings with expert planning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;