export interface FooterProps {
  className?: string;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  id: string;
  text: string;
  href: string;
}

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}