'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import BrandScroll from '@/components/BrandScroll';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        {/* Floating Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 opacity-50 rounded-full bottom-0 left-[10%] animate-[bubble_8s_ease-in-out_infinite] blur-sm"></div>
          <div className="absolute w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 opacity-50 rounded-full bottom-0 left-[25%] animate-[bubble_10s_ease-in-out_infinite_2s] blur-sm"></div>
          <div className="absolute w-20 h-20 bg-gradient-to-br from-pink-100 to-rose-100 opacity-50 rounded-full bottom-0 left-[45%] animate-[bubble_12s_ease-in-out_infinite_1s] blur-sm"></div>
          <div className="absolute w-14 h-14 bg-gradient-to-br from-indigo-100 to-blue-100 opacity-50 rounded-full bottom-0 left-[65%] animate-[bubble_9s_ease-in-out_infinite_3s] blur-sm"></div>
          <div className="absolute w-10 h-10 bg-gradient-to-br from-cyan-100 to-teal-100 opacity-50 rounded-full bottom-0 left-[80%] animate-[bubble_11s_ease-in-out_infinite_1.5s] blur-sm"></div>
          <div className="absolute w-18 h-18 bg-gradient-to-br from-violet-100 to-purple-100 opacity-50 rounded-full bottom-0 left-[35%] animate-[bubble_13s_ease-in-out_infinite_2.5s] blur-sm"></div>
          <div className="absolute w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 opacity-50 rounded-full bottom-0 left-[55%] animate-[bubble_14s_ease-in-out_infinite_4s] blur-sm"></div>
          <div className="absolute w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 opacity-50 rounded-full bottom-0 left-[15%] animate-[bubble_10.5s_ease-in-out_infinite_3.5s] blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                {t.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
                {t.heroSubtitle}
              </p>
              <Link
                href="/products"
                className="inline-block bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors"
              >
                {t.shopNow}
              </Link>
            </div>
            
            {/* Right Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] animate-[float_3s_ease-in-out_infinite] order-first md:order-last">
              <Image
                src="/assets/images/hero.png"
                alt="Hero Image"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.featuredProducts}
            </h2>
            <p className="text-lg text-gray-600">
              {t.featuredSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block border-2 border-black text-black px-8 py-3 rounded-md font-medium hover:bg-black hover:text-white transition-colors duration-100"
            >
              {t.viewAllProducts}
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Scroll Section */}
      <BrandScroll />

      {/* Features Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.premiumQuality}</h3>
              <p className="text-gray-600">{t.premiumQualityDesc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.securePayment}</h3>
              <p className="text-gray-600">{t.securePaymentDesc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.fastShipping}</h3>
              <p className="text-gray-600">{t.fastShippingDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
