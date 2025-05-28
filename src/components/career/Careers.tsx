import { FC } from 'react';
import { motion } from 'framer-motion';
import { Clock, Globe, TrendingUp } from 'lucide-react';
import { careerData } from '@/constants/career/CareerData';

const iconMap = {
  clock: Clock,
  globe: Globe,
  'trending-up': TrendingUp,
};

const Careers: FC = () => {
  return (
    <section className="py-20 px-4 bg-[#FDF8F4] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-4 top-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          className="grid grid-cols-3 gap-1"
        >
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-rose-400 rounded-full"
            />
          ))}
        </motion.div>
      </div>
      
      <div className="absolute right-10 bottom-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1 }}
          className="w-20 h-20 bg-yellow-200 rounded-tr-[3rem]"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
            <span>Home</span>
            <span>/</span>
            <span className="text-gray-900">Career</span>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {careerData.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            {careerData.description}
          </motion.p>
        </div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-20"
        >
          <img
            src="https://images.pexels.com/photos/7654096/pexels-photo-7654096.jpeg"
            alt="Team working together"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Benefits Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-rose-50 text-rose-500 rounded-full text-sm font-medium tracking-wider mb-4"
          >
            BENEFITS AND ADVANTAGES
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            {careerData.benefits.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 mb-12"
          >
            {careerData.benefits.description}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerData.benefits.items.map((benefit, index) => {
              const Icon = iconMap[benefit.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-6 relative">
                    <div className={`absolute inset-0 ${
                      index === 0 ? 'bg-rose-100' :
                      index === 1 ? 'bg-emerald-100' :
                      'bg-blue-100'
                    } rounded-xl -rotate-6`}></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${
                        index === 0 ? 'text-rose-500' :
                        index === 1 ? 'text-emerald-500' :
                        'text-blue-500'
                      }`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;