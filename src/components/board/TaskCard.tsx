import { Draggable } from "@hello-pangea/dnd";
import type { Task } from "../../store/useKanbanStore";
import { useKanbanStore } from "../../store/useKanbanStore";

export default function TaskCard({
  task,
  index,
}: {
  task: Task;
  index: number;
}) {
  const moveTask = useKanbanStore((s) => s.moveTask);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-4 mb-3 rounded-xl shadow"
        >
          <p className="font-medium mb-3">{task.title}</p>

          <div className="flex gap-2 text-xs">
            {task.status !== "todo" && (
              <button
                onClick={() => moveTask(task.id, "todo")}
                className="px-2 py-1 bg-pink-200 rounded"
              >
                Todo
              </button>
            )}

            {task.status !== "inprogress" && (
              <button
                onClick={() => moveTask(task.id, "inprogress")}
                className="px-2 py-1 bg-yellow-200 rounded"
              >
                In Progress
              </button>
            )}

            {task.status !== "done" && (
              <button
                onClick={() => moveTask(task.id, "done")}
                className="px-2 py-1 bg-green-200 rounded"
              >
                Done
              </button>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
}
