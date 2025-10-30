/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Ensure Next.js serves from your app's own domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mystage.ssai.app',
        pathname: '/**',
      },
    ],
    // Use the default loader and path
    loader: 'default',
    path: '/_next/image',
    // Allow using images from the local /public folder
    unoptimized: false,
  },
};

export default nextConfig;
