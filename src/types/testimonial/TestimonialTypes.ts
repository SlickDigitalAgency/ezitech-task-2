export interface TestimonialUser {
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface TestimonialItem {
  id: string;
  title: string;
  description: string;
  user: TestimonialUser;
  category: 'left' | 'right-top' | 'right-bottom';
  brandColor: string;
  brandName: string;
  brandIcon?: string;
}

export interface TestimonialData {
  sectionTitle: string;
  sectionSubtitle: string;
  testimonials: TestimonialItem[];
}