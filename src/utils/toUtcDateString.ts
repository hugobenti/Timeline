/**
 * Converts a Date to a "YYYY-MM-DD" string based on its UTC fields,
 * so we never mix in local time.
 */
export function toUtcDateString(date: Date): string {
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, "0");
    const d = String(date.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }