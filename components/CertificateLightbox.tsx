"use client";

import { useState } from "react";
import DocumentPreviewModal from "./DocumentPreviewModal";

/**
 * CertificateLightbox — small client wrapper that turns its server-rendered
 * children into a button which opens DocumentPreviewModal on click. Use
 * this only when you've confirmed the source image actually exists (the
 * Capabilities page does the existsSync check via the imageExists util
 * before deciding to wrap a CertificateCard).
 */
export default function CertificateLightbox({
  src,
  title,
  children,
}: {
  src: string;
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative block w-full text-left">
        {children}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute inset-0 z-10 cursor-zoom-in bg-transparent"
          aria-haspopup="dialog"
          aria-label={`View ${title} larger`}
        >
          <span className="sr-only">{`View ${title} larger`}</span>
        </button>
      </div>
      {open ? (
        <DocumentPreviewModal
          src={src}
          title={title}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
