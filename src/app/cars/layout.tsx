import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Self Drive Cars for Rent in Goa',
  description: 'Browse our fleet of well-maintained self-drive cars in Goa. Hatchbacks from ₹1,200/day, SUVs, MPVs. Unlimited KM, full insurance, 24/7 support included.',
  alternates: {
    canonical: `${SITE_URL}/cars`,
  },
  openGraph: {
    title: `Self Drive Cars for Rent | ${SITE_NAME}`,
    description: 'Browse our fleet of well-maintained self-drive cars in Goa. Hatchbacks, SUVs, MPVs available. Unlimited KM included.',
    url: `${SITE_URL}/cars`,
    images: [
      {
        url: '/swamy-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Swami Car Rentals Fleet - Self Drive Cars in Goa',
      },
    ],
  },
};

export default function CarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
