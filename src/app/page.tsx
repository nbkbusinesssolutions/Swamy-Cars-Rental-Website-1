'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import Counter from '@/components/Counter';
import CarCard from '@/components/CarCard';
import HeroSection from '@/components/HeroSection';
import { fleetData } from '@/data/fleet';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export default function HomePage() {
  const featuredCars = fleetData.fleet.slice(0, 3);

  return (
    <>
      <HeroSection />

      <section className="section-shell bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="section-heading">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              The <span className="gradient-text">Swami Difference</span>
            </h2>
            <p className="text-gray-600">Everything you need for a hassle-free self-drive experience in Goa</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Unlimited KM',
                description: 'No distance restrictions. Drive as much as you want across Goa.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Fully Insured',
                description: 'Comprehensive insurance included. Drive with complete peace of mind.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '24/7 Support',
                description: 'Round-the-clock assistance. We are just a call away anytime.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Prime Location',
                description: 'Pick up near KTC Bus Stand, Madgaon. Easy access for everyone.',
              },
            ].map((feature, index) => (
              <StaggerItem key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-orange-50 text-[var(--color-primary-orange)]">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-shell bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="section-heading">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mb-4">
              Our Fleet
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Popular <span className="gradient-text">Self-Drive Cars</span>
            </h2>
            <p className="text-gray-600">Well-maintained vehicles ready for your Goa adventure</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link href="/cars" className="btn-primary text-lg px-8 py-4">
              View All Cars
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="section-heading">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Clear day rates, <span className="gradient-text">same for everyone</span>
            </h2>
            <p className="text-gray-600">No seasonal shocks. Taxes, insurance, unlimited kilometres and 24/7 support are already included.</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <StaggerItem className="relative bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-[var(--color-primary-orange)] hover:shadow-lg transition-all">
              <div className="absolute -top-3 right-4">
                <span className="bg-[var(--color-primary-orange)] text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <div className="mb-4">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-1">Hatchbacks</h3>
                <p className="text-sm text-gray-500">Swift, Baleno, Ignis</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-display font-bold text-[var(--color-primary-orange)]">₹1,200 – ₹1,300</span>
                <span className="text-gray-500 text-sm">/day</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited kilometres included
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Easiest to navigate Goa&apos;s narrow roads
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ideal for solo riders or couples
                </li>
              </ul>
            </StaggerItem>

            <StaggerItem className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-[var(--color-primary-orange)] hover:shadow-lg transition-all">
              <div className="mb-4">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-1">Compact SUVs & MPVs</h3>
                <p className="text-sm text-gray-500">Brezza, Ertiga</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-display font-bold text-[var(--color-primary-orange)]">₹1,700 – ₹2,000</span>
                <span className="text-gray-500 text-sm">/day</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Higher ground clearance for speed breakers
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Gives luggage & stroller space
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Best-sellers for families and long itineraries
                </li>
              </ul>
            </StaggerItem>

            <StaggerItem className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-[var(--color-primary-orange)] hover:shadow-lg transition-all">
              <div className="mb-4">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-1">Premium / Adventure</h3>
                <p className="text-sm text-gray-500">Thar, Innova Crysta</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-display font-bold text-[var(--color-primary-orange)]">₹3,000</span>
                <span className="text-gray-500 text-sm">/day</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Captain seats / convertible fun
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Airport and resort-ready presence
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Adventure-friendly torque and tyres
                </li>
              </ul>
            </StaggerItem>
          </StaggerContainer>

          <AnimatedSection className="bg-gray-50 rounded-2xl p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Included
                </h4>
                <p className="text-sm text-gray-600">Unlimited KM • Standard insurance • 24/7 roadside help • Sanitised interiors</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Extra
                </h4>
                <p className="text-sm text-gray-600">Fuel (return with same level) • Doorstep delivery if outside Madgaon</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4 pt-4 border-t border-gray-200">All charges confirmed on WhatsApp before you send money.</p>
          </AnimatedSection>

          <AnimatedSection className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/cars" className="btn-primary px-6 py-3">
              Browse Detailed Pricing
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want to book a car for these dates:")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-6 py-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send My Travel Dates
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-shell bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="section-heading">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Trusted by <span className="text-[var(--color-primary-orange)]">500+ Happy Customers</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <StaggerItem>
              <div className="text-4xl sm:text-5xl font-display font-bold text-[var(--color-primary-orange)]">
                <Counter target={500} suffix="+" />
              </div>
              <p className="text-gray-400 mt-2">Happy Customers</p>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl sm:text-5xl font-display font-bold text-[var(--color-primary-orange)]">
                <Counter target={7} />
              </div>
              <p className="text-gray-400 mt-2">Cars in Fleet</p>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl sm:text-5xl font-display font-bold text-[var(--color-primary-orange)]">
                4.9
              </div>
              <p className="text-gray-400 mt-2">Google Rating</p>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl sm:text-5xl font-display font-bold text-[var(--color-primary-orange)]">
                <Counter target={24} />/7
              </div>
              <p className="text-gray-400 mt-2">Support Available</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="section-shell bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="section-heading">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="text-gray-600">Real reviews from happy customers who explored Goa with us</p>
          </AnimatedSection>

          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 pb-4">
            <div className="flex gap-4 min-w-max">
              {[
                {
                  name: 'Tejas Chavan',
                  review: 'I took a Thar on rent for 5 days from Madgaon to explore Goa. The car was in good condition and really comfortable for the trip. The owner was very helpful and supportive throughout.',
                  time: '8 months ago',
                  rating: 5,
                },
                {
                  name: 'Sukruti',
                  review: 'Best Car Rentals I experienced. The owner Sachin himself was very helpful.',
                  time: '8 months ago',
                  rating: 5,
                },
                {
                  name: 'Shreyash Patade',
                  review: 'Excellent service. On time and promptly responding to all the queries. Vehicles are offered very well maintained.',
                  time: '8 months ago',
                  rating: 5,
                },
                {
                  name: 'Swarali Chavan',
                  review: 'One of the best car rental service in Madgaon. We booked self driven car for 5 days. Well maintained car. We enjoyed our journey with our family.',
                  time: 'a year ago',
                  rating: 5,
                },
                {
                  name: 'Aniruddha Khedekar',
                  review: 'Really nice service and affordable rents. The vehicle condition was also really good.',
                  time: '8 months ago',
                  rating: 5,
                  badge: 'Local Guide',
                },
                {
                  name: 'Raja Sekharan',
                  review: 'Quick service, very responsive and good car condition. One of the best choice to go for a car rental in Goa.',
                  time: 'a year ago',
                  rating: 5,
                  badge: 'Local Guide',
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="w-[300px] sm:w-[320px] flex-shrink-0 bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{testimonial.review}</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-primary-orange)] flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900 text-sm">{testimonial.name}</span>
                        {testimonial.badge && (
                          <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">{testimonial.badge}</span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">{testimonial.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4 md:hidden">Swipe to see more reviews</p>

          <AnimatedSection className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Swami+Car+Rental"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4285F4] text-white font-semibold rounded-lg hover:bg-[#3367D6] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              View All Reviews on Google
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="section-heading">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Book in <span className="gradient-text">3 Simple Steps</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Your Car',
                description: 'Browse our fleet and pick the perfect car for your trip.',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                ),
              },
              {
                step: '2',
                title: 'WhatsApp Us',
                description: 'Send a message with your dates and we will confirm availability.',
                icon: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
              },
              {
                step: '3',
                title: 'Pick Up & Drive',
                description: 'Collect your car near KTC Bus Stand and start your adventure!',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((step, index) => (
              <StaggerItem key={index} className="relative text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-primary-orange)] text-white font-bold text-sm">
                  {step.step}
                </div>
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-orange-50 text-[var(--color-primary-orange)]">
                  {step.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-shell bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="section-heading">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Pickup & Visit Location
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Easy to <span className="gradient-text">Find Us</span>
            </h2>
            <p className="text-gray-600">Easy to reach from bus stand & nearby hotels</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 text-[var(--color-primary-orange)] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 text-lg mb-1">Swami Car Rentals</h3>
                    <p className="text-gray-600">Red Roof Hotel, Madel</p>
                    <p className="text-gray-600">Near KTC Bus Stand</p>
                    <p className="text-gray-600">Madgaon, Goa – 403601</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-50 text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">Phone / WhatsApp</h4>
                  </div>
                  <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-lg font-bold text-gray-900 hover:text-gray-700 transition-colors">
                    7972719764
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">Service Hours</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Open daily</p>
                  <p className="text-gray-500 text-xs mt-1">Fast response on WhatsApp</p>
                </div>
              </div>

              <a
                href="https://share.google/GzPaEEAaGpJd3KYGk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4285F4] text-white font-semibold rounded-xl hover:bg-[#3367D6] hover:shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Get Directions on Google Maps
              </a>
            </AnimatedSection>

            <AnimatedSection className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.704901035966!2d73.95055757516567!3d15.288768685283232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb1c04a0f2219%3A0x6cd8d2c5c3858561!2sSachin%20car%20rentals!5e1!3m2!1sen!2sin!4v1769005183577!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Swami Car Rentals Location"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--color-primary-orange)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Explore Goa?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Book your self-drive car now and start your adventure. No hidden charges, unlimited kilometers, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want to book a car")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-xl hover:bg-[#20BA5A] hover:shadow-2xl transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book Now on WhatsApp
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white font-bold text-lg rounded-xl hover:bg-white/30 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
