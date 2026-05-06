/**
 * Visual-proof content for the Capabilities page and the homepage
 * Manufacturing Snapshot. Edit here, render everywhere — no hardcoded
 * markup duplicated across pages.
 *
 * Image paths point to /public/images/... — drop real photos in those
 * locations and SmartImage swaps them in automatically. See README and
 * the image folder plan in the v2 PR description for the full file list.
 */

import type { PhotoGridItem } from "@/components/PhotoGrid";

/* -------------------------------------------------------------------------- */
/*                          Homepage Manufacturing Snapshot                    */
/* -------------------------------------------------------------------------- */

export const homeManufacturingSnapshot: PhotoGridItem[] = [
  {
    src: "/images/facility/winding-production-line-01.jpg",
    alt: "Winding production line at the Huizhou Industrial Park",
    caption: "Winding & Production Line",
    note: "In-house copper winding capacity at the Huizhou Industrial Park.",
  },
  {
    src: "/images/facility/testing-lab-01.jpg",
    alt: "Testing and inspection laboratory",
    caption: "Testing & Inspection Lab",
    note: "Electrical, dielectric, and environmental qualification under one roof.",
  },
  {
    src: "/images/facility/jiayang-industrial-park-02.jpg",
    alt: "Jiayang Industrial Park, Huizhou",
    caption: "Jiayang Industrial Park",
    note: "60,000 ㎡ across two production bases, operational since 2023.",
  },
  {
    src: "/images/products/magnetic-component-closeup-01.jpg",
    alt: "Automated assembly line for magnetic components",
    caption: "Automated Assembly Line",
    note: "Automated assembly with IATF 16949 process discipline and in-line controls.",
  },
];

/* -------------------------------------------------------------------------- */
/*           Capabilities — A. Manufacturing Facilities & Production Lines      */
/* -------------------------------------------------------------------------- */

export const facilitiesGallery: PhotoGridItem[] = [
  {
    src: "/images/facility/jiayang-industrial-park-01.jpg",
    alt: "Huizhou Jiayang Industrial Park exterior",
    caption: "Huizhou Jiayang Industrial Park",
    note: "Headquarters and primary production base. Operational since November 2023.",
  },
  {
    src: "/images/facility/winding-production-line-01.jpg",
    alt: "Winding production line",
    caption: "Winding Production Line",
    note: "Copper winding for transformers and inductors across all product families.",
  },
  {
    src: "/images/facility/automated-assembly-line-01.jpg",
    alt: "Automated assembly line",
    caption: "Automated Assembly Line",
    note: "High-volume assembly with consistent process control.",
  },
  {
    src: "/images/facility/core-preparation-01.jpg",
    alt: "Core preparation area",
    caption: "Core Preparation Area",
    note: "Magnetic core preparation, including selected nanocrystalline core processing.",
  },
  {
    src: "/images/facility/encapsulation-potting-01.jpg",
    alt: "Encapsulation and potting station",
    caption: "Encapsulation / Potting Area",
    note: "Vacuum encapsulation for thermal stability and dielectric strength.",
  },
  {
    src: "/images/facility/final-assembly-01.jpg",
    alt: "Final assembly area",
    caption: "Final Assembly Area",
    note: "Finished-component build-up and pre-test handling.",
  },
  {
    src: "/images/facility/packaging-outbound-01.jpg",
    alt: "Packaging and outbound area",
    caption: "Packaging & Outbound Area",
    note: "Export-ready packaging and shipping documentation.",
  },
  {
    src: "/images/facility/hubei-production-base-01.jpg",
    alt: "Hubei production base",
    caption: "Hubei Production Base",
    note: "Wuhan Chenyang facility supporting capacity and supply continuity.",
  },
];

/* -------------------------------------------------------------------------- */
/*                Capabilities — B. Testing & Inspection Capabilities           */
/* -------------------------------------------------------------------------- */

export const testingGallery: PhotoGridItem[] = [
  {
    src: "/images/testing/incoming-quality-control-01.jpg",
    alt: "Incoming quality control area",
    caption: "Incoming Quality Control Area",
    note: "IQC of raw materials before they enter the production line.",
  },
  {
    src: "/images/testing/automated-magnetic-testing-01.jpg",
    alt: "Automated testing of magnetic components",
    caption: "Automated Testing of Magnetic Components",
    note: "Repeatable parameter measurement on every produced part.",
  },
  {
    src: "/images/testing/final-product-inspection-01.jpg",
    alt: "Final product inspection area",
    caption: "Final Product Inspection Area",
    note: "OQC verification before packaging and shipment.",
  },
  {
    src: "/images/testing/impedance-analyzer-01.jpg",
    alt: "Impedance analyzer",
    caption: "Impedance Analyzer",
    note: "Frequency-domain characterization of transformers and inductors.",
  },
  {
    src: "/images/testing/universal-test-instrument-01.jpg",
    alt: "Universal test instrument",
    caption: "Universal Test Instrument",
    note: "Multi-parameter electrical bench for development and qualification.",
  },
  {
    src: "/images/testing/vibration-test-system-01.jpg",
    alt: "Vibration test system",
    caption: "Vibration Test System",
    note: "Mechanical reliability under transportation and operational stress.",
  },
  {
    src: "/images/testing/environmental-test-01.jpg",
    alt: "Environmental test area",
    caption: "Environmental Test Area",
    note: "Temperature cycling, humidity, and thermal shock per family.",
  },
  {
    src: "/images/testing/reliability-safety-testing-01.jpg",
    alt: "High-voltage / hipot testing area",
    caption: "Reliability & Safety Testing",
    note:
      "Supporting material insulation, flammability, and long-term reliability verification for magnetic components.",
  },
];

/* -------------------------------------------------------------------------- */
/*       Capabilities — Certifications, Patents & Documentation (split)         */
/* -------------------------------------------------------------------------- */

/**
 * Each CertificateItem can carry an optional `image` path under /public.
 * SmartImage falls back to a polished placeholder when the file is missing,
 * so cards render cleanly today and improve automatically as scans land.
 *
 * No certificate numbers, no document dates beyond what's already public,
 * no fabricated download URLs.
 */
export type CertificateItem = {
  title: string;
  kind: "Certification" | "Patent" | "Recognition" | "Membership";
  description?: string;
  image?: string;
};

export const certificationDocuments: CertificateItem[] = [
  {
    title: "ISO 9001 — Quality Management",
    kind: "Certification",
    description:
      "Quality management system certification for design and manufacturing.",
    image: "/images/certifications/iso9001.jpg",
  },
  {
    title: "ISO 14001 — Environmental Management",
    kind: "Certification",
    description: "Environmental management system certification.",
    image: "/images/certifications/iso14001.jpg",
  },
  {
    title: "IATF 16949 — Automotive Quality",
    kind: "Certification",
    description:
      "Automotive-industry quality management standard, applied across all product lines.",
    image: "/images/certifications/iatf16949.jpg",
  },
  {
    title: "UL & CQC — Product Certifications",
    kind: "Certification",
    description:
      "UL and CQC certifications for transformers and core component families.",
    image: "/images/certifications/ul-cqc.jpg",
  },
];

export const patentDocuments: CertificateItem[] = [
  {
    title: "Active PFC Inductor — Invention Patent",
    kind: "Patent",
    description:
      "Granted invention patent for the active PFC inductor used in dual-line inverter air conditioners (2010).",
    image: "/images/patents/patent-active-pfc-inductor-2010.jpg",
  },
  {
    title: "Transformer Core Winding Assembly Line — Invention Patent",
    kind: "Patent",
    description:
      "Granted invention patent for the transformer core winding assembly line (2019).",
    image: "/images/patents/patent-transformer-core-winding-2019.jpg",
  },
];

export const recognitionDocuments: CertificateItem[] = [
  {
    title: "High-Tech Enterprise — Guangdong",
    kind: "Recognition",
    description:
      "Provincial High-Tech Enterprise recognition, multiple terms.",
    image: "/images/recognitions/high-tech-enterprise.jpg",
  },
  {
    title: "Midea “Gold Supplier”",
    kind: "Recognition",
    description:
      "Recognized by Midea in 2020 — long-term OEM supplier recognition.",
    image: "/images/recognitions/midea-gold-supplier.jpg",
  },
  {
    title: "Outstanding Supplier — China Magnetic Components Association",
    kind: "Recognition",
    description:
      "Greater China Region Outstanding Supplier award (2022).",
    image:
      "/images/recognitions/outstanding-supplier-china-magnetic-components-association.jpg",
  },
  {
    title: "Industry Association Memberships",
    kind: "Membership",
    description:
      "China Power Supply Society · Guangdong Transformer Association · Guangdong Magnetic Components Industry Association.",
    image: "/images/recognitions/industry-association-memberships.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                          Capabilities — Process flow                         */
/* -------------------------------------------------------------------------- */

export const manufacturingProcess: string[] = [
  "Core material prep & validation",
  "Winding",
  "Assembly",
  "Encapsulation",
  "Testing",
  "Packaging",
];

/* -------------------------------------------------------------------------- */
/*                       Capabilities — Test and quality lists                  */
/* -------------------------------------------------------------------------- */

export const testingMethods: string[] = [
  "LCR characterization",
  "Hipot (dielectric withstand)",
  "Surge",
  "Partial discharge",
  "Thermal cycling",
  "Humidity",
  "Vibration",
];

export const qualityProcesses: string[] = [
  "Supplier qualification & core material validation",
  "IQC — incoming material inspection",
  "IPQC — in-process inspection",
  "OQC — final outgoing inspection",
  "Failure analysis (closed loop)",
  "PPAP / APQP support for automotive customers",
];

/* -------------------------------------------------------------------------- */
/*                       Resources — Downloads & proof documents                */
/* -------------------------------------------------------------------------- */

/**
 * Three-state document availability:
 *   - "available"             — `href` is wired and the file exists
 *   - "coming-soon"           — public file not yet published; neutral label on card
 *   - "available-on-request" — Jiayang sends scans on request via the
 *     contact form; not a public download
 */
export type ResourceStatus =
  | "available"
  | "coming-soon"
  | "available-on-request";

export type ResourceDocument = {
  title: string;
  category:
    | "Product Catalog"
    | "Datasheets"
    | "Certifications"
    | "Application Notes";
  kind:
    | "Catalog"
    | "Datasheet"
    | "Certification"
    | "Patent"
    | "Application Note"
    | "Brochure";
  description?: string;
  status: ResourceStatus;
  /** Path under /public — only used when status is "available". */
  href?: string;
};

export const resourceDocuments: ResourceDocument[] = [
  /* ------------------------------ Catalog ------------------------------ */
  {
    title: "Company Profile & Product Catalog (PDF)",
    category: "Product Catalog",
    kind: "Brochure",
    description:
      "Company profile plus consolidated product catalog across all five product families.",
    status: "available",
    href: "/resources/brochure/jiayang-magnetics-company-profile-product-catalog.pdf",
  },
  /* ----------------------------- Datasheets ----------------------------- */
  {
    title: "Transformer Datasheets",
    category: "Datasheets",
    kind: "Datasheet",
    description:
      "Per-family datasheets covering high-frequency, planar, and EV-charging transformer ranges.",
    status: "available-on-request",
  },
  {
    title: "Inductor & Choke Datasheets",
    category: "Datasheets",
    kind: "Datasheet",
    description:
      "PFC inductors, common-mode and differential-mode chokes, high-current reactors.",
    status: "available-on-request",
  },
  {
    title: "Amorphous & Nanocrystalline Core Datasheets",
    category: "Datasheets",
    kind: "Datasheet",
    description:
      "Core specifications and parameter ranges for ferrite, amorphous, and selected nanocrystalline core options used in Jiayang's magnetic components.",
    status: "available-on-request",
  },
  /* --------------------------- Certifications --------------------------- */
  {
    title: "ISO 9001 Certificate",
    category: "Certifications",
    kind: "Certification",
    description: "Quality management system certificate scan.",
    status: "available",
    href: "/resources/certificates/iso-9001-certificate.pdf",
  },
  {
    title: "ISO 14001 Certificate",
    category: "Certifications",
    kind: "Certification",
    description: "Environmental management system certificate scan.",
    status: "available",
    href: "/resources/certificates/iso-14001-certificate.pdf",
  },
  {
    title: "IATF 16949 Certificate",
    category: "Certifications",
    kind: "Certification",
    description: "Automotive-industry quality management certificate scan.",
    status: "available",
    href: "/resources/certificates/iatf-16949-certificate.pdf",
  },
  {
    title: "UL & CQC Certificates",
    category: "Certifications",
    kind: "Certification",
    description: "UL and CQC product certification scans.",
    status: "available",
    href: "/resources/certificates/ul-cqc-certificates.pdf",
  },
  {
    title: "Patent Certificates",
    category: "Certifications",
    kind: "Patent",
    description: "Granted invention patent scans.",
    status: "available-on-request",
  },
  /* ------------------------- Application Notes -------------------------- */
  {
    title: "Application Notes",
    category: "Application Notes",
    kind: "Application Note",
    description:
      "Engineering notes on magnetic-component selection for EV charging, solar, ESS, and industrial power topologies.",
    status: "coming-soon",
  },
];

export const resourceCategories: ResourceDocument["category"][] = [
  "Product Catalog",
  "Datasheets",
  "Certifications",
  "Application Notes",
];
