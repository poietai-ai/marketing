# poietai.ai Marketing Site

The public marketing website for [poietai.ai](https://poietai.ai) — a virtual engineering organization powered by AI agents.

## Domains

| Domain | Purpose |
|---|---|
| poietai.ai | This marketing site |
| poietai.com | Redirects to poietai.ai |
| poietai.dev | Developer docs (separate repo) |
| poietai.app | User accounts (separate repo) |

## Setup

```bash
pnpm install
cp .env.example .env.local
# Fill in your Resend API key and audience ID
pnpm dev
```

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Resend (waitlist emails)
- Vercel (hosting)

## Scripts

- `pnpm dev` — Start dev server with Turbopack
- `pnpm build` — Production build
- `pnpm start` — Start production server
- `pnpm lint` — Run ESLint
