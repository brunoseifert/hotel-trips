/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/trips/search",
        destination: "/src/app/api/trips/search/route.ts",
      },
    ];
  },
  images: {
    domains: [
      "cf.bstatic.com",
      "imgcy.trivago.com",
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "a0.muscache.com",
      "utfs.io",
    ],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
