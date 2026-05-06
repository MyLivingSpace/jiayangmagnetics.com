"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/lib/faqs";

/**
 * FAQAccordion — collapsible Q/A list. Single-open behavior (closing the
 * previous panel when a new one opens).
 */
export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <li key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:bg-slate-50/60"
            >
              <span className="text-sm font-medium tracking-tight text-slate-900 lg:text-base">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="mt-1 flex-shrink-0 text-slate-500"
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            {isOpen ? (
              <div className="pb-6 pr-10 text-sm leading-relaxed text-slate-600">
                {item.answer}
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
