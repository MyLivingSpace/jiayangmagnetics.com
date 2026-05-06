import ProductCard from "./ProductCard";
import { productFamilies } from "@/lib/content";

/**
 * RelatedProducts — cross-link block on application detail pages. Looks up
 * product slugs against the productFamilies array and renders compact cards.
 * Silently skips unknown slugs (so a typo won't crash the build).
 */
export default function RelatedProducts({
  slugs,
}: {
  slugs: string[];
}) {
  const items = slugs
    .map((slug) => productFamilies.find((p) => p.slug === slug))
    .filter((p): p is typeof productFamilies[number] => Boolean(p));

  if (items.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((product) => (
        <ProductCard
          key={product.slug}
          product={product}
          variant="compact"
        />
      ))}
    </div>
  );
}
