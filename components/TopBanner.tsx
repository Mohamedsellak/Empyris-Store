'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export default function TopBanner() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-black text-white py-2 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-infinite-scroll hover:pause">
        {/* Render the text multiple times for seamless infinite scroll */}
        <span className="inline-block px-4 text-sm font-medium">{t.bannerText}</span>
        <span className="inline-block px-4 text-sm font-medium">{t.bannerText}</span>
        <span className="inline-block px-4 text-sm font-medium">{t.bannerText}</span>
        <span className="inline-block px-4 text-sm font-medium">{t.bannerText}</span>
      </div>
    </div>
  );
}
