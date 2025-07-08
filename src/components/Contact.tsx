import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Users, Award, Shield } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi TAXTIC Team,

I'm ${formData.name} and I'm interested in ${formData.service}.

${formData.message}

Please contact me at:
📞 ${formData.phone}
📧 ${formData.email}

Thank you!`;
    const phoneNumber = '919789485470';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
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
    'Tax Planning & Advisory',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Ready to simplify your tax journey? Contact India's most trusted tax platform today!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-fadeInLeft">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3 hover-scale">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 97894 85470</p>
                    <p className="text-sm text-gray-500">Available 24/7 for support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3 hover-scale">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">taxtictt@gmail.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3 hover-scale">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      Parthasarathy Street, SS Colony,<br />
                      Madurai - 625003, Tamil Nadu
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3 hover-scale">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Why Trust TAXTIC?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 animate-fadeInLeft" style={{animationDelay: '0.5s'}}>
                  <Users className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">1000+ Happy Customers</span>
                </div>
                <div className="flex items-center space-x-3 animate-fadeInLeft" style={{animationDelay: '0.6s'}}>
                  <Award className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">99.9% Accuracy Rate</span>
                </div>
                <div className="flex items-center space-x-3 animate-fadeInLeft" style={{animationDelay: '0.7s'}}>
                  <Shield className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">Bank-Level Security</span>
                </div>
                <div className="flex items-center space-x-3 animate-fadeInLeft" style={{animationDelay: '0.8s'}}>
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">24/7 Expert Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="lg:col-span-2 space-y-8 animate-fadeInRight">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="Tell us about your requirements, any specific questions, or additional details..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  By clicking "Send via WhatsApp", you'll be redirected to WhatsApp with your message pre-filled. 
                  Our team will respond within 2 hours during business hours.
                </p>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '1s'}}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h3>
              <div className="aspect-video rounded-lg overflow-hidden hover-scale transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9962!2d78.098612!3d9.920518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnMTQuOSJOIDc4wrAwNSc1NS4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-gray-600 mt-4 text-center">
                Visit our office in Madurai for in-person consultations and document submission
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;