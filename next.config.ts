import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
  },
  productionBrowserSourceMaps: false,
  swcMinify: true,
  browserslist: [
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Safari versions",
  ],
};

export default nextConfig;
