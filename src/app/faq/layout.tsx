import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'FAQ - Self Drive Car Rental Questions',
  description: 'Frequently asked questions about renting self-drive cars in Goa. Learn about documents required, fuel policy, pickup locations, and booking process.',
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    title: `FAQ | ${SITE_NAME}`,
    description: 'Common questions about self-drive car rentals in Goa. Documents, fuel policy, booking process explained.',
    url: `${SITE_URL}/faq`,
    images: [
      {
        url: '/swamy-logo.webp',
        width: 1200,
        height: 630,
        alt: 'FAQ - Swami Car Rentals Goa',
      },
    ],
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
