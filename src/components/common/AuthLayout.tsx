import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/framer-animations';
import { KeyRound } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path 
            d="M0,30 Q30,20 50,30 T100,30 V0 H0 Z" 
            fill="#FFDD65" 
            stroke="#333"
            strokeWidth="1"
          />
        </svg>
      </div>
      
      <div className="absolute top-0 right-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-24 h-24 flex flex-wrap justify-end"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="w-3 h-3 rounded-full bg-blue-400 m-1"
            />
          ))}
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0">
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M10,10 Q30,30 10,50 Q20,70 10,90" 
            stroke="#FF6B6B" 
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0">
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <motion.path 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            d="M90,90 Q70,70 50,90 Q30,70 10,90" 
            fill="#4AD295" 
          />
        </svg>
      </div>
      
      {/* Auth Card */}
      <motion.div 
        className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative z-10"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="flex flex-col items-center"
          variants={slideUp}
        >
          {/* Icon */}
          <div className="bg-[#FFF9DE] rounded-full p-5 mb-4">
            <KeyRound className="h-6 w-6 text-[#333]" />
          </div>
          
          {/* Title */}
          <h1 className="text-2xl font-medium text-center mb-4">{title}</h1>
          
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;