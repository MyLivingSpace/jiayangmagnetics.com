import Link from "next/link";
import DetailHero from "./DetailHero";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProductSeriesCard from "./ProductSeriesCard";
import RelatedApplications from "./RelatedApplications";
import CTAButton from "./CTAButton";
import CTASection from "./CTASection";
import SampleQuoteBanner from "./SampleQuoteBanner";
import type { ProductFamily } from "@/lib/content";
import type { ProductSeries } from "@/lib/productSeries";

/**
 * ProductFamilyOverviewLayout — composes a /products/[family] page.
 *
 * Renders:
 *   - hero (family name, positioning, dual CTAs)
 *   - family description (what's in this family)
 *   - product series grid (series cards) — links to series detail pages
 *   - "How to choose" guidance
 *   - typical applications
 *   - related application cross-links
 *   - page-level CTA
 *
 * For families without series (Custom Magnetic Solutions), the series
 * grid is replaced with an explanatory block and a strong CTA toward the
 * sample/quote form.
 */
export default function ProductFamilyOverviewLayout({
  family,
  seriesEntries,
  relatedApplications,
}: {
  family: ProductFamily;
  /** Resolved series entries (slug + ProductSeries) under this family. */
  seriesEntries: { slug: string; series: ProductSeries }[];
  /** Application slugs typically supported by this family. */
  relatedApplications: string[];
}) {
  const hasSeries = seriesEntries.length > 0;

  return (
    <>
      <DetailHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: family.name, href: `/products/${family.slug}` },
        ]}
        eyebrow="Product family"
        title={family.name}
        lead={family.description}
        image={family.image}
        imageAlt={`${family.name} — family image`}
        imageFallbackLabel="Representative product family image"
        primaryCta={{
          label: "Request a Sample or Quote",
          href: `/contact?intent=samples&product=${encodeURIComponent(family.name)}`,
        }}
        secondaryCta={{
          label: "Talk to an Engineer",
          href: "/contact?intent=technical",
        }}
      />

      {/* Series grid (if any) */}
      {hasSeries ? (
        <Section tone="white">
          <SectionHeading
            eyebrow="Product Series"
            title={`${family.name} — explore each series.`}
            lead="Each series below has its own detail page with features, applications, and any available specifications, schematics, or comparison data."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seriesEntries.map(({ slug, series }) => (
              <ProductSeriesCard
                key={slug}
                slug={slug}
                series={series}
              />
            ))}
          </div>
        </Section>
      ) : (
        // Custom Magnetic Solutions — service-oriented family, no series cards.
        <Section tone="white">
          <SectionHeading
            eyebrow="Engagement model"
            title="Custom magnetic solutions — co-engineered with our team."
            lead="Custom Magnetic Solutions is a service offering rather than a fixed product line. We start from your topology and constraints, select qualified core materials, and deliver a validated prototype before pilot and mass production."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Discovery — schematic, topology, target volumes",
              "Engineering selection — core, winding, insulation",
              "Prototype build — sample with characterization data",
              "Pilot & mass production — IATF 16949 process",
            ].map((step, i) => (
              <li
                key={step}
                className="border border-slate-200 bg-white p-5"
              >
                <div className="text-xs font-medium tracking-[0.18em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {step}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <CTAButton
              href="/contact?intent=technical"
              variant="primary"
            >
              Co-engineer with our magnetics team
            </CTAButton>
          </div>
        </Section>
      )}

      {/* How to choose (only for families with multiple series) */}
      {seriesEntries.length > 1 ? (
        <Section tone="muted">
          <SectionHeading
            eyebrow="How to choose"
            title="Picking the right series."
            lead="The series above are organized by topology and end-system role. If you're not sure which series fits your design, send us your topology and target operating point — our engineering team will reply with a recommendation."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <HowToChooseTile
              title="By topology"
              body="High-frequency vs power-frequency designs, planar vs wound construction, single-phase vs three-phase configurations."
            />
            <HowToChooseTile
              title="By application"
              body="Match the series to your end-system: EV charging, solar inverter, industrial power supply, appliance, or motor drive."
            />
            <HowToChooseTile
              title="By customization need"
              body="If a standard series does not fit, see Custom Magnetic Solutions — we co-engineer from your specifications."
            />
          </div>
          <div className="mt-8 text-sm">
            <Link
              href="/products/custom-magnetic-solutions"
              className="text-slate-900 underline-offset-4 hover:underline"
            >
              See Custom Magnetic Solutions →
            </Link>
          </div>
        </Section>
      ) : null}

      {/* Family-level features summary */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Family capabilities"
          title="What this family supports across projects."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              Typical applications
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              {family.typicalApplications}
            </p>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              Key capabilities
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              {family.keyCapabilities}
            </p>
          </div>
        </div>
      </Section>

      {/* Related applications */}
      {relatedApplications.length > 0 ? (
        <Section tone="muted">
          <SectionHeading
            eyebrow="Related Applications"
            title="Where this family supports our customers."
          />
          <div className="mt-12">
            <RelatedApplications slugs={relatedApplications} />
          </div>
        </Section>
      ) : null}

      <CTASection
        eyebrow="Engineering review"
        title="Send us your specifications for engineering review."
        body="A qualified magnetics engineer will reply within one business day with sample availability, technical assessment, and indicative pricing as appropriate to your request."
        primary={{
          href: `/contact?intent=samples&product=${encodeURIComponent(family.name)}`,
          label: "Request a Sample or Quote",
        }}
        secondary={{
          href: "/contact?intent=technical",
          label: "Talk to an Engineer",
        }}
      />

      <SampleQuoteBanner />
    </>
  );
}

function HowToChooseTile({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="border-t border-slate-200 pt-6">
      <h3 className="text-sm font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}
