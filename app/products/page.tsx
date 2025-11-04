'use client';

import { getAllTumblerVariants } from '@/lib/tumblersHelper';
import ProductCard from '@/components/ProductCard';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export default function ProductsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const allProducts = getAllTumblerVariants();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.allProducts}</h1>
        <p className="text-lg text-gray-600">
          {t.allProductsDesc}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          {language === 'en' 
            ? `Showing ${allProducts.length} color variants` 
            : `Affichage de ${allProducts.length} variantes de couleur`}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
