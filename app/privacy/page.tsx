import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${company.brand} handles information collected through this website. Operated by ${company.legalName}.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        lead="This notice describes how we treat information submitted through this website. For procurement, contracts, and formal data-processing agreements, use the channels listed on the Contact page."
      />
      <Section tone="white">
        <div className="max-w-3xl space-y-6 text-sm leading-relaxed text-slate-600">
          <p>
            {company.legalName} (“we”, “us”) operates the public website for
            the international brand {company.brand}. This page is a baseline
            disclosure for visitors; your counsel should review it before
            production launch if you require jurisdiction-specific policies or
            a full privacy program.
          </p>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Information you send us
            </h2>
            <p className="mt-3">
              When you use forms on this site (for example, sample or quotation
              requests), we collect the fields you submit so our engineering and
              sales teams can respond. Do not include export-controlled,
              customer-confidential, or personal data beyond what is needed for a
              business inquiry.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              How we use it
            </h2>
            <p className="mt-3">
              We use submissions to evaluate your request, correspond with you,
              and route the inquiry internally. A future revision of this notice
              will describe retention periods, subprocessors, and international
              transfers once those are finalized for your deployment.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">Contact</h2>
            <p className="mt-3">
              Questions about this notice:{" "}
              <a
                className="text-slate-900 underline underline-offset-4"
                href={`mailto:${company.emails.info}`}
              >
                {company.emails.info}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
