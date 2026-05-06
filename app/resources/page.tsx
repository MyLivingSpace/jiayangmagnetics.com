import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ResourceCard from "@/components/ResourceCard";
import FAQAccordion from "@/components/FAQAccordion";
import SampleQuoteBanner from "@/components/SampleQuoteBanner";
import {
  resourceDocuments,
  resourceCategories,
  type ResourceDocument,
} from "@/lib/proof";
import { faqs } from "@/lib/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources for Engineers & Procurement Teams",
  description:
    "Datasheets, application notes, certificates, and product catalog from Jiayang Magnetics — plus FAQs on samples, custom design, and quote requests.",
};

/**
 * Resources page (v8) — categorized downloads + FAQ.
 *
 * Documents are split into four categories (Product Catalog, Datasheets,
 * Certifications, Application Notes). Each card carries a status:
 *
 *   - "available"            — wired to a real PDF (none today)
 *   - "available-on-request" — routes to /contact?intent=technical&asset=...
 *   - "coming-soon"          — static, dimmed; neutral availability label
 *
 * The FAQ section uses safe, careful answers. The sample-policy answer is
 * deliberately framed as "depends on project" since Jiayang has not yet
 * locked a public sample policy (Appendix A item 19 of the strategy doc).
 */
export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Resources for Engineers & Procurement Teams"
        lead="Datasheets, application notes, technical articles, certificates, and our latest product catalog."
      />

      {/* Downloads by category */}
      <Section tone="white" id="downloads-proof-documents">
        <SectionHeading
          eyebrow="Downloads & proof documents"
          title="Documents available for download or on request."
          lead="Documents without a public download link show “Latest revision on request” — contact us for the current PDF or catalog excerpt. Items marked “Available on request” are sent by our engineering team after a short qualification exchange."
        />

        <div className="mt-12 space-y-12">
          {resourceCategories.map((category) => {
            const items = resourceDocuments.filter(
              (d) => d.category === category
            );
            if (items.length === 0) return null;
            return (
              <ResourceCategoryBlock
                key={category}
                category={category}
                items={items}
              />
            );
          })}
        </div>

        <p className="mt-10 text-xs text-slate-500">
          Need a document not listed here?{" "}
          <a
            href="/contact?intent=technical"
            className="text-slate-900 underline-offset-4 hover:underline"
          >
            Ask our engineering team →
          </a>
        </p>
      </Section>

      {/* FAQ */}
      <Section tone="muted" id="faq">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions."
          lead="If your question isn't answered here, send us a note via the contact form."
        />
        <div className="mt-10 max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <SampleQuoteBanner />
    </>
  );
}

/* ----------------------- local sub-component: category block ---------------------- */

function ResourceCategoryBlock({
  category,
  items,
}: {
  category: ResourceDocument["category"];
  items: ResourceDocument[];
}) {
  return (
    <section>
      <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
        {category}
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((doc) => (
          <ResourceCard key={doc.title} document={doc} />
        ))}
      </div>
    </section>
  );
}
