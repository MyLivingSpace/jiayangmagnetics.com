/**
 * CharacteristicsTable — renders a structured comparison-style table where
 * cells can hold either a single value (string) or a bulleted list of values
 * (string[]).
 *
 * Use case: per-grade material properties where each grade has multiple
 * features and multiple typical applications. The single-string SpecTable /
 * ComparisonTable can't represent multi-line cell content cleanly.
 *
 * Used on /products/amorphous-magnetic-cores/amorphous-magnetic-material to
 * render the JYCNT-A/B/C/D grades-by-features-by-applications matrix.
 */

export type CharacteristicsCell = string | string[];

export type CharacteristicsTableData = {
  caption?: string;
  columns: string[];
  rows: CharacteristicsCell[][];
  note?: string;
};

export default function CharacteristicsTable({
  table,
}: {
  table: CharacteristicsTableData;
}) {
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
                key={ri}
                className="border-b border-slate-100 align-top last:border-b-0 even:bg-slate-50/40"
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={
                      "px-3 py-3 lg:px-4 lg:py-3.5 " +
                      (ci === 0
                        ? "font-medium text-slate-900"
                        : "text-slate-700")
                    }
                  >
                    {Array.isArray(cell) ? (
                      <ul className="space-y-1">
                        {cell.map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent"
                            />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="leading-relaxed">{cell}</span>
                    )}
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
