import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // <== вот эта строка нужна
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
