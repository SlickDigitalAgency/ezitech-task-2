import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { JoinTeamProps } from '@/types/team/TeamTypes';

const JoinTeam: React.FC<JoinTeamProps> = ({ title, description, positions }) => {
  return (
    <div className="py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-72 h-72 bg-[#4AD295] rounded-tl-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm uppercase tracking-wider mb-2 block"
          >
            JOIN OUR TEAM
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            {description}
          </motion.p>
        </div>

        {/* Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{position.title}</h3>
              <p className="text-gray-600 mb-6">{position.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-6">
                  <div className="flex items-center text-gray-500">
                    <Clock size={18} className="mr-2" />
                    <span className="text-sm">{position.type}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={18} className="mr-2" />
                    <span className="text-sm">{position.location}</span>
                  </div>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-red-500 text-sm font-medium flex items-center"
                >
                  Read More
                  <span className="ml-2">→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;