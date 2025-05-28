import { FC } from 'react';
import { motion } from 'framer-motion';
import { ExperienceData } from '@/types/experience/ExperienceTypes';

const experienceData: ExperienceData = {
  title: "Don't Take Our Word For It",
  subtitle: "EXPERIENCE SPEAKS",
  features: [
    {
      id: "1",
      title: "Features You will Need",
      description: "Lorem ipsum dolor sit amet. Choose eius dolores explicabo recusandae repellendus, perferendis autem."
    },
    {
      id: "2",
      title: "Increase Your Sales",
      description: "Lorem ipsum dolor sit amet. Choose eius dolores explicabo recusandae repellendus, perferendis autem."
    },
    {
      id: "3",
      title: "Choose Right Plan",
      description: "Lorem ipsum dolor sit amet. Choose eius dolores explicabo recusandae repellendus, perferendis autem."
    }
  ],
  dashboardImage: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
};

const Experience: FC = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-rose-50 text-rose-500 rounded-full text-sm font-medium tracking-wider mb-4">
            {experienceData.subtitle}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {experienceData.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {experienceData.features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-3xl blur-xl opacity-30"></div>
            <img
              src={experienceData.dashboardImage}
              alt="Dashboard"
              className="relative rounded-2xl shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;