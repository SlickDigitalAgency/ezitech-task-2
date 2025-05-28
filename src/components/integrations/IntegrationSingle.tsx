import React from 'react';
import { motion } from 'framer-motion';
import { IntegrationSingleProps } from '@/types/integrations/IntegrationTypes';
import { Button } from '@/components/ui/button';

const IntegrationSingle: React.FC<IntegrationSingleProps> = ({ integration }) => {
  return (
    <div className="min-h-screen bg-[#FFF9E5] py-20 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-2 text-sm mb-6">
          <span>Home</span>
          <span>/</span>
          <span>Integration Single</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          How To Integrate With {integration.name.split(' ')[0]}
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-16 bg-purple-50 rounded-lg p-3">
            <img
              src={integration.icon}
              alt={integration.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">{integration.name}</h2>
            <p className="text-gray-600">{integration.description}</p>
          </div>
          <Button className="ml-auto bg-black text-white hover:bg-gray-800">
            Install Now
          </Button>
        </div>

        {/* Connection Steps */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">How to connect your store with {integration.name.split(' ')[0]}</h3>
          <ul className="space-y-4">
            {integration.steps.map((step, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Advantages */}
        <div>
          <h3 className="text-xl font-semibold mb-6">What are some advantages of using {integration.name.split(' ')[0]}</h3>
          <div className="space-y-4">
            {integration.advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-gray-50 rounded-lg"
              >
                <p className="text-gray-700">{advantage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSingle;