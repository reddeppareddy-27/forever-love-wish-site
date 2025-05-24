
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface LoveMessageProps {
  message: string;
}

const LoveMessage: React.FC<LoveMessageProps> = ({ message }) => {
  const [visibleMessage, setVisibleMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < message.length) {
      const timeout = setTimeout(() => {
        setVisibleMessage(prev => prev + message[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 50);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, message]);
  
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 relative">
        <Heart className="absolute -top-4 -left-4 text-rose-500 w-8 h-8 animate-heartbeat" fill="currentColor" />
        <Heart className="absolute -top-4 -right-4 text-rose-500 w-8 h-8 animate-heartbeat" fill="currentColor" />
        
        <h2 className="font-dancing text-3xl md:text-4xl text-rose-600 mb-6 text-center">
          My Love Letter to You
        </h2>
        
        <div className="font-poppins text-lg leading-relaxed text-rose-800 whitespace-pre-line">
          {visibleMessage}
          <span className="animate-pulse">|</span>
        </div>
        
        <Heart className="absolute -bottom-4 -left-4 text-rose-500 w-8 h-8 animate-heartbeat" fill="currentColor" />
        <Heart className="absolute -bottom-4 -right-4 text-rose-500 w-8 h-8 animate-heartbeat" fill="currentColor" />
      </div>
    </section>
  );
};

export default LoveMessage;
