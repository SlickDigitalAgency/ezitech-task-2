import React from 'react';
import { SocialLinkObject } from '@/types/author/AuthorTypes';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface SocialLinksProps {
  links: SocialLinkObject;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook size={18} />;
      case 'twitter':
        return <Twitter size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex space-x-3">
      {Object.entries(links).map(([platform, url]) =>
        url ? (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
            aria-label={`Visit ${platform}`}
          >
            {getIcon(platform)}
          </a>
        ) : null
      )}
    </div>
  );
};

export default SocialLinks;
