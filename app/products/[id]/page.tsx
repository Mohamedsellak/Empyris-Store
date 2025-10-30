'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById, getLocalizedProduct } from '@/lib/products';
import { useParams } from 'next/navigation';
import AddToCartButton from '@/components/AddToCartButton';
import { ChevronLeft, Minus, Plus, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = getProductById(productId);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { language } = useLanguage();
  const t = translations[language];

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.productNotFound}</h1>
          <Link href="/products" className="text-black underline">
            {t.backToProducts}
          </Link>
        </div>
      </div>
    );
  }

  const localizedProduct = getLocalizedProduct(product, language);
  // Use gallery images if available, otherwise fallback to main image
  const galleryImages = product.images || [product.image];

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-12">
      <Link
        href="/products"
        className="hidden sm:inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 sm:mb-8 transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
        <span>{t.backToProducts}</span>
      </Link>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-12">
        {/* Product Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 shadow-lg mb-2 sm:mb-4">
            <Image
              src={galleryImages[selectedImage]}
              alt={localizedProduct.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Thumbnail Gallery */}
          {galleryImages.length > 1 && (
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden bg-gray-100 border-2 transition-all ${
                    selectedImage === index
                      ? 'border-black shadow-md'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${localizedProduct.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-4 md:mb-6">
            <span className="inline-block text-xs sm:text-sm text-white bg-gray-900 px-3 py-1 rounded-full uppercase tracking-wider mb-3 font-medium">
              {localizedProduct.category}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              {localizedProduct.name}
            </h1>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                {language === 'en' ? '$' : '€'}{product.price.toFixed(2)}
              </p>
              <span className="text-sm sm:text-base text-gray-500 line-through">
                {language === 'en' ? '$' : '€'}{(product.price * 1.43).toFixed(2)}
              </span>
              <span className="text-sm sm:text-base text-green-600 font-semibold">
                {language === 'en' ? '30% OFF' : '-30%'}
              </span>
            </div>
          </div>

          {/* Out of Stock Alert or Quantity Selector */}
          {!product.inStock ? (
            <div className="mb-3 sm:mb-6 bg-red-50 border border-red-200 text-red-800 px-3 py-2 sm:px-6 sm:py-4 rounded-lg text-center font-medium text-sm sm:text-base">
              {language === 'en' ? 'Out of Stock' : 'Rupture de Stock'}
            </div>
          ) : (
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">
                {t.quantity}
              </label>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg shadow-sm">
                  <button
                    onClick={handleDecrement}
                    className="p-2 sm:p-3 hover:bg-gray-100 transition-colors rounded-l-lg"
                    aria-label={t.decreaseQty}
                  >
                    <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                  </button>
                  <span className="px-4 py-2 sm:px-6 sm:py-3 font-bold text-gray-900 min-w-[50px] sm:min-w-[70px] text-center text-base sm:text-lg bg-gray-50">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="p-2 sm:p-3 hover:bg-gray-100 transition-colors rounded-r-lg"
                    aria-label={t.increaseQty}
                  >
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                  </button>
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  <span className="font-semibold text-green-600">✓ {language === 'en' ? 'In Stock' : 'En Stock'}</span>
                  <br />
                  <span>{language === 'en' ? 'Ready to ship' : 'Prêt à expédier'}</span>
                </div>
              </div>
            </div>
          )}

          {/* Add to Cart Button - Only show if in stock */}
          {product.inStock && (
            <div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-3 sm:mb-6">
                <AddToCartButton
                  product={{
                    id: product.id,
                    name: localizedProduct.name,
                    price: product.price,
                    image: product.image,
                  }}
                  quantity={quantity}
                  className="flex-1 text-sm sm:text-base py-2.5 sm:py-4"
                />
                
                <a
                  // href={`https://www.nhlv1trk.com/CPLS3PH/764X28J/?sub3=${encodeURIComponent(localizedProduct.name)}&sub4=${encodeURIComponent(`${window.location.origin}${product.image}`)}&sub14=D41JC0BC77U40Q0I64JG`}
                  href={`https://www.nhlv1trk.com/CPLS3PH/8DXR6WQ/?sub3=${encodeURIComponent(localizedProduct.name)}&sub4=${encodeURIComponent(`${window.location.origin}${product.image}`)}&sub14=D41JC0BC77U40Q0I64JG`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-orange-500 text-white px-4 py-2.5 sm:px-8 sm:py-4 text-center font-semibold hover:bg-orange-600 transition-all duration-200 rounded-md text-sm sm:text-base"
                >
                  {t.buyNow}
                </a>
              </div>
              
              {/* Payment Methods */}
              <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap">
                <div className="bg-white rounded border border-gray-300 px-1.5 py-0.5 sm:px-3 sm:py-2 flex items-center justify-center shadow-sm">
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" 
                    alt="Visa" 
                    width={50}
                    height={32}
                    className="h-5 sm:h-6 md:h-8 w-auto"
                  />
                </div>
                <div className="bg-white rounded border border-gray-300 px-1.5 py-0.5 sm:px-3 sm:py-2 flex items-center justify-center shadow-sm">
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
                    alt="Mastercard" 
                    width={50}
                    height={32}
                    className="h-5 sm:h-6 md:h-8 w-auto"
                  />
                </div>
                <div className="bg-white rounded border border-gray-300 px-1.5 py-0.5 sm:px-3 sm:py-2 flex items-center justify-center shadow-sm">
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" 
                    alt="American Express" 
                    width={50}
                    height={32}
                    className="h-5 sm:h-6 md:h-8 w-auto"
                  />
                </div>
                <div className="bg-white rounded border border-gray-300 px-1.5 py-0.5 sm:px-3 sm:py-2 flex items-center justify-center shadow-sm">
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg" 
                    alt="Discover" 
                    width={50}
                    height={32}
                    className="h-5 sm:h-5 md:h-6 w-auto"
                  />
                </div>
                <div className="bg-white rounded border border-gray-300 px-1.5 py-0.5 sm:px-3 sm:py-2 flex items-center justify-center shadow-sm">
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
                    alt="PayPal" 
                    width={50}
                    height={32}
                    className="h-5 sm:h-5 md:h-6 w-auto"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mt-4 sm:mt-8">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">{t.description}</h2>
            <div 
              className="text-sm sm:text-base text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: localizedProduct.description }}
            />
          </div>

          {/* Additional Info */}
          <div className="mt-4 sm:mt-12 pt-4 sm:pt-8 border-t border-gray-200">
            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-start">
                <svg className="h-4 w-4 sm:h-6 sm:w-6 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{t.freeShipping}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{t.freeShippingDesc}</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-4 w-4 sm:h-6 sm:w-6 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{t.qualityGuarantee}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{t.qualityGuaranteeDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="mt-6 sm:mt-16 md:mt-20">
        <div className="mb-4 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1.5 sm:mb-2">
            {language === 'en' ? 'Customer Reviews' : 'Avis Clients'}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {language === 'en' ? 'See what our customers are saying' : 'Découvrez ce que disent nos clients'}
          </p>
        </div>

        {/* Reviews Summary */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-12">
          {/* Overall Rating Card */}
          <div className="md:col-span-1 bg-white border border-gray-200 rounded-2xl p-4 sm:p-8">
            <div className="text-center">
              <div className="text-4xl sm:text-6xl font-bold mb-2 sm:mb-4 text-gray-900">4.8</div>
              <div className="flex items-center justify-center gap-1 mb-2 sm:mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-6 sm:w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-xs sm:text-sm">
                {language === 'en' ? 'Based on 1,247 reviews' : 'Basé sur 1 247 avis'}
              </p>
              <div className="mt-3 sm:mt-6 pt-3 sm:pt-6 border-t border-gray-200">
                <p className="text-lg sm:text-xl font-semibold text-gray-900">96%</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {language === 'en' ? 'Recommended' : 'Recommandé'}
                </p>
              </div>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-gray-200 p-4 sm:p-8">
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-6 text-base sm:text-lg">
              {language === 'en' ? 'Rating Breakdown' : 'Répartition des Notes'}
            </h3>
            <div className="space-y-2 sm:space-y-4">
              {[
                { stars: 5, percentage: 82, count: 1022 },
                { stars: 4, percentage: 12, count: 150 },
                { stars: 3, percentage: 4, count: 50 },
                { stars: 2, percentage: 1, count: 15 },
                { stars: 1, percentage: 1, count: 10 }
              ].map(({ stars, percentage, count }) => (
                <div key={stars} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-24">
                    <span className="text-sm font-medium text-gray-700">{stars}</span>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-16 text-right">
                    {percentage}%
                  </span>
                  <span className="text-sm text-gray-500 w-20 text-right">
                    ({count})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="space-y-3 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-6">
            {language === 'en' ? 'Recent Reviews' : 'Avis Récents'}
          </h3>

          {/* Review 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-2 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                SM
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Sarah Martinez</h4>
                    <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 bg-green-100 text-green-700 rounded-full font-medium">
                        ✓ {language === 'en' ? 'Verified' : 'Vérifié'}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {language === 'en' ? '3 days ago' : 'Il y a 3 jours'}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mt-2 sm:mt-3 text-sm sm:text-base">
                  {language === 'en' 
                    ? 'Absolutely fantastic! The quality exceeded my expectations. Shipping was incredibly fast and the packaging was pristine. This has become my favorite purchase this year. Highly recommend to anyone looking for quality!' 
                    : 'Absolument fantastique ! La qualité a dépassé mes attentes. La livraison était incroyablement rapide et l\'emballage était impeccable. C\'est devenu mon achat préféré cette année. Je recommande vivement à tous ceux qui recherchent la qualité !'}
                </p>
                <div className="flex items-center gap-4 mt-2 sm:mt-4">
                  <button className="text-xs sm:text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1">
                    👍 {language === 'en' ? 'Helpful' : 'Utile'} (24)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-2 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                MR
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Michael Roberts</h4>
                    <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 bg-green-100 text-green-700 rounded-full font-medium">
                        ✓ {language === 'en' ? 'Verified' : 'Vérifié'}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {language === 'en' ? '1 week ago' : 'Il y a 1 semaine'}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mt-2 sm:mt-3 text-sm sm:text-base">
                  {language === 'en' 
                    ? 'Great value for money! The design is beautiful and works perfectly. Customer service was amazing - they answered all my questions promptly. Will definitely be ordering again.' 
                    : 'Excellent rapport qualité-prix ! Le design est magnifique et fonctionne parfaitement. Le service client était incroyable - ils ont répondu rapidement à toutes mes questions. Je commanderai certainement à nouveau.'}
                </p>
                <div className="flex items-center gap-4 mt-2 sm:mt-4">
                  <button className="text-xs sm:text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1">
                    👍 {language === 'en' ? 'Helpful' : 'Utile'} (18)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-2 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                EL
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Emma Lewis</h4>
                    <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
                      </div>
                      <span className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 bg-green-100 text-green-700 rounded-full font-medium">
                        ✓ {language === 'en' ? 'Verified' : 'Vérifié'}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {language === 'en' ? '2 weeks ago' : 'Il y a 2 semaines'}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mt-2 sm:mt-3 text-sm sm:text-base">
                  {language === 'en' 
                    ? 'Very good product! Only giving 4 stars because the packaging could be slightly better protected. However, the item itself arrived in perfect condition and works beautifully. Would purchase again!' 
                    : 'Très bon produit ! Je donne seulement 4 étoiles car l\'emballage pourrait être légèrement mieux protégé. Cependant, l\'article lui-même est arrivé en parfait état et fonctionne à merveille. Je rachèterais !'}
                </p>
                <div className="flex items-center gap-4 mt-2 sm:mt-4">
                  <button className="text-xs sm:text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1">
                    👍 {language === 'en' ? 'Helpful' : 'Utile'} (12)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
