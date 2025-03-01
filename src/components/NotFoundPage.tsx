import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <section className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full flex flex-col text-center space-y-4">
        {/* 插图部分 */}
        <div className='w-full h-full flex items-center justify-center p-4'>
        <div className="relative w-[430px] h-[280px] item-center justify-center">
        <Image
            src="/svg/404.svg"
            alt="404"
            fill
            className=" w-full h-full object-cover"
          />
        </div>
        </div>
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
