// src/App.tsx
import React from "react";
import { TimelineDataProvider } from "./context/TimelineDataContext";
import TimelineContainer from "./pages/TimelineContainer";

function App() {
  return (
    <div className="h-screen p-20 bg-stone-200">
      <TimelineDataProvider>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Timeline</h2>
          <TimelineContainer />
        </div>
      </TimelineDataProvider>
    </div>
  );
}

export default App;
