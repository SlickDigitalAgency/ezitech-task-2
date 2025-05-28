import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialItem } from '../../types/testimonial/TestimonialTypes';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const brandVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { 
      opacity: 1, 
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2 + 0.3
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
      }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-5 pointer-events-none">
        <div 
          className="w-full h-full rounded-full"
          style={{ backgroundColor: testimonial.brandColor }}
        />
      </div>

      {/* Brand logo section */}
      <motion.div 
        variants={brandVariants}
        className="flex items-center justify-between mb-6"
      >
        <div className="flex items-center space-x-3">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
            style={{ backgroundColor: testimonial.brandColor }}
          >
            {testimonial.brandIcon}
          </div>
          <span 
            className="font-bold text-lg tracking-wider"
            style={{ color: testimonial.brandColor }}
          >
            {testimonial.brandName}
          </span>
        </div>
        
        {/* Rotating brand name for vertical text effect */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 origin-center opacity-20">
          <span 
            className="text-xs font-bold tracking-widest whitespace-nowrap"
            style={{ color: testimonial.brandColor }}
          >
            {testimonial.brandName.toUpperCase()}
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
          {testimonial.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {testimonial.description}
        </p>
      </motion.div>

      {/* User info */}
      <motion.div 
        className="flex items-center space-x-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-semibold">
            {testimonial.user.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">
            {testimonial.user.name}
          </h4>
          <p className="text-gray-500 text-xs">
            {testimonial.user.role}
          </p>
        </div>
      </motion.div>

      {/* Hover decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
    </motion.div>
  );
};

export default TestimonialCard;