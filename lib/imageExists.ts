import fs from "node:fs";
import path from "node:path";

/**
 * Server-only check: does a file exist under /public at the given path?
 *
 * Importing this from a client component will fail to build because of
 * the `node:fs` import — that's the intended behavior. Use this to gate
 * image-dependent UI (lightbox triggers, optional thumbnails) on whether
 * the actual asset is present in /public.
 *
 * Used by SmartImage and by the Capabilities page to decide whether a
 * CertificateCard should be wrapped in a lightbox trigger.
 */
export function imageExists(publicSrc: string): boolean {
  if (!publicSrc) return false;
  // Strip leading slash so path.join doesn't treat it as absolute.
  const rel = publicSrc.startsWith("/") ? publicSrc.slice(1) : publicSrc;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", rel));
  } catch {
    return false;
  }
}

/**
 * Resolve an existing image under /public with tolerant matching:
 * - exact path first
 * - common extension fallbacks on same basename
 * - case-insensitive filename match inside the same directory
 *
 * Returns a web path (leading slash) or null when no file is found.
 */
export function resolveImagePath(publicSrc: string): string | null {
  if (!publicSrc) return null;

  const normalized = publicSrc.startsWith("/") ? publicSrc : `/${publicSrc}`;
  if (imageExists(normalized)) return normalized;

  const ext = path.extname(normalized);
  const baseNoExt = ext ? normalized.slice(0, -ext.length) : normalized;
  const extCandidates = [".svg", ".png", ".jpg", ".jpeg", ".webp"];
  const directCandidates = [normalized];

  if (extCandidates.includes(ext.toLowerCase())) {
    for (const candidateExt of extCandidates) {
      const candidate = `${baseNoExt}${candidateExt}`;
      if (!directCandidates.includes(candidate)) {
        directCandidates.push(candidate);
      }
    }
  }

  for (const candidate of directCandidates) {
    if (imageExists(candidate)) return candidate;
  }

  const rel = normalized.startsWith("/") ? normalized.slice(1) : normalized;
  const relDir = path.dirname(rel);
  const absDir = path.join(process.cwd(), "public", relDir);

  try {
    const entries = fs.readdirSync(absDir);
    const entriesByLower = new Map(entries.map((name) => [name.toLowerCase(), name]));

    for (const candidate of directCandidates) {
      const candidateRel = candidate.startsWith("/") ? candidate.slice(1) : candidate;
      const candidateBase = path.basename(candidateRel).toLowerCase();
      const hit = entriesByLower.get(candidateBase);
      if (hit) return `/${path.posix.join(relDir.replace(/\\/g, "/"), hit)}`;
    }
  } catch {
    return null;
  }

  return null;
}
