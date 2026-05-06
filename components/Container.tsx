import { cn } from "@/lib/cn";

/** Page width container. 1200px is wide enough for industrial credibility, narrow enough to read. */
export default function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-container px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}
