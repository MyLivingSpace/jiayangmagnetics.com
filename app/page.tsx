import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import TrustStrip from "@/components/TrustStrip";
import ProductCard from "@/components/ProductCard";
import ApplicationCard from "@/components/ApplicationCard";
import CapabilityPillar from "@/components/CapabilityPillar";
import CertificationsBand from "@/components/CertificationsBand";
import SampleQuoteBanner from "@/components/SampleQuoteBanner";
import SmartImage from "@/components/SmartImage";
import PhotoGrid from "@/components/PhotoGrid";
import CustomerLogoWall from "@/components/CustomerLogoWall";
import {
  productFamilies,
  primaryApplications,
  capabilityPillars,
  company,
  homepageCustomerReferenceGroups,
} from "@/lib/content";
import { homeManufacturingSnapshot } from "@/lib/proof";

/**
 * Homepage — v2 changes:
 *   - Hero subhead tightened (per v2 brief)
 *   - Hero right-side visual now a SmartImage (real photo when present,
 *     functional placeholder when missing) — replaces the abstract orange
 *     gradient placeholder
 *   - Manufacturing Snapshot is now a 4-card PhotoGrid sourced from
 *     lib/proof.ts, with credibility notes per card
 */
export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <Container className="relative grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-32">
          <div>
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-amber-300">
              <span className="accent-rule" />
              <span>Magnetic components manufacturer · since 2002</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Magnetic Components for EV Charging, Renewable Energy &amp;
              Industrial Power Systems
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              Jiayang Magnetics is the international brand of{" "}
              {company.legalName} — a magnetic component manufacturer founded
              in May 2002, designing and manufacturing transformers, inductors,
              and custom magnetic solutions using ferrite, amorphous, and
              selected nanocrystalline core technologies.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAButton href="/contact" variant="primary-on-dark">
                Request a Sample or Quote
              </CTAButton>
              <CTAButton
                href="/products"
                variant="ghost"
                className="text-slate-200 hover:text-white"
              >
                Explore Products
              </CTAButton>
            </div>
          </div>
          <div className="hidden lg:block">
            <SmartImage
              src="/images/hero/hero-magnetic-components.jpg"
              alt="Jiayang Magnetics — magnetic component close-up or factory view"
              fallbackLabel="Hero product / factory image"
              ratio="4/3"
            />
          </div>
        </Container>
      </section>

      {/* SECTION 2 — TRUST STRIP */}
      <TrustStrip />

      {/* SECTION 3 — WHO WE ARE */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A 23-year-old magnetics manufacturer, now built for the global energy transition."
            />
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Jiayang Magnetics designs and manufactures high-reliability
              magnetic components for power conversion systems. Operating from
              two production bases in Guangdong and Hubei, our team has
              supplied transformers, inductors, and custom magnetic solutions —
              built using ferrite, amorphous, and selected nanocrystalline core
              technologies — to EV charging, renewable energy, energy storage,
              and industrial power customers for more than two decades.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Jiayang Magnetics is the international brand of{" "}
              <span className="font-medium text-slate-900">
                {company.legalName}
              </span>
              .
            </p>
            <div className="mt-8">
              <CTAButton href="/about" variant="secondary">
                About Jiayang
              </CTAButton>
            </div>
          </div>
          <SmartImage
            src="/images/facility/jiayang-industrial-park-01.jpg"
            alt="Jiayang Industrial Park, Huizhou"
            fallbackLabel="Jiayang Industrial Park"
            ratio="4/3"
          />
        </div>
      </Section>

      {/* SECTION 4 — PRODUCT CATEGORIES */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Products"
          title="Magnetic components engineered for power conversion."
          lead="Five product families, supported by in-house transformer and inductor manufacturing, selected nanocrystalline core capabilities, qualified core sourcing, and final assembly and testing."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productFamilies.map((p) => (
            <ProductCard key={p.slug} product={p} variant="compact" />
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-accent"
          >
            See full product range
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* SECTION 5 — APPLICATIONS */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Applications"
          title="Built for the energy transition and industrial power."
          lead="Specialized magnetic solutions for EV charging, solar, wind, energy storage, industrial power, and smart-grid systems."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {primaryApplications.map((a) => (
            <ApplicationCard
              key={a.slug}
              application={a}
              variant="compact"
            />
          ))}
        </div>

        {/*
          Established-markets line — points readers who land on the homepage
          via an appliance or motor-drive search to the right place on the
          Applications page, without putting Home Appliances & HVAC into the
          primary positioning.
        */}
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-slate-600">
          Established markets also include{" "}
          <Link
            href="/applications/home-appliances-hvac"
            className="text-slate-900 underline-offset-4 hover:underline"
          >
            Home Appliances &amp; HVAC, motor-drive systems, and consumer
            power electronics
          </Link>
          .
        </p>

        <div className="mt-6">
          <Link
            href="/applications"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-accent"
          >
            Explore applications
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* SECTION — CUSTOMER REFERENCES (logo wall — between Applications and Why Jiayang) */}
      <Section tone="white" id="customer-references">
        <SectionHeading
          eyebrow="Customer References"
          title="Selected Customer References"
          lead="Public customer references from Jiayang's existing domestic website include appliance, electronics, motor-drive, EV charging, and renewable-energy companies."
        />
        <div className="mt-10">
          <CustomerLogoWall
            groups={homepageCustomerReferenceGroups}
            density="tight"
          />
        </div>
      </Section>

      {/* SECTION 6 — WHY JIAYANG */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Why Jiayang"
          title="Engineering depth, integrated component manufacturing, automotive-grade quality."
        />
        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {capabilityPillars.map((pillar, i) => (
            <CapabilityPillar
              key={pillar.title}
              index={i}
              title={pillar.title}
              body={pillar.body}
            />
          ))}
        </div>
      </Section>

      {/* SECTION 7 — MANUFACTURING SNAPSHOT (4-card photo grid) */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Manufacturing"
          title="60,000 m² across two bases — component manufacturing, process control, encapsulation, and testing."
          lead="Our Huizhou and Hubei facilities house winding, selected nanocrystalline core processing, core material preparation and validation, vacuum encapsulation, environmental testing, and electrical performance testing across multiple production lines and automated assembly lines."
        />
        <div className="mt-12">
          <PhotoGrid items={homeManufacturingSnapshot} columns={4} />
        </div>
        <div className="mt-10">
          <CTAButton href="/capabilities" variant="secondary">
            Tour our manufacturing capabilities
          </CTAButton>
        </div>
      </Section>

      {/* SECTION 8 — CERTIFICATIONS */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
          <CertificationsBand />
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 lg:justify-self-end">
            ISO 9001 and ISO 14001 management systems; IATF 16949 automotive
            quality discipline; UL- and CQC-certified products; RoHS-compliant.
            Full cert scans available on the{" "}
            <Link
              href="/about#certifications"
              className="text-slate-900 underline-offset-4 hover:underline"
            >
              About page
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* SECTION 10 — SAMPLE / QUOTE BANNER */}
      <SampleQuoteBanner />
    </>
  );
}
