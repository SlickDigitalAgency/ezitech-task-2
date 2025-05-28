import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ErrorPageProps } from '@/types/404/404Types';
import { Bot } from 'lucide-react';

const ErrorPage: React.FC<ErrorPageProps> = ({
  title = 'Oops!',
  message = 'The page you\'re looking for doesn\'t exist or has been moved.',
  buttonText = 'Go Back Home',
  buttonLink = '/',
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="inline-block mb-8"
        >
          <Bot size={120} className="text-yellow-400" />
        </motion.div>

        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-8xl font-bold text-gray-900 mb-4"
        >
          404
        </motion.h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">{message}</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(buttonLink)}
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
