'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import CarCard from '@/components/CarCard';
import { fleetData } from '@/data/fleet';

export default function CarsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCars = selectedCategory === 'all'
    ? fleetData.fleet
    : fleetData.fleet.filter(car => car.category.includes(selectedCategory));

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
            Our Fleet
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Choose Your <span className="gradient-text">Perfect Ride</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Well-maintained self-drive cars starting from ₹1,200/day. Unlimited kilometers, full insurance, and 24/7 support included.
          </motion.p>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[var(--color-primary-orange)] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Cars
            </button>
            {fleetData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[var(--color-primary-orange)] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No cars found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section id="terms" className="section-shell bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="section-heading">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Clear & Transparent Terms
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Clear Rental Terms — <span className="gradient-text">No Hidden Conditions</span>
            </h2>
            <p className="text-gray-600">Simple rules to ensure a smooth and safe rental experience</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <AnimatedSection className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900">Deposit & Payment</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">₹3,000 Security Deposit</p>
                    <p className="text-xs text-gray-500">Refundable after vehicle inspection</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Full Payment at Pickup</p>
                    <p className="text-xs text-gray-500">Complete payment before vehicle handover</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Fuel Not Included</p>
                    <p className="text-xs text-gray-500">Return with same fuel level as received</p>
                  </div>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 text-[var(--color-primary-orange)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900">Documents Required</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Original Driving License</p>
                    <p className="text-xs text-gray-500">Must be valid and in original format</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">One Valid ID Proof</p>
                    <p className="text-xs text-gray-500">Aadhar card, PAN card, or Passport</p>
                  </div>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 text-red-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900">Driving Rules & Safety</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">No Drinking & Driving</p>
                    <p className="text-xs text-gray-500">Zero tolerance policy for safety</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Speed Limit: 80 km/h</p>
                    <p className="text-xs text-gray-500">Follow all traffic rules strictly</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Seat Belts Compulsory</p>
                    <p className="text-xs text-gray-500">All passengers must wear seat belts</p>
                  </div>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900">Vehicle Care & Usage</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">No Damage Policy</p>
                    <p className="text-xs text-gray-500">Repair costs charged as per actual bills</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Safe Driving Required</p>
                    <p className="text-xs text-gray-500">No rash or unsafe driving allowed</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Return Clean</p>
                    <p className="text-xs text-gray-500">Vehicle must be returned in same condition</p>
                  </div>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900">Pickup, Drop & Monitoring</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Doorstep Service Available</p>
                    <p className="text-xs text-gray-500">Location-based charges apply</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">GPS Tracking Enabled</p>
                    <p className="text-xs text-gray-500">Vehicle monitored for security</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-display text-xl font-bold text-white">Complete Transparency</h3>
            </div>
            <p className="text-gray-300 text-sm">No hidden charges. All terms are shared clearly before confirmation.</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
