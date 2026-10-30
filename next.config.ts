import type { NextConfig } from 'next';
import { frameAncestors } from './lib/session';

const host = process.env.NEXT_PUBLIC_SABIVIDA_HOST || 'https://app.sabivida.com';

const config: NextConfig = {
  // Only SabiVida may frame your app.
  headers: async () => [
    { source: '/:path*', headers: [{ key: 'Content-Security-Policy', value: frameAncestors(host) }] },
  ],
};

export default config;
