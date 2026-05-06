import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "primary-on-dark";

const variantClass: Record<Variant, string> = {
  // Slate-900 base CTA — serious / industrial. Hover lifts to slate-800.
  primary:
    "bg-slate-900 text-white hover:bg-slate-800 border border-slate-900",
  // Outline on white — for secondary CTAs next to a primary.
  secondary:
    "bg-white text-slate-900 hover:bg-slate-50 border border-slate-300",
  // No border — for inline links that should still feel button-like.
  ghost:
    "bg-transparent text-slate-900 hover:text-accent border border-transparent",
  // Inverse for use on slate-900 backgrounds.
  "primary-on-dark":
    "bg-white text-slate-900 hover:bg-slate-100 border border-white",
};

/**
 * Standard CTA button. Renders as a Next.js Link when href is provided,
 * otherwise as a button. Variant controls the visual treatment.
 *
 * The default arrow is intentional — it signals "next step" and matches the
 * `→` used in the strategy doc CTA library (Section 9).
 */
export default function CTAButton({
  href,
  children,
  variant = "primary",
  arrow = true,
  className,
  type,
  onClick,
  disabled,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-medium tracking-tight transition-colors",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    variantClass[variant],
    disabled && "cursor-not-allowed opacity-60",
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      {arrow ? <ArrowRight size={16} aria-hidden="true" /> : null}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type ?? "button"}
      className={cls}
      onClick={onClick}
      disabled={disabled}
    >
      {inner}
    </button>
  );
}
