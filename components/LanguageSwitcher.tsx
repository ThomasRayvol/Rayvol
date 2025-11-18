'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1] || 'fr';

  const handleChange = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
  };

  return (
    <div className="no-print fixed top-4 right-4 z-50">
      <select
        value={currentLocale}
        onChange={(e) => handleChange(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
