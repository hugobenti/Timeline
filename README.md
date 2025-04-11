cat << 'EOF' > README.md
# ⏱️ Timeline Component

This project implements a modular and interactive horizontal **timeline component** with dynamic track allocation and item editing via modal. Built with **React + TypeScript**, powered by **Vite**, and styled with **TailwindCSS**, it is designed for scalability, reusability, and clarity.

---

## ✅ What I Like About This Implementation



- **Props-Driven, Context-Agnostic Design**  
  The component is fully decoupled from any global state mechanism (e.g., Redux or React Context). All data and event handlers are passed via props, making the timeline highly portable and easy to integrate into different environments.

- **Well-Structured and Extensible**  
  Layout logic, rendering, and interactions are cleanly separated into layers (layout engine, UI components, utilities), which makes future maintenance and feature expansion easier.

- **Modal-Based Editing**  
  Editing timeline items is handled through a clean, accessible modal. All actions (edit, save, delete) are propagated upward to ensure a single source of truth.

- **Dynamic Track Allocation**  
  Items are automatically assigned to the earliest non-overlapping track, avoiding visual clutter and maximizing vertical space — inspired by UIs like Google Calendar or video editors.

---

## 🔁 What I Would Change If I Did It Again

- **Add Zoom & Pan**  
  Implementing zoom (via scroll or pinch) and horizontal pan would enhance UX, especially for long or dense timelines.

- **Abstract Timeline Math into Reusable Hooks**  
  Time-to-pixel conversion and track allocation could be extracted into composable hooks to improve testability and modularity.

- **Enhance Keyboard and Accessibility Support**  
  While the modal respects basic accessibility standards, full keyboard navigation and screen reader support would be a valuable improvement.

- **Testing Coverage**  
  Due to time constraints, test coverage is currently limited. Full unit and integration tests would be essential in a production environment.

---

## 🧠 Design Decisions

- **Track Allocation Algorithm**  
  Inspired by grid-based tools and timeline editors, the system checks for item overlap and places each item on the first available track without collision.

- **Modal-Based Editing**  
  Although inline editing offers immediacy, modals offer cleaner UX, reduce accidental edits, and improve accessibility on both desktop and mobile.

- **Modular Architecture**  
  Utilities, layout engines, and UI components are modularized for flexibility and to align with scalable frontend architecture principles.

---

## 🧪 How I Would Test This With More Time

- **Unit Tests**  
  - Track allocator: ensure no overlapping items on the same track  
  - Modal behavior: validate item updates and callback execution  
  - Time-to-pixel conversion logic

- **Integration Tests**  
  - Simulate full user flows (open modal → edit item → save)  
  - Confirm state updates and emitted events are accurate

- **Visual Regression Testing**  
  - Add stories to Storybook  
  - Use Chromatic for snapshot-based visual diffing

---

## 🚀 Getting Started

> ⚠️ Ensure you have **Node.js (v16+)** installed.

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

**Open your browser at:**

```bash
http://localhost:5173
```

- The timeline component will render using the sample data found in:
```bash
src/data/timelineItems.ts
```

---

### 🧱 Project Structure (Simplified)

```bash
src/
├── api/               # Optional API integrations
├── assets/            # Static assets
├── components/        # Timeline and UI components
├── context/           # App-level context (if needed)
├── data/              # Sample timeline items
├── interfaces/        # TypeScript type definitions
├── pages/             # Page-level components or routes
├── style/             # Tailwind and global styles
├── utils/             # Timeline logic, track calculations, helpers
├── App.tsx            # Root component
└── main.tsx           # Application entry point
```

---

### 🧩 Tech Stack

**React 18 + TypeScript**

**TailwindCSS (utility-first styling)**

**Vite (fast dev server & HMR)**
