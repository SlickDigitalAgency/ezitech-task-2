import React from 'react';
import { Post } from '@/types/author/AuthorTypes';

interface PostCardProps {
  post: Post;
  author: {
    name: string;
    imageUrl: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post, author }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow p-5 bg-white">
        <div className="flex items-center mb-4">
          <img
            src={author.imageUrl}
            alt={author.name}
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <span className="text-sm font-medium text-gray-700">{author.name}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
        <div className="mt-auto">
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;