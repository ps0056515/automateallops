import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: '/pricing', destination: '/services', permanent: true }];
  },
};

export default nextConfig;
