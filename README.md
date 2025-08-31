# Caselist — Vercel-ready

This package is a Vercel-ready starter for Caselist with:
- Next.js 14 App Router + Tailwind + Framer Motion
- Prisma schema (Neon/Postgres-ready)
- NextAuth (Google, Microsoft, Email) stubs
- GPT summary API stub (swap in OpenAI key)
- Stripe escrow flow (PaymentIntent capture later) + webhook handler
- Zoom meeting stub
- PDF export using pdf-lib
- Role-based dashboards (client, lawyer, admin)
- vercel.json and scripts/migrate.js to auto run migrations on start

## Quick deploy
1. Unzip -> `cd caselist-full-vercel`
2. `git init` -> push to GitHub
3. Connect repo to Vercel
4. Add env vars from `.env.example`
5. Deploy
