import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../redux/projects/projectsSlice";
import Modal from "./Modal";

const ProjectModal = ({ isOpen, onClose }) => {
  const [color, setColor] = useState("#ffffff");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handlerAddNewProject = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(
        addProject({
          name,
          color,
        })
      );
      setName("");
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="text-xl font-bold mb-4 dark:text-gray-300">
        Новий проект
      </h3>

      <form
        id="project-form"
        className="flex flex-col w-[100%]  max-w-[500px] min-w-[150px]  gap-4 dark:text-gray-300"
        onSubmit={handlerAddNewProject}
      >
        <div className="flex1 flex-col w-full">
          <div>
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Назва проекту
            </label>
            <input
              type="text"
              id="project-name"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="project-color"
              className="block text-sm font-medium mb-1"
            >
              Колір проекту
            </label>
            <input
              type="color"
              id="project-color"
              className="w-full border-gray-300 dark:border-gray-600 md:rounded-lg  md:h-10"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            data-hs-overlay="#project-modal"
          >
            Скасувати
          </button>
          <button
            id="save-project-btn"
            form="project-form"
            type="submit"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Зберегти
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ProjectModal;
