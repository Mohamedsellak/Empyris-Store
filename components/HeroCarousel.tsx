'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    largeSrc: '/assets/images/hero-1-large.jpg',
    smallSrc: '/assets/images/hero-1-small.jpg',
    alt: 'Hero Slide 1'
  },
  {
    id: 2,
    largeSrc: '/assets/images/hero-2-large.png',
    smallSrc: '/assets/images/hero-2-small.png',
    alt: 'Hero Slide 2'
  },
  {
    id: 3,
    largeSrc: '/assets/images/hero-3-large.jpg',
    smallSrc: '/assets/images/hero-3-small.jpg',
    alt: 'Hero Slide 3'
  },
  {
    id: 4,
    largeSrc: '/assets/images/hero-4-large.jpg',
    smallSrc: '/assets/images/hero-4-small.jpg',
    alt: 'Hero Slide 4'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section 
      className="relative w-full overflow-hidden mt-6 px-4 sm:px-6 lg:px-8"
      role="region"
      aria-roledescription="Carousel"
      aria-label="Hero Carousel"
    >
      <div className="max-w-7xl mx-auto">
        {/* Slides Wrapper */}
        <div 
          className="relative w-full overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-opacity duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
              }`}
              role="group"
              aria-label={`${index + 1} / ${slides.length}`}
              aria-hidden={index !== currentSlide}
            >
              {/* Small screen image - Square ratio for mobile */}
              <div className="block md:hidden relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src={slide.smallSrc}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
              
              {/* Medium and large screen image - Wide ratio for desktop */}
              <div className="hidden md:block relative w-full aspect-[4/1] rounded-xl lg:rounded-2xl overflow-hidden">
                <Image
                  src={slide.largeSrc}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8 h-3' 
                  : 'bg-white/60 hover:bg-white/80 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
