import React, { useState, useEffect } from 'react';
import Header from './Header';
import Countdown from './Countdown';
import LoveMessage from './LoveMessage';
import Gallery from './Gallery';
import BirthdayWishes from './BirthdayWishes';
import MemoryTimeline from './MemoryTimeline';
import Footer from './Footer';
import Confetti from './Confetti';
import AnimatedBackground from './AnimatedBackground';
import { motion } from 'framer-motion';
import { Memory } from './MemoryTimeline';

const HomePage: React.FC = () => {
  // Replace with your girlfriend's name
  const name = "Darling ✨🖤";
  
  // Set your girlfriend's birthday for countdown
  const birthday = new Date("2025-05-25"); // Year-Month-Day format
  
  // Check if today is birthday
  const today = new Date();
  const isBirthday = today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate();
  
  // Your love message to her
  const loveMessage = `My dearest ${name},

On your special day, I want to take a moment to tell you how incredibly precious you are to me. From the moment you came into my life, everything has been brighter, more beautiful, and filled with endless joy.

Your smile lights up my world. Your laughter is my favorite melody. Your love is the greatest gift I've ever received.

Today, I celebrate not just the day you were born, but everything you are - your kindness, your strength, your beauty, and the countless ways you make every day extraordinary.

Happy Birthday, my love. May this year bring you all the happiness you deserve, and know that I'll be right beside you, loving you more with each passing day.

I don't your there in my life upto the end but my soul always with you upto end of my breath ..... you had changed my entire life style which i never taught..thank you ❤️

Forever yours,
With all my heart and soul`;

  // Sample photos - replace with your actual photos
  const photos = [
    { 
      src: "public/images/reddy.jpg", 
      caption: "Cute" 
    },
    { 
      src: "public/images/janu2.jpg",
      caption: "Decent"
    },
    { 
      src: "public/images/janu3.jpg", 
      caption: "Beauty"
    },
    { 
      src: "public/images/dar1.jpg",
      caption: "Sunshine mixed with a little hurricane ☀️🌪️"
    },
    { 
      src: "public/images/dar2.jpg", 
      caption: "Dream big, sparkle more, shine bright ✨"
    },
    { 
      src: "public/images/dar.jpg",
      caption: "In a world full of trends, I want to remain a classic 🎨"
    },
    { 
      src: "public/images/darling2705.jpg",
      caption: "Traditional"
    },
    { 
      src: "public/images/darling .jpg", 
      caption: "Celebrating you"
    },
    { 
      src: "public/images/dar3.jpg",
      caption: "My favorite smile"
    },
  ];
  
  // Special memories from your life together - customized with the user's real memories
  const specialMemories: Memory[] = [
    {
      date: "2023-7-15",
      title: "One Year Since I am in love ",
      description: "A full year since I first heard your voice and saw your face. I had waited to  talk with you.....",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    },
    {
      date: "2024-05-27",
      title: "First Conversation During Debate",
      description: "The day we first talked during that debate. I was instantly captivated by your intelligence and the way you expressed your thoughts. I gathered the courage to wish you and start a conversation. Little did I know this would be the beginning of something beautiful.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      date: "2024-09-27",
      title: "The Night I First Proposed",
      description: "Remember that night I first told you how I felt? You said you weren't interested, but something in your eyes told me not to give up hope. I promised myself I would wait for you, no matter how long it took.",
      imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    {
      date: "2024-12-15",
      title: "Growing Bonds",
      description: "Day by day, our bond grew stronger. We shared our dreams, fears, and hopes. Every conversation with you made me realize even more how special you are. The way you listen and understand me is something I've never experienced before.",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    {
      date: "2025-03-14",
      title: "The Day I Promised To The God ",
      description: "The day when i had made an promise to the god if her health is okay and i will your temple on evety monday and i had prayered for on every second about to be marry with you .",
      imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    
    {
      date: "2023-12-31",
      title: "New Year's Eve Promise",
      description: "As we welcomed the new year, I made a silent promise to myself that no matter what, I would continue to be there for you. Every moment with you is precious, and I cherish each one. Here's to many more years together!",
      imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
   
    {
      date: "2025-09-27",
      title: "Anniversary For My First Proposal",
      description: "A year since I first told you how I felt. Many proposals later, I'm still here, still in love, and still certain that we're meant to be together. Your friendship and presence in my life means everything to me. Love you darling janu...",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
  ];

  // State to control confetti animation
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isBirthday) {
      // Show confetti immediately when it's birthday
      setShowConfetti(true);
    } else {
      // Show confetti after a short delay for advance birthday
      const timer = setTimeout(() => {
        setShowConfetti(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isBirthday]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen relative"
    >
      <AnimatedBackground />
      
      {showConfetti && <Confetti />}
      
      <div className="relative z-10">
        <Header name={name} isBirthday={isBirthday} />
        
        {!isBirthday && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="backdrop-blur-sm bg-white/30 rounded-lg mx-4 md:mx-8 lg:mx-16 p-6 mb-8"
          >
            <Countdown targetDate={birthday} isBirthday={isBirthday} />
          </motion.div>
        )}
        
        {/* Only show these sections when it's the actual birthday */}
        {isBirthday && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="backdrop-blur-sm bg-white/30 rounded-lg mx-4 md:mx-8 lg:mx-16 p-6 mb-8"
            >
              <LoveMessage message={loveMessage} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="backdrop-blur-sm bg-white/30 rounded-lg mx-4 md:mx-8 lg:mx-16 p-6 mb-8"
            >
              <Gallery photos={photos} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="backdrop-blur-sm bg-white/30 rounded-lg mx-4 md:mx-8 lg:mx-16 p-6 mb-8"
            >
              <MemoryTimeline memories={specialMemories} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="backdrop-blur-sm bg-white/30 rounded-lg mx-4 md:mx-8 lg:mx-16 p-6 mb-8"
            >
              <BirthdayWishes />
            </motion.div>
            
            <Footer />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default HomePage;
