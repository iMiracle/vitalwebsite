import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'ar'],
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/product': {
      en: '/product',
      de: '/produkt',
      ar: '/منتج'
    },
    '/product/[pid]': {
      en: '/product/[pid]',
      de: '/produkt/[pid]',
      ar: '/منتج/[pid]'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);
