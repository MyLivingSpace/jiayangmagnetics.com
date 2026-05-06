import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { imageExists } from "@/lib/imageExists";

/**
 * SmartImage — graceful image with on-disk fallback.
 *
 * Server component. At render time we check whether the asset exists at
 * `public/<src>`. If yes, render it as an <img>. If no, render a clean,
 * understated placeholder block — neutral surface, faint icon, optional
 * subtle hint label. No "IMAGE PENDING" badges, no exposed file paths —
 * the placeholder reads as a plain photo block, not as a draft annotation.
 *
 * The image path stays in the data layer, of course; only the visible
 * customer-facing render is cleaned up.
 *
 * Why a plain <img> instead of next/image: real photos haven't been provided
 * yet, so we don't know dimensions. Swap to `next/image` once real
 * photography and stable dimensions are available.
 */

type Ratio = "4/3" | "16/9" | "1/1" | "3/4" | "3/2";

const ratioClass: Record<Ratio, string> = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "3/2": "aspect-[3/2]",
};

export default function SmartImage({
  src,
  alt,
  fallbackLabel,
  ratio = "4/3",
  fit = "cover",
  className,
  rounded = false,
}: {
  /** Path under /public — e.g. "/images/products/transformers-01.jpg" */
  src: string;
  alt: string;
  /**
   * Optional, subtle hint shown on the placeholder when the file is missing.
   * Keep it short and category-level — e.g. "Factory image", "Testing image",
   * "Certification image". If omitted, the placeholder is fully neutral.
   * Never used to expose internal labels or file paths to customers.
   */
  fallbackLabel?: string;
  ratio?: Ratio;
  fit?: "cover" | "contain";
  className?: string;
  rounded?: boolean;
}) {
  const exists = imageExists(src);
  const radius = rounded ? "rounded-sm" : "";

  if (exists) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden bg-slate-100",
          ratioClass[ratio],
          radius,
          className
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={cn(
            "absolute inset-0 h-full w-full",
            fit === "contain" ? "object-contain" : "object-cover"
          )}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  // Clean placeholder — neutral block with an optional small hint label.
  // No file paths, no copper "Image pending" tag, no dashed border.
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-slate-100",
        ratioClass[ratio],
        radius,
        className
      )}
      role="img"
      aria-label={alt}
    >
      {/* Very faint diagonal sheen — gives the block subtle depth without ornament. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-slate-200/40 via-transparent to-slate-300/40"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <ImageIcon
          size={22}
          className="text-slate-400"
          aria-hidden="true"
          strokeWidth={1.25}
        />
        {fallbackLabel ? (
          <div className="text-xs text-slate-500">{fallbackLabel}</div>
        ) : null}
      </div>
    </div>
  );
}
