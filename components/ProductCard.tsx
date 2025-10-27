'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product, getLocalizedProduct } from '@/lib/products';
import { useLanguage } from '@/context/LanguageContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language } = useLanguage();
  const localizedProduct = getLocalizedProduct(product, language);

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={localizedProduct.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {!product.inStock && (
            <div className="absolute bottom-2 left-2 bg-gray-800 text-white px-2 py-1 rounded text-xs font-medium border border-white">
              {language === 'en' ? 'Out of Stock' : 'Rupture de Stock'}
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-2">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors line-clamp-2">
            {localizedProduct.name}
          </h3>
        </Link>
        
        <span className="text-base font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
