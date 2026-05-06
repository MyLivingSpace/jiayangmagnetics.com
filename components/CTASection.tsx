import Container from "./Container";
import CTAButton from "./CTAButton";

/**
 * Generic CTA section used as a page-level closer. Less heavy than the
 * SampleQuoteBanner — useful when a page already ends on a strong note
 * but still wants a final action.
 */
export default function CTASection({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  tone = "muted",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  tone?: "muted" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <section className={isDark ? "bg-slate-900 text-white" : "bg-slate-50"}>
      <Container className="grid gap-6 py-14 md:grid-cols-[1fr_auto] md:items-center md:py-16">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div
              className={
                "flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] " +
                (isDark ? "text-amber-300" : "text-accent")
              }
            >
              <span className="accent-rule" />
              <span>{eyebrow}</span>
            </div>
          ) : null}
          <h2
            className={
              "mt-3 text-2xl font-semibold tracking-tight md:text-3xl " +
              (isDark ? "text-white" : "text-slate-900")
            }
          >
            {title}
          </h2>
          {body ? (
            <p
              className={
                "mt-3 text-sm leading-relaxed md:text-base " +
                (isDark ? "text-slate-300" : "text-slate-600")
              }
            >
              {body}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <CTAButton
            href={primary.href}
            variant={isDark ? "primary-on-dark" : "primary"}
          >
            {primary.label}
          </CTAButton>
          {secondary ? (
            <CTAButton
              href={secondary.href}
              variant={isDark ? "ghost" : "secondary"}
              className={isDark ? "text-slate-200 hover:text-white" : ""}
            >
              {secondary.label}
            </CTAButton>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
