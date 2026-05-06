import type { MetadataRoute } from "next";
import {
  emergingApplications,
  establishedMarkets,
  primaryApplications,
  productFamilies,
} from "@/lib/content";
import { productSeries } from "@/lib/productSeries";

const base = new URL("https://jiayangmagnetics.com");

function url(path: string): string {
  return new URL(path.startsWith("/") ? path : `/${path}`, base).href;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  const push = (path: string) => {
    entries.push({ url: url(path), lastModified });
  };

  push("/");
  push("/about");
  push("/applications");
  push("/capabilities");
  push("/contact");
  push("/products");
  push("/resources");
  push("/privacy");
  push("/terms");

  for (const a of primaryApplications) {
    push(`/applications/${a.slug}`);
  }
  for (const a of establishedMarkets) {
    push(`/applications/${a.slug}`);
  }
  for (const a of emergingApplications) {
    push(`/applications/${a.slug}`);
  }

  for (const f of productFamilies) {
    push(`/products/${f.slug}`);
    for (const seriesSlug of f.series) {
      if (productSeries[seriesSlug]) {
        push(`/products/${f.slug}/${seriesSlug}`);
      }
    }
  }

  return entries;
}
