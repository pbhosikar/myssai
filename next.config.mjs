/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Enable default image optimization for local images
    loader: 'default',
    path: '/_next/image',

    // Allow local images in /public
    unoptimized: false,

    // Explicitly allow this domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mystage.ssai.app',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
