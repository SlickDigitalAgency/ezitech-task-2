import React from 'react';
import { Author } from '@/types/author/AuthorTypes';
import SocialLinks from './SocialLinks';

interface AuthorInfoProps {
  author: Author;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ author }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8">
      <div className="flex flex-col items-center md:items-start">
        <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
          <img
            src={author.image}
            alt={author.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-3">{author.name}</h1>
        {/* Pass the object directly */}
        <SocialLinks links={author.socialLinks} />
      </div>
      <div className="max-w-2xl">
        <div className="text-gray-600 leading-relaxed space-y-4">
          {author.bio.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
