import { certifications } from "@/lib/content";

/**
 * Horizontal band of certification labels. Certificate scans can replace
 * text badges when brand-approved image assets are available.
 */
export default function CertificationsBand() {
  return (
    <div>
      <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
        Certified to international standards
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
        {certifications.map((cert) => (
          <span
            key={cert}
            className="inline-flex items-center border border-slate-300 px-4 py-2 text-sm font-medium tracking-tight text-slate-700"
          >
            {cert}
          </span>
        ))}
      </div>
    </div>
  );
}
