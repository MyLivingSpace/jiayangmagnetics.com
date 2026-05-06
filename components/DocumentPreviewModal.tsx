"use client";

import { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

/**
 * DocumentPreviewModal — full-screen lightbox for viewing a certificate or
 * document scan at a larger size. Minimal by design: backdrop, centered
 * image, close button, ESC handler, body scroll lock. No focus trap or
 * carousel — those belong in a richer dialog component once leaf cert pages
 * exist.
 */
export default function DocumentPreviewModal({
  src,
  title,
  onClose,
}: {
  src: string;
  title: string;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);

  const zoomIn = () => setScale((s) => Math.min(4, Number((s + 0.25).toFixed(2))));
  const zoomOut = () => setScale((s) => Math.max(0.5, Number((s - 0.25).toFixed(2))));
  const resetZoom = () => setScale(1);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") resetZoom();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 lg:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X size={22} aria-hidden="true" />
      </button>

      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-sm bg-slate-900/70 p-1.5">
        <button
          type="button"
          onClick={zoomOut}
          className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Zoom out"
        >
          <ZoomOut size={16} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={resetZoom}
          className="inline-flex h-8 items-center justify-center rounded-sm px-2 text-xs font-medium text-white/90 transition-colors hover:bg-white/10"
          aria-label="Reset zoom"
        >
          {Math.round(scale * 100)}%
        </button>
        <button
          type="button"
          onClick={zoomIn}
          className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Zoom in"
        >
          <ZoomIn size={16} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={resetZoom}
          className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Reset to 100%"
        >
          <RotateCcw size={14} aria-hidden="true" />
        </button>
      </div>

      <figure
        className="flex max-h-full max-w-5xl flex-col items-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={title}
          className="max-h-[80vh] w-auto max-w-full border border-white/10 bg-white object-contain shadow-2xl transition-transform duration-150"
          style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}
        />
        <figcaption className="mt-4 text-center text-sm text-white/80">
          {title}
        </figcaption>
      </figure>
    </div>
  );
}
