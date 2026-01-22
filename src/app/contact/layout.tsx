import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us - Car Rental Madgaon Goa',
  description: 'Contact Swami Car Rentals for self-drive car booking in Goa. WhatsApp, call, or visit us near KTC Bus Stand, Madgaon. 24/7 support available.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${SITE_NAME}`,
    description: 'Get in touch for self-drive car rentals in Goa. WhatsApp booking, 24/7 support. Located near KTC Bus Stand, Madgaon.',
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: '/swamy-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Swami Car Rentals - Madgaon, Goa',
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
