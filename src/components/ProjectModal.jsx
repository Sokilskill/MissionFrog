import { useState } from "react";

const ProjectModal = () => {
  const [color, setColor] = useState("#ffffff");
  return (
    <div
      id="project-modal"
      className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="relative flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-lg">Новий проект</h3>
          </div>
          <div className="p-4">
            <form id="project-form">
              <div className="mb-4">
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium mb-1"
                >
                  Назва проекту
                </label>
                <input
                  type="text"
                  id="project-name"
                  className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-4 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="project-color"
                  className="block text-sm font-medium mb-1"
                >
                  Колір проекту
                </label>
                <input
                  type="color"
                  id="project-color"
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                  className="w-full h-10 rounded-lg border-gray-300 dark:border-gray-600"
                />
              </div>
            </form>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-2">
            <button
              type="button"
              className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              data-hs-overlay="#project-modal"
            >
              Скасувати
            </button>
            <button
              id="save-project-btn"
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              Зберегти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
