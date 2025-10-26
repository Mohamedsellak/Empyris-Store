'use client';

import Marquee from "react-fast-marquee";
import Image from "next/image";

const brands = [
  { name: "West Elm", logo: "https://logo.clearbit.com/westelm.com" },
  { name: "Crate & Barrel", logo: "https://logo.clearbit.com/crateandbarrel.com" },
  { name: "Pottery Barn", logo: "https://logo.clearbit.com/potterybarn.com" },
  { name: "CB2", logo: "https://logo.clearbit.com/cb2.com" },
  { name: "Williams Sonoma", logo: "https://logo.clearbit.com/williams-sonoma.com" },
  { name: "Restoration Hardware", logo: "https://logo.clearbit.com/rh.com" },
  { name: "Arhaus", logo: "https://logo.clearbit.com/arhaus.com" },
  { name: "Room & Board", logo: "https://logo.clearbit.com/roomandboard.com" },
  { name: "Article", logo: "https://logo.clearbit.com/article.com" },
  { name: "Joybird", logo: "https://logo.clearbit.com/joybird.com" },
  { name: "Interior Define", logo: "https://logo.clearbit.com/interiordefine.com" },
  { name: "Anthropologie", logo: "https://logo.clearbit.com/anthropologie.com" },
  { name: "Serena & Lily", logo: "https://logo.clearbit.com/serenaandlily.com" },
  { name: "McGee & Co", logo: "https://logo.clearbit.com/mcgeeandco.com" },
];

export default function BrandScroll() {
  return (
    <section className="relative bg-white py-20 overflow-hidden border-y border-gray-100">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50"></div>
      
      {/* Soft glow effects */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gray-900 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gray-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-gray-300"></div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.25em] flex items-center gap-2">
              <span className="inline-block w-1 h-1 bg-gray-400 rounded-full"></span>
              Premium Partners
              <span className="inline-block w-1 h-1 bg-gray-400 rounded-full"></span>
            </p>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Featured Luxury Brands
          </h2>
          
          <div className="flex items-center justify-center gap-1">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-gray-900"></div>
            <div className="h-[2px] w-4 bg-gray-900"></div>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-gray-900"></div>
          </div>
        </div>
        
        <div className="relative">
          {/* Improved gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
          
          <Marquee
            gradient={false}
            speed={45}
            pauseOnHover={false}
            className="py-10"
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="mx-8"
              >
                {/* Brand logo - no container */}
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={40}
                  className="object-contain max-h-[40px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-16 h-[1px] bg-gradient-to-r from-gray-300 to-transparent"></div>
            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            <div className="w-16 h-[1px] bg-gradient-to-l from-gray-300 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
