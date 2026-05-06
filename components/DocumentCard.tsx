import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { cn } from "@/lib/cn";

type Kind =
  | "Catalog"
  | "Datasheet"
  | "Certification"
  | "Patent"
  | "Application Note"
  | "Brochure";

/**
 * DocumentCard — optional document tile. When `href` is missing, shows a
 * neutral availability label. Do not invent download URLs.
 */
export default function DocumentCard({
  title,
  kind,
  description,
  href,
  className,
}: {
  title: string;
  kind: Kind;
  description?: string;
  href?: string;
  className?: string;
}) {
  const available = Boolean(href);

  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <FileText
          size={18}
          className={available ? "text-accent" : "text-slate-400"}
          aria-hidden="true"
        />
        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
          {kind}
        </span>
      </div>
      <div className="mt-5 text-sm font-semibold tracking-tight text-slate-900">
        {title}
      </div>
      {description ? (
        <p className="mt-2 text-xs leading-relaxed text-slate-500">
          {description}
        </p>
      ) : null}
      <div
        className={cn(
          "mt-auto flex items-center gap-1.5 pt-5 text-xs font-medium",
          available ? "text-slate-900" : "text-slate-400"
        )}
      >
        {available ? (
          <>
            <Download size={14} aria-hidden="true" />
            <span>Download PDF</span>
          </>
        ) : (
          <span className="uppercase tracking-[0.14em]">
            Latest revision on request
          </span>
        )}
      </div>
    </>
  );

  const cls = cn(
    "flex h-full flex-col border bg-white p-5 transition-colors",
    available
      ? "border-slate-200 hover:border-slate-400"
      : "border-slate-200 cursor-default",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return <div className={cls}>{inner}</div>;
}
