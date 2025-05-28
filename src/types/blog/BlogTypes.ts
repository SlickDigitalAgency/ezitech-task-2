export interface Author {
  id: string;
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage: string;
  author: Author;
  date: string;
}
export interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  date: string;
  author: Author;
  image: string;
  readingTime: string;
  tags: string[];
}