import React, { useEffect, useRef, useState } from "react";
import TimelineLane from "./TimelineLane/TimelineLane";
import TimelineHeader from "./TimelineHeader/TimelineHeader";
import { assignLanes } from "../../utils/assignLanes";
import { ITimelineItem } from "../../interfaces/ITimelineItem";

/**
 * Timeline component
 *
 * Renders the full timeline layout:
 * - A header with months and day indicators.
 * - One or more compact horizontal lanes with timeline items.
 */

interface TimelineProps {
  items: ITimelineItem[];
  onSave: (updatedItem: ITimelineItem) => void;
}
function Timeline({ items, onSave }: TimelineProps) {
  const lanes = assignLanes(items);

  const allDates = items.flatMap((item) => [
    new Date(item.start),
    new Date(item.end),
  ]);
  const minDate = new Date(Math.min(...allDates.map((d) => d.getTime())));
  const maxDate = new Date(Math.max(...allDates.map((d) => d.getTime())));

  const dayWidth = 24;

  const containerRef = useRef<HTMLDivElement>(null);
  const [fixedStyle, setFixedStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setFixedStyle({ left: rect.left, width: rect.width });
    }
  }, []);
  return (
    <div
      ref={containerRef}
      className="overflow-x-auto border rounded shadow-lg bg-slate-100"
    >
      <TimelineHeader minDate={minDate} maxDate={maxDate} dayWidth={dayWidth} />

      {/* Timeline lanes */}
      <div>
        {lanes.map((lane, idx) => (
          <div key={idx}>
            <TimelineLane
              
              items={lane}
              minDate={minDate}
              dayWidth={dayWidth}
              onSave={(item) => onSave(item)}
            />
            <div
              className="bg-neutral-200 h-[1px] fixed z-10"
              style={{
                left: fixedStyle.left,
                width: fixedStyle.width,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
