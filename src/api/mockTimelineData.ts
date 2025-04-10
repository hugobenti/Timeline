import timelineItems from "../data/timelineItems";
import { ITimelineItem } from "../interfaces/ITimelineItem";

/**
 * Simulates an API call that fetches timeline items.
 * Returns a Promise that resolves with an array of ITimelineItem objects.
 */
export function fetchMockTimelineData(): Promise<ITimelineItem[]> {
  return new Promise((resolve) => {
    // Simulate network latency with a 500ms delay.
    setTimeout(() => {
      const mockData: ITimelineItem[] = timelineItems
      resolve(mockData);
    }, 500);
  });
}
