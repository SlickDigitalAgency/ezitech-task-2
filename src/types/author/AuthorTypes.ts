// Defines social links as an object with optional fields
export interface SocialLinkObject {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

// Basic post structure
export interface Post {
  id: string;
  title: string;
  excerpt?: string;
  imageUrl: string;
  date: string;
  slug: string;
}

// Author with posts (for blog or post contexts)
export interface AuthorWithPosts {
  id: string;
  name: string;
  imageUrl: string;    // note: imageUrl here
  bio: string;
  socialLinks: SocialLinkObject;
  posts: Post[];
}

// Author for AuthorsData (no posts included)
export interface Author {
  id: string;
  name: string;
  image: string;       // no posts, different property name
  bio: string;
  socialLinks: SocialLinkObject;
}

// Container for page-level authors data
export interface AuthorsData {
  title: string;
  breadcrumb: {
    home: string;
    authors: string;
  };
  authors: Author[];
}
