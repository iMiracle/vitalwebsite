import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function ErrorLayoutPage() {
  const t = useTranslations('Error');

  return (
    <section className="w-full h-full flex items-center justify-center p-2">
      <div className="w-full flex flex-col text-center space-y-2">
        {/* 插图部分 */}
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className="relative w-[430px] h-[280px] item-center justify-center">
            <Image
              src="/svg/error.svg"
              alt="404"
              fill
              className=" w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 文字内容 */}
        <p className="text-lg md:text-xl text-gray-600">{t('title')}</p>
        <p className="text-gray-500 md:text-lg max-w-xl mx-auto">
          {t('description')}
          <Link
            href="/"
            className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
          >
            {t('gotoHome')}
          </Link>
        </p>
      </div>
    </section>
  );
}
