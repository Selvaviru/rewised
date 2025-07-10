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
    <div className="fixed bottom-6 right-6 z-40 max-w-xs animate-slideInRight">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-3 shadow-2xl border border-blue-500">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 text-blue-200 hover:text-white transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
        
        <div className="flex items-start space-x-2">
          <div className="bg-blue-500 rounded-full p-1.5 animate-pulse">
            <FileText className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-xs mb-1 flex items-center space-x-1">
              <AlertTriangle className="w-3 h-3 text-yellow-300" />
              <span>GST Return Due Soon!</span>
            </h4>
            
            <div className="bg-blue-800/50 rounded-md p-1.5 mb-2">
              <div className="flex items-center space-x-1 text-xs mb-1">
                <Calendar className="w-2.5 h-2.5" />
                <span>Filing Deadline: 20th of Month</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="text-center">
                  <div className="font-bold text-yellow-300 text-xs">{timeLeft.days}</div>
                  <div className="text-blue-200 text-xs">Days</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-yellow-300 text-xs">{timeLeft.hours}</div>
                  <div className="text-blue-200 text-xs">Hrs</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-yellow-300 text-xs">{timeLeft.minutes}</div>
                  <div className="text-blue-200 text-xs">Min</div>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-blue-100 mb-2">
              Don't miss the deadline! Get expert help with your GST return filing.
            </p>
            
            <div className="flex space-x-2">
              <button
                onClick={openWhatsApp}
                className="flex-1 bg-white text-blue-600 text-xs font-semibold py-1.5 px-2 rounded-md hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-1"
              >
                <Clock className="w-2.5 h-2.5" />
                <span>File Now</span>
              </button>
              <button
                onClick={onClose}
                className="text-blue-200 text-xs py-1.5 px-2 border border-blue-400 rounded-md hover:bg-blue-600 transition-colors"
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