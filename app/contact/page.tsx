import { Phone, Mail, Clock, Building2, type LucideIcon } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SampleQuoteForm from "@/components/SampleQuoteForm";
import { company } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Sample or Quote",
  description:
    "Tell us about your magnetic component requirements. Our engineering team will respond within one business day with sample availability, technical assessment, and indicative pricing.",
};

/**
 * Google Maps search — lead with Chinese street address + legal name so the
 * pin targets the new park (时尚路2号), not legacy listings under the old name.
 */
function mapsSearchQuery(): string {
  return `${company.addressZh} ${company.legalNameZh}`;
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const sp = await searchParams;
  const mapQ = encodeURIComponent(mapsSearchQuery());
  const mapEmbedSrc = `https://maps.google.com/maps?q=${mapQ}&z=17&hl=zh-CN&output=embed`;
  const mapOpenHref = `https://www.google.com/maps/search/?api=1&query=${mapQ}&hl=zh-CN`;

  const initialIntent =
    sp.intent === "samples" ||
    sp.intent === "pricing" ||
    sp.intent === "both" ||
    sp.intent === "technical"
      ? sp.intent
      : undefined;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a Sample or Quote"
        lead="Tell us about your magnetic component requirements. Our engineering team will respond within one business day with sample availability, technical assessment, and indicative pricing."
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          {/* LEFT — FORM */}
          <SampleQuoteForm initialIntent={initialIntent} />

          {/* RIGHT — DIRECT CONTACT (premium card) */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-slate-200 bg-slate-900 p-8 text-slate-200">
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-300">
                Direct contact
              </div>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
                Speak with our engineering team.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                For procurement records and contracts, our legal entity is{" "}
                <span className="font-medium text-white">
                  {company.legalName}
                </span>
                .
              </p>

              <ul className="mt-8 space-y-5 text-sm">
                <ContactRow icon={Building2} label="Headquarters">
                  <span className="block">{company.address}</span>
                  <span className="mt-2 block text-slate-400">
                    {company.addressZh}
                  </span>
                </ContactRow>
                <ContactRow icon={Phone} label="Phone">
                  <a
                    href={`tel:${company.phones.main.replace(/\s/g, "")}`}
                    className="block text-white hover:text-amber-300"
                  >
                    {company.phones.main}{" "}
                    <span className="text-slate-500">(main)</span>
                  </a>
                  <a
                    href={`tel:${company.phones.sales.replace(/\s/g, "")}`}
                    className="block text-white hover:text-amber-300"
                  >
                    {company.phones.sales}{" "}
                    <span className="text-slate-500">(sales)</span>
                  </a>
                </ContactRow>
                <ContactRow icon={Mail} label="Email">
                  <a
                    href={`mailto:${company.emails.sales}`}
                    className="block text-white hover:text-amber-300"
                  >
                    {company.emails.sales}{" "}
                    <span className="text-slate-500">— sales</span>
                  </a>
                  <a
                    href={`mailto:${company.emails.engineering}`}
                    className="block text-white hover:text-amber-300"
                  >
                    {company.emails.engineering}{" "}
                    <span className="text-slate-500">— engineering</span>
                  </a>
                </ContactRow>
                <ContactRow icon={Clock} label="Business hours">
                  Mon–Fri · 09:00–18:00 GMT+8
                </ContactRow>
              </ul>
            </div>

            <div className="mt-6 border border-slate-200 bg-slate-50 text-xs text-slate-600">
              <div className="border-b border-slate-200 p-5">
                <div className="font-medium uppercase tracking-[0.16em] text-slate-700">
                  Location
                </div>
                <p className="mt-2 leading-relaxed">{company.address}</p>
                <p className="mt-2 leading-relaxed text-slate-500">
                  {company.addressZh}
                </p>
                <p className="mt-2 leading-relaxed">
                  Jiayang Industrial Park (operational since November 2023).
                  Map search uses the Chinese address and legal name so the pin
                  targets the new park; confirm reception and gate access
                  before visiting.
                </p>
                <p className="mt-3">
                  <a
                    href={mapOpenHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-900 underline underline-offset-4"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </div>
              <div className="relative aspect-[4/3] w-full bg-slate-200">
                <iframe
                  title={`Map — ${company.legalNameZh}`}
                  src={mapEmbedSrc}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </aside>
        </div>

        {/* REASSURANCE LINES — per strategy doc Section 7 */}
        <div className="mt-16 grid gap-6 border-t border-slate-200 pt-10 md:grid-cols-2">
          <p className="text-sm leading-relaxed text-slate-600">
            <span className="font-medium text-slate-900">
              All inquiries are reviewed by a qualified magnetics engineer,
            </span>{" "}
            not a generic sales mailbox.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            <span className="font-medium text-slate-900">
              Sample requests from qualified projects are typically
              prioritized.
            </span>{" "}
            Please include your topology and target production volumes so our
            engineering team can route the request correctly and confirm
            sample availability and lead time in the first reply.
          </p>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <Icon
        size={16}
        className="mt-0.5 flex-shrink-0 text-slate-500"
        aria-hidden="true"
      />
      <div>
        <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
          {label}
        </div>
        <div className="mt-1 text-sm leading-relaxed text-slate-200">
          {children}
        </div>
      </div>
    </li>
  );
}
