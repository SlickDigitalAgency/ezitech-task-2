import React from 'react';
import BlogSingleComponent from '@/components/blog/BlogSingle';
import { blogData } from '@/constants/blog/BlogSinlgeData';

const BlogSingle: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main>
        <BlogSingleComponent blog={blogData} />
      </main>
    </div>
  );
};

export default BlogSingle;