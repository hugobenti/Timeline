import { ITimelineItem } from "../interfaces/ITimelineItem";

// Função simples que aloca eventos em lanes diferentes se houver sobreposição
export function assignLanes(items: ITimelineItem[]) {
    // Exemplo bem simples, você pode sofisticar
    const sortedItems = [...items].sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    );
  
    const lanes: ITimelineItem[][] = [];
  
    sortedItems.forEach((item) => {
      let placed = false;
  
      for (const lane of lanes) {
        // Checa se o último item dessa lane termina antes de item.start
        const lastItem = lane[lane.length - 1];
        if (new Date(lastItem.end).getTime() < new Date(item.start).getTime()) {
          lane.push(item);
          placed = true;
          break;
        }
      }
  
      // Se não coube em nenhuma lane existente, cria nova
      if (!placed) {
        lanes.push([item]);
      }
    });
  
    return lanes;
  }