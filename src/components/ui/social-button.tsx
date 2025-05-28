import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { buttonAnimation } from '@/lib/framer-animations';

interface SocialButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  className?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ 
  icon, 
  text, 
  onClick, 
  className 
}) => {
  return (
    <motion.button
      variants={buttonAnimation}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={cn(
        "w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md",
        "bg-white hover:bg-gray-50 transition-colors duration-200",
        className
      )}
      onClick={onClick}
    >
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </motion.button>
  );
};

export default SocialButton;