import Container from "./Container";
import CTAButton from "./CTAButton";

/**
 * Full-width Sample / Quote conversion banner (per strategy doc Section 2,
 * Section 10 of homepage). Used at the bottom of the homepage and as a
 * page-level closer on most secondary pages.
 */
export default function SampleQuoteBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <Container className="relative grid gap-8 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-amber-300">
            <span className="accent-rule" />
            <span>Have a power conversion design?</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Let our magnetics engineers help.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Send your specs and we will respond within one business day with a
            technical assessment, sample availability, and indicative pricing.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
          <CTAButton href="/contact" variant="primary-on-dark">
            Request a Sample or Quote
          </CTAButton>
          <CTAButton
            href="/contact?intent=technical"
            variant="ghost"
            className="text-slate-200 hover:text-white"
          >
            Talk to an Engineer
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
