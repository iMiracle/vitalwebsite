import {MetadataRoute} from 'next';
import {getTranslations} from 'next-intl/server';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = 'en';
  const t = await getTranslations({locale, namespace: 'Manifest'});

  return {
    name: t('name'),
    short_name: t('shortName'),
    start_url: '/',
    theme_color: '#ffffff',
    display: 'standalone',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ]
  };
}
