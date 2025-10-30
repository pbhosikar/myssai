/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Use the default Next.js loader
    loader: 'default',
    path: '/_next/image',

    // Allow serving optimized images from the same origin
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mystage.ssai.app',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
