import type { Table } from "@/lib/productSeries";

/**
 * SpecTable — clean engineering-style table. Designed for dense spec data
 * (rated current, dimensions, etc) — small typography, tight row height,
 * subtle alternating row striping, sticky-feeling header row. Readable on
 * mobile via overflow-x-auto.
 *
 * Note on data integrity: this component renders only what it's given.
 * Empty / unmigrated tables should NOT pass placeholder rows in — the
 * caller should render a "Specifications available on request" message
 * instead. We never invent numbers here.
 */
export default function SpecTable({ table }: { table: Table }) {
  return (
    <figure>
      {table.caption ? (
        <figcaption className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
          {table.caption}
        </figcaption>
      ) : null}

      <div className="overflow-x-auto border border-slate-200 bg-white">
        <table className="w-full border-collapse text-left text-xs lg:text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
              {table.columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="whitespace-nowrap px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] lg:px-4 lg:py-3"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr
                key={`${ri}-${row[0]}`}
                className="border-b border-slate-100 last:border-b-0 even:bg-slate-50/40"
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="whitespace-nowrap px-3 py-2 text-slate-800 lg:px-4 lg:py-2.5"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {table.note ? (
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          {table.note}
        </p>
      ) : null}
    </figure>
  );
}
