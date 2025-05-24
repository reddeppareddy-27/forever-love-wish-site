
import React from 'react';
import { motion } from 'framer-motion';

interface GalleryProps {
  photos: {
    src: string;
    caption?: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="font-dancing text-3xl md:text-4xl text-rose-600 mb-8 text-center">
        Darling's Album ❤️
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.caption || `Memory ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {photo.caption && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-poppins">{photo.caption}</p>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
