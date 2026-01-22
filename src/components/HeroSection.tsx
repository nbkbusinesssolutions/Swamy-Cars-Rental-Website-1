'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import TypingText from './TypingText';
import { WHATSAPP_NUMBER } from '@/lib/constants';

const heroHeadlines = [
  'Well-maintained self-drive cars right here in Madgaon.',
  'Explore Goa on your terms. Start your journey in minutes.',
  'Your perfect ride awaits. Trusted by 500+ locals.',
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: 'easeOut',
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden -mt-[68px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-image.webp"
          alt="Self-drive car rental in Goa"
          fill
          priority
          className="object-cover object-[center_30%] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/90 sm:from-gray-900/75 sm:via-gray-900/45 sm:to-gray-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 via-transparent to-gray-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F39C12]/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 to-orange-500/15 backdrop-blur-md border border-amber-400/30 px-4 py-2 rounded-full text-sm sm:text-base text-white/95 shadow-lg shadow-amber-500/10">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.3, ease: 'backOut' }}
                  className="w-4 h-4 text-amber-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </span>
            <span className="font-medium">4.9 rating</span>
            <span className="text-white/50">•</span>
            <span>Trusted by 500+ locals</span>
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="font-display text-[1.625rem] leading-[1.25] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white sm:leading-tight mb-5 sm:mb-6 min-h-[3.2em] sm:min-h-[2em]"
        >
          <TypingText
            phrases={heroHeadlines}
            typingSpeed={55}
            deletingSpeed={30}
            pauseDuration={2800}
            className="text-white"
          />
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="text-base sm:text-xl text-white/85 max-w-md sm:max-w-2xl mx-auto mb-7 sm:mb-10 leading-relaxed"
        >
          WhatsApp us, pick up near KTC Bus Stand, and start exploring Goa in minutes.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I want to book a car')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] bg-[#25D366] text-white font-bold text-base sm:text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_35px_rgba(37,211,102,0.45)] animate-pulse-glow"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#25D366] via-[#1fae57] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="relative z-10">Book on WhatsApp</span>
          </a>

          <Link
            href="/cars"
            className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] bg-white/10 backdrop-blur-md border border-white/25 text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 hover:bg-[#F39C12]/20 hover:border-[#F39C12]/50 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(243,156,18,0.2)]"
          >
            <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>View Our Fleet</span>
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="mt-8 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-10 text-white/70 text-xs sm:text-sm"
        >
          {['No hidden charges', 'Flexible pickup', '24/7 support'].map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
              className="flex items-center gap-1.5 sm:gap-2"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/40 hover:text-white/60 transition-colors cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
