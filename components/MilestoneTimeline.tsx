import MilestoneCard from "./MilestoneCard";
import { milestones as defaultMilestones } from "@/lib/content";
import type { Milestone } from "@/lib/content";
import { cn } from "@/lib/cn";

/**
 * MilestoneTimeline — vertical timeline with a thin rail on the left.
 *
 * Rendering rhythm:
 *   - A copper dot on the rail next to each major milestone (which renders
 *     as a bordered MilestoneCard).
 *   - A small slate dot on the rail next to each minor milestone (which
 *     renders as a compact one-line entry).
 *   - Generous vertical breathing room. No icons-on-dots, no fade-in
 *     animation, no decorative connectors — the rail does all the visual
 *     joining and the typography carries the editorial weight.
 *
 * Mobile (default): rail hidden, dots hidden, year and body stack.
 * Desktop (lg+): rail visible to the left of the content column.
 */
export default function MilestoneTimeline({
  milestones = defaultMilestones,
  className,
}: {
  milestones?: Milestone[];
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "relative space-y-10 lg:space-y-14 lg:pl-12",
        className
      )}
    >
      {/* Vertical rail — desktop only. Inset top/bottom so it doesn't extend past the first/last dot. */}
      <span
        aria-hidden="true"
        className="absolute left-3 top-3 bottom-3 hidden w-px bg-slate-200 lg:block"
      />
      {milestones.map((m) => (
        <li key={m.year} className="relative">
          {/* Dot on the rail — desktop only. Slightly larger and copper for major milestones. */}
          <span
            aria-hidden="true"
            className={cn(
              "absolute -left-[33px] top-2 hidden rounded-full ring-4 ring-white lg:block",
              m.major ? "h-3 w-3 bg-accent" : "h-2 w-2 bg-slate-300"
            )}
          />
          <MilestoneCard milestone={m} />
        </li>
      ))}
    </ol>
  );
}
