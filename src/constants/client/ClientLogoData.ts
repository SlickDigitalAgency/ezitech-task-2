import { ClientLogo } from '@/types/client/ClientTypes';

// Import actual logo images
import amazonLogo from '@/assets/clientLogo/amazon.webp';
import slackLogo from '@/assets/clientLogo/slack.webp';
import shopifyLogo from '@/assets/clientLogo/shopify.webp';
import segmentLogo from '@/assets/clientLogo/segment.webp';
import googleLogo from '@/assets/clientLogo/google.webp';
import netflixLogo from '@/assets/clientLogo/netflix.webp';
import spotifyLogo from '@/assets/clientLogo/spotify.webp';
import microsoftLogo from '@/assets/clientLogo/microsoft.webp';

export const clientLogos: ClientLogo[] = [
  {
    id: '1',
    name: 'Amazon',
    alt: 'Amazon logo',
    imageSrc: amazonLogo,
  },
  {
    id: '2',
    name: 'Slack',
    alt: 'Slack logo',
    imageSrc: slackLogo,
  },
  {
    id: '3',
    name: 'Shopify',
    alt: 'Shopify logo',
    imageSrc: shopifyLogo,
  },
  {
    id: '4',
    name: 'Segment',
    alt: 'Segment logo',
    imageSrc: segmentLogo,
  },
  {
    id: '5',
    name: 'Google',
    alt: 'Google logo',
    imageSrc: googleLogo,
  },
  {
    id: '6',
    name: 'Netflix',
    alt: 'Netflix logo',
    imageSrc: netflixLogo,
  },
  {
    id: '7',
    name: 'Spotify',
    alt: 'Spotify logo',
    imageSrc: spotifyLogo,
  },
  {
    id: '8',
    name: 'Microsoft',
    alt: 'Microsoft logo',
    imageSrc: microsoftLogo,
  },
  {
    id: '9',
    name: 'Spotify',
    alt: 'Spotify logo',
    imageSrc: spotifyLogo,
  },
  {
    id: '10',
    name: 'Microsoft',
    alt: 'Microsoft logo',
    imageSrc: microsoftLogo,
  }
];
