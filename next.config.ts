import type { NextConfig } from 'next';

const host = process.env.NEXT_PUBLIC_SABIVIDA_HOST || 'https://sabivida.com';

const config: NextConfig = {
  // Only SabiVida may frame your app.
  headers: async () => [
    { source: '/:path*', headers: [{ key: 'Content-Security-Policy', value: `frame-ancestors ${host}` }] },
  ],
};

export default config;
