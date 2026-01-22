'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { WHATSAPP_NUMBER } from '@/lib/constants';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[var(--color-primary-orange)] transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 text-[var(--color-primary-orange)] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  {
    question: 'What documents do I need to rent a car?',
    answer: 'You need a valid Indian driving license (at least 1 year old), a government-issued ID proof (Aadhaar/Passport), and you must be at least 21 years old.',
  },
  {
    question: 'Is there a security deposit required?',
    answer: 'Yes, a refundable security deposit of ₹5,000 to ₹10,000 is required at the time of pickup. The amount varies based on the vehicle type. This is fully refundable when you return the car in good condition.',
  },
  {
    question: 'What is your fuel policy?',
    answer: 'Cars are provided with a full tank of fuel. Please return the car with the same fuel level to avoid additional charges. Fuel costs during your rental are your responsibility.',
  },
  {
    question: 'Is insurance included?',
    answer: 'Yes, all our vehicles come with comprehensive insurance. In case of an accident, a deductible may apply based on the damage assessment.',
  },
  {
    question: 'Are there any kilometer limits?',
    answer: 'No! We offer unlimited kilometers on all our rentals. Drive as much as you want anywhere in Goa without worrying about distance charges.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Free cancellation up to 24 hours before pickup. 50% refund for cancellations within 24 hours. No refund for no-shows.',
  },
  {
    question: 'Where is the pickup/drop-off location?',
    answer: 'Our pickup and drop-off point is near KTC Bus Stand, Madgaon, Goa. The exact location is Red Roof Hotel, Madel. We can also arrange delivery to your location for an additional fee.',
  },
  {
    question: 'What are your operating hours?',
    answer: 'We operate 24/7. You can pick up or drop off your car at any time. Just let us know in advance via WhatsApp.',
  },
  {
    question: 'Can I extend my rental period?',
    answer: 'Yes, you can extend your rental by contacting us via WhatsApp. Extensions are subject to vehicle availability and will be charged at the daily rate.',
  },
  {
    question: 'What happens if the car breaks down?',
    answer: 'In case of any mechanical issues, contact us immediately. We provide 24/7 roadside assistance and will either fix the issue or provide a replacement vehicle.',
  },
  {
    question: 'Can I take the car outside Goa?',
    answer: 'Our cars are primarily meant for use within Goa. If you need to travel outside the state, please discuss this with us beforehand.',
  },
  {
    question: 'How do I book a car?',
    answer: 'Booking is simple! Just send us a WhatsApp message with your preferred car, pickup date and time, and duration. We will confirm availability and complete the booking.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            FAQ
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Everything you need to know about renting a self-drive car from Swami Car Rentals.
          </motion.p>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="section-shell bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Can&apos;t find what you&apos;re looking for? Send us a message on WhatsApp and we&apos;ll get back to you right away.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I have a question about your car rental service.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-8 py-4"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat with Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
