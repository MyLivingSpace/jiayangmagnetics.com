# Content gaps — legacy site vs. international site

Use this as a **migration and QA checklist**. Do **not** invent specifications, diagrams, customers, or certificates to close a gap.

## Product hierarchy (routing)

- Implemented URL pattern: **`/products/[family]`** (product family) → **`/products/[family]/[series]`** (product series / line detail).
- There is **no third URL segment** for individual factory part numbers. If Jiayang later requires SKU-level pages, define slugs only from **published** catalog data.

## Series with full migrated tables vs. summary-only

Refer to header comments in `lib/productSeries.ts`. Summary-only series (shorter pages by design) include examples such as planar DC, new-energy transformers (summary), SQ series CMC, new-energy inductors — **confirm against current hzjy-cnt.com HTML/PDF** that nothing material was dropped when consolidating.

## Known asset gaps (images / drawings)

These paths are referenced in data; **SmartImage** shows a neutral block until files exist under `public/`:

- Typical **circuit diagram** for **Amorphous Active PFC Inductor** (`typical-circuit-diagram.jpg`).
- **Dimensional drawing** for **Rectangular PFC Inductor** (`dimensions.jpg`).
- **Hero / gallery** images for many series — audit `public/images/products/...` against `lib/productSeries.ts` and add photography when available.

**Customer rule:** Do not use external hotlinked logos; only files on disk or text tiles.

## Nanocrystalline magnetic material page

- **No separate multi-grade spec matrix** was on the legacy English product tree for this URL; the site reuses **Fe-based nanocrystalline reference parameters** from the common-mode choke comparison table as **reference characteristics only**.
- **Gap:** If the Chinese catalog publishes additional nanocrystalline grades/dimensions, migrate **verbatim** and extend `comparisonTable` / optional `specTables`.

## “Missing specs” user report vs. current codebase

The following series **already include** migrated `specTables` and/or `comparisonTable` / `characteristicsTables` in `lib/productSeries.ts` (verify rendering in browser after images exist):

- **Amorphous Transformers** — `specTables` (core/box/power matrix).
- **Amorphous Active PFC Inductor** — `specTables` + `circuitDiagrams` (image file may still be absent).
- **Rectangular PFC Inductor** — `specTables` + `schematics` (image file may still be absent).
- **Amorphous Magnetic Material** — `characteristicsTables`, `comparisonTable`, and `specTables`.

If a stakeholder still sees “missing specs,” capture **screenshots of the legacy HTML table** and diff row/column counts against `lib/productSeries.ts`.

## Resources / downloads

- Several `ResourceDocument` entries use internal status **`coming-soon`**. The UI now shows **“Latest revision on request”** — operationally, sales should attach the current PDF when responding until public hosting is approved.

## Certifications and patents

- **Do not invent** certificate numbers or dates. `proof.ts` certificate items should only gain `image` paths when scans exist under `public/images/...`.
