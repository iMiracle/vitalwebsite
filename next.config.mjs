import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
   // 配置图片域名
   images: {
    remotePatterns: [
        {
            protocol: 'https', // 协议
            hostname: 'swiperjs.com', // 域名
            port: '', // 端口
            pathname: '/**', // 路径
        },
        {
            protocol: 'https', // 协议
            hostname: 'img.hsairforce.com', // 域名
            port: '', // 端口
            pathname: '/**', // 路径
        }
    ],
  }
};
 
export default withNextIntl(nextConfig);
