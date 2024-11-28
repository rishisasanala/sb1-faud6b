import { Metadata } from 'next';

export const siteConfig = {
  name: 'PawTag Premium Dog Collars',
  description:
    'Premium dog collars with built-in AirTag holders. Keep your best friend safe and stylish with our innovative tracking solution.',
  url: '',
};

export const metadata = {
  metadataBase: new URL('https://acme.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
};
