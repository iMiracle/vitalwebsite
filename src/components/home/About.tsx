"use client";

import Image from "next/image";
import {useTranslations} from 'next-intl';

const About = () => {
  const t = useTranslations('AboutPage');
  
  return (
    <section className="dark:bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
        </div>

        {/* 公司介绍部分 */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{t('companyTitle')}</h3>
            <p className="mt-4 text-gray-500">
            {t('companyIntroduction')}
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="https://img.hsairforce.com/websiteImg/2024/10/hs-fpv-drone-about-banner2.webp"
              alt="Company Introduction"
              fill
              sizes="(max-width: 768px) 100vw,  50vw"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* 公司实力部分 */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative h-[300px] order-2 md:order-1">
            <Image
              src="https://img.hsairforce.com/websiteImg/2024/10/hs-fpv-drone-about-banner1.webp"
              alt="Company Strength"
              fill
              sizes="(max-width: 768px) 100vw,  50vw"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-gray-900">{t('companyStrengthTitle')}</h3>
            <p className="mt-4 text-gray-500">
              {t('companyStrength')}
            </p>
          </div>
        </div>

        {/* 公司销售网络部分 */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{t('companySalesTitle')}</h3>
            <p className="mt-4 text-gray-500">
              {t('companySales')}
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="https://img.hsairforce.com/websiteImg/2024/10/hs-fpv-drone-about-banner3.webp"
              alt="Sales Network"
              fill
              sizes="(max-width: 768px) 100vw,  50vw"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
