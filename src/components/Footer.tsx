import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, PHONE_NUMBER, WHATSAPP_NUMBER, ADDRESS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/swamy-logo.webp"
                alt="Swami Car Rentals logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-display text-xl font-bold text-white">Swami Car Rentals</h3>
                <p className="text-xs text-slate-400">Self Drive Cars • Madgaon</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Self-drive car rentals with unlimited KM, spotless fleet, and instant WhatsApp booking near KTC Bus Stand, Madgaon.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded-full text-xs font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                4.9★ Google Rating
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20have%20a%20question`}
                    className="text-white font-medium hover:text-green-400 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                  <p className="text-slate-400 text-sm">{PHONE_NUMBER}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="text-white font-medium hover:text-gray-300 transition-colors"
                  >
                    Call Now
                  </a>
                  <p className="text-slate-400 text-sm">{PHONE_NUMBER}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#4285F4]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#4285F4]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <a
                    href="https://share.google/GzPaEEAaGpJd3KYGk"
                    target="_blank"
                    rel="noopener"
                    className="text-white font-medium hover:text-[#4285F4] transition-colors"
                  >
                    Visit Us
                  </a>
                  <p className="text-slate-400 text-sm">{ADDRESS}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-slate-400 text-sm">© 2026 Swami Car Rentals. All rights reserved.</p>
            <p className="text-slate-500 text-xs mt-1">Madgaon, Goa • Self-Drive Car Rentals</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <div className="flex items-center gap-4">
              <Link href="/cars#terms" className="text-slate-400 hover:text-white transition-colors text-xs">
                Terms
              </Link>
              <Link href="/cars#terms" className="text-slate-400 hover:text-white transition-colors text-xs">
                Privacy
              </Link>
            </div>
            <a
              href="tel:6281653728"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Designed by NBK Business Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
