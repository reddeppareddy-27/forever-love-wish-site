
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const images = [
    "/images/darling2705.jpg",
    
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay for better readability */}
      {images.map((src, index) => (
        <motion.div
          key={src}
          className="absolute inset-0 h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 15,
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            delay: index * 5,
            repeatDelay: 0,
          }}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
