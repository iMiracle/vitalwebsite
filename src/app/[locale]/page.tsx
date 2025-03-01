import {setRequestLocale} from 'next-intl/server';
import HomeIndex from '@/components/home/HomeIndex';
import {useTranslations} from 'next-intl';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('LocaleLayout');
  
  return (<HomeIndex lang={locale}/>);
}
