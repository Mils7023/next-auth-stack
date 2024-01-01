/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
};

module.exports = nextConfig;
