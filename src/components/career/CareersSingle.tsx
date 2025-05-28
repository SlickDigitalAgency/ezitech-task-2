import { FC } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { careerSingleData } from '@/constants/career/CareerSingleData';

const CareersSingle: FC = () => {
  const { breadcrumb, position } = careerSingleData;

  return (
    <section className="py-20 px-4 bg-[#FDF8F4] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 w-32 h-32 bg-yellow-100 opacity-50"></div>
      <div className="absolute left-0 bottom-0 w-32 h-32 bg-rose-100 opacity-50"></div>

      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <span>{breadcrumb.home}</span>
          <span>/</span>
          <span>{breadcrumb.career}</span>
          <span>/</span>
          <span className="text-gray-900">{breadcrumb.position}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-6">{position.title}</h1>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm">
                  {position.location}
                </span>
                <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm">
                  {position.type}
                </span>
                <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm">
                  {position.department}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">What is the role?</h2>
                  <p className="text-gray-600">{position.aboutRole}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">About you</h2>
                  <p className="text-gray-600">{position.aboutYou}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Responsibilities</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {position.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {position.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">We offer you</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {position.weOffer.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Application Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply Today</h2>
              <p className="text-gray-600 mb-6">Ready to join our team? Submit your application below.</p>
              
              <Button
                className="w-full bg-black text-white hover:bg-gray-800"
                size="lg"
              >
                Apply Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSingle;