/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cf.bstatic.com',
      'imgcy.trivago.com',
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'a0.muscache.com',
    ],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
