import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'example.com',
        protocol: 'https'
      }
    ]
  }
};

export default nextConfig;
