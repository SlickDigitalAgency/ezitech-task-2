import { FooterSection, SocialLink, ContactInfo } from '../../types/footer/FooterTypes';

export const footerSections: FooterSection[] = [
  {
    id: 'company',
    title: 'Company',
    links: [
      { id: 'about', text: 'About us', href: '/about' },
      { id: 'contact', text: 'Contact us', href: '/contact' },
      { id: 'pricing', text: 'Pricing', href: '/pricing' }
    ]
  },
  {
    id: 'resources',
    title: 'Resources',
    links: [
      { id: 'blog', text: 'Blog', href: '/blog' },
      { id: 'career', text: 'Career', href: '/career' },
      { id: 'terms', text: 'Terms & Conditions', href: '/terms' }
    ]
  }
];

export const socialLinks: SocialLink[] = [
  { id: 'facebook', name: 'Facebook', href: '#', icon: 'facebook' },
  { id: 'twitter', name: 'Twitter', href: '#', icon: 'twitter' },
  { id: 'instagram', name: 'Instagram', href: '#', icon: 'instagram' },
  { id: 'linkedin', name: 'LinkedIn', href: '#', icon: 'linkedin' }
];

export const contactInfo: ContactInfo = {
  email: 'hello@themefisher.com',
  phone: '+94748-388817'
};