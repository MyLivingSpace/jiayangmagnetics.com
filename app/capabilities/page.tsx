import { ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import SmartImage from "@/components/SmartImage";
import PhotoGrid from "@/components/PhotoGrid";
import ProofGallerySection from "@/components/ProofGallerySection";
import CertificateCard from "@/components/CertificateCard";
import CertificateLightbox from "@/components/CertificateLightbox";
import SampleQuoteBanner from "@/components/SampleQuoteBanner";
import {
  facilitiesGallery,
  testingGallery,
  certificationDocuments,
  patentDocuments,
  recognitionDocuments,
  manufacturingProcess,
  testingMethods,
  qualityProcesses,
  type CertificateItem,
} from "@/lib/proof";
import { resolveImagePath } from "@/lib/imageExists";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities — Manufacturing, Testing & Quality",
  description:
    "Inside Jiayang's manufacturing operation: production facilities, testing capabilities, and quality systems across two production bases in Guangdong and Hubei.",
};

/**
 * Capabilities page — the main "what's actually inside the factory" surface.
 *
 * Order:
 *   1. Page hero
 *   2. Intro — "Inside Our Manufacturing Operation"
 *   3. Manufacturing Facilities & Production Lines (gallery)
 *   4. Testing & Inspection Capabilities (gallery)
 *   5. Certifications, Patents & Documentation (cert tiles)
 *   6. Five core capability sections (lighter, varied layouts)
 *   7. Sample/Quote banner
 *
 * Section eyebrows are simple category labels (no A/B/C alphabetical
 * prefixes) and the page reads as a finished customer-facing page rather
 * than internal strategy notes.
 */
export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="From Magnetic Design to Mass Production"
        lead="Integrated R&D, in-house transformer and inductor manufacturing, quality control, and testing across Huizhou and Hubei — with selected nanocrystalline core processing capabilities and qualified core sourcing."
      />

      {/* INTRO */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Inside our manufacturing operation"
          title="A closer look at our capabilities."
          lead="Explore our production facilities, testing capabilities, and quality systems across our Huizhou and Hubei manufacturing bases."
        />
      </Section>

      {/* MANUFACTURING FACILITIES & PRODUCTION LINES */}
      <Section tone="muted" className="!pt-0">
        <ProofGallerySection
          eyebrow="Manufacturing"
          title="Manufacturing Facilities & Production Lines"
          lead="Two production bases, 60,000 m² of total floor area, and an integrated component flow from core material selection and validation through winding, assembly, encapsulation, testing, and packaging."
        >
          <PhotoGrid items={facilitiesGallery} columns={4} />
        </ProofGallerySection>
      </Section>

      {/* TESTING & INSPECTION CAPABILITIES */}
      <Section tone="white">
        <ProofGallerySection
          eyebrow="Testing & Inspection"
          title="Testing & Inspection Capabilities"
          lead="Electrical, dielectric, environmental, and mechanical qualification across every product family — including incoming, in-process, and outgoing inspection."
        >
          <PhotoGrid items={testingGallery} columns={4} />
        </ProofGallerySection>
      </Section>

      {/* CERTIFICATIONS, PATENTS & DOCUMENTATION */}
      <Section tone="muted">
        <ProofGallerySection
          eyebrow="Quality & Compliance"
          title="Certifications, Patents & Documentation"
          lead="Quality systems, certifications, and technical documentation that support customer verification and long-term manufacturing credibility. Download available certificate files from Resources; additional documents are available on request."
        >
          <p className="mb-6 text-sm text-slate-600">
            Quick download link:{" "}
            <Link
              href="/resources#downloads-proof-documents"
              className="text-slate-900 underline-offset-4 hover:underline"
            >
              Resources — Downloads & proof documents
            </Link>
            .
          </p>
          <div className="space-y-12">
            <DocumentSubSection
              label="Certifications"
              items={certificationDocuments}
            />
            <DocumentSubSection label="Patents" items={patentDocuments} />
            <DocumentSubSection
              label="Recognition & Memberships"
              items={recognitionDocuments}
            />
          </div>
        </ProofGallerySection>
      </Section>

      {/* CORE CAPABILITY SECTIONS — five compact blocks */}

      {/* 01 — R&D and Engineering */}
      <Section tone="white" id="rd">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="R&D & Engineering"
              title="In-house magnetic design and co-engineering."
              lead="Our R&D team partners with customer engineering from schematic and topology to validated magnetic prototype. 112 R&D engineers across both facilities. Industry–academia R&D collaboration with Central South University."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Magnetic design, simulation, and prototyping support",
                "Co-engineering from customer schematic to validated prototype",
                "Sample lead times confirmed per project under NDA",
              ].map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-sm leading-relaxed text-slate-700"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <SmartImage
            src="/images/capabilities/rd-engineering-01.jpg"
            alt="R&D engineering bench"
            fallbackLabel="Representative R&D photo"
            ratio="4/3"
          />
        </div>
      </Section>

      {/* 02 — Manufacturing (with process flow) */}
      <Section tone="muted" id="manufacturing">
        <SectionHeading
          eyebrow="Manufacturing Process"
          title="Integrated, two-base production."
          lead="60,000 m² across two production bases, with multiple transformer lines and automated assembly lines. Selected nanocrystalline core processing capabilities are combined with qualified core supply chains and Jiayang's in-house winding, assembly, encapsulation, and testing — supported by incoming material inspection and supplier qualification at every stage."
        />

        {/* Process flow */}
        <div className="mt-10">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Manufacturing process
          </div>
          <ol className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {manufacturingProcess.map((step, i) => (
              <li
                key={step}
                className="relative flex items-center gap-3 border border-slate-200 bg-white px-4 py-4"
              >
                <span className="text-xs font-medium tracking-[0.16em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-slate-900">
                  {step}
                </span>
                {i < manufacturingProcess.length - 1 ? (
                  <ChevronRight
                    size={14}
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-slate-400 lg:block"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 03 — Quality Control */}
      <Section tone="white" id="quality">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <SmartImage
            src="/images/capabilities/quality-control-01.jpg"
            alt="Quality control inspection station"
            fallbackLabel="Representative quality-control photo"
            ratio="4/3"
          />
          <div>
            <SectionHeading
              eyebrow="Quality Control"
              title="ISO 9001, ISO 14001, and IATF 16949 — automotive-grade discipline."
              lead="Quality systems run end-to-end — from supplier qualification and core material validation through incoming, in-process, and outgoing inspection. PPAP and APQP support for automotive customers; closed-loop failure analysis."
            />
            <ul className="mt-6 space-y-3">
              {qualityProcesses.map((q) => (
                <li
                  key={q}
                  className="flex gap-3 text-sm leading-relaxed text-slate-700"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 04 — Testing & Reliability */}
      <Section tone="muted" id="testing">
        <SectionHeading
          eyebrow="Testing & Reliability"
          title="Electrical and environmental qualification in-house."
          lead="Reliability data is shared on request under NDA."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {testingMethods.map((t) => (
            <div
              key={t}
              className="border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800"
            >
              {t}
            </div>
          ))}
        </div>
      </Section>

      {/* 05 — Customization & NPI */}
      <Section tone="white" id="npi">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Customization & NPI"
              title="From sample to mass production."
              lead="Customer-specific design across core type, bobbin, turns, encapsulation, and mounting. NDA and IP handling are standard."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Customer-specific design (core, bobbin, turns, encapsulation, mounting)",
                "NDA and IP handling included",
                "Sample → prototype → pilot → mass production timeline",
              ].map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-sm leading-relaxed text-slate-700"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <SmartImage
            src="/images/capabilities/customization-npi-01.jpg"
            alt="Custom magnetic prototype build"
            fallbackLabel="Customization image"
            ratio="4/3"
          />
        </div>
      </Section>

      <SampleQuoteBanner />
    </>
  );
}

/* ------------------- Local helper: documentation sub-band ------------------ */

/**
 * Renders a labeled grid of CertificateCards. Each card whose underlying
 * image actually exists in /public is wrapped in a CertificateLightbox so
 * clicking opens the full-size scan in the modal. Cards without a
 * present-on-disk image render as static, non-clickable display cards.
 *
 * Local to this page because the wrapping logic is specific to how the
 * Capabilities page sources its data; if a second page needs the same
 * pattern, lift this into a shared component.
 */
function DocumentSubSection({
  label,
  items,
}: {
  label: string;
  items: CertificateItem[];
}) {
  return (
    <section>
      <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
        {label}
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((doc) => {
          const resolvedImage = doc.image ? resolveImagePath(doc.image) : null;
          const hasImage = Boolean(resolvedImage);
          const card = (
            <CertificateCard
              title={doc.title}
              kind={doc.kind}
              description={doc.description}
              image={resolvedImage ?? doc.image}
              clickable={hasImage}
            />
          );
          if (hasImage && resolvedImage) {
            return (
              <CertificateLightbox
                key={doc.title}
                src={resolvedImage}
                title={doc.title}
              >
                {card}
              </CertificateLightbox>
            );
          }
          return <div key={doc.title}>{card}</div>;
        })}
      </div>
    </section>
  );
}
