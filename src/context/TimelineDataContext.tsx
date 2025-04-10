import React, { createContext, useState, useEffect, ReactNode } from "react";
import { ITimelineItem } from "../interfaces/ITimelineItem";
import { fetchMockTimelineData } from "../api/mockTimelineData";

/**
 * Defines the shape of the timeline data context.
 */
interface TimelineDataContextType {
  items: ITimelineItem[];
  setItems: React.Dispatch<React.SetStateAction<ITimelineItem[]>>;
  updateItem: (updated: ITimelineItem) => void;
  loading: boolean;
  error: string | null;
}

/**
 * Creates the TimelineDataContext with default values.
 */
export const TimelineDataContext = createContext<TimelineDataContextType>({
  items: [],
  setItems: () => {},
  updateItem: () => {},
  loading: false,
  error: null,
});

interface TimelineDataProviderProps {
  children: ReactNode;
}

/**
 * TimelineDataProvider component is responsible for fetching and storing timeline data.
 * It also exposes a method for updating individual items.
 *
 * @param {TimelineDataProviderProps} props - The children components that can consume the context.
 */
export const TimelineDataProvider = ({ children }: TimelineDataProviderProps) => {
  const [items, setItems] = useState<ITimelineItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMockTimelineData()
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch timeline data.");
        setLoading(false);
      });
  }, []);

  /**
   * Updates a single item in the timeline state.
   *
   * @param {ITimelineItem} updated - The updated item to replace in the current list.
   */
  const updateItem = (updated: ITimelineItem) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === updated.id ? updated : item
      )
    );
  };

  return (
    <TimelineDataContext.Provider
      value={{ items, setItems, updateItem, loading, error }}
    >
      {children}
    </TimelineDataContext.Provider>
  );
};
