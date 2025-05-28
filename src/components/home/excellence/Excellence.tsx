import { FC } from 'react';
import { motion } from 'framer-motion';
import { ExcellenceData } from '@/types/excellence/ExcellenceTypes';

const excellenceData: ExcellenceData = {
  title: "A Few Numbers We are Proud",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.",
  metrics: [
    {
      id: "1",
      value: "94",
      label: "Client Retention",
      suffix: "%"
    },
    {
      id: "2",
      value: "70",
      label: "Emails Per Month",
      suffix: "M+"
    },
    {
      id: "3",
      value: "10",
      label: "Monthly Campaigns",
      suffix: "K+"
    }
  ]
};

const Excellence: FC = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-64">
        <div className="grid grid-cols-3 gap-2 transform -rotate-12">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.3, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-2 h-2 bg-blue-400 rounded-full"
            />
          ))}
        </div>
      </div>
      
      <div className="absolute right-0 bottom-0 w-32 h-32">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          className="w-full h-full bg-green-400 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-rose-50 text-rose-500 rounded-full text-sm font-medium tracking-wider mb-4">
            ACHIEVING EXCELLENCE
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {excellenceData.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {excellenceData.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {excellenceData.metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {metric.value}
                <span className="text-rose-500">{metric.suffix}</span>
              </div>
              <div className="text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excellence;