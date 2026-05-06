import SectionHeading from "./SectionHeading";

/**
 * Wrapper for a labeled proof gallery on the Capabilities page.
 * Renders an eyebrow + heading + lead paragraph + the children grid.
 *
 * Used three times on the Capabilities page:
 *   A. Manufacturing Facilities & Production Lines
 *   B. Testing & Inspection Capabilities
 *   C. Patents, Certifications & Quality Documentation
 */
export default function ProofGallerySection({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-8">
      <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
      <div>{children}</div>
    </section>
  );
}
