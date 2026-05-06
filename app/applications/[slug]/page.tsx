import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ApplicationDetailLayout from "@/components/ApplicationDetailLayout";
import {
  primaryApplications,
  establishedMarkets,
  emergingApplications,
  type Application,
} from "@/lib/content";
import { applicationDetails } from "@/lib/applicationDetails";

/**
 * /applications/[slug] — dynamic application detail page.
 *
 * Resolves slug across all three application tiers (primary / established /
 * emerging). Emerging applications use a simplified Application shape
 * derived from the EmergingApplication entry.
 *
 * Next.js 15: `params` is a Promise — await it once at the top of each
 * handler.
 */

type Params = Promise<{ slug: string }>;

type Resolved = {
  application: Application;
  tier: "primary" | "established" | "emerging";
};

function resolve(slug: string): Resolved | null {
  const primary = primaryApplications.find((a) => a.slug === slug);
  if (primary) return { application: primary, tier: "primary" };

  const established = establishedMarkets.find((a) => a.slug === slug);
  if (established) return { application: established, tier: "established" };

  const emerging = emergingApplications.find((a) => a.slug === slug);
  if (emerging) {
    const shim: Application = {
      slug: emerging.slug,
      name: emerging.name,
      category: emerging.category,
      oneLine: emerging.positioning,
      context: emerging.positioningSecondary ?? emerging.positioning,
      typicalSystems: emerging.subAreas.map((s) => s.title).join(", "),
    };
    return { application: shim, tier: "emerging" };
  }

  return null;
}

export function generateStaticParams() {
  return [
    ...primaryApplications.map((a) => ({ slug: a.slug })),
    ...establishedMarkets.map((a) => ({ slug: a.slug })),
    ...emergingApplications.map((a) => ({ slug: a.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolve(slug);
  if (!resolved) return {};
  const { application } = resolved;
  const detail = applicationDetails[application.slug];

  const seoTitleBySlug: Record<string, string> = {
    "ev-charging": "EV Charging Magnetic Components",
    photovoltaic: "Solar Inverter Magnetic Components",
    wind: "Wind Power Magnetic Components",
    "energy-storage": "Energy Storage Magnetic Components",
    "industrial-power": "Industrial Power Magnetic Components",
    "smart-grid": "Smart Grid Magnetic Components",
    "home-appliances-hvac": "Appliance & HVAC Magnetic Components",
    "motor-compressor-drives": "Motor & Compressor Drive Magnetics",
    "consumer-electronics-power": "Consumer Electronics Power Magnetics",
    robotics: "Robotics Power & EMI Magnetic Components",
  };
  const title = seoTitleBySlug[application.slug] ?? application.name;

  return {
    title,
    description: detail?.positioning ?? application.oneLine,
    openGraph: {
      title: `${title} | Jiayang Magnetics`,
      description: detail?.positioning ?? application.oneLine,
      type: "article",
    },
  };
}

export default async function ApplicationDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const resolved = resolve(slug);
  if (!resolved) notFound();
  const detail = applicationDetails[resolved.application.slug];
  if (!detail) notFound();

  return (
    <ApplicationDetailLayout
      application={resolved.application}
      detail={detail}
      tier={resolved.tier}
    />
  );
}
