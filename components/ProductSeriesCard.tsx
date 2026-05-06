import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SmartImage from "./SmartImage";
import type { ProductSeries } from "@/lib/productSeries";

/**
 * ProductSeriesCard — used on product family overview pages to list the
 * series within that family. Contains:
 *   - product/series image (SmartImage with fallback)
 *   - series name
 *   - one-sentence blurb (shortBlurb)
 *   - typical applications (one-line summary)
 *   - "View series details" link
 */
export default function ProductSeriesCard({
  slug,
  series,
}: {
  slug: string;
  series: ProductSeries;
}) {
  const href = `/products/${series.familySlug}/${slug}`;

  return (
    <article
      id={slug}
      className="flex flex-col border border-slate-200 bg-white"
    >
      <Link href={href} className="block overflow-hidden">
        <SmartImage
          src={series.image}
          alt={`${series.name} — series image`}
          fallbackLabel={`${series.name} image`}
          ratio="4/3"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold tracking-tight text-slate-900">
          {series.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {series.shortBlurb}
        </p>

        <div className="mt-4 border-t border-slate-100 pt-4 text-xs">
          <div className="font-medium uppercase tracking-[0.14em] text-slate-500">
            Typical applications
          </div>
          <div className="mt-1 text-slate-700">
            {series.applicationsSummary}
          </div>
        </div>

        <div className="mt-auto pt-5">
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-accent"
          >
            View series details
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
