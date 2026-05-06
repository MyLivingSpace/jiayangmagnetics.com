/**
 * Capability pillar block. Used on the homepage Why Jiayang grid (4–6 pillars)
 * and on the Capabilities landing page. Number prefix gives the grid a
 * "specification sheet" rhythm rather than a marketing-tile rhythm.
 */
export default function CapabilityPillar({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <div className="border-t border-slate-200 pt-6">
      <div className="text-xs font-medium tracking-[0.18em] text-accent">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="mt-3 text-base font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}
