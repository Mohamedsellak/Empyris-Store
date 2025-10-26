'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { language } = useLanguage();
  const t = translations[language];

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.yourCartIsEmpty}</h1>
          <p className="text-gray-600 mb-8">
            {t.cartEmptyDesc}
          </p>
          <Link
            href="/products"
            className="inline-block bg-black text-white px-8 py-4 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            {t.continueShopping}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t.shoppingCart}</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <Link
                    href={`/products/${item.id}`}
                    className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <Link href={`/products/${item.id}`}>
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-gray-700">
                          {item.name}
                        </h3>
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors ml-4"
                        aria-label={t.remove}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <p className="text-xl font-bold text-gray-900 mb-4">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                          aria-label={t.decreaseQty}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 font-semibold text-gray-900 min-w-[50px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                          aria-label={t.increaseQty}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <p className="text-lg font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/products"
            className="inline-block mt-6 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            ← {t.continueShopping}
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.orderSummary}</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>{t.subtotal}</span>
                <span className="font-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>{t.shipping}</span>
                <span className="font-semibold">
                  {cartTotal > 100 ? t.free : '$10.00'}
                </span>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>{t.total}</span>
                  <span>
                    ${(cartTotal + (cartTotal > 100 ? 0 : 10)).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {cartTotal < 100 && (
              <p className="text-sm text-gray-600 mb-6 bg-white p-3 rounded border border-gray-200">
                {t.addForFreeShipping.replace('{{amount}}', (100 - cartTotal).toFixed(2))}
              </p>
            )}

            <button className="w-full bg-black text-white px-6 py-4 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 mb-3">
              {t.proceedToCheckout}
            </button>

            <p className="text-xs text-gray-500 text-center">
              {t.taxesCalculated}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
