/**
 * Converts a Date to UTC midnight (00:00:00 UTC).
 * This ensures that the date won't roll forward/backward
 * if the user's local time is behind/ahead of UTC.
 */
export function normalizeToUtcMidnight(date: Date): Date {
  return new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      0,
      0,
      0,
      0
    )
  );
}
