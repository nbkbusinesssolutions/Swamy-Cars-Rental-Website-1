import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us - Trusted Car Rental in Goa',
  description: 'Learn about Swami Car Rentals - Goa\'s trusted self-drive car rental service. 4.9★ Google rated, 500+ happy customers, located near KTC Bus Stand, Madgaon.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: `About Us | ${SITE_NAME}`,
    description: 'Goa\'s trusted self-drive car rental. 4.9★ Google rated, 500+ happy customers, transparent pricing.',
    url: `${SITE_URL}/about`,
    images: [
      {
        url: '/swamy-logo.webp',
        width: 1200,
        height: 630,
        alt: 'About Swami Car Rentals - Trusted Car Rental in Goa',
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
