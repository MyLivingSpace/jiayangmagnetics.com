import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for the ${company.brand} website. Operated by ${company.legalName}.`,
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        lead="These terms govern use of this website. They do not replace purchase agreements, NDAs, or specifications negotiated for your program."
      />
      <Section tone="white">
        <div className="max-w-3xl space-y-6 text-sm leading-relaxed text-slate-600">
          <p>
            By accessing this site, you agree to these terms. The site is
            provided by {company.legalName} for information about{" "}
            {company.brand} and its capabilities. Content is provided “as is”
            for general information; it is not an offer to sell until confirmed
            under your contract or order documentation.
          </p>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Intellectual property
            </h2>
            <p className="mt-3">
              Text, layout, and branding on this site are owned by or licensed
              to {company.legalName}. You may not copy or redistribute materials
              for commercial use without permission.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Technical information
            </h2>
            <p className="mt-3">
              Product descriptions, curves, and tables summarize typical
              capabilities. Always rely on datasheets, drawings, and written
              approvals issued for your specific part number and revision.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Limitation of liability
            </h2>
            <p className="mt-3">
              To the extent permitted by law, {company.legalName} is not liable
              for indirect or consequential damages arising from use of this site
              or reliance on its content. Your counsel should adapt this section
              for the jurisdictions you serve.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">Changes</h2>
            <p className="mt-3">
              We may update these terms from time to time. Continued use of the
              site after changes constitutes acceptance of the revised terms.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
