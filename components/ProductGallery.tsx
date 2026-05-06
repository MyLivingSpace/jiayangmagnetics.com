import ImageCard from "./ImageCard";
import type { GalleryImage } from "@/lib/productSeries";
import { cn } from "@/lib/cn";

/**
 * ProductGallery — multi-image grid for product photography. Falls through
 * to ImageCard, which itself falls through to SmartImage's neutral
 * placeholder when files are missing. No "image pending" badges anywhere.
 */
export default function ProductGallery({
  images,
  columns = 3,
  className,
}: {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  if (!images || images.length === 0) return null;

  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn("grid grid-cols-1 gap-5", colClass, className)}>
      {images.map((image) => (
        <ImageCard
          key={image.src}
          src={image.src}
          alt={image.alt}
          caption={image.caption ?? image.alt}
        />
      ))}
    </div>
  );
}
