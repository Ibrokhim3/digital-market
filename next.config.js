/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "digital-market-5ej8.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
