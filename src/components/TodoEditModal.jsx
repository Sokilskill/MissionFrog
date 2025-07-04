import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import { selectProjects } from "../redux/projects/projectSelector";

const TodoEditModal = ({ isOpen, onClose, todo, currentProject, onSave }) => {
  const [title, setTitle] = useState(todo.title);
  const [priority, setPriority] = useState(todo.priority);
  const [color, setColor] = useState(todo.color);
  const [projectId, setProjectId] = useState(
    currentProject ? currentProject.id : ""
  );

  const allProjects = useSelector(selectProjects);

  useEffect(() => {
    setTitle(todo.title);
    setPriority(todo.priority);
    setColor(todo.color);
    setProjectId(currentProject ? currentProject.id : "");
  }, [todo, currentProject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !title.trim() ||
      !["high", "medium", "low"].includes(priority) ||
      !color.trim()
    ) {
      alert("Будь ласка, заповніть усі поля коректно.");
      return;
    }

    onSave({ title, priority, color, projectId });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4 dark:text-gray-300">
        Редагувати завдання
      </h2>

      <form onSubmit={handleSubmit} className="flex  flex-col gap-4">
        <div>
          <label
            htmlFor="edit-title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Назва завдання:
          </label>
          <input
            id="edit-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 dark:text-gray-300">
          <div>
            <label
              htmlFor="todo-project"
              className="block text-sm font-medium mb-1"
            >
              Проект
            </label>
            <select
              id="todo-project"
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              value={projectId}
              onChange={(e) => {
                setProjectId(e.target.value);
              }}
            >
              <option value="all">All</option>
              {allProjects.map((project) => (
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
              className="block text-sm font-medium mb-1 "
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
              className=" border-gray-300 dark:border-gray-600 md:rounded-lg w-full md:h-10"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
          >
            Скасувати
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Зберегти зміни
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default TodoEditModal;
