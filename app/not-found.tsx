import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you requested could not be found. Return to Jiayang Magnetics home or open the site map.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="border-b border-slate-200 bg-white py-20 lg:py-28">
      <Container className="max-w-xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          The link may be outdated or the page may have moved. Use the
          navigation menu or return to the homepage.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex rounded-sm bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            Back to home
          </Link>
          <Link
            href="/products"
            className="inline-flex rounded-sm border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50"
          >
            View products
          </Link>
        </div>
        <p className="mt-10 text-xs text-slate-500">
          <a href="/sitemap.xml" className="underline underline-offset-4">
            Sitemap (XML)
          </a>
        </p>
      </Container>
    </div>
  );
}
