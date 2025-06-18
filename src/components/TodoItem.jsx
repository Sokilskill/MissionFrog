import { useDispatch } from "react-redux";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import {
  toggleTodoStatus,
  deleteTodo,
  updateTodo,
} from "../redux/todos/todosSlice";

function getPriorityClass(priority) {
  const classes = {
    high: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200",
    medium:
      "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200",
    low: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200",
  };
  return classes[priority] || "";
}

const TodoItem = ({ todo, project }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newTitle = prompt("Введіть нову назву завдання:", todo.title);
    if (newTitle === null || newTitle.trim() === "") return;

    const newPriority = prompt(
      "Введіть пріоритет (high, medium, low):",
      todo.priority
    );
    if (!["high", "medium", "low"].includes(newPriority)) return;

    const newColor = prompt(
      "Введіть колір (hex або назва кольору):",
      todo.color
    );
    if (newColor === null || newColor.trim() === "") return;

    dispatch(
      updateTodo({
        id: todo.id,
        title: newTitle,
        priority: newPriority,
        color: newColor,
      })
    );
  };

  return (
    <div className="p-4 flex items-start gap-3">
      <button
        onClick={() => dispatch(toggleTodoStatus(todo.id))}
        data-todo-id={todo.id}
        aria-label={
          todo.completed ? "Завдання виконане" : "Завдання не виконане"
        }
        className={`toggle-status mt-1 flex-shrink-0 h-5 w-5 rounded border-2 ${
          todo.completed
            ? "bg-green-500 border-green-500"
            : "border-gray-300 dark:border-gray-600"
        } transition`}
      />

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h3
            className={`${
              todo.completed ? "line-through text-gray-500" : "font-medium"
            } break-words`}
            data-todo-id={todo.id}
          >
            {todo.title}
          </h3>

          <div className="flex gap-2">
            <button
              className="edit-todo text-gray-400 hover:text-blue-500 transition"
              data-todo-id={todo.id}
              aria-label="Редагувати завдання"
              onClick={handleEdit}
            >
              <FaEdit />
            </button>
            <button
              className="text-gray-400 hover:text-red-500 transition"
              data-todo-id={todo.id}
              aria-label="Видалити завдання"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          {project && (
            <span
              className="px-2 py-1 text-xs rounded-full"
              style={{ backgroundColor: project.color, color: "#fff" }}
            >
              {project.name}
            </span>
          )}

          <span
            className={`px-2 py-1 text-xs rounded-full ${getPriorityClass(
              todo.priority
            )}`}
          >
            {todo.priority}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {todo.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
