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
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in text-left"
        aria-haspopup="dialog"
        aria-label={`View ${title} larger`}
      >
        {children}
      </button>
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
