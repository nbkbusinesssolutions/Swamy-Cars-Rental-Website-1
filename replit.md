# Swami Car Rentals

## Overview
A car rental website for Swami Car Rental in Goa, India. Migrated from static HTML/Vite to Next.js 14+ with App Router, TypeScript, Tailwind CSS v4 with @theme variables, and Framer Motion animations.

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with SEO metadata, Header, Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles with Tailwind v4 @theme
│   ├── about/
│   │   ├── layout.tsx      # About page SEO metadata
│   │   └── page.tsx        # About page
│   ├── booking/
│   │   ├── layout.tsx      # Booking page SEO metadata
│   │   └── page.tsx        # Booking page
│   ├── cars/
│   │   ├── layout.tsx      # Cars page SEO metadata
│   │   └── page.tsx        # Cars page with filter
│   ├── contact/
│   │   ├── layout.tsx      # Contact page SEO metadata
│   │   └── page.tsx        # Contact page with map
│   ├── faq/
│   │   ├── layout.tsx      # FAQ page SEO metadata
│   │   └── page.tsx        # FAQ page with accordion
│   └── not-found.tsx       # 404 page
├── components/             # Reusable React components
│   ├── Header.tsx          # Navigation with mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── WhatsAppButton.tsx  # Floating WhatsApp CTA
│   ├── CarCard.tsx         # Fleet car display card
│   ├── AnimatedSection.tsx # Framer Motion scroll animations
│   ├── Counter.tsx         # Animated counter for stats
│   ├── HeroSection.tsx     # Hero with typing animation, glassmorphism CTAs
│   └── TypingText.tsx      # Rotating text with typewriter effect
├── data/
│   └── fleet.ts            # Fleet data (7 cars with pricing)
└── lib/
    └── constants.ts        # Site constants (WhatsApp number, etc)

public/                     # Static assets
├── images/cars/            # Car images
├── images/hero/            # Hero section images
├── swamy-logo.webp         # Logo
└── favicon files           # Various favicon sizes

backup/                     # Original static HTML files (archived)
```

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with @theme variables for design tokens
- **Animations**: Framer Motion for scroll-triggered and entry animations
- **Fonts**: Inter (body) + Space Grotesk (headings) via next/font

## Development
- **Dev server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Start production**: `npm start`

## Key Features
- Responsive mobile-first design
- WhatsApp-based booking (instant messaging integration)
- Fleet filtering by category (Hatchbacks, SUVs, Family MPVs)
- Animated page transitions and scroll effects
- SEO optimized with structured data (JSON-LD)
- 4.9 Google rating badge, 500+ customer count

## User Preferences
- Preserve original design - no major visual changes
- Technical modernization only (migration to Next.js/TypeScript)
- Framer Motion for animations (replacing CSS animations)

## Color System (Agency CRO Audit - Jan 2026)

### Primary (Conversion-Driving)
| Color | Hex | Usage |
|-------|-----|-------|
| Orange | `#F39C12` | Book Now, primary CTAs, prices |
| Orange Hover | `#E67E22` | Hover states only (never static) |

### Brand-Specific (Third-Party Services)
| Color | Hex | Usage |
|-------|-----|-------|
| WhatsApp Green | `#25D366` | WhatsApp buttons, icons only |
| Google Maps Blue | `#4285F4` | Google Maps buttons, location icons |
| Call/Phone Gray | `#6B7280` | Phone/call CTAs (neutral, non-competing) |

### Neutral Stack (90% of UI)
| Color | Usage |
|-------|-------|
| `gray-900` | Headings, dark hero backgrounds |
| `gray-600` | Body text |
| `gray-500` | Muted text |
| `gray-100` | Borders, inactive states |
| `gray-50` | Alternate backgrounds |
| `white` | Main canvas |

### Badge System (Tiered)
- **Tier 1 (Gradients)**: Most Wanted, Budget Pick, Premium MPV - conversion-critical
- **Tier 2 (Flat)**: City Favorite, SUV Favorite, Family Ready, Compact - informational only

### Forbidden Colors (Removed)
- ~~Secondary Blue `#3498DB`~~ - competed with orange
- ~~Accent Purple `#8E44AD`~~ - no use case
- ~~Accent Sky `#5DADE2`~~ - no use case

### Design Rules
1. Orange = conversion only (1-2 elements per screen max)
2. Neutrals = majority of UI (90%)
3. Gradients = rare & meaningful (Tier 1 badges only)
4. Phone CTA = neutral gray (low friction, don't oversell)
5. Premium cars = less flashy badges (restraint = luxury)

## Recent Changes
- Jan 2026: Hero section color improvements
  - Added warm orange tint to bottom overlay for brand cohesion
  - Rating badge updated with amber/orange gradient background and border
  - "View Our Fleet" button has orange hover glow effect
  - Checkmarks changed from green to amber for brand consistency
  - WhatsApp button preserved with official green (#25D366)
- Jan 2026: Complete SEO optimization for Google indexing
  - Added page-specific metadata (title, description, canonical URL, OG tags) for all pages
  - Created layout.tsx files for cars, booking, about, faq, contact pages
  - Updated sitemap.xml with clean Next.js URLs (removed .html extensions)
  - Updated robots.txt with Next.js paths and sitemap reference
  - Added keywords, robots directives, and enhanced OG/Twitter cards to root layout
  - LocalBusiness JSON-LD structured data for rich search results
- Jan 2026: Mobile UX optimization (360px-430px viewport)
  - Hero Section: responsive typography (1.625rem mobile, 2.5rem desktop), full-width CTAs
  - All buttons/tap targets: 48px minimum height for accessibility
  - CarCard: mobile-first layout with responsive text and spacing
  - Header: optimized mobile navigation with 48px tap targets
  - WhatsApp button: adjusted sizing (3.25rem mobile, 3.5rem desktop)
  - Added prefers-reduced-motion support for accessibility
  - Mobile-first breakpoint pattern (sm: for desktop overrides)
- Jan 2026: Brand-specific button colors implemented
  - Google Maps buttons use official Google Blue (#4285F4)
  - WhatsApp buttons use official WhatsApp Green (#25D366)
  - Phone/Call buttons use neutral gray (non-competing)
  - Location icons updated to Google Maps blue across all pages
- Jan 2026: Full CRO color audit implementation
  - Removed blue, purple, sky colors from CSS variables
  - Phone icons/links changed to neutral gray
  - Tier 2 badges changed to flat colors (orange-50, amber-50, slate-100, gray-100)
  - "Why Choose Us" and "Our Fleet" badges changed to neutral gray
  - Icon backgrounds simplified from gradients to flat bg-orange-50
- Added Pickup & Visit Location section with embedded Google Map
- Complete migration from static HTML/Vite to Next.js 14+ with TypeScript
- Implemented Tailwind CSS v4 with @theme variables for design tokens
- Added Framer Motion animations for scroll effects and page transitions
- Created component library: Header, Footer, CarCard, AnimatedSection, Counter
- All 7 pages migrated: Home, About, Cars, Booking, FAQ, Contact, 404
