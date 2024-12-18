import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(self "http://127.0.0.1:3001/"), microphone=(self "http://127.0.0.1:3001/"), geolocation=(self "http://127.0.0.1:3001/"), microphone=(self "http://127.0.0.1:3001/")',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http://127.0.0.1:3001/',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: '',
          },
        ],
      },
    ]
  }



};

export default nextConfig;
