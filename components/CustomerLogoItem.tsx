import { resolveImagePath } from "@/lib/imageExists";
import { cn } from "@/lib/cn";
import type { Customer } from "@/lib/content";

/**
 * CustomerLogoItem — a single tile in the CustomerLogoWall.
 *
 * Three densities:
 *   - "default": large (aspect-[3/2]) tile with generous padding — used when
 *                logo files are present and we want them readable at scale.
 *   - "compact": same size, used on the About page block.
 *   - "tight":   short fixed-height tile (h-14) with smaller logo cap and
 *                smaller text fallback — used on the homepage where the
 *                section should scan in a glance, not occupy a screen.
 *
 * Behavior (server component, fs check at render time):
 *   - If the file at `customer.logoPath` exists in /public, render the
 *     official logo image inside a neutral tile (no recoloring, no
 *     stretching — width/height capped so logos remain identifiable).
 *   - Otherwise, render the company name as plain typography.
 *
 * Strict logo-usage rules (per v5 brief, still in force):
 *   - Never generate, redraw, recolor, or stylize a customer logo.
 *   - Never AI-generate a logo or hotlink an external logo URL.
 *   - Only display official logo files placed by Jiayang at the documented
 *     paths under /public/images/customers/.
 */
export default function CustomerLogoItem({
  customer,
  density = "default",
}: {
  customer: Customer;
  density?: "default" | "compact" | "tight";
}) {
  const resolvedLogoPath = resolveCustomerLogoPath(customer.logoPath);
  const hasLogo = Boolean(resolvedLogoPath);
  const isTight = density === "tight";

  return (
    <li
      className={cn(
        "flex items-center justify-center border border-slate-200 bg-white",
        isTight ? "h-14 px-2 lg:h-16" : "aspect-[3/2] p-5"
      )}
    >
      {hasLogo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={resolvedLogoPath!}
          alt={`${customer.name} logo`}
          className={cn(
            "w-auto max-w-full object-contain opacity-80 transition-opacity hover:opacity-100",
            isTight ? "max-h-7" : "max-h-12"
          )}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span
          className={cn(
            "truncate text-center font-semibold tracking-tight text-slate-700",
            isTight ? "text-xs sm:text-sm" : "text-base"
          )}
        >
          {customer.name}
        </span>
      )}
    </li>
  );
}

/**
 * Accept mixed logo formats without forcing SVG conversion.
 *
 * Preferred order:
 *  1) Use the configured path as-is (typically .svg)
 *  2) If missing and configured path is .svg, try common raster alternatives
 *     with the same basename.
 */
function resolveCustomerLogoPath(logoPath: string): string | null {
  if (!logoPath) return null;
  return resolveImagePath(logoPath);
}
