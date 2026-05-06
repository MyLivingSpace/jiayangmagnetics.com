/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Image optimization is configured for future use; placeholders are CSS gradients today.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
