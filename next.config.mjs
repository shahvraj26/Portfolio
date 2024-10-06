const nextConfig = {
  async redirects() {
    // Only apply the redirect in production
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/',
          destination: '/Portfolio',
          permanent: true,
        },
      ];
    }
    // No redirects in development
    return [];
  },
};

export default nextConfig;