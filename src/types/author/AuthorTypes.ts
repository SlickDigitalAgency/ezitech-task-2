export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram';
  url: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt?: string;
  imageUrl: string;
  date: string;
  slug: string;
}

export interface Author {
  id: string;
  name: string;
  imageUrl: string;
  bio: string;
  socialLinks: SocialLink[];
  posts: Post[];
}