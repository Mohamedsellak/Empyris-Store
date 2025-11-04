'use client';

import Image from 'next/image';

export default function HeroCarousel() {
  return (
    <section 
      className="relative w-full overflow-hidden mt-6 px-4 sm:px-6 lg:px-8"
      role="region"
      aria-label="Hero Section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Image Wrapper */}
        <div className="relative w-full overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl">
          {/* Small screen image - Square ratio for mobile */}
          <div className="block md:hidden relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src="/assets/images/hero-small.png"
              alt="Hero Banner"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          
          {/* Medium and large screen image - Wide ratio for desktop */}
          <div className="hidden md:block relative w-full aspect-[4/1] rounded-xl lg:rounded-2xl overflow-hidden">
            <Image
              src="/assets/images/hero.png"
              alt="Hero Banner"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
