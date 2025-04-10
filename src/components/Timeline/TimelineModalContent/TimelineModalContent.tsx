import React, { useState } from "react";
import { ITimelineItem } from "../../../interfaces/ITimelineItem";

interface TimelineModalContentProps {
  item: ITimelineItem;
  onCancel: () => void;
  onSave: (updatedItem: ITimelineItem) => void;
}

/**
 * Form content for editing a timeline item.
 * Displays editable fields for name, start, and end dates (YYYY-MM-DD).
 */
export const TimelineModalContent: React.FC<TimelineModalContentProps> = ({
  item,
  onCancel,
  onSave,
}) => {
  const [name, setName] = useState(item.name);
  const [start, setStart] = useState(item.start);
  const [end, setEnd] = useState(item.end);

  return (
    <form className="flex flex-col gap-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="start"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date
        </label>
        <input
          id="start"
          type="date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="end"
          className="block text-sm font-medium text-gray-700"
        >
          End Date
        </label>
        <input
          id="end"
          type="date"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => onSave({ name, start, end, id: item.id })}
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </form>
  );
};
