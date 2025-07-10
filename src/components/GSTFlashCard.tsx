import React, { useState, useEffect } from 'react';
import { X, Calendar, AlertTriangle, FileText, Clock } from 'lucide-react';

interface GSTFlashCardProps {
  onClose: () => void;
}

const GSTFlashCard: React.FC<GSTFlashCardProps> = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    // Calculate time until next GST filing deadline (20th of current month)
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();
      
      // Set deadline to 20th of current month, or next month if past 20th
      let deadline = new Date(currentYear, currentMonth, 20, 23, 59, 59);
      if (now.getDate() > 20) {
        deadline = new Date(currentYear, currentMonth + 1, 20, 23, 59, 59);
      }

      const difference = deadline.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = '919789485470';
    const message = `Hi TAXTIC Team,

I saw the GST return filing reminder on your website. I need help with:
- GST return filing for this month
- Understanding the deadline and requirements
- Getting my documents ready

Please guide me through the process.

Thank you!`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed bottom-6 left-4 z-40 max-w-sm">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-4 shadow-xl border border-blue-500 transition-all duration-300" style={{ animation: 'slideInLeft 0.5s ease-out' }}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-blue-200 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-start space-x-3">
          <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm mb-2 flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-yellow-300" />
              <span>GST Return Due Soon!</span>
            </h4>
            
            <div className="bg-blue-800/50 rounded-md p-2 mb-3">
              <div className="flex items-center space-x-2 text-sm mb-2">
                <Calendar className="w-4 h-4" />
                <span>Filing Deadline: 20th of Month</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="text-center">
                  <div className="font-bold text-yellow-300 text-lg">{timeLeft.days}</div>
                  <div className="text-blue-200 text-xs">Days</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-yellow-300 text-lg">{timeLeft.hours}</div>
                  <div className="text-blue-200 text-xs">Hours</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-yellow-300 text-lg">{timeLeft.minutes}</div>
                  <div className="text-blue-200 text-xs">Minutes</div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-blue-100 mb-3">
              Don't miss the deadline! Get expert help with your GST return filing.
            </p>
            
            <div className="flex flex-col space-y-2">
              <button
                onClick={openWhatsApp}
                className="w-full bg-white text-blue-600 text-sm font-semibold py-2 px-4 rounded-md hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Clock className="w-4 h-4" />
                <span>File Now</span>
              </button>
              <button
                onClick={onClose}
                className="text-blue-200 text-sm py-2 px-4 border border-blue-400 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTFlashCard;