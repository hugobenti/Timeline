// src/components/TimelineLane.tsx

import React from "react";
import { ITimelineItem } from "../../../interfaces/ITimelineItem";
import TimelineItem from "../TimelineItem/TimelineItem";

/**
 * TimelineLane component
 *
 * Represents a horizontal row in the timeline where multiple items are visually placed.
 * Each item is rendered using absolute positioning based on its start date and duration.
 * This component is responsible for distributing the timeline items within a single lane.
 *
 * Props:
 * - items: ITimelineItem[] – array of timeline items to be displayed in this lane.
 * - minDate: Date – the earliest date in the full timeline (used for positioning).
 * - dayWidth: number – width in pixels that represents one day on the timeline.
 *
 * @returns JSX.Element
 */


interface TimelineLaneProps {
  items: ITimelineItem[];
  minDate: Date;
  dayWidth: number;
  onSave: (updatedItem:ITimelineItem) => void;
}
function TimelineLane({
  items,
  minDate,
  dayWidth,
  onSave,
}: TimelineLaneProps) {
  const daysBetween = (start: Date, end: Date) =>
    Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="relative h-12">
      {items.map((item) => {
        const start = new Date(item.start);
        const end = new Date(item.end);
        const startOffset = daysBetween(minDate, start);
        const duration = daysBetween(start, end) + 1;

        return (
          <TimelineItem
            key={item.id}
            {...item}
            startOffset={startOffset}
            duration={duration}
            dayWidth={dayWidth}
            onSave={(item) => onSave(item)}
            />
        );
      })}
    </div>
  );
}

export default TimelineLane;
