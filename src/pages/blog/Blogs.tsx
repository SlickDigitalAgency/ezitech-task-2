import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/constants/blog/BlogData";

const Blogs = () => {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto max-w-7xl text-center">
        <div className="uppercase text-sm font-medium tracking-wider text-rose-500 mb-2">
          LATEST ARTICLES
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 max-w-xl mx-auto">
            News & Tips From the Spydea HQ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
