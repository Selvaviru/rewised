import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react';

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openWhatsApp = (customMessage?: string) => {
    const phoneNumber = '919789485470';
    const finalMessage = customMessage || message || 'Hi TAXTIC Team, I would like to know more about your services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(url, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  const quickMessages = [
    'I need help with Income Tax Return filing',
    'I want to register my business',
    'I need GST registration and returns',
    'I want to consult with a CA',
    'I have received a tax notice',
    'I need trademark registration'
  ];

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce-custom"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
        
        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border z-50 animate-fadeInUp">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-1.5 rounded-lg">
                <img 
                  src="/ChatGPT Image Jul 8, 2025, 05_11_48 PM.png" 
                  alt="TAXTIC Logo" 
                  className="w-8 h-8 rounded-md" 
                />
              </div>
              <div>
                <h3 className="font-bold">TAXTIC Support</h3>
                <p className="text-sm opacity-90">Typically replies instantly</p>
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Chat Content */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {/* Welcome Message */}
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                👋 Hi! Welcome to TAXTIC - Your trusted tax buddy!
              </p>
              <p className="text-sm text-gray-700 mt-2">
                How can we help you today? Choose from quick options below or type your message.
              </p>
            </div>

            {/* Quick Message Buttons */}
            <div className="space-y-2 mb-4">
              <p className="text-xs text-gray-500 font-medium">Quick Options:</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(msg)}
                  className="w-full text-left bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm p-2 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Contact Options */}
            <div className="border-t pt-3 space-y-2">
              <p className="text-xs text-gray-500 font-medium">Or contact us directly:</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => window.open('tel:+919789485470', '_self')}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-1"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </button>
                <button
                  onClick={() => window.open('mailto:taxtictt@gmail.com', '_self')}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white text-sm py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-1"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </button>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && openWhatsApp()}
              />
              <button
                onClick={() => openWhatsApp()}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by WhatsApp • We'll respond within 2 hours
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;