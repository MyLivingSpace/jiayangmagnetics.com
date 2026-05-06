import Container from "./Container";

/**
 * Reusable page hero — used on every secondary page (Products, Applications,
 * Capabilities, About, Resources, Contact). Compact (one screen of vertical
 * space), dark, and consistent. The copper accent rule above the H1 anchors
 * the eye and matches the rest of the design system.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="relative overflow-hidden bg-slate-900 text-white">
      {/* Subtle grid texture — the same one used in PlaceholderImage. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <Container className="relative py-20 lg:py-28">
        {eyebrow ? (
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-amber-300">
            <span className="accent-rule" />
            <span>{eyebrow}</span>
          </div>
        ) : null}
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {lead}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
