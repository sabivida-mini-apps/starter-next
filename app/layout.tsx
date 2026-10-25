import Script from 'next/script';
import type { ReactNode } from 'react';
import './globals.css';

const host = process.env.NEXT_PUBLIC_SABIVIDA_HOST || 'https://sabivida.com';
const sdk = process.env.NEXT_PUBLIC_SDK_URL || `${host}/mini-apps/sdk/v1.js`;

export const metadata = { title: 'My SabiVida mini app' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* The SabiVida SDK, loaded before the page so SabiVida.ready() exists. */}
        <Script src={sdk} data-sabivida-host={host} strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
