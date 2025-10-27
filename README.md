This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Open []() with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deployment (Staging with PM2 + Nginx)

- Prereqs:
  - Place `.env.production` at project root; ensure `.env.local` is absent in staging.
  - Required vars: `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, `AZURE_AD_CLIENT_ID`, `AZURE_AD_CLIENT_SECRET`, `AZURE_AD_TENANT_ID`, `NEXTAUTH_TRUST_HOST`.
  - `ecosystem.config.js` uses `NODE_ENV=production` and `next start -p 3031`.

- Build and start:
  - `git pull`
  - `npm ci`
  - `npm run build`
  - First start: `pm2 start ecosystem.config.js --env production`
  - Restart: `pm2 restart ecosystem.config.js --env production`
  - If env not applied previously: `pm2 restart mystage --update-env`

- Verify app:
  - `pm2 logs mystage --lines 200`
  - Look for: `NEXTAUTH_URL: 'https://mystage.ssai.app'`
  - Look for: `computedRedirectUri: 'https://mystage.ssai.app/api/auth/callback/azure-ad'`
  - Confirm port: `pm2 status` and app listens on `3031`.

- Nginx proxy (example):
  - `proxy_pass http://127.0.0.1:3031;`
  - `proxy_set_header Host $host;`
  - `proxy_set_header X-Forwarded-Proto $scheme;`
  - Reload: `sudo nginx -t && sudo systemctl reload nginx`

- Functional checks:
  - Visit `https://mystage.ssai.app/login/diagnostics`.
  - Confirm `NEXTAUTH_URL` shows staging host and redirect URI matches callback path.
  - Click Sign in: Azure auth URL should include `client_id=<GUID>`.

- Troubleshooting 502:
  - Ensure PM2 process is online and listening on upstream port.
  - Confirm Nginx upstream matches app port and headers forwarded.

- Security:
  - Rotate `AZURE_AD_CLIENT_SECRET` and `NEXTAUTH_SECRET` after changes.
  - Update `.env.production` and restart PM2 with `--env production`.

## Production Commands

- Build (production):
  - `npm ci`
  - `npm run build`

- Run without PM2 (production):
  - Ensure `.env.production` is present at project root.
  - `NODE_ENV=production npx next start -p 3031`

- Run with PM2 (recommended):
  - First start: `pm2 start ecosystem.config.js --env production`
  - Restart: `pm2 restart ecosystem.config.js --env production`
  - Update env on existing process: `pm2 restart mystage --update-env`
  - Status: `pm2 status`
  - Logs: `pm2 logs mystage --lines 200`

- Notes:
  - Nginx should proxy to `http://127.0.0.1:3031` with `Host` and `X-Forwarded-Proto` headers.
  - `.env.local` should not exist in production; use `.env.production`.
