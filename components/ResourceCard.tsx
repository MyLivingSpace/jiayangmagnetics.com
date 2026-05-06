import Link from "next/link";
import { FileText, Download, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ResourceDocument } from "@/lib/proof";

/**
 * ResourceCard — used on the Resources page Downloads grid. Three states:
 *   - "available"            → real download link with Download action
 *   - "available-on-request" → routes to contact form with intent/asset prefilled
 *   - "coming-soon"          → static, dimmed, neutral availability label
 *
 * No invented PDFs, no fabricated download URLs.
 */
export default function ResourceCard({
  document,
  className,
}: {
  document: ResourceDocument;
  className?: string;
}) {
  const { title, kind, description, status, href } = document;
  const available = status === "available" && !!href;

  const cls = cn(
    "flex h-full flex-col border bg-white p-5 transition-colors",
    available
      ? "border-slate-200 hover:border-slate-400"
      : status === "available-on-request"
        ? "border-slate-200 hover:border-slate-400"
        : "border-slate-200",
    className
  );

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
          available
            ? "text-slate-900"
            : status === "available-on-request"
              ? "text-slate-900"
              : "text-slate-400"
        )}
      >
        {available ? (
          <>
            <Download size={14} aria-hidden="true" />
            <span>Download PDF</span>
          </>
        ) : status === "available-on-request" ? (
          <>
            <Mail size={14} aria-hidden="true" />
            <span>Available on request</span>
          </>
        ) : (
          <>
            <Clock size={14} aria-hidden="true" />
            <span className="uppercase tracking-[0.14em]">
              Latest revision on request
            </span>
          </>
        )}
      </div>
    </>
  );

  if (available && href) {
    return (
      <a href={href} download className={cls}>
        {inner}
      </a>
    );
  }
  if (status === "available-on-request") {
    const url = `/contact?intent=technical&asset=${encodeURIComponent(title)}`;
    return (
      <Link href={url} className={cls}>
        {inner}
      </Link>
    );
  }
  return <div className={cls}>{inner}</div>;
}
