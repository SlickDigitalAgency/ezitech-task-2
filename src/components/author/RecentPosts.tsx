import React from 'react';
import { Post, Author } from '@/types/author/AuthorTypes';
import PostCard from './PostCard';

interface RecentPostsProps {
  posts: Post[];
  author: {
    name: string;
    imageUrl: string;
  };
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts, author }) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
        Recent Post By: <span className="font-bold">{author.name}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} author={author} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;