# Jiayang Magnetics — International Website

Next.js 15 (App Router) + TypeScript + Tailwind CSS implementation of the Jiayang Magnetics international B2B site. Strategy and content are sourced from `../jiayang-website-strategy.md`.

## Quick start

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — Next.js / ESLint check
- `npm run typecheck` — TypeScript check (no emit)

## Project layout

```
app/
  layout.tsx            # Global header + footer wrapper
  page.tsx              # Homepage (all 11 sections from strategy doc Section 2)
  globals.css           # Tailwind directives + base typography
  products/             # Products landing
  applications/         # Applications landing (with Emerging band)
  capabilities/         # Capabilities landing
  about/                # About + Brand & Legal Entity
  resources/            # Datasheets / catalog (placeholders)
  contact/              # Sample & Quote Request page (full form)
  api/contact/route.ts  # Stub form endpoint (logs + acks)

components/             # Shared UI primitives
lib/content.ts          # Centralized content data (products, applications, milestones, etc.)
```

## Implementation notes

**Design tokens.** Slate-900 is the primary text and CTA color. A copper accent (`accent` token = `#B45309`) is reserved for trust-strip data, certification labels, and fine detail rules — not primary CTAs. This avoids the generic Chinese-factory red the strategy doc warns against, while still hinting at copper-winding heritage.

**Imagery.** All visual placeholders are CSS gradients with semantic class names (`PlaceholderImage`). Replace with real factory and product photography in the next layer — see strategy doc Section 12 for the photography brief.

**Forms.** The `/contact` form is fully wired to a stub `/api/contact` endpoint that logs the submission and returns `{ ok: true, ref }`. Wire to email / CRM in the next layer.

**Internationalization.** The header includes an `EN | 中文` switcher. The 中文 link points to `https://hzjy-cnt.com` per the coexistence strategy in Section 15 of the strategy doc.

**Open items.** The trust strip currently uses the cert mix confirmed against the live `hzjy-cnt.com` site (ISO 9001 / ISO 14001 / IATF 16949 / UL / CQC). The "National High-Tech Enterprise" claim is intentionally **not** on the homepage trust strip until Appendix A item 13 is reconciled — see the strategy doc.
