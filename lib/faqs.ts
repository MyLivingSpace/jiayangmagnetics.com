/**
 * FAQ entries for the Resources page.
 *
 * Sample-policy answer is kept deliberately careful (Appendix A item 19 of
 * the strategy doc — the actual sample policy hasn't been written by Jiayang
 * yet, so the answer here promises a project-by-project reply rather than a
 * standardized policy that doesn't exist).
 */

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "How do I request a sample?",
    answer:
      "Use the Request a Sample or Quote form. Tell us your topology, target volumes, and key specifications, and our engineering team will reply within one business day with sample availability, lead time, and any qualification requirements.",
  },
  {
    question: "Can Jiayang support custom magnetic component design?",
    answer:
      "Yes. Custom Magnetic Solutions is one of our five product families. We co-engineer from your schematic and topology to a validated prototype and into mass production, with NDA and IP handling included as standard.",
  },
  {
    question:
      "What information should I provide for a transformer or inductor quote?",
    answer:
      "Helpful inputs include: voltage and current ratings, switching frequency, topology, isolation requirements, ambient temperature, mechanical envelope and mounting, target volumes, and any compliance constraints. Schematics and reference designs speed up the engineering review.",
  },
  {
    question: "Are samples free?",
    answer:
      "Sample availability, cost, and lead time depend on product family and project qualification. Our engineering team will confirm details after reviewing your request.",
  },
  {
    question: "What certifications does Jiayang hold?",
    answer:
      "ISO 9001, ISO 14001, and IATF 16949 management systems; UL and CQC product certifications; products are RoHS-compliant. Full document scans are available on request.",
  },
  {
    question:
      "Does Jiayang manufacture all magnetic core materials in-house?",
    answer:
      "Jiayang has selected in-house nanocrystalline core processing capabilities. Other amorphous and nanocrystalline cores are sourced from qualified suppliers and integrated into Jiayang's in-house winding, assembly, encapsulation, and testing process. Supplier qualification and core material validation are part of every project.",
  },
];
