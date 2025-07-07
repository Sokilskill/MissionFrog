import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { selectProjectById } from "../redux/projects/projectSelector";
import { addSelectedProjectId } from "../redux/filters/filtersSlice";

const TodoList = ({ todoList, projects, allTodos }) => {
  const orderProject = useSelector((state) =>
    selectProjectById(state, state.filters.selectedProjectId)
  );

  if (allTodos.length === 0) {
    return (
      <p className="p-4 text-center text-gray-500">
        Немає завдань. Додайте нове!
      </p>
    );
  }

  if (orderProject && todoList.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <p className="p-4 text-center text-gray-500">
          В обраному проекті відсутні завдання. Додайте завдання.
        </p>
        <ResetProjectButton />
      </div>
    );
  }

  if (!orderProject && todoList.length === 0) {
    return (
      <p className="p-4 text-center text-gray-500">
        За вашим фільтром - завдань не знайдено.
      </p>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="font-semibold text-lg flex gap-1 items-center justify-between  ">
          <div>
            <span id="current-project-title">Всі завдання </span>

            {orderProject && (
              <>
                <span> за обраним проектом </span>
              </>
            )}

            <span
              id="todo-count"
              className="ml-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
            >
              {todoList.length}
            </span>
          </div>

          {orderProject && <ResetProjectButton />}
        </div>
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

export const ResetProjectButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="ml-2 px-4 py-1 text-sm text-white rounded-full bg-red-500 hover:bg-red-700"
      onClick={() => dispatch(addSelectedProjectId(null))}
    >
      повернутися до всіх завдань
    </button>
  );
};
