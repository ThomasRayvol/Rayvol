'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1] || 'fr';

  const handleChange = (locale: string) => {
    // Save preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLocale', locale);
    }

    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
  };

  const localeNames: Record<string, string> = {
    fr: '🇫🇷 Français',
    en: '🇬🇧 English',
  };

  return (
    <div className="no-print fixed top-4 right-4 z-50">
      <div className="relative inline-flex items-center gap-2 group">
        <Languages
          className="w-5 h-5 text-slate-600 group-hover:text-primary transition-colors"
          aria-hidden="true"
        />
        <select
          value={currentLocale}
          onChange={(e) => handleChange(e.target.value)}
          aria-label="Select language / Sélectionner la langue"
          className="px-4 py-2 pr-8 border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 cursor-pointer appearance-none"
        >
          {locales.map((locale) => (
            <option key={locale} value={locale}>
              {localeNames[locale] || locale.toUpperCase()}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
