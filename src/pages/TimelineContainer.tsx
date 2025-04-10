import React, { useContext } from "react";
import { TimelineDataContext } from "../context/TimelineDataContext";
import Timeline from "../components/Timeline/Timeline";

/**
 * TimelineContainer serves as the integration layer.
 * It consumes the TimelineDataContext to retrieve timeline data and passes it to the Timeline component.
 *
 * Timeline itself remains independent and does not rely directly on the context.
 */
export default function TimelineContainer() {
  const { items, loading, error, updateItem } = useContext(TimelineDataContext);

  if (loading) return <p>Loading timeline data...</p>;
  if (error) return <p>Error loading timeline data: {error}</p>;

  return (
    <div>
      <Timeline items={items} onSave={(item) => updateItem(item)} />
    </div>
  );
}
