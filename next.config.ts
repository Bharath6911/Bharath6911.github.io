import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Base path for GitHub Pages (only needed if using username.github.io/repo-name)
  // basePath: '/portfolio', // Remove this if using bharath69.github.io directly
  
  // Disable server-side features that don't work with static export
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
