import { handleSession } from '@/lib/session';

// Trades a SabiVida launch token for the member. Open your own session here.
export async function POST(request: Request) {
  return handleSession(request, {
    host: process.env.NEXT_PUBLIC_SABIVIDA_HOST || 'https://sabivida.com',
    appId: process.env.MINI_APP_ID || 'your-app-id',
    jwks: process.env.SABIVIDA_JWKS || undefined,
  });
}
