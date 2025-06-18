import { useSelector } from "react-redux";
import { selectTodos } from "../redux/todos/todosSelector";
import TodoItem from "./TodoItem";
import { selectProjects } from "../redux/projects/projectSelector";

const TodoList = () => {
  const todoList = useSelector(selectTodos);
  const projects = useSelector(selectProjects);

  //  const selectTodosWithProjects = (state) => {
  //   return state.todos.map((todo) => {
  //     const project = state.projects.find((p) => p.id === todo.projectId);
  //     return { ...todo, project };
  //   });
  // };

  if (todoList.length === 0) {
    return (
      <p className="p-4 text-center text-gray-500">
        Немає завдань. Додайте нове!
      </p>
    );
  }
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="font-semibold text-lg flex items-center">
          <span id="current-project-title">Всі завдання</span>
          <span
            id="todo-count"
            className="ml-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
          >
            {todoList.length} <span className="sr-only">завдань</span>
          </span>
        </h2>
      </div>

      <ul
        id="todo-list"
        className="divide-y divide-gray-200 dark:divide-gray-700"
      >
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className="todo-item relative bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            data-priority={todo.priority}
            data-todo-id={todo.id}
            style={{ borderLeftColor: todo.color, borderLeftWidth: "6px" }}
          >
            <TodoItem
              todo={todo}
              project={projects.find((p) => p.id === todo.projectId)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
