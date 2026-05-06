import { Award, FileBadge, Stamp, ScrollText, Maximize2, type LucideIcon } from "lucide-react";
import SmartImage from "./SmartImage";
import { cn } from "@/lib/cn";

type Kind =
  | "Certification"
  | "Patent"
  | "Recognition"
  | "Membership";

const iconFor: Record<Kind, LucideIcon> = {
  Certification: Stamp,
  Patent: ScrollText,
  Recognition: Award,
  Membership: FileBadge,
};

/**
 * CertificateCard — used in the Certifications, Patents & Documentation
 * grids on the Capabilities page.
 *
 * Visual structure:
 *   - Document thumbnail at the top (SmartImage, falls back to a neutral
 *     placeholder when the file is missing).
 *   - Kind badge + small icon
 *   - Title
 *   - Optional one-line description
 *   - "View document" affordance footer when `clickable` is true (i.e. the
 *     image actually exists and the parent has wrapped the card in a
 *     CertificateLightbox).
 *
 * No certificate numbers, no fabricated dates, no fake download URLs.
 */
export default function CertificateCard({
  title,
  kind,
  description,
  image,
  clickable = false,
  className,
}: {
  title: string;
  kind: Kind;
  description?: string;
  /** Path under /public to the cert/document scan. Optional. */
  image?: string;
  /**
   * Whether the parent has wrapped the card in a lightbox trigger. Controls
   * the "View document" affordance and the hover treatment.
   */
  clickable?: boolean;
  className?: string;
}) {
  const Icon = iconFor[kind];

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-colors",
        clickable && "hover:border-slate-400",
        className
      )}
    >
      {/* Document thumbnail. SmartImage falls back to a polished neutral block. */}
      <div className="relative">
        <SmartImage
          src={image ?? "/__nonexistent__"}
          alt={`${title} — document scan`}
          fallbackLabel="Certification image"
          ratio="3/2"
          fit="contain"
        />
        {/* Kind chip overlay — top-right of the thumbnail. */}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 border border-slate-200 bg-white/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-700">
          <Icon size={11} className="text-accent" aria-hidden="true" />
          {kind}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        {description ? (
          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            {description}
          </p>
        ) : null}

        {clickable ? (
          <div className="mt-auto flex items-center gap-1.5 pt-5 text-xs font-medium text-slate-900">
            <Maximize2 size={12} aria-hidden="true" />
            <span>View document</span>
          </div>
        ) : null}
      </div>
    </article>
  );
}
