'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TumblerProduct, getLocalizedTumblerProduct } from '@/lib/tumblersHelper';

interface ProductCardProps {
  product: TumblerProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const localizedProduct = getLocalizedTumblerProduct(product);
  const [currentImage, setCurrentImage] = useState(product.images[0] || product.image);

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <Link href="/stanley1913">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={currentImage}
            alt={`${localizedProduct.name} - ${product.colorName}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      
      <div className="p-2">
        <Link href="/stanley1913">
          <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors line-clamp-2">
            {localizedProduct.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-base font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-gray-600">
            {product.colorName}
          </span>
        </div>

        {/* Product Image Thumbnails */}
        {product.images && product.images.length > 0 && (
          <div className="flex gap-2 justify-center">
            {product.images.slice(0, 3).map((img, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentImage(img);
                }}
                className={`relative w-10 h-10 rounded-full border-2 overflow-hidden transition-all ${
                  currentImage === img
                    ? 'border-black ring-2 ring-offset-1 ring-black'
                    : 'border-gray-300 hover:border-gray-500'
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.colorName} view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
