'use client';

import {
  Button,
  Card,
  Image
} from '@heroui/react';
import Link from 'next/link';

import {ProductList} from '@/config/products';

import {useTranslations} from 'next-intl';

const ProductModule = () => {
  const t = useTranslations('ProductPage');

  return (
    <section className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-4">
        {ProductList.map((product) => {
          return (
            <Card
              key={product.id}
              isBlurred
              className="h-[300px] relative group"
            >
              <Image
                isZoomed
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={product.image}
              />

              {/* 文本区域 */}
              <div className="absolute ml-10 p-6 z-10 h-full left-0 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white dark:text-gray-300 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  {product.coreParams.name}
                </p>
              </div>

              <Link
                href={`/product/${product.id}`}
                className="absolute bottom-4 right-4 z-10"
              >
                <Button
                  radius="full"
                  size="sm"
                  className="bg-white/90 dark:bg-gray-800/90 dark:text-white 
                  backdrop-blur-sm hover:scale-105 transition-transform"
                >
                  {t('learnMore')}
                </Button>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ProductModule;
