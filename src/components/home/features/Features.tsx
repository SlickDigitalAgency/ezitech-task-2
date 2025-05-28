import { FC } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: '1',
    title: 'Take Your Marketing to the Next Level.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Proin eget tortor risus.',
    image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'INNOVATIVE STRATEGY'
  },
  {
    id: '2',
    title: 'Choose the Right Plan for Your Team',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Proin eget tortor risus.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'COLLABORATIVE SOLUTIONS'
  }
];

const FeatureSection: FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-12 items-center mb-32 last:mb-0`}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-200 to-pink-200 rounded-3xl opacity-30 blur-xl"></div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="relative rounded-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block px-4 py-2 bg-rose-50 text-rose-500 rounded-full text-sm font-medium tracking-wider"
              >
                {feature.tag}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl font-bold text-gray-900 leading-tight"
              >
                {feature.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                {feature.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;