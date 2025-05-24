
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeaderProps {
  name: string;
  isBirthday: boolean;
}

const Header: React.FC<HeaderProps> = ({ name, isBirthday }) => {
  const [showName, setShowName] = useState(false);
  const [showBirthdayAnimation, setShowBirthdayAnimation] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isBirthday) {
      setShowBirthdayAnimation(true);
    }
  }, [isBirthday]);
  
  return (
    <header className="relative py-12 md:py-20 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-love opacity-80 z-0"></div>
      
      <div 
        className={`relative z-10 transform transition-all duration-1000 ${
          showName ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h1 className={`font-dancing text-4xl md:text-6xl lg:text-7xl text-rose-600 mb-4 text-shadow ${
          showBirthdayAnimation ? 'animate-zoomIn' : 'animate-heartbeat'
        }`}>
          {isBirthday ? 'Happy Birthday' : 'Advance Happy Birthday'}
        </h1>
        
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Heart className={`text-rose-500 w-6 h-6 fill-current ${
            showBirthdayAnimation ? 'animate-bounce' : 'animate-float'
          }`} />
          <h2 className="font-dancing text-3xl md:text-5xl text-rose-500">
            {name}
          </h2>
          <Heart className={`text-rose-500 w-6 h-6 fill-current ${
            showBirthdayAnimation ? 'animate-bounce' : 'animate-float'
          }`} />
        </div>
        
        <p className="font-poppins text-lg md:text-xl text-rose-700 max-w-xl mx-auto">
          {isBirthday ? 'Today is all about you, the love of my life!' : 'Looking forward to celebrating you, my love!'}
        </p>
      </div>
    </header>
  );
};

export default Header;
