import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const baseUrl = 'https://suamsu.com';
const pages = ['', '/about', '/product', '/distribution', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}${page}`]),
        ),
      },
    })),
  );
}
