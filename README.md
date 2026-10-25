<p><img src="https://raw.githubusercontent.com/sabivida-mini-apps/.github/main/assets/social-starter-next.png" alt="SabiVida mini app starter with Next.js: SabiVida sign-in on your server." width="100%"></p>

# SabiVida mini app starter, with Next.js

A Next.js (App Router) + TypeScript template for a [SabiVida mini app](https://github.com/sabivida-mini-apps/partner-kit). The page signs the member in through SabiVida, and a route handler verifies the launch token. Click **Use this template** to start your own.

## Try it without SabiVida

```sh
npm install
npm run dev:mock
```

Open http://localhost:4398. A local stand-in for SabiVida frames your app the way SabiVida does:
- It signs a test member in with its own key. Add `?name=…` or `?start=…` to the address to change the launch.
- It asks you to confirm each step your app suggests.

It's for development only; real launch tokens come from SabiVida.

## Run and deploy

```sh
cp .env.example .env.local   # set MINI_APP_ID to the id SabiVida gave you
npm run build && npm start
```

Deploy it to any Next.js host (Vercel, Node, containers) with `NEXT_PUBLIC_SABIVIDA_HOST` and `MINI_APP_ID` set. Every response carries `Content-Security-Policy: frame-ancestors <SabiVida>` (`next.config.ts`).

## What's inside

| File | Role |
| --- | --- |
| `app/page.tsx` | The page: signs in, shows the member, suggests a plan step, closes |
| `app/layout.tsx` | Loads the SabiVida SDK before the page runs (`next/script`, `beforeInteractive`) |
| `app/api/session/route.ts` | `POST /api/session`: trades the launch token for the member |
| `lib/sabivida.ts` | Typed access to the SDK, plus `signIn()` |
| `lib/session.ts` | Verifies the token (issuer, your app id, type, EdDSA, 60 seconds, used once) with `jose` |
| `next.config.ts` | Only SabiVida may frame your app |
| `scripts/dev-mock.mjs` | The local stand-in behind `npm run dev:mock` |

## Before you go live

- **Replays:** keep used token ids (`jti`) in your database instead of memory, so every server rejects a replay.
- **Your own session:** open it in the route handler once the token checks out. The launch token is proof of sign-in, not a session.
- **Requirements:** follow the requirements in the [developer guide](https://github.com/sabivida-mini-apps/partner-kit/blob/main/docs/developer-guide.md): no trackers, no requests for SabiVida credentials, a privacy policy.
