
import React, { useEffect, useState } from 'react';

const Confetti: React.FC = () => {
  const [confetti, setConfetti] = useState<JSX.Element[]>([]);
  
  const createConfetti = () => {
    const colors = [
      '#FFDEE2', // Pink
      '#FDE1D3', // Peach
      '#D3E4FD', // Blue
      '#E5DEFF', // Purple
      '#FFD1DC', // Light Pink
      '#FFC0CB', // Pink
      '#FFB6C1', // Light Pink
      '#FF69B4', // Hot Pink
    ];
    
    const shapes = [
      'circle',
      'square',
      'heart',
    ];
    
    const newConfetti: JSX.Element[] = [];
    
    for (let i = 0; i < 100; i++) {
      const left = Math.random() * 100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const size = Math.random() * 10 + 5;
      const animationDuration = Math.random() * 3 + 2;
      const delay = Math.random() * 5;
      
      let shapeElement;
      if (shape === 'heart') {
        shapeElement = (
          <svg 
            viewBox="0 0 24 24" 
            width={`${size}px`} 
            height={`${size}px`}
            fill={color}
          >
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
          </svg>
        );
      } else {
        shapeElement = (
          <div 
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              borderRadius: shape === 'circle' ? '50%' : '0',
            }}
          />
        );
      }
      
      newConfetti.push(
        <div 
          key={i}
          className="confetti"
          style={{
            left: `${left}%`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${delay}s`,
          }}
        >
          {shapeElement}
        </div>
      );
    }
    
    setConfetti(newConfetti);
  };
  
  useEffect(() => {
    createConfetti();
    
    // Create new confetti periodically
    const intervalId = setInterval(() => {
      createConfetti();
    }, 10000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return <>{confetti}</>;
};

export default Confetti;
