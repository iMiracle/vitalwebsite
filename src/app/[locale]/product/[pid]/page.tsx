import { notFound } from 'next/navigation';
import { getProductById } from '@/config/products';
import { useTranslations } from 'next-intl';
import ProductDetail from '@/components/home/ProductDetail';

type Props = {
  params: { locale: string; pid: string };
};

export default function ProductDetailPage({ params: { locale, pid } }: Props) {
  const t = useTranslations('ProductDetailPage');
  const product = getProductById(pid);

  if (!product) notFound();

  return (
    <section className="mt-8 h-full w-full flex-1">
    <ProductDetail locale={locale} product={product}/>
  </section>
  );
}
