import React from 'react';
import { motion } from 'framer-motion';
import { TermsSection } from '@/types/terms/TermsTypes';

const Terms: React.FC = () => {
  const sections: TermsSection[] = [
    {
      id: '1',
      title: '1. Definitions',
      content: [
        'The terms used throughout this document carry specific meanings. "We" refers to our Service and its entire service infrastructure. "User" or "you" refers to any individual or entity accessing and using our services.',
        'These definitions extend to all related services, features, and functionalities provided through our platform.',
      ],
    },
    {
      id: '2',
      title: '2. General Terms',
      content: [
        'By accessing and using our services, you agree to be bound by these terms and conditions. We reserve the right to modify these terms at any time.',
        'Users must be at least 18 years old to use our services. All information provided must be accurate and current.',
      ],
    },
    {
      id: '3',
      title: '3. Eligibility',
      content: [
        'To be eligible for our services, users must meet certain criteria:',
        '- Must be of legal age in their jurisdiction',
        '- Must provide accurate and truthful information',
        '- Must maintain the security of their account',
      ],
    },
    {
      id: '4',
      title: '4. Rules of Use',
      content: [
        'Users agree to follow these basic rules of use:',
        '- No unauthorized access or use of the service',
        '- No violation of intellectual property rights',
        '- No distribution of harmful content or malware',
        '- No interference with service operations',
      ],
    },
    {
      id: '5',
      title: '5. Intellectual Property Rights',
      content: [
        'All content, features, and functionality are exclusive property of our service and are protected by international copyright, trademark, and other intellectual property laws.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDF6E9] py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Terms & Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {sections.map((section) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: Number(section.id) * 0.1 }}
              className="mb-8 last:mb-0"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h2>
              {section.content.map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4 last:mb-0 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.section>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;