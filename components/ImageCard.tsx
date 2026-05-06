import SmartImage from "./SmartImage";
import { cn } from "@/lib/cn";

/**
 * ImageCard — a single image-with-caption tile used across the site.
 *
 * Two pieces of accompanying text:
 *   - caption: the title (short, e.g. "Winding production line")
 *   - note:    a one-sentence credibility line (optional)
 *
 * Used by the homepage Manufacturing Snapshot grid, the Capabilities
 * proof galleries, and anywhere else we want a photo-with-meaning tile.
 */
export default function ImageCard({
  src,
  alt,
  caption,
  note,
  fallbackLabel,
  ratio = "4/3",
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  note?: string;
  fallbackLabel?: string;
  ratio?: "4/3" | "16/9" | "1/1" | "3/4" | "3/2";
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex flex-col overflow-hidden border border-slate-200 bg-white",
        className
      )}
    >
      {/*
        No default fallbackLabel — the figcaption below the image already
        names the subject, so adding it inside the placeholder would only
        duplicate the same text.
      */}
      <SmartImage
        src={src}
        alt={alt}
        fallbackLabel={fallbackLabel}
        ratio={ratio}
      />
      <figcaption className="flex flex-1 flex-col gap-2 p-5">
        <div className="text-sm font-semibold tracking-tight text-slate-900">
          {caption}
        </div>
        {note ? (
          <p className="text-xs leading-relaxed text-slate-500">{note}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}
