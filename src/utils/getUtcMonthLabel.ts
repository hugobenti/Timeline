/**
 * Creates a short label for the month/year (e.g., "Apr 2025") using UTC fields.
 * We avoid using date.toLocaleString() to prevent local TZ shifts.
 */
export function getUtcMonthLabel(date: Date): string {
  const MONTHS_SHORT = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthName = MONTHS_SHORT[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${monthName} ${year}`;
}
