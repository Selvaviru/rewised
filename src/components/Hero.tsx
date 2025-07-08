import React from 'react';
import { MessageCircle, FileText, Calculator, TrendingUp, Users, Award, Clock, AlertTriangle } from 'lucide-react';

const Hero: React.FC = () => {
  const openWhatsApp = (message: string) => {
    const phoneNumber = '919789485470';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="home" className="bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        {/* Tax Notice Alert Banner */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6 mb-12 shadow-lg animate-fadeInUp animate-flash-border">
          <div className="flex items-center justify-center space-x-4">
            <AlertTriangle className="w-8 h-8 animate-bounce-custom text-yellow-300" />
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Received a Tax Notice?</h3>
              <p className="text-lg mb-4">Respond and Resolve with our Tax Experts - Don't Panic, We're Here to Help!</p>
              <button
                onClick={() => openWhatsApp('Hi, I have received a tax notice and need expert help to respond and resolve it. Please guide me through the process.')}
                className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse-custom"
              >
                Get Expert Help Now
              </button>
            </div>
            <AlertTriangle className="w-8 h-8 animate-bounce-custom text-yellow-300" />
          </div>
        </div>
        {/* Main Hero Content */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
            <span className="block text-blue-600 gradient-animate bg-clip-text text-transparent text-5xl md:text-7xl">INDIA'S #1</span>
            <span className="block text-gray-800 text-3xl md:text-5xl mt-2">Most Trusted Tax Platform</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto animate-fadeInUp font-medium" style={{animationDelay: '0.4s'}}>
            <span className="text-blue-600 font-bold">File ITR, GST Returns & Business Registration</span> with India's Leading Tax Experts
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.5s'}}>
            Over <span className="font-bold text-blue-600">1000+ satisfied customers</span> trust TAXTIC for all their tax and compliance needs
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mb-12 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <div className="text-center hover-scale">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center hover-scale" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center hover-scale" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <p className="text-gray-600">Expert Support</p>
            </div>
          </div>
        </div>

        {/* Horizontal Action Boxes */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
          {/* Consult a CA */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover-lift transition-all duration-300 animate-fadeInLeft">
            <div className="flex items-center space-x-4 mb-6 animate-fadeInUp">
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

          {/* Start Filing */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200 hover-lift transition-all duration-300 animate-fadeInRight">
            <div className="flex items-center space-x-4 mb-6 animate-fadeInUp">
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

        {/* Key Features */}
        <div className="grid md:grid-cols-4 gap-8 animate-fadeInUp" style={{animationDelay: '1s'}}>
          <div className="text-center p-6 bg-gray-50 rounded-xl hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '1.1s'}}>
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Expert Team</h4>
            <p className="text-gray-600">Certified tax professionals with years of experience</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-xl hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '1.2s'}}>
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">100% Accurate</h4>
            <p className="text-gray-600">Error-free filing with maximum refund guarantee</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-xl hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '1.3s'}}>
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Quick Processing</h4>
            <p className="text-gray-600">Fast turnaround time for all tax services</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-xl hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '1.4s'}}>
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