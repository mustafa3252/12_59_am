import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Exclude heavy packages from serverless bundle
  experimental: {
    serverComponentsExternalPackages: [
      'bcrypt',
      'three',
      'three-globe',
      '@react-three/fiber',
      '@react-three/drei',
      '@dimforge/rapier3d-compat',
      'better-auth',
      'drizzle-orm',
      'drizzle-kit',
      'stripe',
      '@libsql/client',
    ],
  },
  // Optimize bundle size
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclude unused packages from server bundle
      config.externals = config.externals || [];
      config.externals.push({
        'bcrypt': 'commonjs bcrypt',
        'three': 'commonjs three',
        'three-globe': 'commonjs three-globe',
        '@react-three/fiber': 'commonjs @react-three/fiber',
        '@react-three/drei': 'commonjs @react-three/drei',
        '@dimforge/rapier3d-compat': 'commonjs @dimforge/rapier3d-compat',
        'better-auth': 'commonjs better-auth',
        'drizzle-orm': 'commonjs drizzle-orm',
        'stripe': 'commonjs stripe',
      });
    }
    return config;
  },
};

export default nextConfig;
