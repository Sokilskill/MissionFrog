import { useCallback, useState } from "react";
import { FaPlus, FaEdit } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import { useDispatch, useSelector } from "react-redux";
import { selectProjects } from "../redux/projects/projectSelector";
import { addSelectedProjectId } from "../redux/filters/filtersSlice";
import Button from "./Button";

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

        <Button
          variant=""
          className="text-blue-500 hover:text-blue-700"
          size="sm"
          aria-label="Додати новий проєкт"
          onClick={() => setShowModal(true)}
          icon={FaPlus}
        ></Button>
      </div>

      <ul className="space-y-2 overflow-auto max-h-[200px]">
        {projects.map((project) => (
          <li
            key={project.id}
            className="border-b border-gray-200 p-2 cursor-pointer"
            style={{
              borderLeftColor: project.color,
              borderLeftWidth: "6px",
              borderRadius: "8px",
              backgroundColor: orderProject === project.id ? "#ef0000d1" : "",
            }}
          >
            <div className="flex justify-between">
              <button
                className="flex-1 flex justify-start text-left    "
                onClick={() => handleSelectProject(project.id)}
              >
                <p>{project.name}</p>
              </button>

              <Button
                variant="icon"
                size="icon"
                data-todo-id={project.id}
                aria-label="Редагувати проєкт"
                onClick={() => {}}
                icon={FaEdit}
              ></Button>
            </div>
          </li>
        ))}
      </ul>
      <ProjectModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
};

export default Projects;
