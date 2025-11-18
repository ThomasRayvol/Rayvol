import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rayvol.pages.dev';
  const currentDate = new Date();

  // Generate sitemap entries for each locale
  const localeEntries = locales.map((locale) => ({
    url: `${baseUrl}/${locale}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: locale === 'fr' ? 1.0 : 0.8, // French is the default
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}/`])
      ),
    },
  }));

  return localeEntries;
}
