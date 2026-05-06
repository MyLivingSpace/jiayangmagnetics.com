import SmartImage from "./SmartImage";
import { cn } from "@/lib/cn";
import type { Milestone } from "@/lib/content";

/**
 * MilestoneCard — single entry in the MilestoneTimeline.
 *
 * Two variants:
 *   - major: bordered card, larger year typography, optional thumbnail image
 *   - minor: compact inline entry, smaller year, no image
 *
 * Used by MilestoneTimeline only — kept as its own file so the timeline
 * structure stays readable and the variants are easy to refine.
 */
export default function MilestoneCard({
  milestone,
}: {
  milestone: Milestone;
}) {
  const { year, body, major, image } = milestone;

  if (major) {
    return (
      <article className="border border-slate-200 bg-white">
        <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-start">
          <div className="flex-1">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Milestone
            </div>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl">
              {year}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {body}
            </p>
          </div>
          {image ? (
            <div className="lg:w-56 lg:flex-shrink-0">
              <SmartImage
                src={image}
                alt={`${year} — ${body.slice(0, 64)}…`}
                fallbackLabel="Milestone image"
                ratio="3/2"
              />
            </div>
          ) : null}
        </div>
      </article>
    );
  }

  // Minor milestone — compact two-column entry, no image, no card border.
  return (
    <div
      className={cn(
        "grid gap-x-6 gap-y-1 lg:grid-cols-[80px_1fr] lg:items-baseline"
      )}
    >
      <div className="text-base font-medium tracking-tight text-slate-500 lg:text-right">
        {year}
      </div>
      <p className="text-sm leading-relaxed text-slate-700">{body}</p>
    </div>
  );
}
