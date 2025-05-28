import { FC } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { authorsData } from '@/constants/author/AuthorData';
import { Author as AuthorType } from '../../types/author/AuthorTypes';

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
} as const;

const Author: FC = () => {
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
          <div className="w-full h-full bg-rose-200 rounded-tl-[3rem]" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
            <span>{authorsData.breadcrumb.home}</span>
            <span>/</span>
            <span className="text-gray-900">{authorsData.breadcrumb.authors}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            {authorsData.title}
          </motion.h1>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {authorsData.authors.map((author: AuthorType, index: number) => (
            <motion.div
              key={author.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {author.name}
              </h3>

              <p className="text-gray-600 mb-4">{author.bio}</p>

              <div className="flex justify-center items-center gap-4">
                {Object.entries(author.socialLinks).map(([platform, url]) => {
                  const Icon = iconMap[platform as keyof typeof iconMap];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Author;
