/**
 * Returns the inclusive difference in days between two UTC‐midnight dates.
 */
export function daysBetweenUtc(start: Date, end: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((end.getTime() - start.getTime()) / msPerDay);
}
