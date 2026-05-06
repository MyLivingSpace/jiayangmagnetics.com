import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Application } from "@/lib/content";

/**
 * Application card.
 *
 * Two variants:
 *
 *   - "compact" (used on the homepage): category eyebrow, title, one short
 *     sentence (`homeBlurb`, with `oneLine` as fallback), and a single
 *     "See application details" link. No "Typical systems" block — that
 *     belongs on the dedicated Applications page.
 *
 *   - "full" (default — used on the dedicated Applications page): category
 *     eyebrow, title, the longer `oneLine` sentence, the "Typical systems"
 *     labeled row, and the link.
 *
 * Image-less by design — the Applications page should scan quickly. Photos
 * live on the Capabilities proof galleries and on the homepage Manufacturing
 * Snapshot.
 */
export default function ApplicationCard({
  application,
  variant = "full",
}: {
  application: Application;
  variant?: "full" | "compact";
}) {
  const isCompact = variant === "compact";
  const blurb = isCompact
    ? (application.homeBlurb ?? application.oneLine)
    : application.oneLine;

  return (
    <Link
      id={application.slug}
      href={`/applications/${application.slug}`}
      className="group flex flex-col justify-between border border-slate-200 bg-white p-5 transition-all hover:border-slate-400 lg:p-6"
    >
      <div>
        <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
          {application.category}
        </div>
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
          {application.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{blurb}</p>

        {!isCompact ? (
          <div className="mt-5 border-t border-slate-100 pt-4">
            <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
              Typical systems
            </div>
            <div className="mt-1 text-sm text-slate-700">
              {application.typicalSystems}
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-slate-900">
        <span>See application details</span>
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
