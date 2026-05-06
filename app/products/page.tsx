import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import SampleQuoteBanner from "@/components/SampleQuoteBanner";
import CTAButton from "@/components/CTAButton";
import { productFamilies } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magnetic Components for Power Conversion",
  description:
    "Transformers, inductors, magnetic cores, and fully customized magnetic assemblies — designed and built at our Huizhou and Hubei facilities using ferrite, amorphous, and selected nanocrystalline core technologies.",
  openGraph: {
    title: "Magnetic Components for Power Conversion | Jiayang Magnetics",
    description:
      "Five product families across transformers, inductors, magnetic cores, and custom magnetic solutions.",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Magnetic Components Engineered for Power Conversion"
        lead="Browse by product family, then by product series — each series has a dedicated page with features, applications, and published specifications or drawings where available. Transformers, inductors, magnetic cores, and customized magnetic assemblies are built at Huizhou and Hubei using ferrite, amorphous, and selected nanocrystalline core technologies with qualified core sourcing."
      />

      <Section tone="white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productFamilies.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        {/* "Don't see what you need?" — per strategy doc Section 3 */}
        <div
          id="custom"
          className="mt-16 scroll-mt-28 border border-slate-200 bg-slate-50 p-8 lg:p-10"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Custom magnetic solutions
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Don&rsquo;t see what you need?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Most of what we ship is co-engineered. If your topology needs
                something outside the standard families,{" "}
                <Link
                  href="/products#custom"
                  className="text-slate-900 underline-offset-4 hover:underline"
                >
                  Custom Magnetic Solutions
                </Link>{" "}
                takes you from schematic to validated prototype to mass
                production.
              </p>
            </div>
            <CTAButton href="/contact">Request a Sample or Quote</CTAButton>
          </div>
        </div>
      </Section>

      <SampleQuoteBanner />
    </>
  );
}
