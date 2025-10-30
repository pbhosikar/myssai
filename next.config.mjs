/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    path: '/_next/image',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mystage.ssai.app',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
