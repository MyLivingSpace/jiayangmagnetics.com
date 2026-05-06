import { cn } from "@/lib/cn";

/**
 * Standard section heading: copper accent rule, eyebrow label, H2, and an
 * optional lead paragraph. Used on the homepage and on most secondary pages.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em]",
            isDark ? "text-amber-300" : "text-accent",
            align === "center" && "justify-center"
          )}
        >
          <span className="accent-rule" />
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-3xl font-semibold tracking-tight md:text-4xl",
          isDark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-4 text-base md:text-lg",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}
