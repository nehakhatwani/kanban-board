import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import AddTask from "../components/board/AddTask";
import BoardColumn from "../components/board/BoardColumn";
import { useKanbanStore } from "../store/useKanbanStore";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Board() {
  const { tasks, moveTask } = useKanbanStore();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    moveTask(
      result.draggableId,
      result.destination.droppableId as "todo" | "inprogress" | "done"
    );
  };

  return (
    <div className="min-h-screen p-8 bg-green-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-pink-500">
          Kanban Board 🌸
        </h1>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="bg-pink-400 text-white px-4 py-2 rounded-xl"
        >
          Logout
        </button>
      </div>

      <AddTask />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6">
          <BoardColumn
            title="Todo"
            droppableId="todo"
            tasks={tasks.filter((t) => t.status === "todo")}
          />

          <BoardColumn
            title="In Progress"
            droppableId="inprogress"
            tasks={tasks.filter((t) => t.status === "inprogress")}
          />

          <BoardColumn
            title="Done"
            droppableId="done"
            tasks={tasks.filter((t) => t.status === "done")}
          />
        </div>
      </DragDropContext>
    </div>
  );
}
