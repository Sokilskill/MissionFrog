import { useSelector } from "react-redux";
import { selectProjects } from "../redux/projects/projectSelector";
import { useAddTodoForm } from "../hooks/useAddTodoForm";

const AddTodoForm = () => {
  const { form, handleSubmit } = useAddTodoForm();
  const projects = useSelector(selectProjects);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <form id="todo-form" className="space-y-3" onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <input
            type="text"
            id="todo-title"
            placeholder="Назва завдання..."
            className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={form.title}
            onChange={(e) => {
              form.setTitle(e.target.value);
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
              value={form.projectId}
              onChange={(e) => {
                form.setProjectId(e.target.value);
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
              value={form.priority}
              onChange={(e) => {
                form.setPriority(e.target.value);
              }}
            >
              <option value="low">Низький</option>
              <option value="medium">Середній</option>
              <option value="high">Високий</option>
            </select>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1 "
              htmlFor="todo-color"
            >
              Колір
            </label>
            <input
              type="color"
              id="todo-color"
              value={form.color}
              onChange={(e) => {
                form.setColor(e.target.value);
              }}
              className=" border-gray-300 dark:border-gray-600 md:rounded-lg w-full md:h-10"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
