import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ExperienceSpeaksProps } from '@/types/about/experience/ExperienceSpeaksTypes';

const ExperienceSpeaks: React.FC<ExperienceSpeaksProps> = ({
  title,
  description,
  stats
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-red-500 text-sm uppercase tracking-wider mb-4 block">
            EXPERIENCE SPEAKS
          </span>
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold mb-2">
                {inView && (
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                    separator=","
                  />
                )}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute left-0 bottom-0"
        >
          <div className="w-24 h-24 flex flex-wrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-blue-200 m-1"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
        >
          <div className="w-32 h-32">
            <div className="w-full h-full rounded-full border-4 border-green-100" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSpeaks;