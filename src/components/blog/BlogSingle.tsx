import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Blog } from '@/types/blog/BlogTypes';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, Share2 } from 'lucide-react';

interface BlogSingleProps {
  blog: Blog;
}

const BlogSingle: React.FC<BlogSingleProps> = ({ blog }) => {
  useEffect(() => {
    gsap.from('.blog-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2
    });
  }, []);

  return (
    <motion.article 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-900" // Light background, dark text
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="blog-content text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.title}</h1>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
                <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
              </Avatar>
             
            </div>
            <div className="flex items-center space-x-4 text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-sm">{blog.readingTime}</span>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <motion.div 
          className="blog-content relative h-[400px] rounded-xl overflow-hidden mb-8"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Tags */}
        <div className="blog-content flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content prose lg:prose-xl max-w-none text-left">
          {blog.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('-')) {
              return (
                <ul key={index} className="list-disc pl-4 my-4 text-gray-700">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i} className="mb-2">
                      {item.replace('-', '').trim()}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
};

export default BlogSingle;
