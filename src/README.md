# ⏱️ Timeline Component

This project implements a modular and interactive horizontal **timeline component** with dynamic track allocation and item editing via modal. Built with **React + TypeScript**, powered by **Vite** and styled with **TailwindCSS**, it is designed for scalability, reusability, and clarity.

---

## ✅ What I Like About This Implementation

- **Props-Driven, Context-Agnostic Design**  
  The component is completely decoupled from any global state mechanism (e.g., Redux or React Context). All data and event handlers are passed in via props, which makes the timeline highly portable and easy to test or plug into different environments.

- **Well-Structured and Extensible**  
  The logic for layout, rendering, and interactions is separated into clearly defined layers (layout engine, UI, utilities), making future maintenance or feature expansion straightforward.

- **Dynamic Track Allocation**  
  Items are automatically assigned to the earliest non-overlapping track, avoiding visual clutter and maximizing vertical space — inspired by UIs like Google Calendar or video editors.

- **Modal-Based Editing**  
  Editing timeline items is handled through a clean, accessible modal. All actions (edit, save) are propagated upward to ensure a single source of truth.

---

## 🔁 What I Would Change If I Did It Again

- **Add Zoom & Pan**  
  Implementing zoom (via scroll or pinch) and horizontal pan would greatly improve UX for long or dense timelines.

- **Keyboard and A11y Enhancements**  
  The modal already respects basic accessibility rules, but a more complete keyboard and screen reader support layer could be added.

- **Testing Coverage**  
  Due to time constraints, tests were not included — this would be a priority in a production-grade implementation.

---

## 🧠 Design Decisions

- **Track Allocation Algorithm**  
  Inspired by calendar/grid-based tools, the system checks for overlap and pushes items to new rows only when necessary.

- **Modal vs. Inline Editing**  
  Inline editing is powerful, but modals help keep the layout clean and reduce accidental edits. The modal approach also improves accessibility and mobile compatibility.

- **Modular Architecture**  
  Instead of tightly coupling UI and logic, the project separates utilities, layout engines, and components — which follows solid frontend architecture principles.

---

## 🧪 How I Would Test This If I Had More Time

- **Unit Tests**  
  - Track allocator: verify no items overlap on the same track.
  - Modal behavior: ensure item updates call the correct callbacks.
  - Temporal positioning: test time → pixel mapping functions.

- **Integration Tests**  
  - Simulate user flows: open modal → edit → save.
  - Ensure updates reflect correctly and events are emitted to the parent.

- **Visual Regression**  
  - Add Storybook stories and use Chromatic for snapshot-based UI diffing.

---

## 🚀 Getting Started

> ⚠️ Make sure you have **Node.js (v16+)** installed.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/timeline-component.git
cd timeline-component
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
**Open your browser at: http://localhost:5173**

The timeline component will render using the sample data found in:

```bash
src/data/timelineItems.ts
```
### 🧱 Project Structure (Simplified)
```bash
src/
├── api/               # Optional API integrations
├── assets/            # Static assets
├── components/        # Timeline and UI components
├── context/           # App context (if needed)
├── data/              # Sample timeline items
├── interfaces/        # TypeScript interfaces
├── pages/             # Page-level components or routes
├── style/             # Tailwind/base styles
├── utils/             # Utility functions (track logic, time conversion)
├── App.tsx            # Root component
└── main.tsx           # Entry point
```

### 🧩 Stack
- **React 18 + TypeScript**

- **TailwindCSS (utility-first styling)**

- **Vite (fast build + HMR)**

- **Headless UI or custom modal (if used)**

- **No Redux / No Context API (props-based only)**

