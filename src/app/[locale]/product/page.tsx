import { useTranslations } from 'next-intl';

type Props = {
  params: {locale: string};
};

export default function ProductPage({params: {locale}}: Props) {

  const t = useTranslations('ProductPage');

  return (
    <section>
      <h1>Product Page {locale}  {t('title')}</h1>    
    </section>
  );
}