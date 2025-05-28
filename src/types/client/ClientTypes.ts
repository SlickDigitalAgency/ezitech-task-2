export interface ClientLogo {
  id: string;
  name: string;
  alt: string;
  imageSrc: string;
}

export interface ClientLogoSectionProps {
  title?: string;
  subtitle?: string;
  logos: ClientLogo[];
  className?: string;
}