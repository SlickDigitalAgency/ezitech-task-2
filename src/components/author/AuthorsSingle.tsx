import React from 'react';
import { Author } from '@/types/author/AuthorTypes';
import AuthorInfo from './AuthorInfo';
import RecentPosts from './RecentPosts';

interface AuthorsSingleProps {
  author: Author;
}

const AuthorsSingle: React.FC<AuthorsSingleProps> = ({ author }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-24 left-0 w-24 h-48 opacity-50">
          <svg viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 C 20 20, 40 20, 50 10" stroke="#FCD34D" strokeWidth="4" fill="none" />
            <path d="M10 50 C 20 60, 40 60, 50 50" stroke="#FCD34D" strokeWidth="4" fill="none" />
            <path d="M10 90 C 20 100, 40 100, 50 90" stroke="#FCD34D" strokeWidth="4" fill="none" />
          </svg>
        </div>
        <div className="absolute -bottom-24 right-0 w-24 h-48 opacity-50">
          <svg viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="20" fill="#60A5FA" fillOpacity="0.3" />
            <circle cx="50" cy="100" r="15" fill="#60A5FA" fillOpacity="0.3" />
            <circle cx="50" cy="150" r="10" fill="#60A5FA" fillOpacity="0.3" />
          </svg>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <AuthorInfo author={author} />
          <RecentPosts 
            posts={author.posts} 
            author={{ name: author.name, imageUrl: author.imageUrl }} 
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorsSingle;