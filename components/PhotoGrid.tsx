import ImageCard from "./ImageCard";
import { cn } from "@/lib/cn";

export type PhotoGridItem = {
  src: string;
  alt: string;
  caption: string;
  note?: string;
};

/**
 * Responsive photo grid. Defaults to 4 columns on desktop, 2 on tablet,
 * 1 on mobile — matching the homepage Manufacturing Snapshot brief.
 * For 3-column galleries (the Capabilities proof galleries with 6–8 items
 * we want to fit on two tighter rows), pass `columns={3}`.
 */
export default function PhotoGrid({
  items,
  columns = 4,
  className,
}: {
  items: PhotoGridItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={cn("grid grid-cols-1 gap-5", colClass, className)}>
      {items.map((item) => (
        <ImageCard
          key={item.src}
          src={item.src}
          alt={item.alt}
          caption={item.caption}
          note={item.note}
        />
      ))}
    </div>
  );
}
