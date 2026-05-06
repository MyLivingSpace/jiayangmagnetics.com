import { cn } from "@/lib/cn";
import Container from "./Container";

type Tone = "white" | "muted" | "dark";

const toneClass: Record<Tone, string> = {
  white: "bg-white text-slate-900",
  muted: "bg-slate-50 text-slate-900",
  dark: "bg-slate-900 text-white",
};

/**
 * Vertical rhythm primitive. Generous default padding (py-20 / py-24) — the
 * homepage feels more credible with breathing room than with dense stacking.
 */
export default function Section({
  children,
  tone = "white",
  className,
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(toneClass[tone], "py-20 lg:py-24", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
