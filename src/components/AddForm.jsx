import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProjects } from "../redux/projects/projectSelector";
import { addTodo } from "../redux/todos/todosSlice";

const AddForm = () => {
  const [color, setColor] = useState("#3b82f6");
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [projectId, setProjectId] = useState("all");

  const projects = useSelector(selectProjects);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title: title.trim(),
      projectId: projectId,
      priority: priority,
      color: color,
    };

    if (newTodo.title) {
      console.log("Adding new todo:", newTodo);
      dispatch(addTodo(newTodo));
      setTitle("");
      setColor("#3b82f6");
      setPriority("medium");
      setProjectId("all");
    }
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <form id="todo-form" className="space-y-3" onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <input
            type="text"
            id="todo-title"
            placeholder="Назва завдання..."
            className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            <i className="fas fa-plus mr-2"></i> Додати
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">Проект</label>
            <select
              id="todo-project"
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              value={projectId}
              onChange={(e) => {
                setProjectId(e.target.value);
              }}
            >
              <option value="all">All</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Пріоритет</label>
            <select
              id="todo-priority"
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              value={priority}
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            >
              <option value="low">Низький</option>
              <option value="medium">Середній</option>
              <option value="high">Високий</option>
            </select>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="todo-color"
            >
              Колір
            </label>
            <input
              type="color"
              id="todo-color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
              className="w-full h-10 rounded-lg border-gray-300 dark:border-gray-600"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
