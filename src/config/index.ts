import { Metadata } from 'next';

export const SITE_CONFIG: Metadata = {
  title: {
    default: 'AlgoVerse - Decentralized coins Trading',
    template: `%s | AlgoVerse`,
  },
  description:
    'AlgoVerse empowers you to trade and store coins seamlessly. No technical expertise required. Start your journey towards sustainable coins today!',
  icons: {
    icon: [
      {
        url: '/icons/favicon.ico',
        href: '/icons/favicon.ico',
      },
    ],
  },
  openGraph: {
    title: 'AlgoVerse - Decentralized coins Trading',
    description:
      'AlgoVerse empowers you to trade and store coins seamlessly. No technical expertise required. Start your journey towards sustainable coins today!',
    images: [
      {
        url: '/assets/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@shydev69',
    title: 'AlgoVerse - Decentralized coins Trading',
    description:
      'AlgoVerse empowers you to trade and store coins seamlessly. No technical expertise required. Start your journey towards sustainable coins today!',
    images: [
      {
        url: '/assets/og-image.png',
      },
    ],
  },
  metadataBase: new URL('https://astra-ai-galembeck.vercel.app'),
};
