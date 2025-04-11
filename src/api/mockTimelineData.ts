import timelineItems from "../data/timelineItems";
import { ITimelineItem } from "../interfaces/ITimelineItem";

/**
 * Simulates an API call that fetches timeline items.
 * Returns a Promise that resolves with an array of ITimelineItem objects.
 */
export function fetchMockTimelineData(): Promise<ITimelineItem[]> {
  return new Promise((resolve) => {
      const mockData: ITimelineItem[] = timelineItems
      resolve(mockData);
  });
}
