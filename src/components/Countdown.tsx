
import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date;
  isBirthday: boolean;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, isBirthday }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);
  
  if (isBirthday) {
    return (
      <div className="py-8 text-center animate-fadeIn">
        <h2 className="font-dancing text-3xl md:text-4xl text-rose-600 mb-4">
          Today is the day!
        </h2>
        <p className="font-poppins text-xl text-rose-500">
          Happy Birthday, My Love! ❤️
        </p>
      </div>
    );
  }
  
  return (
    <div className="py-8 text-center">
      <h2 className="font-dancing text-3xl md:text-4xl text-rose-600 mb-6">
        Countdown to My Special Day
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4">
        <CountdownUnit value={timeLeft.days} label="Days" />
        <CountdownUnit value={timeLeft.hours} label="Hours" />
        <CountdownUnit value={timeLeft.minutes} label="Minutes" />
        <CountdownUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

const CountdownUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center bg-white/70 backdrop-blur-sm rounded-lg shadow-lg p-4 w-24 animate-float">
      <span className="text-3xl font-bold text-rose-600">{value}</span>
      <span className="text-sm text-rose-500">{label}</span>
    </div>
  );
};

export default Countdown;
