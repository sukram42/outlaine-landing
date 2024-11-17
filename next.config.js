/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // distDir: 'dist',
  output: 'export',
  swcMinify: true,
  distDir: "_next",
  generateBuildId: async () => { if (process.env.BUILD_ID) { return process.env.BUILD_ID; } else { return `${new Date().getTime()}`; } },
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
