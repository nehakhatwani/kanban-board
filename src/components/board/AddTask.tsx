import { useState } from "react";
import { useKanbanStore } from "../../store/useKanbanStore";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const addTask = useKanbanStore((s) => s.addTask);

  return (
    <div className="flex gap-2 mb-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
        className="px-4 py-2 rounded-xl border w-64"
      />
      <button
        onClick={() => {
          if (title.trim()) {
            addTask(title);
            setTitle("");
          }
        }}
        className="bg-green-400 text-white px-4 rounded-xl"
      >
        Add
      </button>
    </div>
  );
}
