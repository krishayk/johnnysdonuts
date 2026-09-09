import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Export without redirects; the packaging step creates directory indexes.
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
