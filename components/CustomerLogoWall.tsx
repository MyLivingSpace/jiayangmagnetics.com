import CustomerLogoItem from "./CustomerLogoItem";
import { customerReferenceGroups } from "@/lib/content";
import type { CustomerReferenceGroup } from "@/lib/content";
import { cn } from "@/lib/cn";

/**
 * CustomerLogoWall — grouped logo tiles for the customer reference section.
 *
 * Three density modes control the entire wall + its tiles:
 *
 *   - "default": large tiles (aspect-[3/2]), 4-col desktop, generous spacing.
 *                Use when the section is the main content of a page.
 *   - "compact": large tiles, 3-col desktop, tighter group spacing. Used
 *                on the About page (right column of a two-column block).
 *   - "tight":   short tiles (h-14), up to 6 cols on desktop, very tight
 *                spacing. Designed as a quick credibility scan — the
 *                homepage uses this so the section reads in a glance.
 *
 * The disclosure note below the wall is intentional and non-removable: it
 * makes clear that the names/logos are public references and that logo
 * images are only displayed when official assets are provided.
 */
export default function CustomerLogoWall({
  groups = customerReferenceGroups,
  density = "default",
  showDisclosure = true,
  className,
}: {
  groups?: CustomerReferenceGroup[];
  density?: "default" | "compact" | "tight";
  showDisclosure?: boolean;
  className?: string;
}) {
  const isTight = density === "tight";
  const isCompact = density === "compact";

  // Spacing between groups
  const groupGap = isTight
    ? "space-y-6"
    : isCompact
      ? "space-y-8"
      : "space-y-12";

  // Spacing between group label and the tile grid
  const labelToGridGap = isTight ? "mt-3" : "mt-4";

  // Grid column counts
  const gridClass = isTight
    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
    : isCompact
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";

  // Tile gap
  const tileGap = isTight ? "gap-2" : "gap-3";

  // Disclosure note margin
  const disclosureGap = isTight ? "mt-6" : "mt-10";

  return (
    <div className={cn(groupGap, className)}>
      {groups.map((group) => (
        <section key={group.id}>
          <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
            {group.title}
          </div>
          <ul className={cn(labelToGridGap, "grid", gridClass, tileGap)}>
            {group.customers.map((customer) => (
              <CustomerLogoItem
                key={customer.slug}
                customer={customer}
                density={density}
              />
            ))}
          </ul>
        </section>
      ))}

      {showDisclosure ? (
        <p
          className={cn(
            "text-xs leading-relaxed text-slate-500",
            disclosureGap
          )}
        >
          Selected customer references — not an exhaustive list of all
          customers.
        </p>
      ) : null}
    </div>
  );
}
