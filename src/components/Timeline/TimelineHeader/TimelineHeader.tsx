import React from "react";
import {
  useTimelineHeader,
} from "./useTimelineHeader";
import { normalizeToUtcMidnight } from "../../../utils/normalizeToUtcMidnight";
import { toUtcDateString } from "../../../utils/toUtcDateString";
import { getUtcMonthLabel } from "../../../utils/getUtcMonthLabel";

interface TimelineHeaderProps {
  minDate: Date; // The earliest date in the timeline.
  maxDate: Date; // The latest date in the timeline.
  dayWidth: number; // The width (in pixels) allocated for each day cell.
}

/**
 * TimelineHeader component (UTC-based)
 *
 * This component renders:
 * 1. A row of month labels with widths based on each month's day span.
 * 2. A row of days ("DD") aligned beneath their corresponding month.
 *
 * The final month is padded so that it has at least 7 day cells (if needed).
 *
 * The component also highlights the current day and current month with distinct styles.
 */
export function TimelineHeader({
  minDate,
  maxDate,
  dayWidth,
}: TimelineHeaderProps) {
  // Retrieve timeline data via the custom hook.
  const { monthGroups, dateLabels, totalDays } = useTimelineHeader(
    minDate,
    maxDate
  );

  // Compute the overall timeline width.
  const timelineWidth = totalDays * dayWidth;

  // Calculate today's date (normalized to UTC) and derive its label.
  const today = normalizeToUtcMidnight(new Date());
  const todayStr = toUtcDateString(today);
  const currentMonthLabel = getUtcMonthLabel(today);

  return (
    <div style={{ width: `${timelineWidth}px` }}>
      {/* Month row */}
      <div className="flex border-b bg-gray-100">
        {monthGroups.map((group, idx) => {
          // Highlight the current month.
          const isCurrentMonth = group.label === currentMonthLabel;
          const monthClasses = isCurrentMonth
            ? "bg-indigo-100 font-bold"
            : "text-gray-600";
          return (
            <div
              key={idx}
              className={`text-xs font-semibold text-center border-r border-gray-300 py-1 ${monthClasses}`}
              style={{ width: group.span * dayWidth }}
            >
              {group.label}
            </div>
          );
        })}
      </div>

      {/* Day row */}
      <div className="flex border-b bg-gray-50">
        {dateLabels.map((label, idx) => {
          // Highlight the current day.
          const isToday = label === todayStr;
          const dayClasses = isToday
            ? "bg-indigo-100 font-bold"
            : "text-gray-400";
          return (
            <div
              key={idx}
              className={`text-[10px] text-center border-r border-gray-200 ${dayClasses}`}
              style={{ width: dayWidth }}
            >
              {/* Display only the day-of-month (last 2 characters from "YYYY-MM-DD") */}
              {label.slice(8)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimelineHeader;
