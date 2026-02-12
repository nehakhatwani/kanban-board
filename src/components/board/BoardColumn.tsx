import { Droppable } from "@hello-pangea/dnd";
import type { Task } from "../../store/useKanbanStore";
import TaskCard from "./TaskCard";

export default function BoardColumn({
  title,
  tasks,
  droppableId,
}: {
  title: string;
  tasks: Task[];
  droppableId: "todo" | "inprogress" | "done";
}) {
  return (
    <div className="bg-pink-50 rounded-xl p-4 w-80">
      <h2 className="font-bold mb-4 text-center">{title}</h2>

      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="min-h-[100px]"
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
