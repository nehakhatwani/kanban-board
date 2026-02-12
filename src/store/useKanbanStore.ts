import { create } from "zustand";

export type Status = "todo" | "inprogress" | "done";

export interface Task {
  id: string;
  title: string;
  status: Status;
}

interface KanbanState {
  tasks: Task[];
  addTask: (title: string) => void;
  moveTask: (id: string, status: Status) => void;
}

export const useKanbanStore = create<KanbanState>((set) => ({
  tasks: [],
  addTask: (title) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: Date.now().toString(), title, status: "todo" },
      ],
    })),
  moveTask: (id, status) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, status } : t
      ),
    })),
}));
