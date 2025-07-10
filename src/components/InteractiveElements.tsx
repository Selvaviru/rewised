import React, { useState, useEffect } from 'react';
import { MousePointer, Sparkles, Zap, Star } from 'lucide-react';

const InteractiveElements: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const createParticles = (x: number, y: number) => {
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 100,
      y: y + (Math.random() - 0.5) * 100,
      delay: i * 0.1
    }));
    
    setParticles(prev => [...prev, ...newParticles]);
    
    // Remove particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1000);
  };

  const handleInteraction = (e: React.MouseEvent) => {
    createParticles(e.clientX, e.clientY);
  };

  return (
    <>
      {/* Interactive Cursor Trail */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-300"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: `scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div className="w-5 h-5 bg-blue-500 rounded-full opacity-30 animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-40 animate-fadeInUp"
          style={{
            left: particle.x,
            top: particle.y,
            animationDelay: `${particle.delay}s`,
            animationDuration: '1s'
          }}
        >
          <Sparkles className="w-4 h-4 text-blue-500 animate-spin" />
        </div>
      ))}

      {/* Interactive Hover Areas */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {/* Top corners */}
        <div
          className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"
          style={{ animationDelay: '0s' }}
        ></div>
        <div
          className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        
        {/* Bottom corners */}
        <div
          className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-20 right-32 w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 animate-float"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>

      {/* Interactive Click Areas */}
      <div
        className="fixed inset-0 pointer-events-auto z-20"
        onClick={handleInteraction}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ background: 'transparent' }}
      />
    </>
  );
};

export default InteractiveElements;