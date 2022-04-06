/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.communitydragon.org', 'cdn.communitydragon.org'],
  },
};

module.exports = nextConfig;
