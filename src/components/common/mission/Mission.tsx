import React from 'react';
import { motion } from 'framer-motion';
import { MissionProps } from '@/types/mission/MissionTypes';

const Mission: React.FC<MissionProps> = ({
  visionTitle,
  visionDescription,
  ultimateTitle,
  ultimateDescription
}) => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-500 text-sm uppercase tracking-wider mb-4 block">
              WE HAVE OUR VISION
            </span>
            <h2 className="text-3xl font-bold mb-6">{visionTitle}</h2>
            <p className="text-gray-600">{visionDescription}</p>
          </motion.div>

          {/* Ultimate Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-red-500 text-sm uppercase tracking-wider mb-4 block">
              WE ARE THE ULTIMATE
            </span>
            <h2 className="text-3xl font-bold mb-6">{ultimateTitle}</h2>
            <p className="text-gray-600">{ultimateDescription}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mission;