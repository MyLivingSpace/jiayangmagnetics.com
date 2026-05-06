import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ApplicationCard from "@/components/ApplicationCard";
import SampleQuoteBanner from "@/components/SampleQuoteBanner";
import CTAButton from "@/components/CTAButton";
import {
  primaryApplications,
  establishedMarkets,
  emergingApplications,
} from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications — Magnetics for the Energy Transition",
  description:
    "Magnetic components for EV charging, photovoltaic, wind, energy storage, industrial power, and smart-grid systems — plus established markets in appliances and motor drives, and an emerging-applications section for robotics.",
  openGraph: {
    title:
      "Applications — Magnetics for the Energy Transition | Jiayang Magnetics",
    description:
      "Six primary application areas, three established markets, and one emerging-applications track.",
    type: "website",
  },
};

/**
 * Applications page (per strategy doc Section 4 + Section 4A).
 *
 * Order:
 *   1. Page hero
 *   2. Primary applications (six international-positioning cards)
 *   3. Established markets (three cards) + small public-customer note
 *   4. Emerging applications band — Robotics & Intelligent Automation
 *   5. Sample/Quote banner
 *
 * The three groupings are kept structurally distinct in both data and visual
 * treatment so that no group is mistakenly read as the primary positioning.
 */
export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Magnetic Components for the Energy Transition and Industrial Power"
        lead="Specialized magnetic solutions for EV charging, solar, wind, energy storage, industrial power, and smart-grid systems."
      />

      {/* PRIMARY APPLICATIONS */}
      <Section tone="white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {primaryApplications.map((a) => (
            <ApplicationCard key={a.slug} application={a} />
          ))}
        </div>
      </Section>

      {/* ESTABLISHED MARKETS */}
      <Section tone="muted" id="established-markets">
        <SectionHeading
          eyebrow="Established Markets"
          title="Proven volume manufacturing for appliance, HVAC, and motor-drive customers."
          lead="Before expanding deeper into EV charging, renewable energy, and energy storage, Jiayang built long-term manufacturing experience serving appliance, HVAC, motor-drive, and consumer power-system customers."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {establishedMarkets.map((m) => (
            <ApplicationCard key={m.slug} application={m} />
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-slate-600">
          <span className="font-medium text-slate-900">
            Public customer references
          </span>{" "}
          include major appliance and electronics brands such as Midea,
          Haier, Hisense, TCL, Gree, Panasonic, Xiaomi, and others.
        </p>
      </Section>

      {/* EMERGING APPLICATIONS — robotics, sourced from data */}
      {emergingApplications.map((emerging) => (
        <Section key={emerging.slug} tone="dark" id={emerging.slug}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-amber-300">
                <span className="accent-rule" />
                <span>{emerging.category}</span>
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                {emerging.name}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300">
                {emerging.positioning}
              </p>
              {emerging.positioningSecondary ? (
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  {emerging.positioningSecondary}
                </p>
              ) : null}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CTAButton href={emerging.ctaHref} variant="primary-on-dark">
                  {emerging.ctaLabel}
                </CTAButton>
                <CTAButton
                  href={`/applications/${emerging.slug}`}
                  variant="ghost"
                  className="text-slate-200 hover:text-white"
                >
                  Read more
                </CTAButton>
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {emerging.subAreas.map((item) => (
                <li
                  key={item.title}
                  className="border-t border-slate-700 pt-5"
                >
                  <h3 className="text-sm font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      <SampleQuoteBanner />
    </>
  );
}
