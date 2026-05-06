import type { Table } from "@/lib/productSeries";

/**
 * ComparisonTable — same data shape as SpecTable but rendered with a
 * slightly heavier first column (the row-label) since comparison data
 * always has the form "parameter | value A | value B [| value C | ...]".
 * Used for material comparisons (e.g. nanocrystalline vs ferrite) and
 * grade-by-grade characteristics.
 */
export default function ComparisonTable({ table }: { table: Table }) {
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
              {table.columns.map((col, i) => (
                <th
                  key={col + i}
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
                    className={
                      "px-3 py-2 lg:px-4 lg:py-2.5 " +
                      (ci === 0
                        ? "font-medium text-slate-900"
                        : "whitespace-nowrap text-slate-800")
                    }
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
