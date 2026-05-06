import Container from "./Container";
import { trustPoints } from "@/lib/content";

/**
 * Single most important block for the first 5 seconds (per strategy doc
 * Section 2 / Section 16). Compact horizontal band, no scrolling. The copper
 * accent dot in front of each label ties the visual system together without
 * adding ornament.
 */
export default function TrustStrip() {
  return (
    <div className="border-y border-slate-200 bg-slate-50">
      <Container className="py-6 lg:py-7">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm md:justify-between">
          {trustPoints.map((p) => (
            <li
              key={p.label}
              className="flex items-center gap-2 text-slate-700"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              <span className="font-medium tracking-tight text-slate-900">
                {p.label}
              </span>
              {p.sub ? (
                <span className="hidden text-slate-500 lg:inline">
                  &nbsp;·&nbsp; {p.sub}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
