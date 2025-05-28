import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Check, Hash, Droplet, Cloud, Grid3X3 } from 'lucide-react';
import { HeroProps } from '../../../types/hero/HeroTypes';
import heroImg from '../../../assets/hero/heroimg.webp'; // <-- ✅ Import your image

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const decorativeShapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (decorativeShapesRef.current) {
      const shapes = decorativeShapesRef.current.children;
      
      gsap.to(shapes, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-15, 15)",
        duration: 3,
        ease: "power2.inOut",
        stagger: 0.2,
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
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`w-full bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50 relative overflow-hidden ${className}`}>
      {/* Decorative Background Shapes */}
      <div ref={decorativeShapesRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full border-l-2 border-dashed border-yellow-300 opacity-60"></div>
        <div className="absolute top-0 right-1/4 w-px h-full border-l-2 border-dashed border-yellow-300 opacity-60"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-green-300 rounded-2xl rotate-12 opacity-80"></div>
        <div className="absolute top-40 left-20 w-12 h-12 bg-pink-300 rounded-full opacity-70"></div>
        <div className="absolute bottom-40 right-32 w-20 h-20 bg-yellow-300 rounded-xl rotate-45 opacity-60"></div>
        <div className="absolute bottom-20 left-40 w-8 h-8 bg-blue-300 rounded-full opacity-80"></div>
        <div className="absolute top-60 right-1/3 w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-70"></div>
      </div>

      <motion.div 
        ref={containerRef}
        className="container mx-auto px-6 py-12 min-h-screen flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              variants={itemVariants}
              style={{ fontFamily: 'Georgia, serif' }}
            >
              The smarter way to save documents
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Pellentesque id ipsum id orci porta dapibus. Sed porttitor lectus nibh. 
              Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula 
              elementum sed suscipit tortor. Eget felis porttitor volutpat. Vivamus
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={itemVariants}
            >
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-6 py-4 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                Get A Quote
              </button>
            </motion.div>
            
            <motion.div className="mb-8" variants={itemVariants}>
              <p className="text-gray-700 font-medium mb-4">Supported</p>
              <div className="flex items-center gap-6">
                <Grid3X3 className="w-8 h-8 text-gray-600" />
                <Droplet className="w-8 h-8 text-blue-500" />
                <Hash className="w-8 h-8 text-gray-600" />
                <Cloud className="w-8 h-8 text-gray-600" />
              </div>
            </motion.div>
            
            <motion.div className="flex flex-wrap gap-8" variants={itemVariants}>
              {['Works Anywhere', 'Get Rewarded', 'No Hidden Fees'].map((text, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Actual Image */}
          <div className="flex-1 relative">
            <motion.div className="relative" variants={itemVariants}>
              {/* Image Section */}
              <div className="w-full h-96 rounded-2xl overflow-hidden relative">
                <img
                  src={heroImg}
                  alt="Hero section visual"
                  className="w-full h-full object-cover"
                />
                {/* Decorative overlays */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-300 rounded-2xl opacity-80"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-300 rounded-3xl opacity-70"></div>
                <div className="absolute top-1/2 -right-8 w-20 h-20 bg-pink-300 rounded-2xl opacity-75"></div>
              </div>

              {/* Success Rate Dashboard */}
              <motion.div 
                className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-sm text-gray-600 mb-3">Success rate</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="12" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                      <circle cx="16" cy="16" r="12" fill="none" stroke="#000" strokeWidth="3" strokeDasharray="75.4" strokeDashoffset="7.54" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold">98%</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span className="text-2xl font-bold">150</span>
                    </div>
                    <p className="text-xs text-gray-500">Successful</p>
                  </div>
                </div>
              </motion.div>

              {/* Notification Card */}
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 max-w-48"
                initial={{ scale: 0, rotate: 10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-gray-900 mb-1">James Robinson</p>
                    <p className="text-xs text-gray-500 leading-relaxed">I need some maintenance...</p>
                    <p className="text-xs text-gray-400 mt-1">Dec 4, 12:30 pm</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
