'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import Counter from '@/components/Counter';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export default function AboutPage() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-image.webp')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Your Trusted <span className="gradient-text">Car Rental Partner</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Family-owned business serving locals and tourists in Madgaon, Goa with quality self-drive car rentals.
          </motion.p>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <Image
                src="/swamy-logo.webp"
                alt="Swami Car Rentals"
                width={400}
                height={400}
                className="rounded-2xl shadow-xl mx-auto"
              />
            </AnimatedSection>
            <AnimatedSection direction="right">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-[var(--color-primary-orange)] text-sm font-semibold rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
                Started with a <span className="gradient-text">Simple Vision</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Swami Car Rentals was founded with a simple goal: to provide reliable, affordable, and hassle-free self-drive car rentals in Madgaon, Goa.
                </p>
                <p>
                  As a family-owned business, we understand the importance of trust and transparency. That&apos;s why we focus on maintaining our fleet to the highest standards and offering straightforward pricing with no hidden fees.
                </p>
                <p>
                  Located conveniently near KTC Bus Stand in Madgaon, we serve both locals and tourists looking to explore the beautiful state of Goa at their own pace.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-shell bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="section-heading">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Our <span className="text-[var(--color-primary-orange)]">Numbers Speak</span>
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
                <Counter target={3} suffix="+" />
              </div>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl sm:text-5xl font-display font-bold text-[var(--color-primary-orange)]">
                4.9
              </div>
              <p className="text-gray-400 mt-2">Google Rating</p>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl sm:text-5xl font-display font-bold text-[var(--color-primary-orange)]">
                <Counter target={7} />
              </div>
              <p className="text-gray-400 mt-2">Cars in Fleet</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="section-heading">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mb-4">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              What Sets Us <span className="gradient-text">Apart</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Well-Maintained Fleet',
                description: 'Every car is regularly serviced and thoroughly cleaned before each rental.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Transparent Pricing',
                description: 'No hidden charges. What you see is what you pay. Clear daily rates with no surprises.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Convenient Location',
                description: 'Pickup and drop-off near KTC Bus Stand, Madgaon - easily accessible for everyone.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Unlimited Kilometers',
                description: 'Drive anywhere in Goa without worrying about distance charges.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '24/7 Support',
                description: 'Round-the-clock assistance via WhatsApp and phone for any emergencies.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: 'Instant WhatsApp Booking',
                description: 'Skip the paperwork. Book your car instantly through WhatsApp.',
              },
            ].map((feature, index) => (
              <StaggerItem key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 text-[var(--color-primary-orange)]">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-shell bg-[var(--color-primary-orange)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Ready to Explore Goa?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Book your self-drive car with us and experience the difference. No hidden charges, unlimited kilometers, and 24/7 support.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I want to book a car")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary-orange)] font-bold text-lg rounded-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book Now on WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
