import { FC } from 'react';
import { BlogPost } from '@/types/blog/BlogTypes';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  const { title, coverImage, author, date } = post;
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Avatar className="h-8 w-8 border-2 border-white">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{getInitials(author.name)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-gray-700">{author.name}</span>
        </div>
        
        <h3 className="text-lg font-semibold leading-tight mb-2 line-clamp-2 h-12">
          {title}
        </h3>
        
        <p className="text-sm text-gray-500">{date}</p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;