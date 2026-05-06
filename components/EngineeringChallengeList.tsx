import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * EngineeringChallengeList — used on application detail pages for "Engineering
 * challenges" and "Quality / reliability considerations". Compact bullet
 * list with a copper check icon. Two-column layout on desktop when the
 * list is long enough to warrant it.
 */
export default function EngineeringChallengeList({
  items,
  columns = 1,
  className,
}: {
  items: string[];
  columns?: 1 | 2;
  className?: string;
}) {
  if (!items || items.length === 0) return null;

  return (
    <ul
      className={cn(
        "space-y-3",
        columns === 2 && "md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3 md:space-y-0",
        className
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-relaxed text-slate-700"
        >
          <CheckCircle2
            size={16}
            className="mt-0.5 flex-shrink-0 text-accent"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
