/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   images: {
  //     unoptimized: true, // 禁用图片优化，如果你想要使用这个功能，可以设置为false
  //   },
  // },
  trailingSlash: true,
  output: "export",
};
export default nextConfig;
