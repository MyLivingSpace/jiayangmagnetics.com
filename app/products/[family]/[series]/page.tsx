import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductSeriesDetailLayout from "@/components/ProductSeriesDetailLayout";
import { productFamilies } from "@/lib/content";
import { productSeries } from "@/lib/productSeries";

/**
 * /products/[family]/[series] — series detail page.
 *
 * Resolves both the family and series slugs against the data layer, with
 * a 404 if either is unknown OR if the series doesn't actually belong to
 * the family in the URL (preventing /products/transformers/common-mode-choke
 * from rendering by accident).
 */

type Params = Promise<{ family: string; series: string }>;

export function generateStaticParams() {
  const params: { family: string; series: string }[] = [];
  for (const family of productFamilies) {
    for (const seriesSlug of family.series) {
      if (productSeries[seriesSlug]) {
        params.push({ family: family.slug, series: seriesSlug });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { family: familySlug, series: seriesSlug } = await params;
  const family = productFamilies.find((f) => f.slug === familySlug);
  const series = productSeries[seriesSlug];
  if (!family || !series || series.familySlug !== family.slug) return {};

  /*
   * SEO title pattern matches the v9 brief examples:
   *   "<Series> | Jiayang Magnetics"
   *   "<Series> for <use case> | Jiayang Magnetics"
   */
  const seoSuffixBySlug: Record<string, string> = {
    "high-low-frequency-transformers": "",
    "planar-transformer-dc": "for Power Conversion",
    "new-energy-transformers": "for Inverter & Energy Systems",
    "amorphous-transformers": "for High-Power Switching",
    "common-mode-choke": "for EMC Filtering",
    "high-frequency-pfc-inductor": "for Power Conversion",
    "amorphous-active-pfc-inductor": "for Solar & Inverter PFC",
    "rectangular-pfc-inductor": "for PFC Stages",
    "sq-series-common-mode-inductor": "for High-Volume Power Supplies",
    "new-energy-inductors": "for the New-Energy Stack",
    "amorphous-magnetic-material": "— Core Options & Grades",
    "nanocrystalline-magnetic-material": "— Core Options & Capabilities",
  };
  const suffix = seoSuffixBySlug[seriesSlug] ?? "";
  const title = `${series.name}${suffix ? " " + suffix : ""}`.trim();

  return {
    title,
    description: series.positioning,
    openGraph: {
      title: `${title} | Jiayang Magnetics`,
      description: series.positioning,
      type: "article",
    },
  };
}

export default async function ProductSeriesPage({
  params,
}: {
  params: Params;
}) {
  const { family: familySlug, series: seriesSlug } = await params;
  const family = productFamilies.find((f) => f.slug === familySlug);
  const series = productSeries[seriesSlug];

  if (!family || !series) notFound();
  // Guard against e.g. /products/transformers/common-mode-choke
  if (series.familySlug !== family.slug) notFound();

  return (
    <ProductSeriesDetailLayout
      family={family}
      series={series}
      seriesSlug={seriesSlug}
    />
  );
}
