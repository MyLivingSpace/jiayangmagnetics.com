import PageHero from "@/components/PageHero";
import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CertificationsBand from "@/components/CertificationsBand";
import CustomerLogoWall from "@/components/CustomerLogoWall";
import MilestoneTimeline from "@/components/MilestoneTimeline";
import SmartImage from "@/components/SmartImage";
import SampleQuoteBanner from "@/components/SampleQuoteBanner";
import { company } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Built on 23+ Years of Magnetic Manufacturing",
  description: `${company.brand} is the international brand of ${company.legalName} — a Chinese magnetic component manufacturer in operation since May 2002.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built on 23+ Years of Magnetic Manufacturing"
        lead={`${company.brand} is the international brand of ${company.legalName} — founded in May 2002, with two production bases in Guangdong and Hubei.`}
      />

      {/* COMPANY OVERVIEW */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Company Overview"
              title="A specialized manufacturer of magnetic components for the global energy transition."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Founded in May 2002 with a registered capital of RMB 60
                million, {company.legalName} is a specialized manufacturer of
                magnetic components with integrated capabilities spanning
                research and development, manufacturing, and commercialization.
                The company operates two major production bases in Guangdong
                and Hubei provinces and employs approximately 1,500 people.
              </p>
              <p>
                In core magnetic materials and technologies, Jiayang maintains
                selected nanocrystalline core processing capabilities alongside
                qualified core sourcing and validation for ferrite and amorphous
                materials. Dedicated facilities for tooling and plastic injection
                molding support integrated transformer and inductor manufacturing,
                assembly, encapsulation, and qualification.
              </p>
              <p>
                Industry–academia R&amp;D collaboration with Central South
                University. Member of the China Power Supply Society, the
                Guangdong Transformer Association, and the Guangdong Magnetic
                Components Industry Association.
              </p>
            </div>
          </div>
          <SmartImage
            src="/images/about/company-overview-01.jpg"
            alt="Jiayang Magnetics company overview"
            fallbackLabel="Representative company photo"
            ratio="3/4"
          />
        </div>

        {/* Facts panel */}
        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-slate-200 pt-10 md:grid-cols-4">
          {[
            { k: "Founded", v: "May 2002" },
            { k: "Registered capital", v: "RMB 60M" },
            { k: "Employees", v: "~1,500" },
            { k: "R&D engineers", v: "112" },
            { k: "Floor area", v: "60,000 ㎡" },
            { k: "Production bases", v: "2 (Guangdong, Hubei)" },
            { k: "Quality systems", v: "ISO 9001 · IATF 16949" },
            { k: "Environmental", v: "ISO 14001" },
          ].map((item) => (
            <div key={item.k}>
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                {item.k}
              </dt>
              <dd className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
                {item.v}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* BRAND & LEGAL ENTITY — the key trust section */}
      <Section tone="muted" id="brand">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Brand & Legal Entity"
              title="One company, two faces."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                <span className="font-medium text-slate-900">
                  {company.legalName}
                </span>{" "}
                is the legal entity that designs, manufactures, and ships
                every product on this site. We have operated under that name
                in China since 2002 and continue to serve our domestic
                customers under it.{" "}
                <span className="font-medium text-slate-900">
                  Jiayang Magnetics
                </span>{" "}
                is the international brand we use to engage customers outside
                China — it gives us a clearer, more pronounceable identity in
                global markets while ensuring full transparency about the
                manufacturer behind every order.
              </p>
              <p>
                All quotations, contracts, invoices, and shipping documents
                are issued in the name of {company.legalName}.
              </p>
            </div>
          </div>

          {/* Company card */}
          <div className="border border-slate-200 bg-white p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Company card
            </div>
            <dl className="mt-5 space-y-4 text-sm">
              <Row k="Legal name" v={`${company.legalName}\n（${company.legalNameZh}）`} />
              <Row k="International brand" v="Jiayang Magnetics" />
              <Row k="Founded" v="May 2002" />
              <Row k="Registered capital" v={company.registeredCapital} />
              <Row
                k="Headquarters"
                v="Huizhou Industrial Park, Boluo County, Guangdong, China"
              />
              <Row k="Domestic website" v={company.domesticSite} />
            </dl>
          </div>
        </div>
      </Section>

      {/* MILESTONES — vertical timeline with major/minor visual differentiation */}
      <Section tone="white" id="milestones">
        <SectionHeading
          eyebrow="Milestones"
          title="Two decades of magnetic manufacturing."
        />
        <div className="mt-14 max-w-4xl">
          <MilestoneTimeline />
        </div>
      </Section>

      {/* CUSTOMER RELATIONSHIPS — text-only references, grouped by sector */}
      <Section tone="white" id="customer-relationships">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Customer Relationships"
              title="Long-term OEM customer relationships."
            />
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Jiayang has served appliance, electronics, motor-drive, EV charging,
              and renewable-energy customers across multiple product generations.
              Selected customer references below represent established OEM
              relationships and are not an exhaustive list of all customers.
            </p>
          </div>
          <CustomerLogoWall density="compact" />
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section tone="muted" id="certifications">
        <SectionHeading
          eyebrow="Certifications"
          title="Certified to international standards."
          lead="Download available certificate files from Resources. Additional documents are available on request."
        />
        <p className="mt-4 text-sm text-slate-600">
          Quick download link:{" "}
          <Link
            href="/resources#downloads-proof-documents"
            className="text-slate-900 underline-offset-4 hover:underline"
          >
            Resources — Downloads & proof documents
          </Link>
          .
        </p>
        <div className="mt-10">
          <CertificationsBand />
        </div>
      </Section>

      {/* FACILITY */}
      <Section tone="white" id="facility">
        <SectionHeading
          eyebrow="Facility"
          title="60,000 ㎡ across two production bases."
          lead="Our Huizhou Industrial Park (operational since November 2023) and Wuhan/Xiantao bases support transformer winding, assembly, encapsulation, and final test, with selected magnetic core processing capabilities on-site."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <figure>
            <SmartImage
              src="/images/facility/jiayang-industrial-park-01.jpg"
              alt="Jiayang Industrial Park, Huizhou"
              fallbackLabel="Jiayang Industrial Park"
              ratio="4/3"
            />
            <figcaption className="mt-3 text-sm text-slate-500">
              Jiayang Industrial Park, Huizhou
            </figcaption>
          </figure>
          <figure>
            <SmartImage
              src="/images/facility/winding-production-line-01.jpg"
              alt="Winding production line"
              fallbackLabel="Winding production line"
              ratio="4/3"
            />
            <figcaption className="mt-3 text-sm text-slate-500">
              Winding line
            </figcaption>
          </figure>
          <figure>
            <SmartImage
              src="/images/facility/testing-lab-01.jpg"
              alt="Testing laboratory"
              fallbackLabel="Testing laboratory"
              ratio="4/3"
            />
            <figcaption className="mt-3 text-sm text-slate-500">
              Test laboratory
            </figcaption>
          </figure>
        </div>
      </Section>

      <SampleQuoteBanner />
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-3">
      <dt className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
        {k}
      </dt>
      <dd className="whitespace-pre-line text-sm text-slate-800">{v}</dd>
    </div>
  );
}
