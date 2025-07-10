import React from 'react';
import { useState, useEffect } from 'react';
import { Calculator, FileText, Building, Award, Users, Shield, Clock, CheckCircle, Briefcase, CreditCard, BookOpen, PieChart, Receipt, Gavel, TrendingUp, UserCheck } from 'lucide-react';
import GSTFlashCard from './GSTFlashCard';

const Services: React.FC = () => {
  const [showGSTCard, setShowGSTCard] = useState(false);
  const [hasScrolledToGST, setHasScrolledToGST] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const gstService = document.getElementById('gst-service');
      if (gstService && !hasScrolledToGST) {
        const rect = gstService.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          setHasScrolledToGST(true);
          // Show GST card after 15 seconds + scroll delay
          setTimeout(() => {
            setShowGSTCard(true);
          }, 15000);
          
          // Auto-close after 10 seconds of display
          setTimeout(() => {
            setShowGSTCard(false);
          }, 25000); // 15s delay + 10s display
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledToGST]);

  const services = [
    {
      icon: <Calculator className="w-12 h-12 text-blue-600" />,
      title: 'Income Tax Return Filing',
      description: 'Complete ITR filing services for individuals, businesses, and professionals with maximum refund guarantee.',
      features: ['ITR-1 to ITR-7 Filing', 'Tax Planning & Advisory', 'Refund Processing', 'Notice Handling', 'Amendment Returns'],
      price: '₹4,000 - ₹6,000',
      color: 'blue'
    },
    {
      icon: <Receipt className="w-12 h-12 text-green-600" />,
      title: 'GST Services',
      description: 'End-to-end GST registration, return filing, and compliance management for your business.',
      features: ['GST Registration', 'Monthly/Quarterly Returns', 'GST Audit Support', 'Input Tax Credit', 'GST Refund'],
      price: '₹5,000 - ₹8,000',
      color: 'green',
      id: 'gst-service'
    },
    {
      icon: <Building className="w-12 h-12 text-purple-600" />,
      title: 'Business Registration',
      description: 'Complete business setup services including company incorporation and compliance.',
      features: ['Private Limited Company', 'LLP Registration', 'Partnership Firm', 'Sole Proprietorship', 'NGO Registration'],
      price: '₹6,000 - ₹10,000',
      color: 'purple'
    },
    {
      icon: <Gavel className="w-12 h-12 text-orange-600" />,
      title: 'Trademark Registration',
      description: 'Protect your brand with comprehensive trademark registration and IP services.',
      features: ['Trademark Search', 'Application Filing', 'Objection Handling', 'Registration Certificate', 'Renewal Services'],
      price: '₹5,000 - ₹8,000',
      color: 'orange'
    },
    {
      icon: <FileText className="w-12 h-12 text-red-600" />,
      title: 'TDS Services',
      description: 'Complete TDS compliance including return filing, certificate generation, and advisory.',
      features: ['TDS Return Filing', 'TDS Certificates', 'Lower Deduction Certificate', 'TDS Reconciliation', 'Penalty Handling'],
      price: '₹4,000 - ₹6,000',
      color: 'red'
    },
    {
      icon: <UserCheck className="w-12 h-12 text-indigo-600" />,
      title: 'Audit Services',
      description: 'Professional audit services for statutory compliance and business growth.',
      features: ['Statutory Audit', 'Internal Audit', 'Tax Audit', 'GST Audit', 'Due Diligence'],
      price: '₹7,000 - ₹10,000',
      color: 'indigo'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-pink-600" />,
      title: 'Accounting Services',
      description: 'Complete bookkeeping and accounting solutions for businesses of all sizes.',
      features: ['Bookkeeping', 'Financial Statements', 'MIS Reports', 'Payroll Processing', 'Compliance Management'],
      price: '₹4,500 - ₹7,000',
      color: 'pink'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-teal-600" />,
      title: 'Tax Planning',
      description: 'Strategic tax planning to minimize tax liability and maximize savings.',
      features: ['Investment Planning', 'Tax Saving Strategies', 'Retirement Planning', 'Estate Planning', 'Business Tax Planning'],
      price: '₹5,000 - ₹8,000',
      color: 'teal'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Expert Team',
      description: 'Certified CAs, CS, and tax professionals with 5+ years experience'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Data Security',
      description: 'Bank-level security with 256-bit SSL encryption for your data'
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Quick Turnaround',
      description: 'Fast processing with guaranteed delivery timelines'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Quality Assurance',
      description: '100% accuracy guarantee with expert review process'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Tax & Business Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tax solutions and business services designed to meet all your compliance needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          {services.map((service, index) => (
            <div
              id={service.id}
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-t-4 border-${service.color}-600 hover-lift animate-fadeInUp`}
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="mb-4 flex justify-center hover-scale">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center text-sm">{service.description}</p>
              <div className="text-center mb-4">
                <span className={`text-lg font-bold text-${service.color}-600`}>{service.price}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 animate-fadeInLeft" style={{animationDelay: `${0.05 * featureIndex}s`}}>
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  const phoneNumber = '919789485470';
                  const message = `Hi TAXTIC Team,

I'm interested in ${service.title}. Please provide me with more details about:
- Service process
- Required documents
- Timeline
- Exact pricing

Please contact me to get started.

Thank you!`;
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
                className={`w-full bg-${service.color}-600 hover:bg-${service.color}-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl p-12 shadow-lg hover-lift animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose TAXTIC?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center animate-fadeInUp hover-scale" style={{animationDelay: `${0.1 * index}s`}}>
                <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center hover-scale animate-pulse-custom">
                  <div className="text-blue-600">{item.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fadeInUp hover-scale" style={{animationDelay: '0.7s'}}>
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold hover-scale animate-bounce-custom">
                1
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Choose Service</h4>
              <p className="text-gray-600">Select the tax or business service you need</p>
            </div>
            <div className="text-center animate-fadeInUp hover-scale" style={{animationDelay: '0.8s'}}>
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold hover-scale animate-bounce-custom" style={{animationDelay: '0.2s'}}>
                2
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Upload Documents</h4>
              <p className="text-gray-600">Securely upload your required documents</p>
            </div>
            <div className="text-center animate-fadeInUp hover-scale" style={{animationDelay: '0.9s'}}>
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold hover-scale animate-bounce-custom" style={{animationDelay: '0.4s'}}>
                3
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Expert Review</h4>
              <p className="text-gray-600">Our experts review and process your request</p>
            </div>
            <div className="text-center animate-fadeInUp hover-scale" style={{animationDelay: '1s'}}>
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold hover-scale animate-bounce-custom" style={{animationDelay: '0.6s'}}>
                4
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Get Results</h4>
              <p className="text-gray-600">Receive your completed documents and certificates</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* GST Flash Card */}
      {showGSTCard && (
        <GSTFlashCard onClose={() => setShowGSTCard(false)} />
      )}
    </section>
  );
};

export default Services;