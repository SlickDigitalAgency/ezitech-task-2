import React from 'react';
import { motion } from 'framer-motion';
import { AboutHeroProps } from '@/types/about/hero/AboutHeroTypes';

const AboutHero: React.FC<AboutHeroProps> = ({ title, description }) => {
  return (
    <div className="min-h-[60vh] bg-[#FFF9E5] relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-20 left-10"
      >
        <div className="w-16 h-16">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M10,10 L90,10 L90,90 L10,90 Z"
              fill="#FF9B9B"
              opacity="0.3"
            />
          </svg>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-20 right-10"
      >
        <div className="w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50,10 A40,40 0 1,0 50,90 A40,40 0 1,0 50,10"
              fill="#4AD295"
              opacity="0.3"
            />
          </svg>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm mb-6"
          >
            <span>Home</span>
            <span>/</span>
            <span>About Us</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold mb-6"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mb-12"
          >
            {description}
          </motion.p>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                  alt="Team meeting"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="relative mt-12">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;