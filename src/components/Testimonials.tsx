import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Bharani',
      role: 'Business Owner',
      rating: 5,
      content: 'TAXTIC made my GST registration process incredibly smooth. Their team is professional and always available to help. The pricing is transparent and reasonable. Highly recommended for all tax services!',
      location: 'Madurai'
    },
    {
      name: 'Maduri',
      role: 'Freelancer',
      content: 'I was struggling with my income tax filing until I found TAXTIC. They handled everything professionally and got me a great refund. The WhatsApp support is very convenient. Truly my tax buddy!',
      location: 'Chennai',
      rating: 5
    },
    {
      name: 'Daniel',
      role: 'Startup Founder',
      content: 'From business registration to trademark filing, TAXTIC has been our go-to partner. Their expertise and quick service have saved us time and money. The team understands startup needs very well.',
      location: 'Coimbatore',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'CA Professional',
      content: 'As a practicing CA, I often refer my clients to TAXTIC for specialized services. Their accuracy and attention to detail is commendable. Great team to work with!',
      location: 'Bangalore',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Small Business Owner',
      content: 'TAXTIC helped me with complete business setup including GST registration and accounting. Their end-to-end service approach is excellent. Very satisfied with their professional approach.',
      location: 'Trichy',
      rating: 5
    },
    {
      name: 'Anitha Devi',
      role: 'Working Professional',
      content: 'Filing ITR was always a headache for me. TAXTIC made it so simple and stress-free. They even helped me save more tax through proper planning. Excellent service at affordable rates.',
      location: 'Salem',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Join 1000+ happy customers who trust TAXTIC for their tax and business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover-lift animate-fadeInUp"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute top-0 left-0 w-8 h-8 text-blue-300 opacity-50" />
                <p className="text-gray-700 italic pl-10">"{testimonial.content}"</p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-blue-600 font-medium">{testimonial.role}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-blue-50 rounded-2xl p-12 hover-lift transition-all duration-300 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeInUp hover-scale" style={{animationDelay: '0.9s'}}>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-700 font-medium">Happy Customers</p>
            </div>
            <div className="animate-fadeInUp hover-scale" style={{animationDelay: '1s'}}>
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <p className="text-gray-700 font-medium">ITR Filed</p>
            </div>
            <div className="animate-fadeInUp hover-scale" style={{animationDelay: '1.1s'}}>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700 font-medium">Businesses Registered</p>
            </div>
            <div className="animate-fadeInUp hover-scale" style={{animationDelay: '1.2s'}}>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-700 font-medium">Accuracy Rate</p>
            </div>
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="mt-16 text-center animate-fadeInUp" style={{animationDelay: '1.3s'}}>
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Customer Satisfaction Guaranteed</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 animate-fadeInUp hover-scale" style={{animationDelay: '1.4s'}}>
              <div className="text-5xl font-bold text-green-500 mb-2">4.9/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="p-6 animate-fadeInUp hover-scale" style={{animationDelay: '1.5s'}}>
              <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className="p-6 animate-fadeInUp hover-scale" style={{animationDelay: '1.6s'}}>
              <div className="text-5xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-gray-600">Money Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;