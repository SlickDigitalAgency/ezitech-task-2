import { FC } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pricingData } from '@/constants/pricing/PricingData';

const Pricings: FC = () => {
  return (
    <section className="py-20 px-4 bg-[#FDF8F4] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1 }}
          className="w-20 h-20 bg-yellow-200 rounded-br-[3rem]"
        />
      </div>
      
      <div className="absolute right-10 bottom-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          className="w-32 h-32"
        >
          <img
            src="https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg"
            alt="Decorative"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
            <span>Home</span>
            <span>/</span>
            <span className="text-gray-900">Pricing</span>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {pricingData.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            {pricingData.description}
          </motion.p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pricingData.plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`bg-white rounded-2xl p-8 shadow-sm relative ${
                plan.isPopular ? 'border-2 border-blue-500' : ''
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 right-4 px-4 py-1 bg-blue-500 text-white text-sm rounded-full">
                  Popular
                </span>
              )}

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {plan.name}
              </h3>
              
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map(feature => (
                  <div key={feature.id} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">{feature.title}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full ${
                  plan.isPopular
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-black hover:bg-gray-800'
                } text-white`}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Try Free Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-rose-50 text-rose-500 rounded-full text-sm font-medium tracking-wider mb-4">
            CHOOSE PLAN FOR YOU
          </span>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Try Spydea for free Now
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          </p>
          
          <Button
            className="bg-black text-white hover:bg-gray-800"
            size="lg"
          >
            Sign Up For Free
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricings;