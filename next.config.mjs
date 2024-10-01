import { NextConfig } from 'next';

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Portfolio',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;