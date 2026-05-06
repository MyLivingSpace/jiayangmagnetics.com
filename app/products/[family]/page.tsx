import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductFamilyOverviewLayout from "@/components/ProductFamilyOverviewLayout";
import { productFamilies } from "@/lib/content";
import { getSeriesForFamily } from "@/lib/productSeries";

/**
 * /products/[family] — product family overview page.
 *
 * Lists the series within the family (or, for service families like Custom
 * Magnetic Solutions, replaces the series grid with an engagement-model
 * block). Series detail pages live one level deeper at
 * /products/[family]/[series].
 *
 * Next.js 15 conventions: `params` is a Promise; await it inside the
 * handler. generateStaticParams returns the five family slugs at build.
 */

type Params = Promise<{ family: string }>;

export function generateStaticParams() {
  return productFamilies.map((f) => ({ family: f.slug }));
}

/**
 * Family-level recommendedApplications: union of related applications
 * across all series in the family. Falls back to a sensible default for
 * service families with no series.
 */
function familyRelatedApplications(familySlug: string): string[] {
  const seriesEntries = getSeriesForFamily(familySlug);
  if (seriesEntries.length === 0) {
    // Custom Magnetic Solutions — broad cross-application reach.
    return [
      "ev-charging",
      "photovoltaic",
      "energy-storage",
      "industrial-power",
      "home-appliances-hvac",
      "motor-compressor-drives",
    ];
  }
  const seen = new Set<string>();
  for (const { series } of seriesEntries) {
    for (const slug of series.relatedApplications) seen.add(slug);
  }
  return Array.from(seen);
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { family: slug } = await params;
  const family = productFamilies.find((f) => f.slug === slug);
  if (!family) return {};

  const seoSuffixBySlug: Record<string, string> = {
    transformers: "for EV Charging & Power Electronics",
    "inductors-chokes": "for Power Conversion",
    "amorphous-magnetic-cores": "for Low-Loss Power Conversion",
    "nanocrystalline-magnetic-cores": "for EMC & High-Frequency Designs",
    "custom-magnetic-solutions": "— Co-Engineered Magnetic Components",
  };
  const suffix = seoSuffixBySlug[family.slug] ?? "";
  const title = `${family.name} ${suffix}`.trim();

  return {
    title,
    description: family.description,
    openGraph: {
      title: `${title} | Jiayang Magnetics`,
      description: family.description,
      type: "article",
    },
  };
}

export default async function ProductFamilyPage({
  params,
}: {
  params: Params;
}) {
  const { family: slug } = await params;
  const family = productFamilies.find((f) => f.slug === slug);
  if (!family) notFound();

  const seriesEntries = getSeriesForFamily(slug);
  const relatedApplications = familyRelatedApplications(slug);

  return (
    <ProductFamilyOverviewLayout
      family={family}
      seriesEntries={seriesEntries}
      relatedApplications={relatedApplications}
    />
  );
}
