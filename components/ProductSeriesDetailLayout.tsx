import DetailHero from "./DetailHero";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProductGallery from "./ProductGallery";
import DiagramGallery from "./DiagramGallery";
import SpecTable from "./SpecTable";
import ComparisonTable from "./ComparisonTable";
import CharacteristicsTable from "./CharacteristicsTable";
import EngineeringChallengeList from "./EngineeringChallengeList";
import RelatedApplications from "./RelatedApplications";
import CTASection from "./CTASection";
import SampleQuoteBanner from "./SampleQuoteBanner";
import type { ProductFamily } from "@/lib/content";
import type { ProductSeries } from "@/lib/productSeries";

/**
 * ProductSeriesDetailLayout — composes a /products/[family]/[series] page.
 *
 * Each section is conditional on the underlying data being present, so
 * series with summary-only content render shorter pages without empty
 * schematic / spec / comparison sections.
 */
export default function ProductSeriesDetailLayout({
  family,
  series,
  seriesSlug,
}: {
  family: ProductFamily;
  series: ProductSeries;
  seriesSlug: string;
}) {
  return (
    <>
      <DetailHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: family.name, href: `/products/${family.slug}` },
          {
            label: series.name,
            href: `/products/${family.slug}/${seriesSlug}`,
          },
        ]}
        eyebrow={`Product series · ${family.name}`}
        title={series.name}
        lead={series.positioning}
        image={series.image}
        imageAlt={`${series.name} — product image`}
        imageFallbackLabel="Representative product image"
        primaryCta={{
          label: "Request a Sample or Quote",
          href: `/contact?intent=samples&product=${encodeURIComponent(series.name)}`,
        }}
        secondaryCta={{
          label: "Talk to an Engineer",
          href: "/contact?intent=technical",
        }}
      />

      {/* Features & Applications */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Features"
              title="Engineered for power conversion."
            />
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700">
              {series.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Applications"
              title="Where this series is used."
            />
            <p className="mt-6 text-sm leading-relaxed text-slate-700">
              {series.applicationsSummary}
            </p>
          </div>
        </div>
      </Section>

      {/* Product gallery */}
      {series.galleryImages && series.galleryImages.length > 0 ? (
        <Section tone="muted">
          <SectionHeading
            eyebrow="Product Gallery"
            title="Representative product images."
          />
          <div className="mt-12">
            <ProductGallery images={series.galleryImages} columns={3} />
          </div>
        </Section>
      ) : null}

      {/* Schematic & Dimensions */}
      {series.schematics && series.schematics.length > 0 ? (
        <Section tone="white">
          <SectionHeading
            eyebrow="Engineering"
            title="Schematic & Dimensions"
            lead="Final dimensions vary by design and customer requirements."
          />
          <div className="mt-12">
            <DiagramGallery
              diagrams={series.schematics}
              columns={seriesSlug === "high-low-frequency-transformers" ? 1 : 3}
            />
          </div>
        </Section>
      ) : null}

      {/* Typical Circuit Diagram */}
      {series.circuitDiagrams && series.circuitDiagrams.length > 0 ? (
        <Section tone="muted">
          <SectionHeading
            eyebrow="Engineering"
            title="Typical Circuit Diagram"
          />
          <div className="mt-12">
            <DiagramGallery
              diagrams={series.circuitDiagrams}
              columns={series.circuitDiagrams.length === 1 ? 1 : 2}
            />
          </div>
        </Section>
      ) : null}

      {/* Characteristics + Comparison + Spec tables */}
      {series.characteristicsTables && series.characteristicsTables.length > 0
        ? (
            <Section tone="white">
              <SectionHeading
                eyebrow="Characteristics"
                title="Grades, features, and typical applications."
                lead="Reference characteristics for engineering review. Final parameters depend on design requirements and qualification results."
              />
              <div className="mt-12 space-y-12">
                {series.characteristicsTables.map((c, i) => (
                  <CharacteristicsTable key={i} table={c} />
                ))}
              </div>
            </Section>
          )
        : null}

      {series.comparisonTable ||
      (series.specTables && series.specTables.length > 0) ? (
        <Section tone={series.characteristicsTables ? "muted" : "white"}>
          <SectionHeading
            eyebrow="Specifications"
            title="Reference data and representative specifications."
            lead="Final specifications are confirmed at order. Additional ratings and dimensions are available during engineering review."
          />
          <div className="mt-12 space-y-12">
            {series.comparisonTable ? (
              <ComparisonTable table={series.comparisonTable} />
            ) : null}
            {series.specTables?.map((spec, i) => (
              <SpecTable key={i} table={spec} />
            ))}
          </div>
        </Section>
      ) : !series.characteristicsTables ? (
        <Section tone="white">
          <SectionHeading
            eyebrow="Specifications"
            title="Specifications"
            lead="Detailed specifications for this series are available during engineering review. Send us your requirements and our engineering team will reply with the relevant parameter ranges."
          />
        </Section>
      ) : null}

      {/* Customization */}
      {series.customizationOptions && series.customizationOptions.length > 0 ? (
        <Section tone="muted">
          <SectionHeading
            eyebrow="Customization"
            title="Design & Customization Options"
            lead="Every project starts with engineering selection. Common customizable parameters are listed below; the full design surface is broader."
          />
          <div className="mt-10">
            <EngineeringChallengeList
              items={series.customizationOptions}
              columns={2}
            />
          </div>
        </Section>
      ) : null}

      {/* Quality & Testing */}
      {series.qualityNotes && series.qualityNotes.length > 0 ? (
        <Section tone="white">
          <SectionHeading
            eyebrow="Quality & Testing"
            title="From supplier qualification to final test."
          />
          <div className="mt-10">
            <EngineeringChallengeList
              items={series.qualityNotes}
              columns={2}
            />
          </div>
        </Section>
      ) : null}

      {/* Related applications */}
      {series.relatedApplications && series.relatedApplications.length > 0 ? (
        <Section tone="muted">
          <SectionHeading
            eyebrow="Related Applications"
            title="Where this series supports our customers."
          />
          <div className="mt-12">
            <RelatedApplications slugs={series.relatedApplications} />
          </div>
        </Section>
      ) : null}

      <CTASection
        eyebrow="Engineering review"
        title="Send us your specifications for engineering review."
        body="A qualified magnetics engineer will reply within one business day with sample availability, technical assessment, and indicative pricing as appropriate to your request."
        primary={{
          href: `/contact?intent=samples&product=${encodeURIComponent(series.name)}`,
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
