'use client';
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import {useState} from 'react';
import '../../styles/swiper.css';

import {Product} from '@/config/products';

import {MdShutterSpeed, MdCamera, MdGpsFixed} from 'react-icons/md';
import {
  GiWeight,
  GiNetworkBars,
  GiDamagedHouse,
  GiPagoda,
  GiPlanePilot,
  GiAirForce
} from 'react-icons/gi';

function ProductDetail({locale, product}: {locale?: String; product: Product}) {
  console.log(locale);
  console.log(product);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const specs = [
    {
      category: '基本规格',
      icon: <GiNetworkBars className="w-6 h-6" />,
      items: [
        {label: '型号', value: 'DJI Matrice 350 RTK'},
        {label: '最大起飞重量', value: 9.3, unit: 'kg'},
        {label: '展开尺寸', value: '810×670×430mm'},
        {label: '防护等级', value: 'IP55'}
      ]
    },
    {
      category: '雷达系统',
      icon: <GiNetworkBars className="w-6 h-6" />,
      items: [
        {label: '测距能力', value: '2000m'},
        {label: '波长', value: 905, unit: 'nm'},
        {label: '点云频率', value: '240,000 点/秒'},
        {label: '视场角', value: '70.4°×4.5°'}
      ]
    },
    {
      category: '相机系统',
      icon: <MdCamera className="w-6 h-6" />,
      items: [
        {label: '传感器类型', value: '1" CMOS'},
        {label: '有效像素', value: '2000万'},
        {label: '快门速度', value: '1/8000s'},
        {label: '视频分辨率', value: '4K/60fps'}
      ]
    }
  ];

  return (
    <section className="w-full h-full sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 左侧产品轮播 */}
            <div className="w-full p-2 rounded-lg">
              <Swiper
                // install Swiper modules
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-auto h-[360px] rounded-lg bg-gray-200"
              >
                {product.details.images.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-[360px] relative">
                      <Image
                        src={slide}
                        alt={index.toString()}
                        fill
                        style={{
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="ThumbsSwiper w-auto h-[60px] mt-2"
              >
                {product.details.images.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={slide}
                      alt={index.toString()}
                      width={170}
                      height={54}
                      style={{objectFit: 'cover'}}
                      className="thumbImage"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* 右侧内容 - 分上下区域 */}
            <div className="h-full flex flex-col">
              {/* 顶部产品介绍 */}
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <GiPagoda className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h1 className="text-2xl font-bold dark:text-white">
                      {product.name}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      {product.coreParams.name}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product.details.name}
                </p>
              </div>

              {/* 核心参数卡片 */}
              <div className="flex-1 overflow-y-auto space-y-6">
                <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
                  <div className="grid grid-cols-1  lg:grid-cols-3 md:gap-4 gap-2">
                    <MetricItem
                      label="最大飞行时间"
                      value="55分钟"
                      icon={
                        <MdShutterSpeed className="text-blue-600 dark:text-blue-400" />
                      }
                    />
                    <MetricItem
                      label="RTK精度"
                      value="1cm+1ppm"
                      icon={
                        <MdGpsFixed className="text-green-600 dark:text-green-400" />
                      }
                    />
                    <MetricItem
                      label="抗风等级"
                      value="12m/s"
                      icon={
                        <GiWeight className="text-purple-600 dark:text-purple-400" />
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            {/* 参数分组 */}
            {specs.map((group) => (
              <div
                key={group.category}
                className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold mb-4 dark:text-gray-200">
                  {group.category}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-2">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center py-2 border-b dark:border-gray-600"
                    >
                      <span className="text-gray-500 dark:text-gray-400">
                        {item.label}
                      </span>
                      <span className="font-medium dark:text-gray-300">
                        {item.value}
                        {item.unit && (
                          <span className="text-sm ml-1">{item.unit}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}

// 辅助组件
function MetricItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border dark:border-gray-600">
      <div className="p-2 rounded-full bg-blue-50 dark:bg-gray-700">{icon}</div>
      <div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
        <div className="text-lg font-semibold dark:text-white">{value}</div>
      </div>
    </div>
  );
}

export default ProductDetail;
