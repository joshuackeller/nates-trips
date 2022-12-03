/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1aoqvjojhh952.cloudfront.net",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
