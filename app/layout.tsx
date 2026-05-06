import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/*
 * Typography note: this site uses a system-font stack (defined in
 * tailwind.config.ts). Two reasons:
 *   1. Google Fonts is intermittently blocked in China — both at build time
 *      (for developers / CI on China networks) and at runtime (for visitors
 *      on China networks). A web-font dependency adds a real failure mode for
 *      a Chinese OEM's international site.
 *   2. Modern system fonts (San Francisco on macOS / iOS, Segoe UI on Windows,
 *      Roboto on Android) load instantly and look professional.
 *
 * If brand-typography lock-in becomes important later, switch to
 * `next/font/local` with a self-hosted Inter file — that avoids both runtime
 * and build-time network dependencies.
 */

export const metadata: Metadata = {
  title: {
    default:
      "Jiayang Magnetics — Magnetic Components for EV Charging, Renewable Energy & Industrial Power",
    template: "%s | Jiayang Magnetics",
  },
  description:
    "Jiayang Magnetics is the international brand of Huizhou Jiayang Electronic Technology Co., Ltd. — a Chinese magnetic component manufacturer in operation since 2002. Transformers, inductors, and custom magnetic solutions using ferrite, amorphous, and selected nanocrystalline core technologies for EV charging, renewable energy, energy storage, and industrial power electronics.",
  metadataBase: new URL("https://jiayangmagnetics.com"),
  openGraph: {
    type: "website",
    siteName: "Jiayang Magnetics",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
