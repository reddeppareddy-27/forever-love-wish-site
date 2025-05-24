
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, CalendarHeart, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

export interface Memory {
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
}

interface MemoryTimelineProps {
  memories: Memory[];
}

const MemoryTimeline: React.FC<MemoryTimelineProps> = ({ memories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  
  const nextMemory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % memories.length);
  };
  
  const prevMemory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + memories.length) % memories.length);
  };
  
  const memory = memories[currentIndex];
  const formattedDate = new Date(memory.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <section className="py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-dancing text-2xl sm:text-3xl md:text-4xl text-rose-600 mb-4 sm:mb-6 text-center flex items-center justify-center gap-2">
          <CalendarHeart className="w-5 h-5 sm:w-6 sm:h-6" />
          My Special Days With You ❤️
          <CalendarHeart className="w-5 h-5 sm:w-6 sm:h-6" />
        </h2>
        
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="backdrop-blur-sm rounded-xl"
            >
              <Card className="border-2 border-rose-200 overflow-hidden shadow-xl hover:shadow-rose-200/50 transition-all duration-500">
                <div className="absolute top-2 right-3 text-rose-500">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 animate-heartbeat" fill="currentColor" />
                </div>
                <CardHeader className="bg-gradient-to-r from-rose-100 to-pink-100 p-4 sm:p-6">
                  <CardTitle className="text-rose-600 font-dancing text-xl sm:text-2xl md:text-3xl">{memory.title}</CardTitle>
                  <CardDescription className="font-poppins text-sm sm:text-base text-rose-500 font-medium">{formattedDate}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'md:grid-cols-2 gap-6'}`}>
                    {memory.imageUrl && (
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center items-center"
                      >
                        <img 
                          src={memory.imageUrl} 
                          alt={memory.title}
                          className="rounded-md shadow-md max-h-64 sm:max-h-80 w-full object-cover transform hover:scale-105 transition-transform duration-300 border-2 border-rose-100" 
                        />
                      </motion.div>
                    )}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="font-poppins text-gray-700 whitespace-pre-line text-sm sm:text-base md:text-lg leading-relaxed flex items-center"
                    >
                      {memory.description}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-between mt-4 sm:mt-8">
            <Button 
              onClick={prevMemory}
              className="bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-md transition-colors flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
            >
              <ChevronLeft size={isMobile ? 16 : 18} />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </Button>
            <div className="flex items-center">
              <span className="text-rose-600 font-dancing text-base sm:text-xl">{currentIndex + 1} of {memories.length}</span>
            </div>
            <Button 
              onClick={nextMemory}
              className="bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-md transition-colors flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight size={isMobile ? 16 : 18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;
