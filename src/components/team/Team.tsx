import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { TeamProps } from '@/types/team/TeamTypes';
import { Button } from '@/components/ui/button';

const Team: React.FC<TeamProps> = ({ title,  members }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="bg-[#FFF9E5] py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0">
        <div className="w-32 h-32 bg-[#FFDD65] opacity-20 rounded-bl-full" />
      </div>
      <div className="absolute bottom-0 left-0">
        <div className="w-40 h-40 bg-[#4AD295] opacity-10 rounded-tr-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm uppercase tracking-wider mb-2 block"
          >
            OUR TEAM MEMBERS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold mb-6"
          >
            {title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-end"
          >
            <Button variant="default" className="bg-black text-white hover:bg-gray-800">
              Become a Team Member
            </Button>
          </motion.div>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  {member.socialLinks.facebook && (
                    <a
                      href={member.socialLinks.facebook}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;