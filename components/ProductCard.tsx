import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SmartImage from "./SmartImage";
import type { ProductFamily } from "@/lib/content";

/**
 * Product family card.
 *
 * Two variants:
 *
 *   - "compact" (used on the homepage): image, title, one short sentence,
 *     2–3 tags, and a single "View product family" link. Designed to scan
 *     in under a second per card so the homepage can act as a preview /
 *     navigation layer.
 *
 *   - "full" (default — used on the dedicated Products page): image, title,
 *     longer description paragraph, "Typical applications" + "Key
 *     capabilities" labeled rows, plus dual links (View + Send specs). All
 *     the depth a procurement engineer needs once they've drilled in.
 *
 * Numeric specs are intentionally avoided in both variants — the only
 * public datapoint we name is the planar 50 kHz – 2 MHz transformer range
 * mentioned in the long description (Appendix A item 8).
 */
export default function ProductCard({
  product,
  variant = "full",
}: {
  product: ProductFamily;
  variant?: "full" | "compact";
}) {
  if (variant === "compact") {
    return (
      <article
        id={product.slug}
        className="flex flex-col border border-slate-200 bg-white"
      >
        <Link
          href={`/products/${product.slug}`}
          className="block overflow-hidden"
        >
          <SmartImage
            src={product.image}
            alt={`${product.name} — product family image`}
            fallbackLabel={`${product.name} image`}
            ratio="4/3"
          />
        </Link>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-base font-semibold tracking-tight text-slate-900">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {product.homeBlurb}
          </p>

          {product.tags.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {product.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-auto pt-5">
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-accent"
            >
              View product family
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Default — full card used on the dedicated Products page.
  return (
    <article
      id={product.slug}
      className="flex flex-col border border-slate-200 bg-white"
    >
      <Link
        href={`/products/${product.slug}`}
        className="block overflow-hidden"
      >
        <SmartImage
          src={product.image}
          alt={`${product.name} — product family image`}
          fallbackLabel={`${product.name} image`}
          ratio="4/3"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-base font-semibold tracking-tight text-slate-900">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {product.description}
        </p>

        <dl className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-xs">
          <div>
            <dt className="font-medium uppercase tracking-[0.14em] text-slate-500">
              Typical applications
            </dt>
            <dd className="mt-1 text-slate-700">
              {product.typicalApplications}
            </dd>
          </div>
          <div>
            <dt className="font-medium uppercase tracking-[0.14em] text-slate-500">
              Key capabilities
            </dt>
            <dd className="mt-1 text-slate-700">{product.keyCapabilities}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-accent"
          >
            View product family
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <Link
            href={`/contact?intent=samples&product=${encodeURIComponent(product.name)}`}
            className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500 hover:text-slate-900"
          >
            Send specs →
          </Link>
        </div>
      </div>
    </article>
  );
}
