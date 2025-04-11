import { ITimelineItem } from "../interfaces/ITimelineItem";

export function assignLanes(items: ITimelineItem[]) {
    const sortedItems = [...items].sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    );
  
    const lanes: ITimelineItem[][] = [];
  
    sortedItems.forEach((item) => {
      let placed = false;
  
      for (const lane of lanes) {
        const lastItem = lane[lane.length - 1];
        if (new Date(lastItem.end).getTime() < new Date(item.start).getTime()) {
          lane.push(item);
          placed = true;
          break;
        }
      }
  
      if (!placed) {
        lanes.push([item]);
      }
    });
  
    return lanes;
  }