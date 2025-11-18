'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { locales } from '@/i18n';

export function LocaleDetector() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only run on initial page load
    const hasRedirected = sessionStorage.getItem('localeRedirected');
    if (hasRedirected) return;

    const currentLocale = pathname.split('/')[1];

    // Check if user has a saved preference
    const savedLocale = localStorage.getItem('preferredLocale');

    if (savedLocale && locales.includes(savedLocale as any) && savedLocale !== currentLocale) {
      // Redirect to saved preference
      sessionStorage.setItem('localeRedirected', 'true');
      const segments = pathname.split('/');
      segments[1] = savedLocale;
      router.replace(segments.join('/'));
      return;
    }

    // If no saved preference, check browser language (only on first visit)
    if (!savedLocale && typeof navigator !== 'undefined') {
      const browserLang = navigator.language.split('-')[0]; // Get 'fr' from 'fr-FR'

      if (locales.includes(browserLang as any) && browserLang !== currentLocale) {
        // Redirect to browser language
        sessionStorage.setItem('localeRedirected', 'true');
        localStorage.setItem('preferredLocale', browserLang);
        const segments = pathname.split('/');
        segments[1] = browserLang;
        router.replace(segments.join('/'));
      }
    }
  }, [pathname, router]);

  return null; // This component doesn't render anything
}
