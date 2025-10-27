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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {language === 'en' ? '🔥 Limited Stock - Order Today!' : '🔥 Stock Limité - Commandez Aujourd\'hui !'}
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                {language === 'en' ? 'Premium Home Decor Delivered to Your Door' : 'Décoration Premium Livrée à Votre Porte'}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
                {language === 'en' 
                  ? 'Transform your space with unique, high-quality pieces. Free shipping on orders over $50.' 
                  : 'Transformez votre espace avec des pièces uniques et de haute qualité. Livraison gratuite pour les commandes de plus de 50 $.'}
              </p>
              
              {/* Social Proof with Real Client Images */}
              <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                <div className="flex -space-x-2">
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" 
                    alt="Client 1" 
                    width={32} 
                    height={32} 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" 
                    alt="Client 2" 
                    width={32} 
                    height={32} 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <Image 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces" 
                    alt="Client 3" 
                    width={32} 
                    height={32} 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <Image 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces" 
                    alt="Client 4" 
                    width={32} 
                    height={32} 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-bold">10,000+</span> {language === 'en' ? 'Happy Customers' : 'Clients Satisfaits'}
                </div>
              </div>
              
              <Link
                href="/products"
                className="inline-block bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
              >
                {t.shopNow}
              </Link>
              
              {/* Trust Badges */}
              <div className="flex items-center justify-center md:justify-start gap-4 mt-6 flex-wrap">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">{language === 'en' ? 'Secure Checkout' : 'Paiement Sécurisé'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">{language === 'en' ? '30-Day Returns' : 'Retours 30 Jours'}</span>
                </div>
              </div>
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

      {/* Customer Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {language === 'en' ? 'What Our Customers Say' : 'Ce Que Disent Nos Clients'}
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600">{language === 'en' ? 'Rated 4.9/5 by over 10,000 customers' : 'Noté 4,9/5 par plus de 10 000 clients'}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {language === 'en' 
                  ? '"Amazing quality! The product exceeded my expectations. Fast shipping and beautiful packaging. Will definitely order again!"'
                  : '"Qualité incroyable ! Le produit a dépassé mes attentes. Livraison rapide et bel emballage. Je commanderai certainement à nouveau !"'}
              </p>
              <div className="flex items-center gap-3">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" 
                  alt="Sarah M." 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Sarah M.</p>
                  <p className="text-sm text-gray-500">{language === 'en' ? 'Verified Buyer' : 'Acheteur Vérifié'}</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {language === 'en' 
                  ? '"Best purchase I\'ve made this year! The customer service was excellent and the product is even better in person. Highly recommend!"'
                  : '"Meilleur achat que j\'ai fait cette année ! Le service client était excellent et le produit est encore mieux en personne. Je recommande vivement !"'}
              </p>
              <div className="flex items-center gap-3">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" 
                  alt="Michael R." 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Michael R.</p>
                  <p className="text-sm text-gray-500">{language === 'en' ? 'Verified Buyer' : 'Acheteur Vérifié'}</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {language === 'en' 
                  ? '"Absolutely love it! The quality is outstanding and it looks perfect in my home. Worth every penny. Thank you!"'
                  : '"J\'adore absolument ! La qualité est exceptionnelle et c\'est parfait dans ma maison. Cela vaut chaque centime. Merci !"'}
              </p>
              <div className="flex items-center gap-3">
                <Image 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces" 
                  alt="Emma L." 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Emma L.</p>
                  <p className="text-sm text-gray-500">{language === 'en' ? 'Verified Buyer' : 'Acheteur Vérifié'}</p>
                </div>
              </div>
            </div>
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

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'Get 10% Off Your First Order!' : 'Obtenez 10 % de Réduction sur Votre Première Commande !'}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {language === 'en' 
              ? 'Subscribe to our newsletter for exclusive deals, new arrivals, and decor inspiration.' 
              : 'Abonnez-vous à notre newsletter pour des offres exclusives, de nouvelles arrivées et de l\'inspiration déco.'}
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={language === 'en' ? 'Enter your email' : 'Entrez votre email'}
              className="flex-1 px-6 py-4 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              {language === 'en' ? 'Subscribe' : 'S\'abonner'}
            </button>
          </form>
          <p className="text-sm text-gray-400 mt-4">
            {language === 'en' 
              ? '✓ No spam, unsubscribe anytime' 
              : '✓ Pas de spam, désabonnement à tout moment'}
          </p>
        </div>
      </section>
    </div>
  );
}
