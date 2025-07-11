import React, { useState, useEffect } from 'react';

const InteractiveElements: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Subtle Interactive Cursor Trail - Professional */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-500 opacity-30"
        style={{
          left: mousePosition.x - 5,
          top: mousePosition.y - 5,
        }}
      >
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>

      {/* Professional Floating Elements - Subtle */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Minimal geometric shapes */}
        <div
          className="absolute top-20 left-10 w-8 h-8 border border-blue-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: '0s', animationDuration: '6s' }}
        ></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 border border-blue-300 rounded-full opacity-15 animate-float"
          style={{ animationDelay: '2s', animationDuration: '8s' }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-4 h-4 border border-blue-200 rounded-full opacity-10 animate-float"
          style={{ animationDelay: '4s', animationDuration: '7s' }}
        ></div>
        <div
          className="absolute bottom-60 right-1/3 w-5 h-5 border border-blue-300 rounded-full opacity-20 animate-float"
          style={{ animationDelay: '1s', animationDuration: '9s' }}
        ></div>
      </div>
    </>
  );
};

export default InteractiveElements;