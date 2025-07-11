import React from 'react';
import { Target, Eye, Award, Users, Shield, Clock, TrendingUp, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About TAXTIC</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's most trusted tax platform serving taxpayers, businesses, and professionals with comprehensive tax solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 scroll-animate">
          <div className="scroll-animate">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h3>
            <p className="text-lg text-gray-600 mb-6">
              TAXTIC is a leading tax consultancy and business services platform based in Madurai, Tamil Nadu. 
              We specialize in providing end-to-end tax solutions for individuals, businesses, and professionals 
              across India. Our mission is to simplify complex tax processes and make compliance hassle-free.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With over 1000+ satisfied customers and 5+ years of experience, we have established ourselves as 
              the go-to partner for Income Tax Returns, GST Services, Business Registration, Trademark Registration, 
              and comprehensive accounting solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl text-center interactive-hover magnetic scroll-animate stagger-1">
                <div className="text-3xl font-bold text-gray-600 mb-2">1000+</div>
                <p className="text-gray-700 font-medium">Happy Clients</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center interactive-hover magnetic scroll-animate stagger-2">
                <div className="text-3xl font-bold text-gray-600 mb-2">5000+</div>
                <p className="text-gray-700 font-medium">ITR Filed</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center interactive-hover magnetic scroll-animate stagger-3">
                <div className="text-3xl font-bold text-gray-600 mb-2">500+</div>
                <p className="text-gray-700 font-medium">Businesses Registered</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center interactive-hover magnetic scroll-animate stagger-4">
                <div className="text-3xl font-bold text-gray-600 mb-2">99.9%</div>
                <p className="text-gray-700 font-medium">Accuracy Rate</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-600 to-gray-800 text-white p-8 rounded-2xl interactive-hover gradient-animate scroll-animate animate-pulse-glow">
            <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-3 text-gray-100">Mission</h4>
                <p className="text-gray-50">
                  To be your trusted tax buddy by providing reliable, efficient, and affordable tax solutions 
                  that empower individuals and businesses to focus on growth while we handle compliance.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-gray-100">Vision</h4>
                <p className="text-gray-50">
                  To become India's leading digital tax platform, known for innovation, accuracy, 
                  and exceptional customer service in tax and business solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services Overview */}
        <div className="mb-16 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">What We Offer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '0.9s'}}>
              <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale">
                <Target className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Tax Services</h4>
              <p className="text-gray-600">ITR Filing, Tax Planning, GST Returns, TDS Services</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '1s'}}>
              <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale">
                <Award className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Business Setup</h4>
              <p className="text-gray-600">Company Registration, LLP, Partnership, Trademark</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '1.1s'}}>
              <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Compliance</h4>
              <p className="text-gray-600">Audit Services, ROC Filing, Annual Compliance</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '1.2s'}}>
              <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale">
                <TrendingUp className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Advisory</h4>
              <p className="text-gray-600">Tax Planning, Investment Advisory, Business Consulting</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-gray-50 rounded-2xl p-12 hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '1.3s'}}>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fadeInUp hover-scale" style={{animationDelay: '1.4s'}}>
              <div className="bg-gray-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center hover-scale animate-pulse-custom">
                <CheckCircle className="w-10 h-10 text-gray-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Accuracy</h4>
              <p className="text-gray-600">100% accurate tax processing with expert review</p>
            </div>
            
            <div className="text-center animate-fadeInUp hover-scale" style={{animationDelay: '1.5s'}}>
              <div className="bg-gray-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center hover-scale animate-pulse-custom" style={{animationDelay: '0.5s'}}>
                <Eye className="w-10 h-10 text-gray-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Transparency</h4>
              <p className="text-gray-600">Clear pricing and honest communication always</p>
            </div>
            
            <div className="text-center animate-fadeInUp hover-scale" style={{animationDelay: '1.6s'}}>
              <div className="bg-gray-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center hover-scale animate-pulse-custom" style={{animationDelay: '1s'}}>
                <Shield className="w-10 h-10 text-gray-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Security</h4>
              <p className="text-gray-600">Bank-level security for your sensitive data</p>
            </div>
            
            <div className="text-center animate-fadeInUp hover-scale" style={{animationDelay: '1.7s'}}>
              <div className="bg-gray-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center hover-scale animate-pulse-custom" style={{animationDelay: '1.5s'}}>
                <Clock className="w-10 h-10 text-gray-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Timeliness</h4>
              <p className="text-gray-600">Quick turnaround with guaranteed delivery dates</p>
            </div>
          </div>
        </div>

        {/* Why Choose TAXTIC */}
        <div className="mt-16 animate-fadeInUp" style={{animationDelay: '1.8s'}}>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose TAXTIC?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4 animate-fadeInLeft hover-lift transition-all duration-300" style={{animationDelay: '1.9s'}}>
                <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Expert Team</h4>
                  <p className="text-gray-600">Certified CAs, CS, and tax professionals with extensive experience</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-fadeInLeft hover-lift transition-all duration-300" style={{animationDelay: '2s'}}>
                <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Technology Driven</h4>
                  <p className="text-gray-600">Advanced technology platform for seamless service delivery</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-fadeInLeft hover-lift transition-all duration-300" style={{animationDelay: '2.1s'}}>
                <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Affordable Pricing</h4>
                  <p className="text-gray-600">Competitive and transparent pricing for all services</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 animate-fadeInRight hover-lift transition-all duration-300" style={{animationDelay: '2.2s'}}>
                <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">24/7 Support</h4>
                  <p className="text-gray-600">Round-the-clock customer support via WhatsApp and phone</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-fadeInRight hover-lift transition-all duration-300" style={{animationDelay: '2.3s'}}>
                <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Pan-India Service</h4>
                  <p className="text-gray-600">Serving clients across India with local expertise</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-fadeInRight hover-lift transition-all duration-300" style={{animationDelay: '2.4s'}}>
                <CheckCircle className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Money Back Guarantee</h4>
                  <p className="text-gray-600">100% satisfaction guarantee with money-back policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;