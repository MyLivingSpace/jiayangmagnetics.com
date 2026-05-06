/**
 * Lightweight className combiner. Accepts strings, undefined, false, null —
 * filters them out and joins the rest. Avoids pulling in clsx for one helper.
 */
export function cn(
  ...classes: (string | false | null | undefined)[]
): string {
  return classes.filter(Boolean).join(" ");
}
