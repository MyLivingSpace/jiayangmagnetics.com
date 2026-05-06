# Launch checklist — Jiayang Magnetics (`website/`)

## Build & quality gates

- [ ] `npm ci` (or `npm install`) in `website/`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] Optional: `npm run clean && npm run typecheck` if `.next/types` was stale locally

## DNS, TLS, and hosting

- [ ] Point `jiayangmagnetics.com` (and `www` if used) to the chosen host (e.g. Vercel / self-hosted Node).
- [ ] TLS certificates active and auto-renewal confirmed.
- [ ] Set production environment variables (e.g. CRM webhook, email API keys) **outside** the repo.

## Forms and backend

- [ ] Replace or augment `app/api/contact/route.ts` console logging with **email notification and/or CRM** integration.
- [ ] Confirm spam controls (honeypot + rate limiting / CAPTCHA policy) meet your security baseline.
- [ ] Privacy policy and terms: **legal review** of `app/privacy/page.tsx` and `app/terms/page.tsx` placeholders.

## SEO / discovery

- [ ] `metadataBase` in `app/layout.tsx` matches the live origin.
- [ ] Submit `https://jiayangmagnetics.com/sitemap.xml` in Search Console / Bing Webmaster.
- [ ] Verify `https://jiayangmagnetics.com/robots.txt` allows indexing as intended.

## Assets

- [ ] Populate `public/favicon.ico` (and any `apple-touch-icon` if required).
- [ ] Add real product, facility, and certification images per `CONTENT_GAPS.md`.
- [ ] Audit customer logo SVGs: only **brand-approved** files in `public/images/customers/`.

## Analytics (optional)

- [ ] Add privacy-compliant analytics (tag manager, Plausible, etc.) if required by marketing.

## Post-launch smoke test

- [ ] Home → Products → one family → one series → contact form submit.
- [ ] Applications detail pages (sample slugs).
- [ ] 404 page (`app/not-found.tsx`) by visiting a non-existent path.
- [ ] Mobile: header menu, form layout, tables horizontal scroll if needed.
