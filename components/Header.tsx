"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import Container from "./Container";
import CTAButton from "./CTAButton";
import { company, navItems } from "@/lib/content";
import { cn } from "@/lib/cn";

/**
 * Header structure (per strategy doc Section 1):
 *   - Top utility bar: phone, email, language switcher
 *   - Main bar: logo, nav links, primary CTA button
 *   - Mobile: collapses to a disclosure panel (hamburger)
 *
 * Dropdown menus on Products / Applications / etc. are intentionally NOT
 * implemented here — clicking the nav label routes to the landing page.
 * Add hover/keyboard-accessible dropdowns when IA and assets are ready.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [logoMissing, setLogoMissing] = useState(false);
  const logoCandidates = [
    "/images/brand/jiayang-magnetics-logo.jpg",
    "/images/brand/jiayang-magnetics-logo.jpeg",
    "/images/brand/jiayang-magnetics-logo.png",
    "/images/brand/jiayang-magnetics-logo.svg",
    "/images/brand/jiayang-magnetics-logo.webp",
  ];
  const [logoIndex, setLogoIndex] = useState(0);
  const logoPath = logoCandidates[logoIndex];

  const handleLogoError = () => {
    const nextIndex = logoIndex + 1;
    if (nextIndex < logoCandidates.length) {
      setLogoIndex(nextIndex);
      return;
    }
    setLogoMissing(true);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      {/* Utility bar */}
      <div className="hidden border-b border-slate-100 bg-slate-50 text-xs text-slate-600 lg:block">
        <Container className="flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${company.phones.main.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-slate-900"
            >
              <Phone size={12} aria-hidden="true" />
              <span>{company.phones.main}</span>
            </a>
            <a
              href={`mailto:${company.emails.sales}`}
              className="inline-flex items-center gap-1.5 hover:text-slate-900"
            >
              <Mail size={12} aria-hidden="true" />
              <span>{company.emails.sales}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/resources/brochure/jiayang-magnetics-company-profile-product-catalog.pdf"
              download
              className="hover:text-slate-900"
            >
              Download Catalog
            </a>
            <span aria-hidden="true" className="text-slate-300">
              |
            </span>
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-900">EN</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <a
                href="https://hzjy-cnt.com"
                rel="noopener"
                className="hover:text-slate-900"
              >
                中文
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main bar */}
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Link
          href="/"
          className="flex items-center gap-3 text-slate-900"
          aria-label="Jiayang Magnetics — home"
        >
          {logoMissing ? (
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-sm bg-slate-900 text-sm font-semibold tracking-tight text-white"
            >
              JM
            </span>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoPath}
              alt="Jiayang Magnetics logo"
              className="h-9 w-9 rounded-sm object-contain"
              decoding="async"
              onError={handleLogoError}
            />
          )}
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight">
              Jiayang Magnetics
            </span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
              Magnetic Components Since 2002
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
          <CTAButton href="/contact" variant="primary" arrow={false}>
            Request a Sample or Quote
          </CTAButton>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex items-center justify-center rounded-sm p-2 text-slate-900 lg:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={cn(
          "border-t border-slate-200 bg-white lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 border-t border-slate-100 pt-4">
            <CTAButton
              href="/contact"
              variant="primary"
              arrow={false}
              className="w-full"
            >
              Request a Sample or Quote
            </CTAButton>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <a
              href={`tel:${company.phones.main.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5"
            >
              <Phone size={12} aria-hidden="true" />
              {company.phones.main}
            </a>
            <a href="https://hzjy-cnt.com" rel="noopener">
              中文 网站
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
