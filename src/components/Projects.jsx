import { useCallback, useState } from "react";
import { FaPlus, FaEdit } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import { useDispatch, useSelector } from "react-redux";
import { selectProjects } from "../redux/projects/projectSelector";
import { addSelectedProjectId } from "../redux/filters/filtersSlice";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const orderProject = useSelector((state) => state.filters.selectedProjectId);

  const projects = useSelector(selectProjects);

  const dispatch = useDispatch();

  const handleSelectProject = useCallback(
    (projectId) => {
      dispatch(addSelectedProjectId(projectId));
    },
    [dispatch]
  );

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Проекти</h2>

        <button
          className="text-blue-500 hover:text-blue-700 transition"
          onClick={() => setShowModal(true)}
        >
          <FaPlus />
        </button>
      </div>
      <ul
        className="space-y-2 overflow-auto max-h-[200px] scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200
                   dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700
                   scrollbar-thin hover:scrollbar-thumb-blue-500"
      >
        {projects.map((project) => (
          <li
            key={project.id}
            className="border-b border-gray-200 p-2 cursor-pointer"
            style={{
              borderLeftColor: project.color,
              borderLeftWidth: "6px",
              borderRadius: "8px",
              backgroundColor: orderProject === project.id ? "red" : "",
            }}
            onClick={() => handleSelectProject(project.id)}
          >
            <div className="flex justify-between">
              {project.name}

              <div>
                <button
                  aria-label="Редагувати"
                  data-project-id={project.id}
                  className="hover:text-blue-500"
                  onClick={() => {}}
                >
                  <FaEdit />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ProjectModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
};

export default Projects;
