import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Hash, Droplet, Cloud, Grid3X3 } from 'lucide-react';
import { CtaProps } from '../../../types/cta/CtaTypes';

// ✅ Import actual image
import ctaImage from '@/assets/cta/cta.webp';

const Cta: React.FC<CtaProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const decorativeShapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (decorativeShapesRef.current) {
      const shapes = decorativeShapesRef.current.children;

      gsap.to(shapes, {
        y: 'random(-15, 15)',
        x: 'random(-10, 10)',
        rotation: 'random(-10, 10)',
        duration: 4,
        ease: 'power2.inOut',
        stagger: 0.3,
        repeat: -1,
        yoyo: true
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className={`relative bg-gradient-to-br from-pink-50 via-blue-50 to-green-50 overflow-hidden ${className}`}>
      {/* Decorative Background Shapes */}
      <div ref={decorativeShapesRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }, (_, i) => (
              <div key={i} className="w-2 h-4 bg-green-400 rounded-full opacity-70 transform rotate-45"></div>
            ))}
          </div>
        </div>
        <div className="absolute top-16 left-1/2 w-16 h-16 bg-green-300 rounded-3xl rotate-12 opacity-80"></div>
        <div className="absolute bottom-32 right-16 w-20 h-20 bg-yellow-300 rounded-3xl rotate-45 opacity-70"></div>
        <div className="absolute bottom-16 left-16 w-32 h-32 bg-blue-300 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-green-400 rounded-2xl opacity-75"></div>
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-6xl mx-auto px-8">
          <div className="bg-white rounded-3xl shadow-xl relative overflow-hidden">
            <div className="flex flex-col xl:flex-row items-center">
              {/* Left Content */}
              <div className="flex-1 p-12 xl:p-16">
                <motion.h2
                  className="text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-8"
                  variants={itemVariants}
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Sign up and Create Your Online Store Today!
                </motion.h2>

                {/* Supported Platforms */}
                <motion.div className="mb-8" variants={itemVariants}>
                  <p className="text-gray-700 font-semibold mb-4">Supported</p>
                  <div className="flex items-center gap-4">
                    <Grid3X3 className="w-7 h-7 text-gray-600" />
                    <Droplet className="w-7 h-7 text-blue-500" />
                    <Hash className="w-7 h-7 text-gray-600" />
                    <Cloud className="w-7 h-7 text-gray-600" />
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                  <button className="px-8 py-4 bg-black text-white text-base font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                    Get A Quote
                  </button>
                  <button className="px-8 py-4 bg-transparent text-gray-900 text-base font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                    Start Now
                  </button>
                </motion.div>
              </div>

              {/* Right Content - Image instead of placeholder */}
              <div className="flex-1 relative p-8 xl:p-12">
                <motion.div className="relative" variants={itemVariants}>
                  <img
                    src={ctaImage}
                    alt="Dashboard preview"
                    className="rounded-2xl shadow-lg w-full h-auto object-contain"
                  />

                  {/* Optional Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-300 rounded-2xl opacity-80"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-300 rounded-3xl opacity-70"></div>
                  <div className="absolute top-1/2 -right-6 w-12 h-12 bg-blue-300 rounded-xl opacity-75"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cta;
