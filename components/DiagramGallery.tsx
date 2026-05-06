import SmartImage from "./SmartImage";
import type { DiagramItem } from "@/lib/productSeries";
import { cn } from "@/lib/cn";

/**
 * DiagramGallery — schematic / dimension / circuit diagram grid. Diagrams
 * render against a white tile (so technical line-art reads cleanly), with
 * captions below. Different visual treatment from ProductGallery to signal
 * "this is engineering content, not marketing photography."
 */
export default function DiagramGallery({
  diagrams,
  columns = 3,
  note,
  className,
}: {
  diagrams: DiagramItem[];
  columns?: 1 | 2 | 3;
  /** Optional small note shown below the grid. */
  note?: string;
  className?: string;
}) {
  if (!diagrams || diagrams.length === 0) return null;

  const colClass =
    columns === 1
      ? ""
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={className}>
      <div className={cn("grid grid-cols-1 gap-5", colClass)}>
        {diagrams.map((diagram) => (
          <figure
            key={diagram.src}
            className="flex flex-col border border-slate-200 bg-white"
          >
            <SmartImage
              src={diagram.src}
              alt={diagram.alt}
              fallbackLabel="Engineering diagram"
              ratio="16/9"
              fit="contain"
            />
            {diagram.caption ? (
              <figcaption className="border-t border-slate-100 px-5 py-3 text-xs text-slate-500">
                {diagram.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
      {note ? (
        <p className="mt-4 text-xs leading-relaxed text-slate-500">{note}</p>
      ) : null}
    </div>
  );
}
