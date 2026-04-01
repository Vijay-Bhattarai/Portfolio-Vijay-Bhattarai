import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'quotes-github-readme.vercel.app',
      },
    ],
  },
};

export default nextConfig;
