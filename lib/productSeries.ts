/**
 * Product series content for /products/[family]/[series] pages.
 *
 * Each series belongs to a parent family (declared via `familySlug`) and
 * mirrors the taxonomy of the existing hzjy-cnt.com product catalog.
 * Series with full content from the old site:
 *   - high-low-frequency-transformers (3 schematics + 1 typical circuit)
 *   - common-mode-choke (Fe-based nanocrystalline vs ferrite comparison + 27-row spec table)
 *   - high-frequency-pfc-inductor (10-row spec table)
 *   - amorphous-magnetic-material (4-grade × 12-property characteristics + 26-core spec)
 *
 * Series with summary-only content from the old site (no schematic, comparison, or spec yet):
 *   - planar-transformer-dc, new-energy-transformers, amorphous-transformers
 *   - amorphous-active-pfc-inductor, rectangular-pfc-inductor
 *   - sq-series-common-mode-inductor, new-energy-inductors
 *   - nanocrystalline-magnetic-material
 *
 * Image paths point to /public/images/products/<family>/<series>/. Drop
 * the actual product photos and engineering diagrams there and SmartImage
 * picks them up. No invented diagrams, no fabricated specs.
 */

import type { ProductFamily } from "@/lib/content";
import { productFamilies } from "@/lib/content";
import type { CharacteristicsTableData } from "@/components/CharacteristicsTable";

/* -------------------------------------------------------------------------- */
/*                              Shared sub-types                                */
/* -------------------------------------------------------------------------- */

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type DiagramItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type Table = {
  caption?: string;
  columns: string[];
  rows: string[][];
  note?: string;
};

/* -------------------------------------------------------------------------- */
/*                          ProductSeries type                                  */
/* -------------------------------------------------------------------------- */

export type ProductSeries = {
  /** Family this series belongs to. Used for breadcrumbs and routing. */
  familySlug: ProductFamily["slug"];
  /** Customer-facing series name (e.g. "High & Low Frequency Transformers"). */
  name: string;
  /** Hero positioning sentence — concise, technical. */
  positioning: string;
  /** Short blurb for series cards on the family overview page. */
  shortBlurb: string;
  /** Hero / card image. */
  image: string;
  /** Bullet list of feature highlights. */
  features: string[];
  /** Application summary paragraph. */
  applicationsSummary: string;
  /** Optional product gallery images. */
  galleryImages?: GalleryImage[];
  /** Schematic & dimension diagrams (when migrated from old site). */
  schematics?: DiagramItem[];
  /** Typical circuit diagrams (when migrated from old site). */
  circuitDiagrams?: DiagramItem[];
  /** Reference / comparison table — e.g. material comparison. */
  comparisonTable?: Table;
  /**
   * Characteristics tables — for grade-by-feature-by-application matrices
   * where cells may contain bulleted lists. The CharacteristicsTable
   * component handles both string and string[] cell content.
   */
  characteristicsTables?: CharacteristicsTableData[];
  /** One or more specification tables. */
  specTables?: Table[];
  /** Customizable parameters available to customers. */
  customizationOptions: string[];
  /** Quality and testing notes. */
  qualityNotes: string[];
  /** Application slugs that this series supports. */
  relatedApplications: string[];
};

/* -------------------------------------------------------------------------- */
/*                          Per-series detail content                           */
/* -------------------------------------------------------------------------- */

export const productSeries: Record<string, ProductSeries> = {
  /* ============================ TRANSFORMERS ============================= */

  /* High and Low Frequency Transformers — full content from /en/product/18.html */
  "high-low-frequency-transformers": {
    familySlug: "transformers",
    name: "High & Low Frequency Transformers",
    positioning:
      "High and low frequency transformers with excellent power density, good EMC characteristics, low loss, and controlled temperature rise. Used across appliances, switching power supplies, telecom, and consumer electronics.",
    shortBlurb:
      "Excellent power density, good EMC, low loss, and controlled temperature rise.",
    image:
      "/images/products/transformers/high-low-frequency-transformers/hero.jpg",
    features: [
      "Excellent power density",
      "Good EMC performance",
      "Low loss across frequency range",
      "Controlled temperature rise",
      "High- and low-frequency architectures supported",
    ],
    applicationsSummary:
      "Used in household appliances, switching power supplies, telecom power supplies, LCD drivers, and compact charging systems.",
    galleryImages: [
      {
        src: "/images/products/transformers/high-low-frequency-transformers/product-01.jpg",
        alt: "High and low frequency transformer",
      },
    ],
    schematics: [
      {
        src: "/images/products/transformers/high-low-frequency-transformers/schematic-inverter-air-conditioner-40w.jpg",
        alt: "Schematic — Inverter air conditioner 40 W",
        caption: "Inverter air conditioner — 40 W",
      },
      {
        src: "/images/products/transformers/high-low-frequency-transformers/schematic-pdp-tv-240w.jpg",
        alt: "Schematic — PDP TV 240 W",
        caption: "PDP TV — 240 W",
      },
      {
        src: "/images/products/transformers/high-low-frequency-transformers/schematic-adapter-75w.jpg",
        alt: "Schematic — Adapter 75 W",
        caption: "Adapter — 75 W",
      },
    ],
    circuitDiagrams: [
      {
        src: "/images/products/transformers/high-low-frequency-transformers/typical-circuit-diagram.jpg",
        alt: "Typical circuit diagram",
        caption: "Typical circuit application.",
      },
    ],
    customizationOptions: [
      "Core material — ferrite, amorphous, selected nanocrystalline",
      "Winding structure and turns ratio",
      "Insulation system to project requirements",
      "Mounting and terminal configuration",
      "Encapsulation for thermal and mechanical robustness",
      "Sample and NPI support",
    ],
    qualityNotes: [
      "Supplier qualification and core material validation",
      "IQC, IPQC, and OQC inspection",
      "LCR characterization and hipot dielectric withstand testing",
      "Temperature-rise validation",
      "Reliability data shared under NDA",
    ],
    relatedApplications: [
      "home-appliances-hvac",
      "consumer-electronics-power",
      "industrial-power",
    ],
  },

  /* Planar Transformer DC — summary content from family overview /en/products/40 */
  "planar-transformer-dc": {
    familySlug: "transformers",
    name: "Planar Transformer DC",
    positioning:
      "Planar DC transformers with high current density, high efficiency, compact form factor, low EMI radiation, and a wide operating frequency range from 50 kHz to 2 MHz.",
    shortBlurb:
      "High current density, high efficiency, compact form, 50 kHz – 2 MHz range.",
    image:
      "/images/products/transformers/planar-transformer-dc/hero.jpg",
    features: [
      "High current density and high efficiency",
      "Small size and good heat transfer",
      "Low temperature rise and low EMI radiation",
      "Wide operating frequency range — 50 kHz to 2 MHz",
      "Good insulation",
    ],
    applicationsSummary:
      "Used in battery charging power supplies, distributed power supplies for 5G communication equipment, UPS systems, and on-board power supplies.",
    galleryImages: [
      {
        src: "/images/products/transformers/planar-transformer-dc/product-01.jpg",
        alt: "Planar transformer DC",
      },
    ],
    customizationOptions: [
      "Operating frequency in the 50 kHz – 2 MHz window",
      "Core material — ferrite, amorphous, selected nanocrystalline",
      "Mounting (PCB integration, surface mount, chassis)",
      "Encapsulation and thermal interfaces",
      "Sample and NPI support",
    ],
    qualityNotes: [
      "Supplier qualification and core material validation",
      "IQC, IPQC, and OQC inspection",
      "LCR characterization and hipot dielectric withstand testing",
      "Temperature-rise validation under rated load",
    ],
    relatedApplications: [
      "ev-charging",
      "industrial-power",
      "energy-storage",
    ],
  },

  /* New Energy Transformer — summary content from /en/products/40 */
  "new-energy-transformers": {
    familySlug: "transformers",
    name: "New Energy Transformers",
    positioning:
      "Transformers built for high-frequency, high-power-density operation in inverters, monitors, UPS, and energy-conversion systems — with controlled temperature rise, low loss, and good EMI characteristics.",
    shortBlurb:
      "High-frequency, high-power-density transformers for inverter and energy systems.",
    image:
      "/images/products/transformers/new-energy-transformers/hero.jpg",
    features: [
      "High frequency and high power density",
      "Controlled temperature rise",
      "Low loss across operating range",
      "Good EMI characteristics",
    ],
    applicationsSummary:
      "Used in inverter air conditioners, PDP TV systems, adapters, UPS, and monitor power supplies.",
    galleryImages: [
      {
        src: "/images/products/transformers/new-energy-transformers/product-01.jpg",
        alt: "New energy transformer",
      },
    ],
    customizationOptions: [
      "Core material selection",
      "Turns ratio and isolation rating",
      "Mounting and terminal configuration",
      "Encapsulation for harsh environments",
      "Sample and NPI support",
    ],
    qualityNotes: [
      "Supplier qualification and core material validation",
      "IQC, IPQC, and OQC inspection",
      "LCR characterization and hipot testing",
      "Temperature-rise validation",
    ],
    relatedApplications: [
      "energy-storage",
      "industrial-power",
      "home-appliances-hvac",
    ],
  },

  /* Amorphous Transformers — full content from /en/product/31.html */
  "amorphous-transformers": {
    familySlug: "transformers",
    name: "Amorphous Transformers",
    positioning:
      "Amorphous-core transformers with high saturation flux density, high permeability, low coercive force, low core loss, and excellent thermal stability — built for high-power switching and inverter applications.",
    shortBlurb:
      "High saturation, low coercive force, low core loss, excellent thermal stability.",
    image:
      "/images/products/transformers/amorphous-transformers/hero.jpg",
    features: [
      "High saturation flux density and high permeability",
      "Low coercive force and low core loss",
      "Excellent thermal stability",
      "Built around qualified amorphous core sourcing",
    ],
    applicationsSummary:
      "Used in high-power switching power supplies, inverter welding machines, uninterruptible power supplies (UPS), and variable frequency drives (VFDs).",
    galleryImages: [
      {
        src: "/images/products/transformers/amorphous-transformers/product-01.jpg",
        alt: "Amorphous transformer",
      },
    ],
    /*
     * Migrated from /en/product/31.html — 9-row spec table covering core
     * size, protection box size, effective core area, mean magnetic length,
     * weight, power, and applicable welding-machine current. Real reference
     * data; no invented numbers.
     */
    specTables: [
      {
        caption:
          "Amorphous transformer — representative specifications (core size, protection box, power, welding-machine current).",
        columns: [
          "Product model",
          "Core OD (mm)",
          "Core ID (mm)",
          "Core HT (mm)",
          "Box OD (mm)",
          "Box ID (mm)",
          "Box HT (mm)",
          "Ac (cm²)",
          "Lm (cm)",
          "Wt (g)",
          "P (kW)",
          "Welding-machine current",
        ],
        rows: [
          ["JYCNT-644020", "64", "40", "20", "66", "37", "23", "1.68", "16.3", "200", "2 / 3", "—"],
          ["JYCNT-704025", "70", "40", "25", "72", "37", "28", "2.63", "17.3", "330", "3 / 4", "—"],
          ["JYCNT-805025", "80", "50", "25", "85", "44", "30", "2.63", "20.4", "390", "4 / 5", "120 A / 160 A"],
          ["JYCNT-1056030", "105", "60", "30", "110", "56", "35", "4.86", "25.9", "1000", "8 – 10", "—"],
          ["JYCNT-1206030", "120", "60", "30", "125", "57", "35", "6.30", "28.3", "1280", "8 / 15", "315 A"],
          ["JYCNT-1207020", "120", "70", "20", "125", "67", "20", "3.50", "29.8", "750", "7 / 9", "—"],
          ["JYCNT-1207030", "130", "70", "30", "125", "67", "35", "5.25", "29.8", "1130", "10 / 12", "315 A / 400 A"],
          ["JYCNT-1308040", "130", "80", "40", "136", "76", "45", "7.00", "33.0", "1660", "15 – 20", "400 A / 500 A"],
          ["JYCNT-1309050", "130", "90", "50", "136", "85", "56", "7.00", "34.5", "1740", "15 – 20", "630 A"],
        ],
        note: "Final dimensions vary by design and customer requirements. Additional ratings available on request.",
      },
    ],
    customizationOptions: [
      "Amorphous core grade selection (qualified sourcing)",
      "Turns ratio and isolation",
      "Mounting and terminal configuration",
      "Encapsulation for thermal and mechanical robustness",
      "Sample and NPI support",
    ],
    qualityNotes: [
      "Qualified amorphous core sourcing with incoming material inspection",
      "Core material validation per project",
      "IQC, IPQC, and OQC inspection",
      "Hipot, surge, and temperature-rise testing",
    ],
    relatedApplications: [
      "industrial-power",
      "energy-storage",
      "ev-charging",
    ],
  },

  /* ============================ INDUCTORS & CHOKES ============================= */

  /* Common Mode Choke — full content from /en/product/17.html */
  "common-mode-choke": {
    familySlug: "inductors-chokes",
    name: "Common Mode Choke",
    positioning:
      "Common-mode chokes with low winding count and high inductance, good impedance characteristic, and low temperature rise — suited to long-term operation at elevated temperatures.",
    shortBlurb:
      "Low winding count, high inductance, low temperature rise — Single & three-phase configurations.",
    image: "/images/products/inductors-chokes/common-mode-choke/hero.jpg",
    features: [
      "Low number of windings with high inductance",
      "Good impedance characteristic",
      "Low temperature rise — suitable for long-term high-temperature operation",
      "Single-phase and three-phase configurations",
    ],
    applicationsSummary:
      "Used in household appliances, new energy vehicles, communication power supplies, and photovoltaic inverters.",
    galleryImages: [
      {
        src: "/images/products/inductors-chokes/common-mode-choke/product-01.jpg",
        alt: "Common-mode choke",
      },
    ],
    /*
     * Migrated verbatim from /en/product/17.html — performance comparison
     * between Fe-based nanocrystalline and ferrite core. Real material
     * reference data; no invented numbers.
     */
    comparisonTable: {
      caption:
        "Performance comparison: Fe-based nanocrystalline vs ferrite core (reference values, common-mode choke applications).",
      columns: [
        "Basic magnetic parameters",
        "Fe-based nanocrystalline",
        "Ferrite core",
      ],
      rows: [
        ["Saturation flux density Bs (T)", "1.2", "0.5"],
        ["Saturation magnetostriction λs (PPM)", "<3", "4"],
        ["Electrical resistivity ρ (μΩ·cm)", "80", "106"],
        ["Curie temperature Tc (°C)", "570", "<200"],
        ["Residual flux density Br (T)", "0.6–0.7", "0.2"],
        ["Initial permeability μi (Gs/Oe)", ">80,000", "—"],
        ["Maximum permeability μm (Gs/Oe)", ">260,000", "<20,000"],
        ["Coercivity Hc (A/mm)", "<1.5", "6.0"],
      ],
      note: "Values shown are typical reference figures. Actual product performance depends on design and operating conditions.",
    },
    specTables: [
      {
        caption: "Common-mode choke — representative specifications.",
        columns: [
          "Item",
          "Rated current",
          "L (mm, max)",
          "H (mm, max)",
          "W (mm, max)",
          "Phase",
        ],
        rows: [
          ["5A / 18 mH", "AC 5 A", "32", "30", "21", "Single phase"],
          ["8A / 6 mH", "AC 8 A", "30.5", "30.5", "16.5", "Single phase"],
          ["10A / 4.8 mH", "AC 10 A", "36", "38", "26", "Single phase"],
          ["10A / 5 mH", "AC 10 A", "41", "43", "22", "Single phase"],
          ["10A / 10 mH", "AC 10 A", "32", "30", "20", "Single phase"],
          ["10A / 16 mH", "AC 10 A", "36", "36", "22", "Single phase"],
          ["13A / 5 mH", "AC 13 A", "49", "32", "47", "Single phase"],
          ["15A / 7 mH", "AC 15 A", "50", "54", "30", "Single phase"],
          ["18A / 5 mH", "AC 18 A", "43", "43", "22", "Single phase"],
          ["20A / 4.8 mH", "AC 20 A", "45", "45", "28", "Single phase"],
          ["20A / 10 mH", "AC 20 A", "67", "66", "49", "Three phase"],
          ["22A / 3.3 mH", "AC 22 A", "49", "50", "30", "Single phase"],
          ["22A / 5 mH", "AC 22 A", "54", "55", "33", "Single phase"],
          ["25A / 16 mH", "AC 25 A", "52", "55", "35", "Single phase"],
          ["30A / 5 mH", "AC 30 A", "52", "52", "33", "Single phase"],
          ["30A / 5 mH", "AC 30 A", "67", "66", "49", "Three phase"],
          ["30A / 8 mH", "AC 30 A", "53", "55", "33", "Single phase"],
          ["35A / 1.5 mH", "AC 35 A", "53", "54", "34", "Single phase"],
          ["35A / 4.5 mH", "AC 35 A", "72", "73", "52", "Three phase"],
          ["35A / 5 mH", "AC 35 A", "54", "55", "35", "Single phase"],
          ["40A / 1.6 mH", "AC 40 A", "53", "55", "35", "Single phase"],
          ["40A / 5 mH", "AC 40 A", "54", "54", "35", "Three phase"],
          ["45A / 4 mH", "AC 45 A", "53", "55", "35", "Three phase"],
          ["50A / 0.8 mH", "AC 50 A", "69", "65", "62", "Three phase"],
          ["50A / 3 mH", "AC 50 A", "78", "78", "52", "Three phase"],
          ["60A / 4 mH", "AC 60 A", "115", "80", "71", "Three phase"],
          ["65A / 4 mH", "AC 65 A", "85", "81", "60", "Three phase"],
          ["70A / 2 mH", "AC 70 A", "85", "81", "60", "Three phase"],
        ],
        note: "Final dimensions vary by design and customer requirements. Additional ratings available on request.",
      },
    ],
    customizationOptions: [
      "Core material — selected nanocrystalline, ferrite",
      "Winding structure and turns count",
      "Single-phase or three-phase construction",
      "Custom inductance, current rating, and dimensions",
      "Mounting and terminal configuration",
      "Sample and NPI support",
    ],
    qualityNotes: [
      "Supplier qualification and core material validation",
      "IQC, IPQC, and OQC inspection",
      "LCR characterization for inductance and impedance",
      "Hipot dielectric withstand testing",
      "Temperature-rise validation",
    ],
    relatedApplications: [
      "ev-charging",
      "photovoltaic",
      "home-appliances-hvac",
      "industrial-power",
    ],
  },

  /* High-frequency PFC Inductor — full content from /en/product/24.html */
  "high-frequency-pfc-inductor": {
    familySlug: "inductors-chokes",
    name: "High-Frequency PFC Inductor",
    positioning:
      "High-frequency PFC inductors with high saturation magnetic flux density and excellent DC bias performance — suited to home appliances, EV systems, communications, photovoltaic, and industrial power supplies.",
    shortBlurb:
      "High saturation flux density and excellent DC bias performance.",
    image:
      "/images/products/inductors-chokes/high-frequency-pfc-inductor/hero.jpg",
    features: [
      "High saturation magnetic flux density",
      "Excellent DC bias performance",
      "Stable across operating frequency",
      "Compatible with high-density PFC topologies",
    ],
    applicationsSummary:
      "Used in home appliances, new energy vehicles, communication power supplies, photovoltaic inverters, and industrial power supplies.",
    galleryImages: [
      {
        src: "/images/products/inductors-chokes/high-frequency-pfc-inductor/product-01.jpg",
        alt: "High-frequency PFC inductor",
      },
    ],
    specTables: [
      {
        caption: "High-frequency PFC inductor — representative specifications.",
        columns: [
          "Item",
          "Rated current",
          "Rated inductance",
          "L (mm, max)",
          "H (mm, max)",
          "W (mm, max)",
        ],
        rows: [
          ["10A / 300 µH", "DC 10 A", "300 µH min.", "60.0", "58.0", "29.0"],
          ["10A / 400 µH", "DC 10 A", "400 µH min.", "50.0", "49.0", "28.5"],
          ["10A / 430 µH", "DC 10 A", "430 µH min.", "54.0", "60.0", "30.0"],
          ["13A / 500 µH", "DC 13 A", "500 µH min.", "54.0", "53.0", "35.0"],
          ["13A / 500 µH", "DC 13 A", "500 µH min.", "60.0", "58.0", "35.0"],
          ["13A / 500 µH", "DC 13 A", "500 µH min.", "68.0", "67.0", "30.0"],
          ["16A / 300 µH", "DC 16 A", "300 µH min.", "58.0", "60.0", "37.0"],
          ["16A / 430 µH", "DC 16 A", "430 µH min.", "70.0", "73.0", "35.0"],
          ["18A / 250 µH", "DC 18 A", "250 µH min.", "58.0", "61.0", "37.0"],
          ["20A / 350 µH", "DC 20 A", "350 µH min.", "73.0", "76.0", "36.0"],
        ],
        note: "Additional ratings available on request.",
      },
    ],
    customizationOptions: [
      "Core material selection",
      "Inductance and current rating",
      "Mounting (through-hole, surface mount, chassis)",
      "Encapsulation for thermal robustness",
      "Sample and NPI support",
    ],
    qualityNotes: [
      "Supplier qualification and core material validation",
      "IQC, IPQC, and OQC inspection",
      "LCR characterization and DC-bias testing",
      "Temperature-rise validation under rated current",
    ],
    relatedApplications: [
      "ev-charging",
      "photovoltaic",
      "industrial-power",
      "home-appliances-hvac",
    ],
  },

  /* Amorphous Active PFC Inductor — full content from /en/product/22.html */
  "amorphous-active-pfc-inductor": {
    familySlug: "inductors-chokes",
    name: "Amorphous Active PFC Inductor",
    positioning:
      "Amorphous-core active PFC inductors with high saturation flux density, low high-frequency loss, excellent frequency characteristics, stable temperature behavior, and good DC superposition characteristics.",
    shortBlurb:
      "High saturation, low high-frequency loss, stable temperature characteristics.",
    image:
      "/images/products/inductors-chokes/amorphous-active-pfc-inductor/hero.jpg",
    features: [
      "High saturation flux density",
      "Low high-frequency loss",
      "Excellent frequency characteristics",
      "Stable temperature characteristics",
      "Good DC superposition characteristics",
      "Suited to high-power energy storage and inverter power supplies",
    ],
    applicationsSummary:
      "Used in DC inverter air conditioners and solar active PFC stages.",
    galleryImages: [
      {
        src: "/images/products/inductors-chokes/amorphous-active-pfc-inductor/product-01.jpg",
        alt: "Amorphous active PFC inductor",
      },
    ],
    /*
     * Migrated from /en/product/22.html — 10-row spec table covering core
     * size (OD/ID/HT), air gap, and rated current.
     */
    specTables: [
      {
        caption:
          "Amorphous active PFC inductor — representative specifications (core size, air gap, rated current).",
        columns: [
          "Item",
          "OD (mm)",
          "ID (mm)",
          "HT (mm)",
          "Air gap (mm)",
          "Rated current (A)",
        ],
        rows: [
          ["JYCNT-583420C", "58", "34", "20", "4", "15"],
          ["JYCNT-583430C", "58", "34", "30", "4", "20"],
          ["JYCNT-603420C", "60", "34", "20", "4", "20"],
          ["JYCNT-603425C", "60.0", "34.0", "25.0", "5.5", "25.0"],
          ["JYCNT-704025C", "70.0", "40.0", "25.0", "5.5", "30.0"],
          ["JYCNT-704030C", "70.0", "40.0", "30.0", "5.5", "35.0"],
          ["JYCNT-805040C", "80.0", "50.0", "40.0", "6.5", "40.0"],
          ["JYCNT-1006040C", "100.0", "60.0", "40.0", "6.5", "50.0"],
          ["JYCNT-1006050C", "100.0", "60.0", "50.0", "6.5", "60.0"],
          ["JYCNT-1308050C", "130", "80", "50", "8", "70"],
        ],
        note: "Additional ratings available on request. Final dimensions vary by design and customer requirements.",
      },
    ],
    /*
     * Migrated from /en/product/22.html — typical circuit diagram reference.
     * Official diagram file: add under public/ when available.
     */
    circuitDiagrams: [
      {
        src: "/images/products/inductors-chokes/amorphous-active-pfc-inductor/typical-circuit-diagram.jpg",
        alt: "Amorphous active PFC inductor — typical circuit diagram",
        caption: "Typical circuit application.",
      },
    ],
    customizationOptions: [
      "Amorphous core sourcing (qualified suppliers)",
      "Inductance and current rating",
      "Mounting and terminal configuration",
      "Encapsulation",
      "Sample and NPI support",
    ],
    qualityNotes: [
      "Qualified amorphous core sourcing",
      "Core material validation",
      "LCR and DC-bias testing",
      "Temperature-rise validation",
    ],
    relatedApplications: [
      "photovoltaic",
      "energy-storage",
      "home-appliances-hvac",
    ],
  },

  /* Rectangular PFC Inductor — full content from /en/product/23.html */
  "rectangular-pfc-inductor": {
    familySlug: "inductors-chokes",
    name: "Rectangular PFC Inductor",
    positioning:
      "Rectangular-form PFC inductors with high saturation flux density, excellent frequency and DC bias characteristics, and stable thermal behavior.",
    shortBlurb:
      "High saturation, excellent frequency and DC bias characteristics.",
    image:
      "/images/products/inductors-chokes/rectangular-pfc-inductor/hero.jpg",
    features: [
      "High saturation flux density",
      "Excellent frequency characteristic",
      "Excellent DC bias characteristic",
      "Stable temperature behavior",
    ],
    applicationsSummary:
      "Used in household appliances, photovoltaic inverters, and medical equipment.",
    galleryImages: [
      {
        src: "/images/products/inductors-chokes/rectangular-pfc-inductor/product-01.jpg",
        alt: "Rectangular PFC inductor",
      },
    ],
    /*
     * Migrated from /en/product/23.html — 16-row spec table covering window
     * dimensions (A, B), core widths (C, D, E), magnetic length (L), and
     * effective core cross-sectional area (Ac). Real reference data.
     */
    specTables: [
      {
        caption:
          "Rectangular PFC inductor — representative specifications (window dimensions, core widths, magnetic length, effective core area).",
        columns: [
          "Item",
          "A — window width (mm)",
          "B — window length (mm)",
          "C — core width (mm)",
          "D — core width (mm)",
          "E — core width (mm)",
          "L — magnetic length (mm)",
          "Ac — effective core area (cm²)",
        ],
        rows: [
          ["JYCNTCC-6.3", "11.0", "33.0", "31.0", "53.0", "20.0", "13.1", "1.6"],
          ["JYCNTCC-8", "13.0", "30.0", "35.0", "52.0", "20.0", "13.2", "1.8"],
          ["JYCNTCC-10", "13.0", "40.0", "35.0", "62.0", "20.0", "15.4", "1.8"],
          ["JYCNTCC16A", "13.0", "40.0", "35.0", "62.0", "25.0", "15.1", "2.3"],
          ["JYCNTCC16B", "13.0", "50.0", "35.0", "72.0", "25.0", "16.9", "2.3"],
          ["JYCNTCC-20", "13.0", "50.0", "35.0", "72.0", "30.0", "17.5", "2.7"],
          ["JYCNTCC-25", "15.0", "56.0", "41.0", "82.0", "25.0", "19.6", "2.7"],
          ["JYCNTCC-32", "15.0", "56.0", "41.0", "82.0", "30.0", "20.0", "3.2"],
          ["JYCNTCC-40", "15.0", "56.0", "41.0", "82.0", "35.0", "19.9", "3.7"],
          ["JYCNTCC-50", "20.0", "70.0", "52.0", "102.0", "25.0", "24.9", "3.3"],
          ["JYCNTCC-63", "20.0", "70.0", "52.0", "102.0", "30.0", "25.3", "3.9"],
          ["JYCNTCC-80", "20.0", "70.0", "52.0", "102.0", "40.0", "25.4", "5.2"],
          ["JYCNTCC-100", "20.0", "70.0", "52.0", "102.0", "45.0", "25.0", "5.9"],
          ["JYCNTCC-125", "25.0", "83.0", "63.0", "121.0", "35.0", "30.2", "5.4"],
          ["JYCNTCC-160", "25.0", "83.0", "63.0", "121.0", "40.0", "28.6", "6.5"],
          ["JYCNTCC-200", "25.0", "83.0", "63.0", "121.0", "50.0", "29.8", "7.8"],
        ],
        note: "Final dimensions vary by design and customer requirements. Additional ratings available on request.",
      },
    ],
    /*
     * Migrated from /en/product/23.html — dimensional drawing reference.
     * Official drawing file: add under public/ when available.
     */
    schematics: [
      {
        src: "/images/products/inductors-chokes/rectangular-pfc-inductor/dimensions.jpg",
        alt: "Rectangular PFC inductor — dimensional drawing",
        caption:
          "Reference dimensions (window width A, window length B, core widths C / D / E, magnetic length L).",
      },
    ],
    customizationOptions: [
      "Core material selection",
      "Inductance, current, and footprint",
      "Mounting and terminal configuration",
      "Encapsulation",
      "Sample and NPI support",
    ],
    qualityNotes: [
      "Supplier qualification",
      "LCR and DC-bias testing",
      "Temperature-rise validation",
    ],
    relatedApplications: [
      "photovoltaic",
      "home-appliances-hvac",
      "industrial-power",
    ],
  },

  /* SQ Series Common Mode Inductor — summary from /en/products/39 */
  "sq-series-common-mode-inductor": {
    familySlug: "inductors-chokes",
    name: "SQ Series Common Mode Inductor",
    positioning:
      "SQ-series common-mode inductors with excellent saturation flux density and high consistency across volume production — suited to appliance, communication, LCD, and computer power supplies.",
    shortBlurb:
      "Excellent saturation flux density and high consistency across volume production.",
    image:
      "/images/products/inductors-chokes/sq-series-common-mode-inductor/hero.jpg",
    features: [
      "Excellent saturation flux density",
      "High consistency across batches — suited to high-volume programs",
      "Compact form factor",
    ],
    applicationsSummary:
      "Used in household appliances, communication power supplies, liquid crystal displays (LCDs), and computer power supplies.",
    galleryImages: [
      {
        src: "/images/products/inductors-chokes/sq-series-common-mode-inductor/product-01.jpg",
        alt: "SQ series common mode inductor",
      },
    ],
    customizationOptions: [
      "Core material selection",
      "Custom inductance and current rating",
      "Mounting and terminal configuration",
      "Sample and NPI support",
    ],
    qualityNotes: [
      "Supplier qualification",
      "IPQC across high-volume runs",
      "LCR characterization",
      "Reliability validation per project",
    ],
    relatedApplications: [
      "home-appliances-hvac",
      "consumer-electronics-power",
    ],
  },

  /* New Energy Inductors — summary from /en/products/39 (consolidated 3 entries) */
  "new-energy-inductors": {
    familySlug: "inductors-chokes",
    name: "New Energy Inductors",
    positioning:
      "Inductors built for the new-energy stack — high saturation flux density, excellent DC bias characteristics, superior temperature stability, and excellent frequency response.",
    shortBlurb:
      "High saturation, excellent DC bias and temperature stability for the new-energy stack.",
    image:
      "/images/products/inductors-chokes/new-energy-inductors/hero.jpg",
    features: [
      "High saturation flux density",
      "Excellent DC bias characteristics",
      "Superior temperature stability",
      "Excellent frequency response",
    ],
    applicationsSummary:
      "Used in photovoltaic inverters, new energy vehicles, and industrial power supplies.",
    galleryImages: [
      {
        src: "/images/products/inductors-chokes/new-energy-inductors/product-01.jpg",
        alt: "New energy inductor — variant 01",
      },
      {
        src: "/images/products/inductors-chokes/new-energy-inductors/product-02.jpg",
        alt: "New energy inductor — variant 02",
      },
      {
        src: "/images/products/inductors-chokes/new-energy-inductors/product-03.jpg",
        alt: "New energy inductor — variant 03",
      },
    ],
    customizationOptions: [
      "Core material selection — ferrite, amorphous, selected nanocrystalline",
      "Inductance and current rating",
      "Mounting and terminal configuration",
      "Encapsulation for thermal and mechanical robustness",
      "Sample and NPI support",
    ],
    qualityNotes: [
      "Supplier qualification and core material validation",
      "LCR and DC-bias testing",
      "Temperature-rise validation",
      "Reliability validation per project",
    ],
    relatedApplications: [
      "photovoltaic",
      "ev-charging",
      "industrial-power",
    ],
  },

  /* ====================== AMORPHOUS MAGNETIC CORES ====================== */

  /* Amorphous Magnetic Material — full content from /en/product/2.html */
  "amorphous-magnetic-material": {
    familySlug: "amorphous-magnetic-cores",
    name: "Amorphous Magnetic Material",
    positioning:
      "Amorphous core options with high permeability, high saturation magnetic flux density, and excellent comprehensive magnetic properties — used in new power supplies, automotive, communications, and home appliance systems.",
    shortBlurb:
      "High permeability, high saturation flux density, excellent comprehensive magnetic properties.",
    image:
      "/images/products/amorphous-magnetic-cores/amorphous-magnetic-material/hero.jpg",
    features: [
      "High permeability and high saturation magnetic flux density",
      "Excellent comprehensive magnetic properties",
      "Multiple grades for different application profiles",
      "Suited to high-frequency transformers, large-power transformers, mutual inductors, sensors, and chokes",
    ],
    applicationsSummary:
      "Used in high-frequency switching power, distribution and power transformers, magnetic amplifiers, magnetic shielding, spike-killer applications, mutual inductors, and sensor designs across new energy, automotive, communications, and home appliance markets.",
    galleryImages: [
      {
        src: "/images/products/amorphous-magnetic-cores/amorphous-magnetic-material/product-01.jpg",
        alt: "Amorphous magnetic core",
      },
    ],
    /*
     * Migrated from /en/product/2.html — grades-by-features-by-applications
     * matrix. Each grade has a distinct feature profile and a typical set of
     * application fits. Cells contain bulleted lists, rendered via the
     * CharacteristicsTable component.
     */
    characteristicsTables: [
      {
        caption:
          "Amorphous magnetic material grades — features and typical applications.",
        columns: ["Grade", "Features", "Typical applications"],
        rows: [
          [
            "JYCNT-A",
            [
              "High permeability",
              "High saturation magnetic flux density",
              "Excellent comprehensive magnetic properties",
            ],
            [
              "High-frequency transformers",
              "Large-power transformers",
              "High-frequency chokes",
              "Mutual inductors",
              "Sensors",
            ],
          ],
          [
            "JYCNT-B",
            [
              "Highest permeability",
              "Lowest core loss",
              "Near-zero saturation magnetostriction",
            ],
            [
              "High-frequency switching power",
              "High-frequency transformers",
              "Magnetic amplifiers",
              "Magnetic shielding",
              "Spike killers",
              "Sensors",
            ],
          ],
          [
            "JYCNT-C",
            [
              "High saturation flux density",
              "Core loss 60–70% lower than silicon steel at 50 Hz",
            ],
            [
              "Distribution transformers",
              "Power transformers",
              "Chokes",
            ],
          ],
          [
            "JYCNT-D",
            ["Medium permeability and saturation magnetic flux density"],
            [
              "Mutual inductors",
              "Medium-frequency transformers",
            ],
          ],
        ],
        note: "Grade selection depends on application topology and design constraints. Our engineering team can recommend the right grade after reviewing your requirements.",
      },
    ],
    /*
     * Migrated from /en/product/2.html — 4-grade × 12-property characteristics
     * table. Real material reference data.
     */
    comparisonTable: {
      caption: "Amorphous magnetic material — characteristics by grade.",
      columns: ["Feature", "JYCNT-A", "JYCNT-B", "JYCNT-C", "JYCNT-D"],
      rows: [
        ["Saturation flux density Bs (T)", "1.20", "0.58", "1.56", "0.88"],
        ["Coercivity Hc (Oe)", "0.008", "0.003", "0.030", "0.015"],
        ["Initial permeability μi", "100,000", "120,000", "15,000", "60,000"],
        ["Maximum permeability", "800,000", "1,000,000", "600,000", "800,000"],
        ["Electrical resistivity ρ (μΩ·cm)", "110", "142", "130", "138"],
        ["Curie temperature Tc (°C)", "570", "225", "415", "353"],
        ["Crystallization temperature Tx (°C)", "510", "550", "550", "410"],
        ["Saturation magnetostriction λs (PPM)", "2–3", "<<1", "3", "12"],
        ["Ribbon thickness (µm)", "18–27", "25", "25", "30"],
        ["Density (g/cm³)", "7.30", "7.59", "7.18", "7.90"],
        ["Filling factor (%)", "75", "75", "80", "75"],
        ["Working temperature (°C)", "−50 to 150", "−50 to 150", "−50 to 150", "−50 to 150"],
      ],
      note: "Reference characteristics by grade. Actual performance depends on core size, winding, and application conditions.",
    },
    specTables: [
      {
        caption: "Amorphous core — representative core size specifications.",
        columns: [
          "Item",
          "OD (mm)",
          "ID (mm)",
          "HT (mm)",
          "Le (mm)",
          "Ae (mm²)",
        ],
        rows: [
          ["JYCNT-201012A-H", "20.0", "12.0", "10.0", "50.3", "28.0"],
          ["JYCNT-231018A-H", "23.0", "18.0", "10.0", "64.4", "17.5"],
          ["JYCNT-261016A-H", "26", "16", "10", "66", "35"],
          ["JYCNT-281018A-H", "28.0", "18.0", "10.0", "72.3", "35.0"],
          ["JYCNT-301520A-H", "30.0", "20.0", "15.0", "76.4", "64.7"],
          ["JYCNT-322010A-H", "32.0", "20.0", "10.0", "81.7", "42.0"],
          ["JYCNT-322020A-H", "32.0", "20.0", "20.0", "81.7", "84.0"],
          ["JYCNT-331523A-H", "33.0", "23.0", "15.0", "87.9", "52.5"],
          ["JYCNT-371523A-H", "37.0", "23.0", "15.0", "94.2", "86.0"],
          ["JYCNT-401025A-H", "40.0", "25.0", "10.0", "102.1", "52.5"],
          ["JYCNT-401525A-H", "40.0", "25.0", "15.0", "102.1", "78.8"],
          ["JYCNT-402025A-H", "40.0", "25.0", "20.0", "102.1", "105.0"],
          ["JYCNT-432025A-H", "43.0", "25.0", "20.0", "106.7", "126.0"],
          ["JYCNT-463528A-H", "46.0", "28.0", "35.0", "111.6", "260.5"],
          ["JYCNT-471527A-H", "47.0", "27.0", "15.0", "116.1", "105.0"],
          ["JYCNT-501532A-H", "50.0", "32.0", "15.0", "128.7", "94.5"],
          ["JYCNT-502032A-H", "50.0", "32.0", "20.0", "128.7", "126.0"],
          ["JYCNT-501040A-H", "50.0", "40.0", "10.0", "141.3", "35.0"],
          ["JYCNT-502040A-H", "50.0", "40.0", "20.0", "141.3", "70.0"],
          ["JYCNT-502025A-H", "50.0", "25.0", "20.0", "117.8", "175.0"],
          ["JYCNT-521836A-H", "52.0", "36.0", "18.0", "138.1", "100.8"],
          ["JYCNT-582038A-H", "58.0", "38.0", "20.0", "150.8", "158.0"],
          ["JYCNT-602040A-H", "60.0", "40.0", "20.0", "157.5", "140.0"],
          ["JYCNT-652045A-H", "65.0", "45.0", "20.0", "172.7", "150.1"],
          ["JYCNT-652547A-H", "65.0", "47.0", "25.0", "175.8", "170.1"],
          ["JYCNT-744630A-H", "74.0", "46.0", "30.0", "189.0", "338.3"],
        ],
        note: "Additional core sizes available on request. Final dimensions confirmed at order.",
      },
    ],
    customizationOptions: [
      "Grade selection — JYCNT-A, JYCNT-B, JYCNT-C, JYCNT-D",
      "Core dimensions — OD, ID, height, effective area",
      "Custom mounting and shielding",
      "Custom finishing and coating",
      "Finished components built around the selected core",
      "Sample and NPI support",
    ],
    qualityNotes: [
      "Qualified core sourcing with incoming material inspection",
      "Core material validation per project",
      "IQC, IPQC, and OQC across the integration process",
      "Reliability validation by project under NDA",
    ],
    relatedApplications: [
      "photovoltaic",
      "energy-storage",
      "industrial-power",
      "ev-charging",
    ],
  },

  /* ===================== NANOCRYSTALLINE MAGNETIC CORES ===================== */

  /*
   * Nanocrystalline Magnetic Material — no separate detail page on the old
   * site. The reference data here uses the Fe-based nanocrystalline column
   * from /en/product/17.html (Common Mode Choke comparison) since it's the
   * only public nanocrystalline reference data Jiayang has documented.
   */
  "nanocrystalline-magnetic-material": {
    familySlug: "nanocrystalline-magnetic-cores",
    name: "Nanocrystalline Magnetic Material",
    positioning:
      "Selected nanocrystalline core capabilities for compact, high-frequency magnetic designs — combining on-site nanocrystalline processing where applicable with qualified external core sourcing and material validation.",
    shortBlurb:
      "Selected nanocrystalline core capabilities with qualified core sourcing.",
    image:
      "/images/products/nanocrystalline-magnetic-cores/nanocrystalline-magnetic-material/hero.jpg",
    features: [
      "High permeability — suited to compact, high-frequency designs",
      "Strong impedance characteristics for EMC/EMI applications",
      "Suited to common-mode chokes, isolation transformers, and current sensors",
      "Selected nanocrystalline core capabilities with qualified external core sourcing",
    ],
    applicationsSummary:
      "Used in EMC common-mode chokes, isolation transformers, current sensors, high-frequency transformers, and compact magnetic components across EV charging, renewable energy, energy storage, and industrial systems.",
    galleryImages: [
      {
        src: "/images/products/nanocrystalline-magnetic-cores/nanocrystalline-magnetic-material/product-01.jpg",
        alt: "Nanocrystalline magnetic core",
      },
    ],
    /*
     * Reference comparison data from /en/product/17.html (Fe-based
     * nanocrystalline column). Reproduced here so engineering readers
     * landing on the nanocrystalline page see the same reference values
     * without needing to navigate to the choke page.
     */
    comparisonTable: {
      caption:
        "Nanocrystalline core reference characteristics (Fe-based nanocrystalline grade, common-mode choke applications).",
      columns: ["Basic magnetic parameters", "Fe-based nanocrystalline"],
      rows: [
        ["Saturation flux density Bs (T)", "1.2"],
        ["Saturation magnetostriction λs (PPM)", "<3"],
        ["Electrical resistivity ρ (μΩ·cm)", "80"],
        ["Curie temperature Tc (°C)", "570"],
        ["Residual flux density Br (T)", "0.6–0.7"],
        ["Initial permeability μi (Gs/Oe)", ">80,000"],
        ["Maximum permeability μm (Gs/Oe)", ">260,000"],
        ["Coercivity Hc (A/mm)", "<1.5"],
      ],
      note:
        "Reference values from existing common-mode choke documentation. Detailed specifications and dimensional drawings are available during engineering review.",
    },
    customizationOptions: [
      "Core selection — selected nanocrystalline capabilities plus qualified external sources",
      "Core dimensions to project requirements",
      "Custom mounting, shielding, and casing",
      "Integration with custom winding and insulation",
      "Sample and NPI support",
    ],
    qualityNotes: [
      "Supplier qualification and core material validation",
      "Incoming and in-process inspection",
      "Impedance characterization across operating frequency",
      "Reliability validation by project",
    ],
    relatedApplications: [
      "ev-charging",
      "photovoltaic",
      "energy-storage",
      "smart-grid",
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*                            Lookup helpers                                    */
/* -------------------------------------------------------------------------- */

export function getFamily(
  slug: string
): ProductFamily | undefined {
  return productFamilies.find((f) => f.slug === slug);
}

export function getSeries(slug: string): ProductSeries | undefined {
  return productSeries[slug];
}

export function getSeriesForFamily(
  familySlug: string
): { slug: string; series: ProductSeries }[] {
  const family = getFamily(familySlug);
  if (!family) return [];
  return family.series
    .map((seriesSlug) => {
      const series = productSeries[seriesSlug];
      return series ? { slug: seriesSlug, series } : null;
    })
    .filter(
      (entry): entry is { slug: string; series: ProductSeries } => entry !== null
    );
}
