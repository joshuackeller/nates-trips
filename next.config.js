/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "project3-531-dev.s3.amazonaws.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
