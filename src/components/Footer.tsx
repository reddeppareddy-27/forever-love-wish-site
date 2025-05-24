
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center relative overflow-hidden bg-gradient-love">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-rose-600 w-6 h-6 mr-2 animate-heartbeat" fill="currentColor" />
          <p className="font-dancing text-2xl text-rose-700">Forever Yours</p>
          <Heart className="text-rose-600 w-6 h-6 ml-2 animate-heartbeat" fill="currentColor" />
        </div>
        
        <p className="font-poppins text-rose-700">
          Made With Love For The Most Special Person In My Life
        </p>
      </div>
    </footer>
  );
};

export default Footer;
