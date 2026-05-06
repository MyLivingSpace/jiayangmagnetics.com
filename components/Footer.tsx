import Link from "next/link";
import Container from "./Container";
import { company, productFamilies, primaryApplications } from "@/lib/content";
import CTAButton from "./CTAButton";

/**
 * Footer (per strategy doc Section 1):
 *   - Four columns: Products, Applications, Company, Get in Touch
 *   - Below the columns, the long-form legal disclosure line — this is one of
 *     the six strategic legal-disclosure placements (Section 11 item 2).
 */
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Products
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {productFamilies.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Applications
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {primaryApplications.slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/applications/${a.slug}`}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/about#certifications"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={`tel:${company.phones.main.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {company.phones.main}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.emails.sales}`}
                  className="hover:text-white"
                >
                  {company.emails.sales}
                </a>
              </li>
              <li className="text-xs leading-relaxed">
                {company.address}
                <span className="mt-2 block text-slate-500">{company.addressZh}</span>
              </li>
            </ul>
            <div className="mt-5">
              <CTAButton
                href="/contact"
                variant="primary-on-dark"
                arrow={false}
              >
                Request a Sample or Quote
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Legal disclosure — strategic placement #2 (per strategy doc Section 11). */}
        <div className="mt-14 border-t border-slate-800 pt-8">
          <p className="text-xs leading-relaxed text-slate-400">
            © 2002–{new Date().getFullYear()} {company.legalName}.{" "}
            <span className="font-medium text-slate-200">
              Jiayang Magnetics
            </span>{" "}
            is the international brand of {company.legalName}. All rights
            reserved.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-200">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-200">
              Terms
            </Link>
            <a href="/sitemap.xml" className="hover:text-slate-200">
              Sitemap
            </a>
            <a
              href="https://hzjy-cnt.com"
              rel="noopener"
              className="hover:text-slate-200"
            >
              中文版网站 / Chinese website: hzjy-cnt.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
