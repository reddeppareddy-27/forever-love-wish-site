
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const BirthdayWishes: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const wishes = [
    "May your day be as special as you are to me.",
    "Wishing you endless happiness and all the love in the world.",
    "You're not just a year older, but a year more wonderful.",
    "May your birthday be the beginning of a year filled with good luck, good health and much happiness.",
    "I'm so grateful to have you in my life. Happy birthday, my love!"
  ];
  
  const nextWish = () => {
    setActiveIndex((prev) => (prev + 1) % wishes.length);
  };
  
  const prevWish = () => {
    setActiveIndex((prev) => (prev - 1 + wishes.length) % wishes.length);
  };
  
  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="font-dancing text-3xl md:text-4xl text-rose-600 mb-6 text-center flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-amber-500" />
          Birthday Wishes
          <Sparkles className="w-6 h-6 text-amber-500" />
        </h2>
        
        <div className="relative h-40">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                index === activeIndex
                  ? 'opacity-100 transform-none'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <p className="text-xl md:text-2xl text-rose-600 text-center font-poppins">
                {wish}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={prevWish}
            className="px-4 py-2 bg-rose-500 text-white rounded-full shadow-md hover:bg-rose-600 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={nextWish}
            className="px-4 py-2 bg-rose-500 text-white rounded-full shadow-md hover:bg-rose-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default BirthdayWishes;
