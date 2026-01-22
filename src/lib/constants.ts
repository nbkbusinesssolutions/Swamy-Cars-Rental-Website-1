export const SITE_NAME = "Swami Car Rentals";
export const SITE_DESCRIPTION = "Rent self-drive cars in Madgaon, Goa. Unlimited KM, instant WhatsApp booking. 4.9★ rated. Located near KTC Bus Stand.";
export const SITE_URL = "https://www.swamicarsrental.site";
export const PHONE_NUMBER = "+91 79727 19764";
export const WHATSAPP_NUMBER = "917972719764";
export const ADDRESS = "Red Roof Hotel, Madel – Near KTC Bus Stand, Madgaon, Goa 403601";

export const NAV_LINKS = [
  { href: "/", label: "Home", key: "home" },
  { href: "/cars", label: "Cars", key: "cars" },
  { href: "/booking", label: "Book Now", key: "booking" },
  { href: "/about", label: "About", key: "about" },
  { href: "/faq", label: "FAQ", key: "faq" },
  { href: "/contact", label: "Contact", key: "contact" },
];

export const SCHEMA_ORG = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/swamy-logo.webp`,
  image: `${SITE_URL}/swamy-logo.webp`,
  telephone: PHONE_NUMBER,
  priceRange: "₹₹",
  description: "Swami Car Rentals offers self-drive car rentals in Madgaon, Goa with unlimited kilometers, transparent pricing, and easy WhatsApp booking near KTC Bus Stand.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Red Roof Hotel, Madel",
    addressLocality: "Madgaon",
    addressRegion: "Goa",
    postalCode: "403601",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 15.2993,
    longitude: 74.1240
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Goa"
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59"
  }
};
