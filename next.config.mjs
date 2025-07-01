/** @type {import('next').NextConfig} */

// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export', // 关键设置
    basePath: isProd ? '/next-learn' : '',
    assetPrefix: isProd ? '/next-learn/' : '',
};

export default nextConfig;

// module.exports = {
//     output: 'export', // 启用静态导出模式
// };

