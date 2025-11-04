'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Check, 
  Truck, 
  ShieldCheck, 
  Leaf, 
  Droplets,
  ThumbsUp,
  X
} from 'lucide-react';

// ============================================
// PRODUCT DATA STRUCTURE
// ============================================
interface Variant {
  colorName: string;
  sku: string;
  images: string[];
  inStock?: boolean; // Optional - defaults to true
}

interface SizeOption {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  dimensions: string;
  variants: Variant[];
}

interface ProductData {
  sizes: SizeOption[];
}

// Your actual product data
export const productData: ProductData = {
  sizes: [
    {
      id: "14oz",
      name: "The Quencher ProTour Flip Straw Tumbler | 14 OZ",
      description:
        "Compact and portable, perfect for kids or quick trips. Keeps drinks cold for hours in a cupholder-friendly design.",
      price: 30.0,
      weight: "0.72 lbs",
      dimensions: "4.8 x 3.2 x 6.9 in",
      variants: [
        {
          colorName: "Dew Drop",
          sku: "10-12484-0321",
          images: [
            "/assets/images/products/stanley1913/14OZ/1/1.png",
            "/assets/images/products/stanley1913/14OZ/1/2.png",
            "/assets/images/products/stanley1913/14OZ/1/3.png"
          ]
        },
        {
          colorName: "Meadow",
          sku: "10-12484-0322",
          images: [
            "/assets/images/products/stanley1913/14OZ/2/1.png",
            "/assets/images/products/stanley1913/14OZ/2/2.png",
            "/assets/images/products/stanley1913/14OZ/2/3.png",
          ]
        },
        {
          colorName: "Hot Coral",
          sku: "10-12484-0322",
          images: [
            "/assets/images/products/stanley1913/14OZ/3/1.png",
            "/assets/images/products/stanley1913/14OZ/3/2.png",
            "/assets/images/products/stanley1913/14OZ/3/3.png",
          ]
        },
        {
          colorName: " Seafoam",
          sku: "10-12484-0322",
          images: [
            "/assets/images/products/stanley1913/14OZ/4/1.png",
            "/assets/images/products/stanley1913/14OZ/4/2.png",
            "/assets/images/products/stanley1913/14OZ/4/3.png",
          ]
        },
        {
          colorName: " Cream",
          sku: "10-12484-0322",
          images: [
            "/assets/images/products/stanley1913/14OZ/5/1.png",
            "/assets/images/products/stanley1913/14OZ/5/2.png",
            "/assets/images/products/stanley1913/14OZ/5/3.png",
          ]
        },
        {
          colorName: "Rose Quartz",
          sku: "10-12484-0322",
          images: [
            "/assets/images/products/stanley1913/14OZ/6/1.png",
            "/assets/images/products/stanley1913/14OZ/6/2.png",
            "/assets/images/products/stanley1913/14OZ/6/3.png",
          ]
        },
        {
          colorName: "Black",
          sku: "10-12484-0322",
          images: [
            "/assets/images/products/stanley1913/14OZ/7/1.png",
            "/assets/images/products/stanley1913/14OZ/7/2.png",
            "/assets/images/products/stanley1913/14OZ/7/3.png",
          ]
        },
        {
          colorName: "Ash",
          sku: "10-12484-0322",
          images: [
            "/assets/images/products/stanley1913/14OZ/8/1.png",
            "/assets/images/products/stanley1913/14OZ/8/2.png",
            "/assets/images/products/stanley1913/14OZ/8/3.png",
          ]
        },
        {
          colorName: "Frost",
          sku: "10-12484-0322",
          images: [
            "/assets/images/products/stanley1913/14OZ/9/1.png",
            "/assets/images/products/stanley1913/14OZ/9/2.png",
            "/assets/images/products/stanley1913/14OZ/9/3.png",
          ]
        },
        {
          colorName: "Frost",
          sku: "10-12484-0322",
          images: [
            "/assets/images/products/stanley1913/14OZ/10/1.png",
            "/assets/images/products/stanley1913/14OZ/10/2.png",
            "/assets/images/products/stanley1913/14OZ/10/3.png",
          ]
        },
        {
          colorName: "Frost",
          sku: "10-12484-0322",
          images: [
            "/assets/images/products/stanley1913/14OZ/11/1.png",
            "/assets/images/products/stanley1913/14OZ/11/2.png",
            "/assets/images/products/stanley1913/14OZ/11/3.png",
          ]
        },
        {
          colorName: "Frost",
          sku: "10-12484-0322",
          images: [
            "/assets/images/products/stanley1913/14OZ/12/1.png",
            "/assets/images/products/stanley1913/14OZ/12/2.png",
            "/assets/images/products/stanley1913/14OZ/12/3.png",
          ]
        },
        {
          colorName: "Frost",
          sku: "10-12484-0322",
          images: [
            "/assets/images/products/stanley1913/14OZ/13/1.png",
            "/assets/images/products/stanley1913/14OZ/13/2.png",
            "/assets/images/products/stanley1913/14OZ/13/3.png",
          ]
        },
        {
          colorName: "Frost",
          sku: "10-12484-0322",
          images: [
            "/assets/images/products/stanley1913/14OZ/14/1.png",
            "/assets/images/products/stanley1913/14OZ/14/2.png",
            "/assets/images/products/stanley1913/14OZ/14/3.png",
          ]
        },
      ]
    },
    {
      id: "20oz",
      name: "The Quencher ProTour Flip Straw Tumbler | 20 OZ",
      description:
        "Your everyday tumbler — leakproof, durable, and designed for all-day hydration on the go.",
      price: 35.0,
      weight: "0.84 lbs",
      dimensions: "5.27 x 3.54 x 7.55 in",
      variants: [
        {
          colorName: "Charcoal",
          sku: "10-12484-0401",
          images: [
            "/assets/images/products/stanley1913/20OZ/1/1.png",
            "/assets/images/products/stanley1913/20OZ/1/2.png",
            "/assets/images/products/stanley1913/20OZ/1/3.png"
          ]
        },
        {
          colorName: "Cream",
          sku: "10-12484-0402",
          images: [
            "/assets/images/products/stanley1913/20OZ/2/1.png",
            "/assets/images/products/stanley1913/20OZ/2/2.png",
            "/assets/images/products/stanley1913/20OZ/2/3.png"
          ]
        },
        {
          colorName: "Tigerlily",
          sku: "10-12484-0403",
          images: [
            "/assets/images/products/stanley1913/20OZ/3/1.png",
            "/assets/images/products/stanley1913/20OZ/3/2.png",
            "/assets/images/products/stanley1913/20OZ/3/3.png"
          ]
        },
        {
          colorName: "Rose Quartz",
          sku: "10-12484-0404",
          images: [
            "/assets/images/products/stanley1913/20OZ/4/1.png",
            "/assets/images/products/stanley1913/20OZ/4/2.png",
            "/assets/images/products/stanley1913/20OZ/4/3.png"
          ]
        },
        {
          colorName: "Pool",
          sku: "10-12484-0405",
          images: [
            "/assets/images/products/stanley1913/20OZ/5/1.png",
            "/assets/images/products/stanley1913/20OZ/5/2.png",
            "/assets/images/products/stanley1913/20OZ/5/3.png"
          ]
        },
        {
          colorName: "Shale",
          sku: "10-12484-0406",
          images: [
            "/assets/images/products/stanley1913/20OZ/6/1.png",
            "/assets/images/products/stanley1913/20OZ/6/2.png",
            "/assets/images/products/stanley1913/20OZ/6/3.png"
          ]
        },
        {
          colorName: "Citron",
          sku: "10-12484-0407",
          images: [
            "/assets/images/products/stanley1913/20OZ/7/1.png",
            "/assets/images/products/stanley1913/20OZ/7/2.png",
            "/assets/images/products/stanley1913/20OZ/7/3.png"
          ]
        },
        {
          colorName: "Lapis",
          sku: "10-12484-0408",
          images: [
            "/assets/images/products/stanley1913/20OZ/8/1.png",
            "/assets/images/products/stanley1913/20OZ/8/2.png",
            "/assets/images/products/stanley1913/20OZ/8/3.png"
          ]
        },
        {
          colorName: "Fog",
          sku: "10-12484-0409",
          images: [
            "/assets/images/products/stanley1913/20OZ/9/1.png",
            "/assets/images/products/stanley1913/20OZ/9/2.png",
            "/assets/images/products/stanley1913/20OZ/9/3.png"
          ]
        },
        {
          colorName: "Iris",
          sku: "10-12484-0410",
          images: [
            "/assets/images/products/stanley1913/20OZ/10/1.png",
            "/assets/images/products/stanley1913/20OZ/10/2.png",
            "/assets/images/products/stanley1913/20OZ/10/3.png"
          ]
        },
        {
          colorName: "Alpine",
          sku: "10-12484-0411",
          images: [
            "/assets/images/products/stanley1913/20OZ/11/1.png",
            "/assets/images/products/stanley1913/20OZ/11/2.png",
            "/assets/images/products/stanley1913/20OZ/11/3.png"
          ]
        },
        {
          colorName: "Dusk",
          sku: "10-12484-0412",
          images: [
            "/assets/images/products/stanley1913/20OZ/12/1.png",
            "/assets/images/products/stanley1913/20OZ/12/2.png",
            "/assets/images/products/stanley1913/20OZ/12/3.png"
          ]
        },
        {
          colorName: "Clover",
          sku: "10-12484-0413",
          images: [
            "/assets/images/products/stanley1913/20OZ/13/1.png",
            "/assets/images/products/stanley1913/20OZ/13/2.png",
            "/assets/images/products/stanley1913/20OZ/13/3.png"
          ]
        },
        {
          colorName: "Ash",
          sku: "10-12484-0414",
          images: [
            "/assets/images/products/stanley1913/20OZ/14/1.png",
            "/assets/images/products/stanley1913/20OZ/14/2.png",
            "/assets/images/products/stanley1913/20OZ/14/3.png"
          ]
        },
        {
          colorName: "Black",
          sku: "10-12484-0415",
          images: [
            "/assets/images/products/stanley1913/20OZ/15/1.png",
            "/assets/images/products/stanley1913/20OZ/15/2.png",
            "/assets/images/products/stanley1913/20OZ/15/3.png"
          ]
        }
      ]
    },
    {
      id: "30oz",
      name: "The Quencher ProTour Flip Straw Tumbler | 30 OZ",
      description:
        "Perfect balance between capacity and portability. Great for long drives or gym sessions.",
      price: 40.0,
      weight: "1.0 lbs",
      dimensions: "6.2 x 3.8 x 8.2 in",
      variants: [
        {
          colorName: "Port Shimmer",
          sku: "10-12484-0501",
          images: [
            "/assets/images/products/1/1.png",
            "/assets/images/products/1/2.png",
            "/assets/images/products/1/3.png",
            "/assets/images/products/1/4.png"
          ]
        },
        {
          colorName: "Cashmere",
          sku: "10-12484-0502",
          images: [
            "/assets/images/products/3/1.png",
            "/assets/images/products/3/2.png",
            "/assets/images/products/3/3.png",
            "/assets/images/products/3/4.png"
          ]
        }
      ]
    },
    {
      id: "40oz",
      name: "The Quencher ProTour Flip Straw Tumbler | 40 OZ",
      description:
        "For all-day hydration and adventurers who need more capacity. Still fits in most car cupholders.",
      price: 45.0,
      weight: "1.2 lbs",
      dimensions: "6.8 x 4.2 x 9.1 in",
      variants: [
        {
          colorName: "Rose Petal Motion",
          sku: "10-12484-0601",
          images: [
            "/assets/images/products/2/1.png",
            "/assets/images/products/2/2.png",
            "/assets/images/products/2/3.png",
            "/assets/images/products/2/4.png",
            "/assets/images/products/2/5.png"
          ]
        }
      ]
    },
    {
      id: "64oz",
      name: "The Quencher ProTour Flip Straw Tumbler | 64 OZ",
      description:
        "Maximum hydration for the longest adventures. Perfect for all-day trips, workouts, or sharing with friends.",
      price: 50.0,
      weight: "1.5 lbs",
      dimensions: "7.5 x 4.8 x 10.5 in",
      variants: [
        {
          colorName: "Charcoal",
          sku: "10-12484-0701",
          images: [
            "/assets/images/products/stanley1913/64OZ/1/1.png",
            "/assets/images/products/stanley1913/64OZ/1/2.png",
            "/assets/images/products/stanley1913/64OZ/1/3.png"
          ]
        },
        {
          colorName: "Cream",
          sku: "10-12484-0702",
          images: [
            "/assets/images/products/stanley1913/64OZ/2/1.png",
            "/assets/images/products/stanley1913/64OZ/2/2.png",
            "/assets/images/products/stanley1913/64OZ/2/3.png"
          ]
        },
        {
          colorName: "Rose Quartz",
          sku: "10-12484-0703",
          images: [
            "/assets/images/products/stanley1913/64OZ/3/1.png",
            "/assets/images/products/stanley1913/64OZ/3/2.png",
            "/assets/images/products/stanley1913/64OZ/3/3.png"
          ]
        },
        {
          colorName: "Pool",
          sku: "10-12484-0704",
          images: [
            "/assets/images/products/stanley1913/64OZ/4/1.png",
            "/assets/images/products/stanley1913/64OZ/4/2.png",
            "/assets/images/products/stanley1913/64OZ/4/3.png"
          ]
        },
        {
          colorName: "Black",
          sku: "10-12484-0705",
          images: [
            "/assets/images/products/stanley1913/64OZ/5/1.png",
            "/assets/images/products/stanley1913/64OZ/5/2.png",
            "/assets/images/products/stanley1913/64OZ/5/3.png"
          ]
        }
      ]
    }
  ]
};

// Reviews data
const REVIEWS_DATA = {
  averageRating: 4.3,
  totalReviews: 244,
  distribution: {
    5: 128,
    4: 68,
    3: 28,
    2: 12,
    1: 8
  },
  featured: [
    {
      id: 1,
      author: 'Sarah M.',
      rating: 5,
      date: '2025-10-15',
      title: 'Perfect for my daily routine!',
      content: 'I love the flip straw feature - so convenient for drinking while driving. Keeps my water ice cold all day long. The handle is super comfortable and it fits perfectly in my car cup holder.',
      verified: true,
      helpful: 42
    },
    {
      id: 2,
      author: 'Michael T.',
      rating: 4,
      date: '2025-10-08',
      title: 'Great quality but heavy when full',
      content: 'The insulation is incredible and the build quality is top-notch. My only complaint is that the 40oz version is quite heavy when filled completely. Otherwise, it\'s perfect for long hikes.',
      verified: true,
      helpful: 28
    },
    {
      id: 3,
      author: 'Jessica L.',
      rating: 5,
      date: '2025-09-28',
      title: 'Best tumbler I\'ve ever owned',
      content: 'The color is gorgeous in person! The flip straw is leak-proof and easy to clean. I\'ve already recommended it to all my friends. Worth every penny!',
      verified: true,
      helpful: 35
    }
  ]
};

// Related products
const RELATED_PRODUCTS = [
  {
    id: 2,
    name: 'The Classic Quencher 40oz',
    price: 45.00,
    image: '/assets/images/products/2/1.png',
    rating: 4.5
  },
  {
    id: 3,
    name: 'Stanley IceFlow Bottle',
    price: 35.00,
    image: '/assets/images/products/3/1.png',
    rating: 4.4
  },
  {
    id: 4,
    name: 'The Stay Hot Camp Mug',
    price: 30.00,
    image: '/assets/images/products/4/1.png',
    rating: 4.6
  },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function StanleyProTourPage() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  // State management - Start with 20oz (index 1)
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [imageTransition, setImageTransition] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Get current selections
  const selectedSizeData = productData.sizes[selectedSizeIndex];
  const selectedVariant = selectedSizeData.variants[selectedVariantIndex];
  const currentImages = selectedVariant.images;
  const isInStock = selectedVariant.inStock !== false; // Default to true if not specified

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Handle size change
  const handleSizeChange = (index: number) => {
    setImageTransition(true);
    setSelectedSizeIndex(index);
    setSelectedVariantIndex(0); // Reset to first color of new size
    setCurrentImageIndex(0); // Reset to first image
    
    setTimeout(() => setImageTransition(false), 300);
  };

  // Handle color/variant change
  const handleVariantChange = (index: number) => {
    setImageTransition(true);
    setSelectedVariantIndex(index);
    setCurrentImageIndex(0); // Reset to first image
    
    setTimeout(() => setImageTransition(false), 300);
  };

  // Image carousel handlers
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % currentImages.length
    );
  };

  // Touch swipe handlers for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNextImage();
    } else if (isRightSwipe) {
      handlePrevImage();
    }
  };

  // Filter reviews
  const filteredReviews = filterRating 
    ? REVIEWS_DATA.featured.filter(r => r.rating === filterRating)
    : REVIEWS_DATA.featured;

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Product Gallery & Info */}
      <section className="container mx-auto px-4 py-8 lg:py-12">
        <div className="lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 lg:items-start">
          
          {/* Mobile: Title, Rating, Price - Show First on Mobile */}
          <div className="lg:hidden mb-6">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-3">
              {selectedSizeData.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(REVIEWS_DATA.averageRating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-900">
                {REVIEWS_DATA.averageRating} ({REVIEWS_DATA.totalReviews})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-bold text-gray-900">
                ${selectedSizeData.price.toFixed(2)}
              </span>
              {!isInStock && (
                <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  {isEn ? 'Out of Stock' : 'Épuisé'}
                </span>
              )}
            </div>

            {/* Stock & SKU Info */}
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1.5">
                {isInStock ? (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{isEn ? 'In Stock' : 'En Stock'}</span>
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>{isEn ? 'Out of Stock' : 'Épuisé'}</span>
                  </>
                )}
              </div>
              <span className="text-gray-400">•</span>
              <span>SKU: {selectedVariant.sku}</span>
            </div>
          </div>

          {/* Mobile: Size Selector - Show Second on Mobile */}
          <div className="lg:hidden mb-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {isEn ? 'Size' : 'Taille'}
                </h3>
                <button className="text-sm text-gray-600 hover:text-gray-900 underline">
                  {isEn ? 'Size Guide' : 'Guide des Tailles'}
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {productData.sizes.map((sizeOption, idx) => (
                  <button
                    key={sizeOption.id}
                    onClick={() => handleSizeChange(idx)}
                    className={`relative px-4 py-3 text-center font-semibold transition-all duration-200 ${
                      selectedSizeIndex === idx
                        ? 'bg-black text-white ring-2 ring-black ring-offset-2'
                        : 'bg-white border-2 border-gray-300 text-gray-900 hover:border-gray-900'
                    }`}
                  >
                    <div className="text-sm lg:text-base">{sizeOption.id}</div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      ${sizeOption.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image Gallery - Third on Mobile, Left on Desktop */}
          <div className="space-y-6 lg:order-1">
            {/* Main Image - Professional Display with Swipe Support */}
            <div 
              className={`relative aspect-square bg-white rounded-lg overflow-hidden border border-gray-200 transition-opacity duration-300 ${imageTransition ? 'opacity-0' : 'opacity-100'}`}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <Image
                src={currentImages[currentImageIndex]}
                alt={`${selectedSizeData.name} - ${selectedVariant.colorName}`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Navigation Arrows - Desktop Only */}
              {currentImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-2.5 rounded-full shadow-md transition-all border border-gray-200 items-center justify-center"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-900" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-2.5 rounded-full shadow-md transition-all border border-gray-200 items-center justify-center"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-900" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                {currentImageIndex + 1} / {currentImages.length}
              </div>
            </div>

            {/* Thumbnail Gallery - Desktop Only */}
            <div className="hidden lg:grid grid-cols-4 gap-2">
              {currentImages.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative aspect-square bg-white rounded overflow-hidden transition-all duration-200 border-2 ${
                    idx === currentImageIndex 
                      ? 'border-black shadow-md' 
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`View ${idx + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 25vw, 12vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Only - Color Selector */}
          <div className="lg:hidden space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">
                {isEn ? 'Color' : 'Couleur'}: <span className="font-normal text-gray-600">{selectedVariant.colorName}</span>
              </h3>
            </div>

            {/* Compact Color Swatches */}
            <div className="flex flex-wrap gap-2">
              {selectedSizeData.variants.map((variant, idx) => {
                const variantInStock = variant.inStock !== false;
                const isSelected = selectedVariantIndex === idx;
                
                return (
                  <button
                    key={`${selectedSizeData.id}-${idx}`}
                    onClick={() => handleVariantChange(idx)}
                    disabled={!variantInStock}
                    className="group relative"
                    title={variant.colorName}
                  >
                    {/* Compact Color Circle */}
                    <div className={`
                      relative w-12 h-12 rounded-full overflow-hidden transition-all duration-200
                      ${isSelected 
                        ? 'ring-2 ring-black ring-offset-2 shadow-md' 
                        : variantInStock
                        ? 'ring-1 ring-gray-300 hover:ring-2 hover:ring-gray-500'
                        : 'ring-1 ring-gray-200 opacity-40 cursor-not-allowed'
                      }
                    `}>
                      <Image
                        src={variant.images[0]}
                        alt={variant.colorName}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                      
                      {/* Out of Stock X */}
                      {!variantInStock && (
                        <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                          <X className="w-4 h-4 text-red-500" />
                        </div>
                      )}
                      
                      {/* Selected Check */}
                      {isSelected && (
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                          <div className="bg-white rounded-full p-0.5 shadow-sm">
                            <Check className="w-3 h-3 text-black" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 px-2.5 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap z-20 shadow-lg">
                      {variant.colorName}
                      {!variantInStock && <span className="text-red-300 ml-1">(×)</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Only - Buy Now */}
          <div className="lg:hidden pt-6 border-t border-gray-200">
            {/* Buy Now Button */}
            <button 
              disabled={!isInStock}
              className={`w-full py-4 text-base font-semibold transition-all duration-300 ${
                isInStock
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isInStock ? (isEn ? 'Buy Now' : 'Acheter Maintenant') : (isEn ? 'Out of Stock' : 'Épuisé')}
            </button>
          </div>

          {/* Mobile Only - Description */}
          <div className="lg:hidden space-y-4 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-base leading-relaxed">
              {selectedSizeData.description}
            </p>
            
            {/* Trust Badges - Mobile */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Truck className="w-4 h-4 text-gray-900" />
                <span>{isEn ? 'Free Shipping' : 'Livraison Gratuite'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <ShieldCheck className="w-4 h-4 text-gray-900" />
                <span>{isEn ? 'Lifetime Warranty' : 'Garantie à Vie'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Leaf className="w-4 h-4 text-gray-900" />
                <span>{isEn ? '90% Recycled' : '90% Recyclé'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Droplets className="w-4 h-4 text-gray-900" />  
                <span>{isEn ? 'Leakproof' : 'Étanche'}</span>
              </div>
            </div>
          </div>

          {/* Right - Product Info - Desktop Only for Title/Rating/Price */}
          <div className="space-y-8 lg:order-2">
            {/* Title & Rating - Desktop Only */}
            <div className="hidden lg:block space-y-4">
              <div>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-3">
                  {selectedSizeData.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(REVIEWS_DATA.averageRating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {REVIEWS_DATA.averageRating} ({REVIEWS_DATA.totalReviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl lg:text-4xl font-bold text-gray-900">
                    ${selectedSizeData.price.toFixed(2)}
                  </span>
                  {!isInStock && (
                    <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      {isEn ? 'Out of Stock' : 'Épuisé'}
                    </span>
                  )}
                </div>
              </div>

              {/* Stock & SKU Info */}
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  {isInStock ? (
                    <>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{isEn ? 'In Stock' : 'En Stock'}</span>
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>{isEn ? 'Out of Stock' : 'Épuisé'}</span>
                    </>
                  )}
                </div>
                <span className="text-gray-400">•</span>
                <span>SKU: {selectedVariant.sku}</span>
              </div>
            </div>

            {/* Size Selector - Desktop Only */}
            <div className="hidden lg:block space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {isEn ? 'Size' : 'Taille'}
                </h3>
                <button className="text-sm text-gray-600 hover:text-gray-900 underline">
                  {isEn ? 'Size Guide' : 'Guide des Tailles'}
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {productData.sizes.map((sizeOption, idx) => (
                  <button
                    key={sizeOption.id}
                    onClick={() => handleSizeChange(idx)}
                    className={`relative px-4 py-3 text-center font-semibold transition-all duration-200 ${
                      selectedSizeIndex === idx
                        ? 'bg-black text-white ring-2 ring-black ring-offset-2'
                        : 'bg-white border-2 border-gray-300 text-gray-900 hover:border-gray-900'
                    }`}
                  >
                    <div className="text-sm lg:text-base">{sizeOption.id}</div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      ${sizeOption.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector - Desktop Only */}
            <div className="hidden lg:block space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">
                  {isEn ? 'Color' : 'Couleur'}: <span className="font-normal text-gray-600">{selectedVariant.colorName}</span>
                </h3>
              </div>

              {/* Compact Color Swatches */}
              <div className="flex flex-wrap gap-2">
                {selectedSizeData.variants.map((variant, idx) => {
                  const variantInStock = variant.inStock !== false;
                  const isSelected = selectedVariantIndex === idx;
                  
                  return (
                    <button
                      key={`${selectedSizeData.id}-${idx}`}
                      onClick={() => handleVariantChange(idx)}
                      disabled={!variantInStock}
                      className="group relative"
                      title={variant.colorName}
                    >
                      {/* Compact Color Circle */}
                      <div className={`
                        relative w-12 h-12 rounded-full overflow-hidden transition-all duration-200
                        ${isSelected 
                          ? 'ring-2 ring-black ring-offset-2 shadow-md' 
                          : variantInStock
                          ? 'ring-1 ring-gray-300 hover:ring-2 hover:ring-gray-500'
                          : 'ring-1 ring-gray-200 opacity-40 cursor-not-allowed'
                        }
                      `}>
                        <Image
                          src={variant.images[0]}
                          alt={variant.colorName}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                        
                        {/* Out of Stock X */}
                        {!variantInStock && (
                          <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                            <X className="w-4 h-4 text-red-500" />
                          </div>
                        )}
                        
                        {/* Selected Check */}
                        {isSelected && (
                          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <div className="bg-white rounded-full p-0.5 shadow-sm">
                              <Check className="w-3 h-3 text-black" />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 px-2.5 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap z-20 shadow-lg">
                        {variant.colorName}
                        {!variantInStock && <span className="text-red-300 ml-1">(×)</span>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Buy Now - Desktop Only */}
            <div className="hidden lg:block pt-6 border-t border-gray-200">
              {/* Buy Now Button */}
              <button 
                disabled={!isInStock}
                className={`w-full py-4 text-base font-semibold transition-all duration-300 ${
                  isInStock
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isInStock ? (isEn ? 'Buy Now' : 'Acheter Maintenant') : (isEn ? 'Out of Stock' : 'Épuisé')}
              </button>
            </div>

            {/* Trust Badges - Desktop Only */}
            <div className="hidden lg:grid grid-cols-2 gap-3 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Truck className="w-4 h-4 text-gray-900" />
                <span>{isEn ? 'Free Shipping' : 'Livraison Gratuite'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <ShieldCheck className="w-4 h-4 text-gray-900" />
                <span>{isEn ? 'Lifetime Warranty' : 'Garantie à Vie'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Leaf className="w-4 h-4 text-gray-900" />
                <span>{isEn ? '90% Recycled' : '90% Recyclé'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Droplets className="w-4 h-4 text-gray-900" />  
                <span>{isEn ? 'Leakproof' : 'Étanche'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details & Specifications */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div>
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Details & Specifications
              </h2>
            </div>
            
            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Content */}
              <div className="space-y-6">
                {/* Description */}
                <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                  <p>
                    Introducing the iconic Quencher, now with the leakproof ProTour Flip Straw lid. The 30-ounce Quencher ProTour Flip Straw Tumbler makes hydration simple — flip up the built-in straw to sip, then snap it shut when you're done.
                  </p>
                  <p>
                    Classic colors feature fresh graphics with a soft texture on the handle and two-tone lid. Your water stays ice cold for hours, thanks to double-wall vacuum insulation. It's ready to grab by the comfort-grip handle and fits in your car's cup holder.
                  </p>
                  <p className="text-sm">
                    30 oz ProTour Flip Straw lid fits all 30 oz Quenchers
                  </p>
                  <p className="text-sm text-gray-600">
                    <a href="#" className="italic underline hover:text-gray-900">
                      *Not Eligible For Promotions or Resell. Multiple & Large Orders Are Subject To Cancellation.
                    </a>
                  </p>
                </div>

                {/* Specifications List - Two Columns */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>18/8 recycled stainless steel</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Double-wall vacuum insulation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Leakproof ProTour Flip Straw lid</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Removable spout</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Replaceable seal</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Textured comfort-grip handle</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Fits most car cupholders</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>Dishwasher safe</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>BPA-free</span>
                  </div>
                </div>

                {/* Product Dimensions - Two Columns */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Weight:</h3>
                    <p className="text-gray-700">{selectedSizeData.weight}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Dimensions:</h3>
                    <p className="text-gray-700">{selectedSizeData.dimensions}</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Product Image (Hidden on Mobile) */}
              <div className="hidden md:flex items-start justify-center">
                <div className="w-full max-w-md">
                  <Image
                    src={currentImages[currentImageIndex]}
                    alt={`${selectedSizeData.name} - ${selectedVariant.colorName}`}
                    width={700}
                    height={700}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16">
            The Key Features
          </h2>

          <div className="space-y-8 lg:space-y-12">
            {/* Feature Row 1: Small + Large */}
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12">
              {/* Feature 1 - Small */}
              <div className="flex flex-col space-y-4">
                <div className="w-full aspect-square">
                  <Image
                    src="/assets/images/products/stanley1913/1.png"
                    alt="Flip, Sip, Repeat"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Flip, Sip, Repeat</h3>
                <p className="text-gray-600">
                  Sip with ease, spill-free—our leakproof flip straw lid's got your back!
                </p>
              </div>

              {/* Feature 2 - Large */}
              <div className="flex flex-col space-y-4">
                <div className="w-full aspect-[3/2]">
                  <Image
                    src="/assets/images/products/stanley1913/2.png"
                    alt="Cup holder compatible"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cup holder compatible</h3>
                <p className="text-gray-600">
                  Good news! Sizes up to 40 oz will comfortably fit most car and truck cupholders.
                </p>
              </div>
            </div>

            {/* Feature Row 2: Small + Large */}
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12">
              {/* Feature 3 - Small */}
              <div className="flex flex-col space-y-4">
                <div className="w-full aspect-square">
                  <Image
                    src="/assets/images/products/stanley1913/3.png"
                    alt="Easy-to-Clean"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Easy-to-Clean</h3>
                <p className="text-gray-600">
                  The removable spout ensures quick, easy cleaning every time.
                </p>
              </div>

              {/* Feature 4 - Large */}
              <div className="flex flex-col space-y-4">
                <div className="w-full aspect-[3/2]">
                  <Image
                    src="/assets/images/products/stanley1913/4.png"
                    alt="Sustainable at heart"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sustainable at heart</h3>
                <p className="text-gray-600">
                  The body of every Quencher is made with BPA-free 90% recycled 18/8 stainless steel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              {isEn ? 'Customer Reviews' : 'Avis Clients'}
            </h2>

            {/* Rating Summary */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Average Rating */}
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-900 mb-2">
                    {REVIEWS_DATA.averageRating}
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < Math.floor(REVIEWS_DATA.averageRating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-gray-600">
                    {isEn ? 'Based on' : 'Basé sur'} {REVIEWS_DATA.totalReviews} {isEn ? 'reviews' : 'avis'}
                  </div>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => {
                    const count = REVIEWS_DATA.distribution[rating as keyof typeof REVIEWS_DATA.distribution];
                    const percentage = (count / REVIEWS_DATA.totalReviews) * 100;
                    
                    return (
                      <button
                        key={rating}
                        onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                        className={`w-full flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors ${
                          filterRating === rating ? 'bg-gray-100' : ''
                        }`}
                      >
                        <span className="text-sm font-medium w-8">{rating}★</span>
                        <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold text-gray-900">{review.author}</span>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                            {isEn ? 'Verified Purchase' : 'Achat Vérifié'}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString(isEn ? 'en-US' : 'fr-FR')}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {review.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {review.content}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{isEn ? 'Helpful' : 'Utile'} ({review.helpful})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filterRating && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setFilterRating(null)}
                  className="text-sm text-gray-600 hover:text-gray-900 underline"
                >
                  {isEn ? 'Show all reviews' : 'Afficher tous les avis'}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          {isEn ? 'You May Also Like' : 'Vous Aimerez Aussi'}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {RELATED_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative aspect-square bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Stanley Since 1913
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              {isEn 
                ? 'For over a century, Stanley has been crafting products built for life. From the jobsite to the campsite, our legendary durability and performance have made us a trusted companion for generations of adventurers, workers, and outdoor enthusiasts.'
                : 'Depuis plus d\'un siècle, Stanley fabrique des produits conçus pour durer toute une vie. Du chantier au camping, notre durabilité et nos performances légendaires ont fait de nous un compagnon de confiance pour des générations d\'aventuriers, de travailleurs et de passionnés de plein air.'
              }
            </p>
            <Link
              href="/about"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105"
            >
              {isEn ? 'Learn Our Story' : 'Découvrir Notre Histoire'}
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {isEn ? 'Join the Stanley Family' : 'Rejoignez la Famille Stanley'}
          </h2>
          <p className="text-gray-300 mb-8">
            {isEn 
              ? 'Get exclusive offers, new product launches, and hydration tips delivered to your inbox.'
              : 'Recevez des offres exclusives, des lancements de nouveaux produits et des conseils d\'hydratation dans votre boîte de réception.'
            }
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder={isEn ? 'Enter your email' : 'Entrez votre email'}
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105"
            >
              {isEn ? 'Subscribe' : 'S\'abonner'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
