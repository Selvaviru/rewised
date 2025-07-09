import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, Award, Clock, Shield, CheckCircle } from 'lucide-react';

const ParallaxSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '1000+', label: 'Happy Clients', color: 'blue' },
    { icon: <Award className="w-8 h-8" />, number: '5000+', label: 'ITR Filed', color: 'green' },
    { icon: <TrendingUp className="w-8 h-8" />, number: '500+', label: 'Businesses Registered', color: 'purple' },
    { icon: <Clock className="w-8 h-8" />, number: '99.9%', label: 'Accuracy Rate', color: 'orange' }
  ];

  const features = [
    { icon: <Shield className="w-6 h-6" />, title: 'Bank-Level Security', description: '256-bit SSL encryption for all data' },
    { icon: <CheckCircle className="w-6 h-6" />, title: '100% Accuracy Guarantee', description: 'Expert review for error-free filing' },
    { icon: <Clock className="w-6 h-6" />, title: '24/7 Expert Support', description: 'Round-the-clock assistance available' },
    { icon: <Award className="w-6 h-6" />, title: 'Certified Professionals', description: 'CA, CS, and tax experts on team' }
  ];

  return (
    <>
      {/* Stats Parallax Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          {/* Overlay Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div 
            className="animate-fadeInUp"
            style={{
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-animate bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Trusted by Thousands
            </h2>
            <p className="text-xl md:text-2xl mb-16 text-blue-100 max-w-3xl mx-auto">
              Join India's fastest-growing tax platform with proven results and satisfied customers
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fadeInUp hover-scale transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  transform: `translateY(${scrollY * -0.1}px)`,
                }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                  stat.color === 'blue' ? 'bg-blue-500/20 text-blue-300' :
                  stat.color === 'green' ? 'bg-green-500/20 text-green-300' :
                  stat.color === 'purple' ? 'bg-purple-500/20 text-purple-300' :
                  'bg-orange-500/20 text-orange-300'
                } animate-pulse-custom`}>
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 animate-glow">
                  {stat.number}
                </div>
                <p className="text-blue-200 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-float"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          />
          <div 
            className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-float"
            style={{ transform: `translateY(${scrollY * -0.4}px)`, animationDelay: '1s' }}
          />
          <div 
            className="absolute bottom-32 left-1/4 w-3 h-3 bg-green-400 rounded-full opacity-50 animate-float"
            style={{ transform: `translateY(${scrollY * -0.2}px)`, animationDelay: '2s' }}
          />
        </div>
      </section>

      {/* Features Parallax Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-50"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose TAXTIC?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with India's most trusted tax platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-fadeInUp"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  transform: `translateY(${scrollY * -0.05}px)`,
                }}
              >
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center hover-scale">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-float"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          />
          <div 
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-float"
            style={{ transform: `translateY(${scrollY * -0.15}px)`, animationDelay: '1s' }}
          />
        </div>
      </section>
    </>
  );
};

export default ParallaxSection;