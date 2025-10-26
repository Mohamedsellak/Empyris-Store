'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';
import { CheckCircle, Users, Leaf, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.aboutUs}
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              {t.ourStoryText}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t.ourStory}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t.ourStoryText}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.whyChooseUsText}
              </p>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
                alt="About Store"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.ourMission}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.ourMissionText}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.ourValues}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality First */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.qualityFirst}
              </h3>
              <p className="text-gray-600">
                {t.qualityFirstDesc}
              </p>
            </div>

            {/* Customer Focus */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.customerFocus}
              </h3>
              <p className="text-gray-600">
                {t.customerFocusDesc}
              </p>
            </div>

            {/* Sustainability */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.sustainability}
              </h3>
              <p className="text-gray-600">
                {t.sustainabilityDesc}
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.innovation}
              </h3>
              <p className="text-gray-600">
                {t.innovationDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.whyChooseUs}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.whyChooseUsText}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
