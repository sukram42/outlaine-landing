/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // distDir: 'dist',
  output: 'export',
  swcMinify: true,
  distDir: "_next",
};

module.exports = nextConfig;
