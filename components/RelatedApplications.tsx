import ApplicationCard from "./ApplicationCard";
import {
  primaryApplications,
  establishedMarkets,
  type Application,
} from "@/lib/content";

/**
 * RelatedApplications — cross-link block on product detail pages. Looks up
 * application slugs against primaryApplications + establishedMarkets and
 * renders compact cards. (Emerging applications — robotics — are
 * intentionally omitted from this list because the relationship there is
 * forward-looking and is better surfaced via direct CTA.)
 */
export default function RelatedApplications({
  slugs,
}: {
  slugs: string[];
}) {
  const allApps: Application[] = [
    ...primaryApplications,
    ...establishedMarkets,
  ];

  const items = slugs
    .map((slug) => allApps.find((a) => a.slug === slug))
    .filter((a): a is Application => Boolean(a));

  if (items.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((application) => (
        <ApplicationCard
          key={application.slug}
          application={application}
          variant="compact"
        />
      ))}
    </div>
  );
}
