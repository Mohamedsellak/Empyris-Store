'use client';

import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';
import { ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  quantity?: number;
  className?: string;
}

export default function AddToCartButton({ product, quantity = 1, className = '' }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const { language } = useLanguage();
  const t = translations[language];

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2 ${className}`}
    >
      <ShoppingCart className="h-5 w-5" />
      <span>{t.addToCart}</span>
    </button>
  );
}
