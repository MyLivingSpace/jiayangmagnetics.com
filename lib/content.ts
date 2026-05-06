/**
 * Centralized content for the Jiayang Magnetics site.
 *
 * Pulled from the strategy doc (../jiayang-website-strategy.md) and verified
 * against the live hzjy-cnt.com site (May 2026 fetch). Numbers and customer
 * lists are confirmed in Appendix A of the strategy doc.
 *
 * Open items intentionally NOT surfaced on the homepage trust strip yet:
 * - "National High-Tech Enterprise" (Appendix A item 13 — needs reconciliation)
 * - RoHS as a third-party certification (Appendix A item 15 — currently a
 *   self-declaration only)
 */

export const company = {
  brand: "Jiayang Magnetics",
  legalName: "Huizhou Jiayang Electronic Technology Co., Ltd.",
  /** Registered Chinese legal name — must match the business license. */
  legalNameZh: "惠州佳扬电子科技有限公司",
  founded: "May 2002",
  registeredCapital: "RMB 60 million",
  employees: "~1,500",
  rdEngineers: 112,
  floorArea: "60,000 ㎡",
  facilities: "Two production bases — Huizhou (Guangdong) and Wuhan/Xiantao (Hubei)",
  domesticSite: "hzjy-cnt.com",
  /**
   * Registered / mail English address — Jiayang Industrial Park (new base).
   * "Shishang Road" corresponds to 时尚路 on Chinese signage in this park.
   */
  address:
    "No. 2 Shishang Road, Yuanzhou Area, Boluo Intelligent Equipment Industrial Park, Yuanzhou Town, Boluo County, Huizhou, Guangdong, China",
  /** Same location in Chinese — used for map search and domestic readers. */
  addressZh:
    "广东省惠州市博罗县园洲镇博罗智能装备产业园园洲片区时尚路2号",
  phones: {
    main: "+1 650-789-3711",
    sales: "+86 13902650257",
    hr: "+86 180 2650 9428",
  },
  emails: {
    sales: "sales@jiayangmagnetics.com",
    engineering: "engineering@jiayangmagnetics.com",
    info: "info@jiayangmagnetics.com",
  },
  legacyEmail: "sales@hzjy-cnt.com",
} as const;

/** Trust-strip data — the single most important block for the first 5 seconds. */
export const trustPoints: { label: string; sub?: string }[] = [
  { label: "Founded May 2002", sub: "Magnetics manufacturer for 23+ years" },
  { label: "RMB 60M registered capital" },
  { label: "ISO 9001", sub: "Quality management" },
  { label: "ISO 14001", sub: "Environmental management" },
  { label: "IATF 16949", sub: "Automotive-grade discipline" },
  { label: "UL- and CQC-certified products", sub: "RoHS-compliant" },
];

export type ProductFamily = {
  slug: string;
  name: string;
  shortName?: string;
  oneLine: string;
  description: string;
  /**
   * Short concise sentence (≤ ~24 words) used by the homepage compact card.
   * The detailed Products page uses `description` instead.
   */
  homeBlurb: string;
  /** 2–3 short tags shown on the homepage compact card only. */
  tags: string[];
  /** Short, comma-separated list — shown under "Typical applications" */
  typicalApplications: string;
  /** Short, comma-separated list — shown under "Key capabilities" */
  keyCapabilities: string;
  /** Path under /public — SmartImage swaps in the real photo when present. */
  image: string;
  /**
   * Series slugs that live under this family. Empty array indicates a
   * family-only page (no series detail pages — e.g. Custom Magnetic
   * Solutions, which is a service offering rather than a product line).
   * Series content lives in lib/productSeries.ts.
   */
  series: string[];
};

/**
 * Product families. Family slugs match the v9 user brief and the new
 * /products/[family] route structure. Each family declares its `series`
 * — a list of series slugs whose detail content lives in
 * lib/productSeries.ts. Custom Magnetic Solutions has no series because
 * it's a service offering rather than a product line.
 */
export const productFamilies: ProductFamily[] = [
  {
    slug: "transformers",
    name: "Transformers",
    oneLine: "High-frequency, EV charging, and inverter transformers.",
    description:
      "High-frequency transformers for EV DC fast charging, photovoltaic and wind inverters, and high-/low-frequency power conversion — including planar architectures supported from 50 kHz to 2 MHz.",
    typicalApplications:
      "EV charging, solar/wind inverters, industrial SMPS, telecom power",
    keyCapabilities:
      "Planar and wound architectures · in-house winding & assembly · IATF 16949 process",
    image: "/images/products/transformers/family.jpg",
    homeBlurb:
      "High-frequency and power transformers for EV charging, renewable energy, and industrial power systems.",
    tags: ["EV Charging", "Solar & Wind", "Industrial Power"],
    series: [
      "high-low-frequency-transformers",
      "planar-transformer-dc",
      "new-energy-transformers",
      "amorphous-transformers",
    ],
  },
  {
    slug: "inductors-chokes",
    name: "Inductors & Chokes",
    oneLine: "Power inductors, CM/DM chokes, high-current reactors.",
    description:
      "Power inductors, common-mode and differential-mode chokes, high-current reactors, and PFC inductors for industrial, automotive, and renewable power conversion.",
    typicalApplications:
      "PFC stages, EMC filtering, motor drives, bidirectional converters",
    keyCapabilities:
      "Common-mode and differential-mode chokes · high-current reactors · low-loss design",
    image: "/images/products/inductors-chokes/family.jpg",
    homeBlurb:
      "Power inductors, common-mode chokes, and filtering components for power conversion systems.",
    tags: ["PFC", "EMI Filtering", "Motor Drives"],
    series: [
      "common-mode-choke",
      "high-frequency-pfc-inductor",
      "amorphous-active-pfc-inductor",
      "rectangular-pfc-inductor",
      "sq-series-common-mode-inductor",
      "new-energy-inductors",
    ],
  },
  {
    slug: "amorphous-magnetic-cores",
    name: "Amorphous Magnetic Cores",
    oneLine:
      "Amorphous-core-based magnetic components for low-loss, high-efficiency power conversion.",
    description:
      "Amorphous-core-based magnetic components and core options for low-loss, high-efficiency power conversion applications. Cores are sourced through qualified supplier networks and integrated into Jiayang's in-house winding, assembly, encapsulation, and testing process.",
    typicalApplications:
      "High-efficiency power conversion, transformer cores, low-loss inductors",
    keyCapabilities:
      "High saturation flux density · low loss · qualified core sourcing with in-house assembly",
    image: "/images/products/amorphous-magnetic-cores/family.jpg",
    homeBlurb:
      "Low-loss amorphous core options and component solutions for high-efficiency power electronics.",
    tags: ["Low Loss", "Power Conversion", "Core Options"],
    series: ["amorphous-magnetic-material"],
  },
  {
    slug: "nanocrystalline-magnetic-cores",
    name: "Nanocrystalline Magnetic Cores",
    oneLine:
      "Selected nanocrystalline core capabilities for EMC/EMI filtering and high-frequency designs.",
    description:
      "Selected nanocrystalline core capabilities and component solutions for EMC/EMI filtering, current sensing, and compact high-frequency magnetic designs. Combines selected nanocrystalline core processing where performed on-site with qualified external core sourcing and validation.",
    typicalApplications:
      "EMC common-mode chokes, isolation transformers, current sensors",
    keyCapabilities:
      "Selected nanocrystalline core capabilities · high permeability · compact, high-frequency design",
    image: "/images/products/nanocrystalline-magnetic-cores/family.jpg",
    homeBlurb:
      "Selected nanocrystalline core capabilities for EMC filtering, current sensing, and compact magnetic designs.",
    tags: ["EMC", "Current Sensing", "Compact Design"],
    series: ["nanocrystalline-magnetic-material"],
  },
  {
    slug: "custom-magnetic-solutions",
    name: "Custom Magnetic Solutions",
    oneLine: "Co-engineered components for your specific topology.",
    description:
      "Co-engineering using qualified core materials, selected nanocrystalline core capabilities where applicable, and Jiayang's in-house winding, assembly, encapsulation, and testing. From schematic and topology through validated prototype to mass production.",
    typicalApplications:
      "Customer-defined topologies across EV, solar, ESS, and industrial",
    keyCapabilities:
      "Co-engineering schematic → prototype → mass production · qualified core sourcing · NDA + NPI process",
    image: "/images/products/custom-magnetic-solutions/family.jpg",
    homeBlurb:
      "Co-engineered magnetic components from core selection through winding, assembly, encapsulation, and testing.",
    tags: ["Custom Design", "NPI", "Testing"],
    series: [], // Service offering — no series; the family page itself is the deepest page.
  },
];

export type Application = {
  slug: string;
  name: string;
  /** Small eyebrow above the title — broad sector classification. */
  category: string;
  oneLine: string;
  context: string;
  /** Short, comma-separated list — shown under "Typical systems" */
  typicalSystems: string;
  /**
   * Short concise sentence (≤ ~22 words) used by the homepage compact card.
   * The detailed Applications page uses `oneLine` + `typicalSystems` instead.
   * Optional — when missing, the compact card falls back to `oneLine`.
   */
  homeBlurb?: string;
};

/**
 * Primary applications — the international positioning. These six lead the
 * Applications page and the homepage Applications grid. The Established
 * Markets and Emerging Applications arrays below are kept separate so that
 * the data layer mirrors the page architecture.
 */
export const primaryApplications: Application[] = [
  {
    slug: "ev-charging",
    name: "EV Charging Infrastructure",
    category: "New Energy / Mobility",
    oneLine: "Magnetics engineered for fast, reliable DC fast charging.",
    context:
      "Transformers and inductors for AC/DC and DC/DC stages of EV charging stations, from on-board to high-power DC fast chargers.",
    typicalSystems: "DC fast chargers, charging piles, power modules",
    homeBlurb:
      "Magnetics for AC/DC charging piles, DC fast charging modules, and reliable power conversion.",
  },
  {
    slug: "photovoltaic",
    name: "Photovoltaic / Solar Inverters",
    category: "Renewable Energy",
    oneLine: "Magnetics for high-efficiency string and central inverters.",
    context:
      "Boost inductors, PFC chokes, and isolation transformers for residential, commercial, and utility-scale solar inverter architectures.",
    typicalSystems: "String inverters, central inverters, PV power conversion",
    homeBlurb:
      "Magnetic components for string and central inverter architectures.",
  },
  {
    slug: "wind",
    name: "Wind Power",
    category: "Renewable Energy",
    oneLine: "Robust magnetic components for wind inverter systems.",
    context:
      "High-current chokes and transformers engineered for the duty cycles and reliability demands of wind power conversion.",
    typicalSystems: "Wind inverter systems, pitch-control power, grid interface",
    homeBlurb:
      "Robust magnetic components for wind inverter and grid-interface systems.",
  },
  {
    slug: "energy-storage",
    name: "Energy Storage Systems",
    category: "Energy Storage",
    oneLine: "Magnetics for residential, commercial, and utility BESS.",
    context:
      "Bidirectional inverter magnetics, isolation transformers, and EMI filtering components for battery energy storage systems.",
    typicalSystems: "BESS PCS, bidirectional converters, auxiliary power",
    homeBlurb:
      "Magnetics for BESS PCS, bidirectional converters, and auxiliary power.",
  },
  {
    slug: "industrial-power",
    name: "Industrial Power Supply",
    category: "Industrial",
    oneLine: "Industrial-grade magnetics for switching power supplies.",
    context:
      "Power transformers, PFC inductors, and EMI chokes for industrial power supplies, telecom rectifiers, and automation systems.",
    typicalSystems: "SMPS, UPS, high-power industrial converters",
    homeBlurb:
      "Transformers, inductors, and chokes for industrial-grade switching power supplies.",
  },
  {
    slug: "smart-grid",
    name: "Smart Grid & Power Electronics",
    category: "Grid Infrastructure",
    oneLine: "Magnetics for grid-tied and smart-grid power electronics.",
    context:
      "Components engineered for solid-state transformers, STATCOM, and other emerging grid-edge power electronics platforms.",
    typicalSystems: "Grid-tied converters, power quality systems",
    homeBlurb:
      "Magnetics for grid-tied converters, power quality systems, and smart-grid power electronics.",
  },
];

/**
 * Established markets — historical / volume-manufacturing experience.
 * These appear on the Applications page in their own band, BELOW the
 * primary applications. They prove long-term OEM supply capability without
 * repositioning Jiayang as a home-appliance company.
 */
export const establishedMarkets: Application[] = [
  {
    slug: "home-appliances-hvac",
    name: "Home Appliances & HVAC",
    category: "Established Market",
    oneLine:
      "Magnetic components for air conditioners, compressors, appliance power supplies, inverter drives, and high-volume OEM manufacturing programs.",
    context:
      "A long-standing market for Jiayang. Continues to support large-volume OEM programs across major Chinese appliance and HVAC manufacturers.",
    typicalSystems:
      "Inverter air conditioners, compressor drives, appliance power boards, HVAC control systems",
  },
  {
    slug: "motor-compressor-drives",
    name: "Motor & Compressor Drive Systems",
    category: "Established Market",
    oneLine:
      "Inductors, transformers, and filtering components for motor-drive and compressor-drive power electronics.",
    context:
      "Magnetic components used by motor-drive and compressor-control system manufacturers — a category adjacent to industrial automation.",
    typicalSystems:
      "Variable-frequency drives, compressor control boards, motor power modules",
  },
  {
    slug: "consumer-electronics-power",
    name: "Consumer Electronics Power Systems",
    category: "Established Market",
    oneLine:
      "Magnetic components supporting compact, efficient power conversion for consumer and household electronic systems.",
    context:
      "Compact magnetics for consumer-class power adapters and switching power supply assemblies.",
    typicalSystems:
      "Power adapters, control boards, compact switching power supplies",
  },
];

/**
 * Emerging applications — forward-looking direction. Robotics is positioned
 * here as an "Emerging" track only (per strategy doc Section 4A). Different
 * shape from Application because each emerging entry is a single section
 * with sub-areas, not a card in a grid.
 */
export type EmergingApplication = {
  slug: string;
  name: string;
  category: string;
  positioning: string;
  positioningSecondary?: string;
  ctaHref: string;
  ctaLabel: string;
  subAreas: { title: string; body: string }[];
};

export const emergingApplications: EmergingApplication[] = [
  {
    slug: "robotics",
    name: "Robotics & Intelligent Automation",
    category: "Emerging Applications",
    positioning:
      "The transformer, inductor, and magnetic-core families that we already supply to EV charging and industrial customers apply directly to robotic system architectures — robotic charging, AGV/AMR onboard power, motor-drive electronics, and EMI/EMC filtering.",
    positioningSecondary:
      "Robotics is positioned here as an emerging direction. We invite platform builders to engage our engineering team for co-engineering rather than catalog selection.",
    ctaHref: "/contact?intent=technical",
    ctaLabel: "Co-engineer with our magnetics team",
    subAreas: [
      {
        title: "Robotic charging systems",
        body: "Applies directly to our EV-charging transformer and inductor work — same magnetics, different end platform.",
      },
      {
        title: "AGV / AMR onboard power",
        body: "Transfers to 48 V / 80 V DC-DC converter designs using the planar transformers and PFC inductors we ship for industrial supplies.",
      },
      {
        title: "Motor-drive electronics",
        body: "Suited for inductor and choke designs in motor-drive subsystems used across industrial automation.",
      },
      {
        title: "EMI / EMC filtering",
        body: "Our common-mode and differential-mode chokes apply directly to servo-drive-dense robotic platforms.",
      },
      {
        title: "Compact power modules",
        body: "Amorphous and nanocrystalline cores are well suited to space-constrained, weight-sensitive robotic platforms.",
      },
      {
        title: "Humanoid & next-gen platforms",
        body: "Open to co-engineering with early-stage humanoid and electromechanical platform builders.",
      },
    ],
  },
];

/**
 * Customer reference groups.
 *
 * Pulled from public listings on Jiayang's domestic website (hzjy-cnt.com).
 * Rendered as text-only customer-name pills — no fake logos, no fabricated
 * relationships. The homepage and About page render this data through the
 * CustomerLogoWall component, which always emits a small disclosure note
 * indicating these are public references from the existing domestic site.
 *
 * Important: do NOT add a customer to this list unless their name appears on
 * Jiayang's existing public site or has been explicitly cleared by Jiayang
 * for use on the international site.
 */
export type Customer = {
  name: string;
  /** Used to derive the logo path under /public/images/customers/{slug}.{ext}. */
  slug: string;
  /**
   * Path under /public to the official logo asset, if available.
   * The CustomerLogoWall component checks for the file's existence at render
   * time. If the file is missing, a clean text-only typographic tile renders
   * instead — never a fake logo, never a stylized substitute.
   */
  logoPath: string;
  /**
   * Sector the customer belongs to. The customer's parent group already
   * conveys this, but storing it on the customer makes downstream filtering
   * and search easier without refactoring the data layout.
   */
  sector: string;
};

export type CustomerReferenceGroup = {
  id: string;
  title: string;
  customers: Customer[];
};

export const customerReferenceGroups: CustomerReferenceGroup[] = [
  {
    id: "appliance-hvac",
    title: "Home Appliances & HVAC",
    customers: [
      { name: "Midea", slug: "midea", logoPath: "/images/customers/midea.svg", sector: "Home Appliances & HVAC" },
      { name: "Haier", slug: "haier", logoPath: "/images/customers/haier.svg", sector: "Home Appliances & HVAC" },
      { name: "Hisense", slug: "hisense", logoPath: "/images/customers/hisense.svg", sector: "Home Appliances & HVAC" },
      { name: "Gree", slug: "gree", logoPath: "/images/customers/gree.svg", sector: "Home Appliances & HVAC" },
      { name: "Panasonic", slug: "panasonic", logoPath: "/images/customers/panasonic.svg", sector: "Home Appliances & HVAC" },
      { name: "SAMPO", slug: "sampo", logoPath: "/images/customers/sampo.svg", sector: "Home Appliances & HVAC" },
      { name: "TCL", slug: "tcl", logoPath: "/images/customers/tcl.svg", sector: "Home Appliances & HVAC" },
      { name: "Xiaomi", slug: "xiaomi", logoPath: "/images/customers/xiaomi.svg", sector: "Home Appliances & HVAC" },
    ],
  },
  {
    id: "energy-ev",
    title: "Energy, EV Charging & Power Electronics",
    customers: [
      { name: "Huawei", slug: "huawei", logoPath: "/images/customers/huawei.svg", sector: "Energy, EV Charging & Power Electronics" },
      { name: "Sungrow", slug: "sungrow", logoPath: "/images/customers/sungrow.svg", sector: "Energy, EV Charging & Power Electronics" },
      { name: "Deye", slug: "deye", logoPath: "/images/customers/deye.svg", sector: "Energy, EV Charging & Power Electronics" },
      { name: "Delta", slug: "delta", logoPath: "/images/customers/delta.svg", sector: "Energy, EV Charging & Power Electronics" },
      { name: "VREMT", slug: "vremt", logoPath: "/images/customers/vremt.svg", sector: "Energy, EV Charging & Power Electronics" },
      { name: "Shinry", slug: "shinry", logoPath: "/images/customers/shinry.svg", sector: "Energy, EV Charging & Power Electronics" },
      { name: "Panda", slug: "panda", logoPath: "/images/customers/panda.svg", sector: "Energy, EV Charging & Power Electronics" },
      { name: "SAJ", slug: "saj", logoPath: "/images/customers/saj.svg", sector: "Energy, EV Charging & Power Electronics" },
    ],
  },
  {
    id: "motor-industrial",
    title: "Motor Drive & Industrial Systems",
    customers: [
      { name: "BYD", slug: "byd", logoPath: "/images/customers/byd.svg", sector: "Motor Drive & Industrial Systems" },
      { name: "Welling", slug: "welling", logoPath: "/images/customers/welling.svg", sector: "Motor Drive & Industrial Systems" },
      { name: "Dayang Motor", slug: "dayang-motor", logoPath: "/images/customers/dayang-motor.svg", sector: "Motor Drive & Industrial Systems" },
      { name: "Broad-Ocean", slug: "broad-ocean", logoPath: "/images/customers/broad-ocean.svg", sector: "Motor Drive & Industrial Systems" },
      { name: "Megmeet", slug: "megmeet", logoPath: "/images/customers/megmeet.svg", sector: "Motor Drive & Industrial Systems" },
      { name: "Sanhua", slug: "sanhua", logoPath: "/images/customers/sanhua.svg", sector: "Motor Drive & Industrial Systems" },
      { name: "Vapel", slug: "vapel", logoPath: "/images/customers/vapel.svg", sector: "Motor Drive & Industrial Systems" },
      { name: "Sinexcel", slug: "sinexcel", logoPath: "/images/customers/sinexcel.svg", sector: "Motor Drive & Industrial Systems" },
    ],
  },
];

/**
 * Curated subset shown on the homepage. The full list lives on the About
 * page (Customer Relationships section). The homepage stays concise — a
 * quick credibility scan rather than a wall.
 *
 * Curate homepage logo density independently from the full About-page list.
 */
const homepageCustomerSlugs: Record<string, string[]> = {
  "appliance-hvac": ["midea", "haier", "gree", "panasonic", "tcl", "xiaomi"],
  "energy-ev": ["huawei", "sungrow", "delta", "deye", "vremt", "saj"],
  "motor-industrial": [
    "byd",
    "welling",
    "dayang-motor",
    "sanhua",
    "vapel",
    "sinexcel",
  ],
};

export const homepageCustomerReferenceGroups: CustomerReferenceGroup[] =
  customerReferenceGroups.map((group) => ({
    ...group,
    customers: group.customers.filter((c) =>
      homepageCustomerSlugs[group.id]?.includes(c.slug)
    ),
  }));

/** Capability pillars — used on the homepage Why Jiayang block. */
export const capabilityPillars: { title: string; body: string }[] = [
  {
    title: "23+ years of magnetic manufacturing",
    body: "Specialized in magnetic components since 2002, with two production bases in Guangdong and Hubei.",
  },
  {
    title: "In-house engineering team",
    body: "Magnetic design, simulation, and prototyping support from 112 R&D engineers.",
  },
  {
    title: "Integrated component manufacturing",
    body: "Core material selection and validation, in-house winding, assembly, encapsulation, and final test — supported by selected nanocrystalline core processing capabilities and a qualified core supply chain.",
  },
  {
    title: "IATF 16949 quality system",
    body: "Automotive-grade process discipline applied across all product lines.",
  },
  {
    title: "High-current, high-frequency expertise",
    body: "Proven designs for EV DC fast charging, solar inverters, and high-density power conversion.",
  },
  {
    title: "Selected OEM references",
    body: "Long-term supply relationships with customers including Midea, Huawei, Sungrow, Delta, Deye, and SAJ — public references aligned with Jiayang’s domestic website.",
  },
];

/** Certifications shown in the homepage band and About page grid. */
export const certifications: string[] = [
  "ISO 9001",
  "ISO 14001",
  "IATF 16949",
  "UL",
  "CQC",
  "RoHS-compliant",
];

/**
 * Milestones from Appendix A item 2 of the strategy doc.
 *
 * Major milestones (`major: true`) get larger typography and an optional
 * thumbnail image in the timeline. Minor milestones render as compact
 * single-line entries. The five major milestones are: founding (2002),
 * entry into the new-energy market (2015), Midea Gold Supplier (2020),
 * Industrial Park operations (2023), and the international brand launch
 * (2026).
 *
 * The `image` paths point to /public/images/timeline/. Drop a real photo
 * at any of those paths and the timeline will pick it up automatically.
 * If a major milestone has no image yet, the card simply renders without
 * a thumbnail.
 */
export type Milestone = {
  year: string;
  body: string;
  major?: boolean;
  image?: string;
};

export const milestones: Milestone[] = [
  {
    year: "2002",
    body: "Huizhou Jiayang founded in May.",
    major: true,
    image: "/images/timeline/2002-founded.jpg",
  },
  { year: "2004", body: "ISO 9000:2000 quality management certification." },
  {
    year: "2008",
    body: "Wuhan Chenyang established (Hubei base); UL, CQC, and ISO 9001:2008 certifications achieved.",
    major: true,
    image: "/images/timeline/2008-hubei-base.jpg",
  },
  {
    year: "2010",
    body: "Granted invention patent for Active PFC Inductor.",
  },
  {
    year: "2015",
    body: "High-Power High-Frequency Inductor & Transformer Business Division — entry into the new-energy market.",
    major: true,
    image: "/images/timeline/2015-new-energy-market.jpg",
  },
  {
    year: "2016",
    body: "First recognized as a Guangdong Provincial High-Tech Enterprise.",
  },
  {
    year: "2019",
    body: "Granted invention patent for the Transformer Core Winding Assembly Line.",
  },
  {
    year: "2020",
    body: "Awarded Midea “Gold Supplier”.",
    major: true,
    image: "/images/timeline/2020-midea-gold-supplier.jpg",
  },
  {
    year: "2021",
    body: "Construction begins on Jiayang Industrial Park; Wuhan Chenyang named a Hubei “Little Giant” enterprise.",
  },
  {
    year: "2022",
    body: "China Magnetic Components Association Greater China Region “Outstanding Supplier” award.",
  },
  {
    year: "2023",
    body: "Jiayang Industrial Park commences operations (November); third recognition as a Guangdong Provincial High-Tech Enterprise.",
    major: true,
    image: "/images/timeline/2023-jiayang-industrial-park.jpg",
  },
  {
    year: "2025",
    body: "Member unit of the Guangdong Magnetic Components Industry Association.",
  },
  {
    year: "2026",
    body: "Launch of Jiayang Magnetics international brand.",
    major: true,
    image: "/images/timeline/2026-jiayang-magnetics.jpg",
  },
];

/** Top-level navigation. The dual-CTA button is rendered separately by Header. */
export const navItems: { href: string; label: string }[] = [
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
];
