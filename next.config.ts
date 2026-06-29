import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow HMR / dev assets when accessed via LAN or public IP (not just localhost).
  allowedDevOrigins: [
    '103.182.211.220',
    '192.168.1.210',
    'localhost',
    '127.0.0.1',
  ],
  async redirects() {
    return [{ source: '/pricing', destination: '/services', permanent: true }];
  },
};

export default nextConfig;
