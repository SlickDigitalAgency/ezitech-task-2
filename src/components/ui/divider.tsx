import React from 'react';
import { cn } from '@/lib/utils';

interface DividerProps {
  text?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ text, className }) => {
  if (!text) {
    return <hr className={cn("border-t border-gray-200 my-4", className)} />;
  }

  return (
    <div className={cn("relative flex items-center my-4", className)}>
      <div className="flex-grow border-t border-gray-200"></div>
      <span className="flex-shrink mx-4 text-sm text-gray-500">{text}</span>
      <div className="flex-grow border-t border-gray-200"></div>
    </div>
  );
};

export default Divider;