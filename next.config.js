/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  output: 'export',
  basePath: '/outlaine-landing',
  swcMinify: true,
  // images: {
  //   domains: ["localhost"],
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "cdn.sanity.io",
  //       port: "",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
