import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book Self Drive Car in Goa',
  description: 'Book your self-drive car in Madgaon, Goa instantly via WhatsApp. Quick booking, transparent pricing, no hidden charges. Pick up near KTC Bus Stand.',
  alternates: {
    canonical: `${SITE_URL}/booking`,
  },
  openGraph: {
    title: `Book Self Drive Car | ${SITE_NAME}`,
    description: 'Instant WhatsApp booking for self-drive cars in Goa. No paperwork, transparent pricing, quick pickup near KTC Bus Stand.',
    url: `${SITE_URL}/booking`,
    images: [
      {
        url: '/swamy-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Book Self Drive Car in Goa - Swami Car Rentals',
      },
    ],
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
