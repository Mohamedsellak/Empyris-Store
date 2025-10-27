'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { translations } from '@/lib/i18n';

export default function Navbar() {
  const { cartCount } = useCart();
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      // Check if click is outside all dropdown elements
      const isOutsideDesktopDropdown = dropdownRef.current && !dropdownRef.current.contains(target);
      const isOutsideMobileDropdown = !(target as HTMLElement).closest('.mobile-language-dropdown');
      
      if (isOutsideDesktopDropdown && isOutsideMobileDropdown) {
        setLanguageDropdownOpen(false);
      }
    }

    if (languageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [languageDropdownOpen]);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              {t.home}
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              {t.shop}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              {t.about}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              {t.contact}
            </Link>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-start md:justify-center md:flex-initial">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image 
                src="/assets/images/logo.png" 
                alt="Store Logo" 
                width={120} 
                height={40}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right: Cart & Language Selector */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-end">
            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 rounded-md hover:bg-gray-100"
              >
                <span className="font-medium">{language === 'en' ? 'English' : 'Français'}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setLanguageDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === 'en'
                        ? 'bg-gray-100 text-gray-900 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('fr');
                      setLanguageDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === 'fr'
                        ? 'bg-gray-100 text-gray-900 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Français
                  </button>
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <Link href="/cart" className="relative text-gray-700 hover:text-gray-900 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Dropdown */}
            <div className="relative mobile-language-dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguageDropdownOpen(!languageDropdownOpen);
                }}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 px-2 py-1 rounded hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mobile Dropdown Menu */}
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-[60]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLanguage('en');
                      setLanguageDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                      language === 'en'
                        ? 'bg-gray-100 text-gray-900 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLanguage('fr');
                      setLanguageDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                      language === 'fr'
                        ? 'bg-gray-100 text-gray-900 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    FR
                  </button>
                </div>
              )}
            </div>

            <Link href="/cart" className="relative text-gray-700">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.home}
            </Link>
            <Link
              href="/products"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.shop}
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.about}
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
