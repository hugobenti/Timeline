// src/components/TimelineItem.tsx

import React, { useState } from "react";
import { ITimelineItem } from "../../../interfaces/ITimelineItem";
import { Modal } from "../../Modal/Modal";
import { TimelineModalContent } from "../TimelineModalContent/TimelineModalContent";

interface TimelineItemProps extends ITimelineItem {
  startOffset: number;
  duration: number;
  dayWidth: number;
  onSave: (updatedItem: ITimelineItem) => void;
}

/**
 * TimelineItem component
 *
 * Represents a single visual block on the timeline corresponding to a specific event.
 * Provides basic hover interactivity with a custom tooltip for additional details.
 *
 * Props:
 * - id: number – unique identifier of the event.
 * - name: string – label of the event displayed in the block.
 * - start: string – event start date (YYYY-MM-DD).
 * - end: string – event end date (YYYY-MM-DD).
 * - startOffset: number – days from the timeline’s start to this event's beginning.
 * - duration: number – total days the event spans.
 * - dayWidth: number – width in pixels representing one day on the timeline.
 *
 * Visual Enhancements:
 * - Inner shadow to enhance block separation and depth.
 * - Custom tooltip using Tailwind's group/hover utilities.
 *
 * @returns JSX.Element
 */
function TimelineItem({
  id,
  name,
  start,
  end,
  startOffset,
  duration,
  dayWidth,
  onSave,
}: TimelineItemProps) {
  const style = {
    left: `${startOffset * dayWidth}px`,
    width: `${duration * dayWidth}px`,
  };
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        title={name}
        onClick={() => setModalOpen(true)}
        className="absolute bg-indigo-500 hover:bg-indigo-600 active:border-indigo-600 text-white text-xs text-left px-2 py-1 rounded min-h-12 overflow-hidden whitespace-nowrap shadow-inner shadow-black/20 cursor-pointer transition-all"
        style={style}
      >
        {name}
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={`Edit item - ${name}`}
      >
        <TimelineModalContent
          item={{
            id: id,
            name: name,
            start: start,
            end: end,
          }}
          onCancel={() => setModalOpen(false)}
          onSave={(item) => {
            onSave(item);
            setModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
}

export default TimelineItem;
