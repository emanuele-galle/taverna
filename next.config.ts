import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['sharp', 'pg'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
