import { FC } from 'react';
import { blogPosts } from '@/constants/blog/BlogData';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';

const Blog: FC = () => {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="uppercase text-sm font-medium tracking-wider text-rose-500 mb-2">
          LATEST ARTICLES
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 max-w-xl mb-4 md:mb-0">
            Take a Look at the Latest Articles from Our Blog
          </h2>

          <Button 
            variant="outline" 
            className="border-gray-300 hover:bg-gray-100 text-gray-800"
          >
            Browse All Articles
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
