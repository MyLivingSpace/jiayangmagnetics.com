/**
 * Application detail content for /applications/[slug] pages.
 *
 * Sourced from the v8 brief. No invented case studies, no invented market
 * share, no invented exact specs. Every field is either a generic technical
 * description (challenges, systems) or a cross-reference to product slugs
 * defined in lib/content.ts.
 */

export type ApplicationDetail = {
  /** Hero positioning sentence — concise, technical. */
  positioning: string;
  /** "Why magnetics matter" lead paragraph for the detail page. */
  whyMagneticsMatter: string;
  /** Typical end-systems where the magnetics are used. */
  systems: string[];
  /** Common engineering challenges in this application. */
  challenges: string[];
  /** Slugs from productFamilies — used by RelatedProducts. */
  recommendedProducts: string[];
  /** Quality / reliability considerations specific to this application. */
  qualityConsiderations: string[];
  /**
   * Optional CTA override — used for emerging applications where the
   * default "Request a Sample or Quote" is too transactional.
   */
  cta?: { label: string; href: string };
};

/* -------------------------------------------------------------------------- */

export const applicationDetails: Record<string, ApplicationDetail> = {
  /* ----------------------------- PRIMARY ----------------------------- */

  "ev-charging": {
    positioning:
      "Magnetic components engineered for AC/DC charging piles, DC fast charging modules, and reliable power conversion across the EV charging stack.",
    whyMagneticsMatter:
      "EV charging systems demand high-current, high-frequency magnetics that hold thermal performance under continuous duty cycles. Transformer and inductor selection drives efficiency, EMI behavior, and long-term reliability for both on-board and high-power off-board chargers.",
    systems: [
      "AC/DC charging piles",
      "DC fast chargers",
      "Charging power modules",
      "Auxiliary power for charging infrastructure",
    ],
    challenges: [
      "High efficiency under partial and full load",
      "High-current, high-frequency switching",
      "Thermal rise management under continuous duty",
      "Insulation and dielectric strength",
      "EMI / EMC compliance",
      "Long-duty-cycle reliability",
    ],
    recommendedProducts: [
      "transformers",
      "inductors-chokes",
      "nanocrystalline-magnetic-cores",
      "custom-magnetic-solutions",
    ],
    qualityConsiderations: [
      "IATF 16949 process discipline",
      "Hipot dielectric withstand and partial-discharge testing",
      "Thermal cycling and temperature-rise validation",
      "Reliability data shared under NDA",
    ],
  },

  photovoltaic: {
    positioning:
      "Magnetic components for high-efficiency string and central inverter architectures, supporting residential, commercial, and utility-scale solar power.",
    whyMagneticsMatter:
      "Solar inverter efficiency, thermal stability, and grid-interface quality depend directly on the magnetics inside the boost, PFC, and isolation stages. Low-loss core materials and well-designed inductors are critical for hitting efficiency targets across the operating range.",
    systems: [
      "String inverters",
      "Central inverters",
      "PV power conversion modules",
    ],
    challenges: [
      "High conversion efficiency across the operating range",
      "Low-loss core selection",
      "Thermal stability over long operating hours",
      "Grid-interface quality and harmonics",
      "EMC compliance",
    ],
    recommendedProducts: [
      "transformers",
      "inductors-chokes",
      "amorphous-magnetic-cores",
      "custom-magnetic-solutions",
    ],
    qualityConsiderations: [
      "Supplier qualification and core material validation",
      "LCR characterization and dielectric withstand testing",
      "Thermal-rise testing under sustained load",
    ],
  },

  wind: {
    positioning:
      "Robust magnetic components for wind inverter and grid-interface systems operating under demanding mechanical and environmental conditions.",
    whyMagneticsMatter:
      "Wind power conversion exposes magnetics to vibration, wide temperature swings, and long service-life expectations. Component selection must hold up under those demands while maintaining grid-interface power quality.",
    systems: [
      "Wind inverter systems",
      "Pitch-control power",
      "Grid-interface conversion",
    ],
    challenges: [
      "Long-term reliability under harsh environments",
      "Vibration and mechanical robustness",
      "Wide-temperature operation",
      "Grid-tied power-quality requirements",
      "Service-life expectations measured in decades",
    ],
    recommendedProducts: [
      "transformers",
      "inductors-chokes",
      "custom-magnetic-solutions",
    ],
    qualityConsiderations: [
      "Vibration testing and mechanical qualification",
      "Thermal cycling across wide ambient ranges",
      "Reliability validation per project",
    ],
  },

  "energy-storage": {
    positioning:
      "Magnetic components for residential, commercial, and utility battery energy storage systems, including bidirectional power conversion and auxiliary power.",
    whyMagneticsMatter:
      "BESS designs require magnetics that handle bidirectional power flow, high currents, and thermal management at scale. Transformers and inductors in the PCS stage carry the bulk of the design constraint.",
    systems: [
      "BESS PCS (power conversion system)",
      "Bidirectional DC-DC and DC-AC converters",
      "Auxiliary power supplies",
    ],
    challenges: [
      "Bidirectional power flow",
      "Thermal management at high power",
      "High continuous current",
      "Reliability and safety requirements",
      "EMI / EMC compliance",
    ],
    recommendedProducts: [
      "transformers",
      "inductors-chokes",
      "nanocrystalline-magnetic-cores",
      "amorphous-magnetic-cores",
      "custom-magnetic-solutions",
    ],
    qualityConsiderations: [
      "Hipot, surge, and partial-discharge testing",
      "Thermal cycling and continuous-load validation",
      "Supplier qualification and core material validation",
    ],
  },

  "industrial-power": {
    positioning:
      "Industrial-grade transformers, inductors, and chokes for switching power supplies, UPS, and high-power industrial converters.",
    whyMagneticsMatter:
      "Industrial power systems run continuously under harsh operating conditions. Magnetic components must hold up for years under elevated temperature, mechanical stress, and continuous duty.",
    systems: [
      "Switching mode power supplies (SMPS)",
      "Uninterruptible power supplies (UPS)",
      "High-power industrial converters",
      "Motor-control power supplies",
    ],
    challenges: [
      "Continuous operation under elevated temperature",
      "EMC and EMI control",
      "Thermal management in confined enclosures",
      "Mechanical robustness",
      "Long-term reliability",
    ],
    recommendedProducts: [
      "transformers",
      "inductors-chokes",
      "custom-magnetic-solutions",
    ],
    qualityConsiderations: [
      "Thermal-rise testing under rated load",
      "Hipot dielectric withstand testing",
      "Vibration and mechanical qualification",
    ],
  },

  "smart-grid": {
    positioning:
      "Magnetic components for grid-tied converters, power quality systems, and emerging smart-grid power electronics.",
    whyMagneticsMatter:
      "Grid-edge power electronics — solid-state transformers, STATCOM, and power-quality systems — demand magnetics that meet stringent grid-stability, EMC, and insulation requirements.",
    systems: [
      "Grid-tied converters",
      "Power quality systems",
      "Power conversion modules for grid-edge applications",
    ],
    challenges: [
      "Grid-stability requirements",
      "EMC and harmonic compliance",
      "High insulation requirements",
      "Long-term reliability",
      "Compliance with grid codes",
    ],
    recommendedProducts: [
      "transformers",
      "inductors-chokes",
      "custom-magnetic-solutions",
    ],
    qualityConsiderations: [
      "Hipot and partial-discharge testing",
      "Thermal-rise validation",
      "Long-term reliability validation",
    ],
  },

  /* ------------------------- ESTABLISHED MARKETS ------------------------- */

  "home-appliances-hvac": {
    positioning:
      "A long-standing established market for Jiayang. High-volume manufacturing of magnetic components for inverter air conditioners, compressor drives, appliance power boards, and HVAC control systems.",
    whyMagneticsMatter:
      "Home appliance and HVAC OEMs need magnetics that hit aggressive cost-performance targets while delivering consistent quality at high volumes. Long-term programs depend on supply continuity and process repeatability.",
    systems: [
      "Inverter air conditioners",
      "Compressor drives",
      "Appliance power boards",
      "HVAC control systems",
    ],
    challenges: [
      "High-volume manufacturing consistency",
      "Cost-performance balance",
      "Compact design for appliance enclosures",
      "Reliability over multi-year programs",
      "EMC compliance for consumer environments",
    ],
    recommendedProducts: [
      "transformers",
      "inductors-chokes",
      "custom-magnetic-solutions",
    ],
    qualityConsiderations: [
      "IPQC and OQC for high-volume production",
      "Reliability validation over multi-year supply programs",
      "Process repeatability across automated assembly lines",
    ],
  },

  "motor-compressor-drives": {
    positioning:
      "Established market for motor-drive and compressor-drive power electronics — variable-frequency drives, compressor control boards, and motor power modules.",
    whyMagneticsMatter:
      "Motor and compressor drives push magnetics toward EMI suppression, current-ripple control, and thermal stability under fast switching. Component selection directly affects motor noise and drive efficiency.",
    systems: [
      "Variable-frequency drives (VFDs)",
      "Compressor control boards",
      "Motor power modules",
    ],
    challenges: [
      "Motor-drive EMI suppression",
      "Current-ripple management",
      "Thermal stability under fast switching",
      "Compact form factors",
      "Long-term reliability",
    ],
    recommendedProducts: [
      "inductors-chokes",
      "transformers",
      "custom-magnetic-solutions",
    ],
    qualityConsiderations: [
      "EMC characterization across drive frequency range",
      "Thermal-rise validation under continuous load",
      "Reliability validation per project",
    ],
  },

  "consumer-electronics-power": {
    positioning:
      "Established market for compact, efficient power conversion in consumer and household electronic systems — power adapters, control boards, and switching power supplies.",
    whyMagneticsMatter:
      "Consumer power systems compete on size, cost, and efficiency. Magnetic components must be compact, EMI-clean, and thermally stable in tight enclosures.",
    systems: [
      "Power adapters",
      "Control boards",
      "Compact switching power supplies",
    ],
    challenges: [
      "Compact form-factor requirements",
      "Cost efficiency at consumer-class volumes",
      "Thermal control in enclosed designs",
      "EMI compliance",
    ],
    recommendedProducts: [
      "transformers",
      "inductors-chokes",
    ],
    qualityConsiderations: [
      "IQC and IPQC across high-volume production",
      "EMI characterization",
      "Thermal-rise testing in confined enclosures",
    ],
  },

  /* ----------------------------- EMERGING ------------------------------- */

  robotics: {
    positioning:
      "Emerging direction. The transformer, inductor, and magnetic-core families that we already supply to EV charging and industrial customers apply directly to robotic system architectures.",
    whyMagneticsMatter:
      "Robotic platforms — humanoid, AGV/AMR, industrial robot — demand compact, weight-sensitive magnetics that hold up under fast motion, EMI-dense environments, and frequent design iteration. Co-engineering matters more than catalog selection at this stage.",
    systems: [
      "Robotic charging systems",
      "AGV / AMR onboard power",
      "Motor-drive electronics",
      "EMI / EMC filtering",
      "Compact, high-density power conversion modules",
    ],
    challenges: [
      "Tight space constraints",
      "Strict weight budgets",
      "EMI / EMC in servo-drive-dense platforms",
      "Charging reliability",
      "Frequent design changes during early-stage platform development",
    ],
    recommendedProducts: [
      "transformers",
      "inductors-chokes",
      "nanocrystalline-magnetic-cores",
      "custom-magnetic-solutions",
    ],
    qualityConsiderations: [
      "Engineering co-development under NDA",
      "Per-project sample and pilot-build support",
      "Reliability data shared under NDA as platforms mature",
    ],
    cta: {
      label: "Co-engineer with our magnetics team",
      href: "/contact?intent=technical",
    },
  },
};
