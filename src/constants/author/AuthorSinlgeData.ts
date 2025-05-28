import { AuthorWithPosts } from '../../types/author/AuthorTypes';

// New interface extending AuthorWithPosts but replacing 'image' with 'imageUrl'
export interface AuthorWithImageUrlAndPosts extends Omit<AuthorWithPosts, 'image'> {
  imageUrl: string;
}

// Your author data with posts and imageUrl
export const authorData: AuthorWithImageUrlAndPosts = {
  id: '1',
  name: 'William Evans',
  imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  bio: `We are especially interested in finding developers with experience either building web APIs with Go or experience with functional programming (e.g. Elixir, Node.js, Clojure, F#). You might not have experience with all the technologies in our stack, but you are motivated to learn deeply. You will get the opportunity to work with both Go and Elixir with experienced team mates who can teach and pair with you to learn whatever you have less experience with.You care about security, code quality, scalability.

We are looking for a personal financial planning app (Certified Financial Planner™ preferred) who will lead our client advising efforts, on areas including: saving, retirement, debt management.`,

  socialLinks: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },

  posts: [
    {
      id: '1',
      title: 'The Real Product From The Buyers Improvements In Overflow Basis.',
      excerpt: 'Understanding how to build products that truly address customer needs',
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 03, 2023',
      slug: 'real-product-buyers-improvements',
    },
    {
      id: '2',
      title: 'Why You Should Launch Your Product In Phases Not After Done',
      excerpt: 'The benefits of iterative product development and phased launches',
      imageUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 04, 2023',
      slug: 'launch-product-in-phases',
    },
    {
      id: '3',
      title: "Three Reasons You DON'T Need An App On The App Store",
      excerpt: 'Exploring alternatives to native mobile applications',
      imageUrl: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 03, 2023',
      slug: 'reasons-dont-need-app-store',
    },
  ],
};
