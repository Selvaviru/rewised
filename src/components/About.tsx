import React, { useEffect, useState } from 'react';

const ScrollAnimations: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, observerOptions);

    // Observe all elements with the 'scroll-animate' class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{
            width: `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
          }}
        />
      </div>

      {/* Floating Action Indicators */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 space-y-2">
        {['home', 'about', 'services', 'testimonials', 'contact'].map((section, index) => (
          <button
            key={section}
            onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              scrollY > index * 800 && scrollY < (index + 1) * 800
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-blue-400'
            }`}
            title={`Go to ${section}`}
          />
        ))}
      </div>

      {/* Scroll-to-Top Button */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-20 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-fadeInUp z-40"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollAnimations;