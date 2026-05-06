import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "./Container";
import CTAButton from "./CTAButton";
import SmartImage from "./SmartImage";

/**
 * DetailHero — used by both product and application detail pages.
 *
 * Visual: dark slate hero, breadcrumbs, eyebrow, H1, lead paragraph,
 * primary + secondary CTAs, and an optional product/family image on the
 * right (4/3 ratio, falls back to clean placeholder when missing).
 */

type CTA = { label: string; href: string };

export default function DetailHero({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  imageFallbackLabel,
  primaryCta,
  secondaryCta,
}: {
  /** Optional breadcrumb trail — e.g. [{label: "Products", href: "/products"}] */
  breadcrumbs?: { label: string; href: string }[];
  eyebrow?: string;
  title: string;
  lead?: string;
  image?: string;
  imageAlt?: string;
  imageFallbackLabel?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
}) {
  return (
    <header className="relative overflow-hidden bg-slate-900 text-white">
      {/* Subtle grid texture — same as PageHero. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <Container className="relative py-16 lg:py-24">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-1 text-xs text-slate-400"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1">
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-white"
                >
                  {crumb.label}
                </Link>
                {i < breadcrumbs.length - 1 ? (
                  <ChevronRight
                    size={12}
                    className="text-slate-500"
                    aria-hidden="true"
                  />
                ) : null}
              </span>
            ))}
          </nav>
        ) : null}

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            {eyebrow ? (
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-amber-300">
                <span className="accent-rule" />
                <span>{eyebrow}</span>
              </div>
            ) : null}
            <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h1>
            {lead ? (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                {lead}
              </p>
            ) : null}
            {(primaryCta || secondaryCta) ? (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {primaryCta ? (
                  <CTAButton href={primaryCta.href} variant="primary-on-dark">
                    {primaryCta.label}
                  </CTAButton>
                ) : null}
                {secondaryCta ? (
                  <CTAButton
                    href={secondaryCta.href}
                    variant="ghost"
                    className="text-slate-200 hover:text-white"
                  >
                    {secondaryCta.label}
                  </CTAButton>
                ) : null}
              </div>
            ) : null}
          </div>

          {image ? (
            <div className="hidden lg:block">
              <SmartImage
                src={image}
                alt={imageAlt ?? title}
                fallbackLabel={imageFallbackLabel ?? "Product image"}
                ratio="4/3"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
