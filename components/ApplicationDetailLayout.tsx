import DetailHero from "./DetailHero";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import EngineeringChallengeList from "./EngineeringChallengeList";
import RelatedProducts from "./RelatedProducts";
import CTASection from "./CTASection";
import SampleQuoteBanner from "./SampleQuoteBanner";
import type { Application } from "@/lib/content";
import type { ApplicationDetail } from "@/lib/applicationDetails";

/**
 * ApplicationDetailLayout — composes a full /applications/[slug] page from
 * (a) the lightweight Application overview entry (name, category, slug)
 * (b) the rich ApplicationDetail entry (positioning, systems, challenges,
 *     recommended products, quality considerations, optional CTA override).
 *
 * Same conditional-section pattern as ProductDetailLayout — a section only
 * renders when its underlying data is present.
 */
export default function ApplicationDetailLayout({
  application,
  detail,
  tier,
}: {
  application: Application;
  detail: ApplicationDetail;
  tier: "primary" | "established" | "emerging";
}) {
  const tierEyebrow =
    tier === "established"
      ? "Established Market"
      : tier === "emerging"
        ? "Emerging Application"
        : application.category;

  const primaryCta = detail.cta ?? {
    label: "Request a Sample or Quote",
    href: `/contact?intent=samples&industry=${encodeURIComponent(application.name)}`,
  };

  const secondaryCta = {
    label: "Talk to an Engineer",
    href: "/contact?intent=technical",
  };

  return (
    <>
      <DetailHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Applications", href: "/applications" },
          { label: application.name, href: `/applications/${application.slug}` },
        ]}
        eyebrow={tierEyebrow}
        title={application.name}
        lead={detail.positioning}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />

      {/* Why magnetics matter */}
      {detail.whyMagneticsMatter ? (
        <Section tone="white">
          <SectionHeading
            eyebrow="Why magnetics matter here"
            title="The role of magnetic components in this application."
          />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700">
            {detail.whyMagneticsMatter}
          </p>
        </Section>
      ) : null}

      {/* Typical systems + Engineering challenges */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Typical systems"
              title="Where these components ship."
            />
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700">
              {detail.systems.map((sys) => (
                <li key={sys} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent"
                  />
                  <span>{sys}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Engineering challenges"
              title="What our team designs around."
            />
            <div className="mt-6">
              <EngineeringChallengeList items={detail.challenges} />
            </div>
          </div>
        </div>
      </Section>

      {/* Quality / reliability considerations */}
      {detail.qualityConsiderations &&
      detail.qualityConsiderations.length > 0 ? (
        <Section tone="white">
          <SectionHeading
            eyebrow="Quality & Reliability"
            title="What we validate before shipping."
          />
          <div className="mt-10">
            <EngineeringChallengeList
              items={detail.qualityConsiderations}
              columns={2}
            />
          </div>
        </Section>
      ) : null}

      {/* Recommended products */}
      {detail.recommendedProducts && detail.recommendedProducts.length > 0 ? (
        <Section tone="muted">
          <SectionHeading
            eyebrow="Recommended Jiayang product families"
            title="Components that apply directly here."
          />
          <div className="mt-12">
            <RelatedProducts slugs={detail.recommendedProducts} />
          </div>
        </Section>
      ) : null}

      {/* Page-level CTA */}
      <CTASection
        eyebrow={tier === "emerging" ? "Co-engineering" : "Engineering review"}
        title={
          tier === "emerging"
            ? "Co-engineer with our magnetics team."
            : "Send us your specifications for engineering review."
        }
        body={
          tier === "emerging"
            ? "We're engaging with platform builders today as a co-engineering partner — share your topology and constraints and our engineering team will reply within one business day."
            : "A qualified magnetics engineer will reply within one business day with sample availability, technical assessment, and indicative pricing as appropriate to your request."
        }
        primary={primaryCta}
        secondary={secondaryCta}
      />

      <SampleQuoteBanner />
    </>
  );
}
