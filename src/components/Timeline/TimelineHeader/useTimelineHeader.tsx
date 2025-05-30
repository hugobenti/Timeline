import { useMemo } from "react";
import { normalizeToUtcMidnight } from "../../../utils/normalizeToUtcMidnight";
import { daysBetweenUtc } from "../../../utils/daysBetweenUtc";
import { getUtcMonthLabel } from "../../../utils/getUtcMonthLabel";
import { toUtcDateString } from "../../../utils/toUtcDateString";

/**
 * Optionally converts a Date to a "YYYY-MM-DD" string based on local time.
 * (Provided in case you want local date labels.)
 */
export function toLocalDateString(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * The result type returned by the useTimelineHeader hook.
 */
export interface UseTimelineHeaderResult {
  monthGroups: { label: string; span: number }[];
  dateLabels: string[];
  totalDays: number;
}

/**
 * A custom React hook that computes timeline data based on a given date range.
 * It returns:
 *   - monthGroups: an array of objects ({ label, span }) where `span` is the number of day columns in that month.
 *   - dateLabels: an array of "YYYY-MM-DD" strings, one per day (including any padded days).
 *   - totalDays: the total number of day columns (real days plus padded days).
 *
 * All calculations are done in UTC to ensure consistency.
 *
 * @param minDate The earliest date to be displayed in the timeline.
 * @param maxDate The latest date to be displayed in the timeline.
 */
export function useTimelineHeader(
  minDate: Date,
  maxDate: Date
): UseTimelineHeaderResult {
  return useMemo(() => {
    // 1) Normalize both boundaries to UTC midnight.
    const startDate = normalizeToUtcMidnight(minDate);
    const endDate = normalizeToUtcMidnight(maxDate);

    // 2) Calculate the number of real days between startDate and endDate (inclusive).
    const totalRealDays = daysBetweenUtc(startDate, endDate) + 1;

    // 3) Arrays for storing day labels and month groups.
    const dateLabels: string[] = [];
    const monthGroups: { label: string; span: number }[] = [];

    // 4) Iterate over each real day in the timeline.
    let currentDate = new Date(startDate);
    let currentMonth = currentDate.getUTCMonth();
    let currentYear = currentDate.getUTCFullYear();
    let currentLabel = getUtcMonthLabel(currentDate);
    let currentSpan = 0;

    for (let i = 0; i < totalRealDays; i++) {
      // Store the current day label (YYYY-MM-DD in UTC).
      dateLabels.push(toUtcDateString(currentDate));

      const month = currentDate.getUTCMonth();
      const year = currentDate.getUTCFullYear();

      if (month === currentMonth && year === currentYear) {
        currentSpan++;
      } else {
        // New month encountered: finalize the previous month group.
        monthGroups.push({ label: currentLabel, span: currentSpan });
        currentMonth = month;
        currentYear = year;
        currentLabel = getUtcMonthLabel(currentDate);
        currentSpan = 1;
      }

      // Advance by exactly one UTC day.
      currentDate = new Date(
        Date.UTC(
          currentDate.getUTCFullYear(),
          currentDate.getUTCMonth(),
          currentDate.getUTCDate() + 1,
          0,
          0,
          0,
          0
        )
      );
    }

    // 5) Finalize the last month group and pad to at least 7 days.
    if (currentSpan > 0) {
      const finalSpan = Math.max(currentSpan, 7);
      monthGroups.push({ label: currentLabel, span: finalSpan });
      const extraDays = finalSpan - currentSpan;

      for (let i = 0; i < extraDays; i++) {
        // Advance by one day (UTC) and add its label.
        currentDate = new Date(
          Date.UTC(
            currentDate.getUTCFullYear(),
            currentDate.getUTCMonth(),
            currentDate.getUTCDate() + 1,
            0,
            0,
            0,
            0
          )
        );
        dateLabels.push(toUtcDateString(currentDate));
      }
    }

    const totalDays = dateLabels.length;

    return {
      monthGroups,
      dateLabels,
      totalDays,
    };
  }, [minDate, maxDate]);
}
