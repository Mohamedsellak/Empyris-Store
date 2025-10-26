'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">EMPYRIS</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t.footerDescription}
            </p>
          </div>          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t.shop}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t.cart}
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              {t.customerService}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t.contactUs}
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t.shippingPolicy}
                </Link>
              </li>
              <li>
                <Link href="/return-refund-policy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t.returnRefundPolicy}
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t.faqs}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              {t.legal}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t.termsOfService}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/legal-notice" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t.legalNotice}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              {t.followUs}
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} EMPYRIS. {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
