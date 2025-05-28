import React from 'react';
import { motion } from 'framer-motion';
import { IntegrationsProps } from '@/types/integrations/IntegrationTypes';
import { Button } from '@/components/ui/button';

const Integration: React.FC<IntegrationsProps> = ({ title, description, integrations }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9E5] py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          className="w-40 h-40 bg-red-200 rounded-br-full"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          className="w-60 h-60 bg-yellow-200 rounded-tl-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-sm mb-6">
            <span>Home</span>
            <span>/</span>
            <span>Integration</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Integrations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {integrations.map((integration) => (
            <motion.div
              key={integration.id}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={integration.icon}
                    alt={integration.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{integration.description}</p>
                  <Button
                    variant="outline"
                    className="text-sm"
                    onClick={() => window.open(integration.link, '_blank')}
                  >
                    Connect
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Integration;