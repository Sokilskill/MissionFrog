import { FaPlus } from "react-icons/fa";

const Projects = () => {
  const projects = [
    { id: 1, name: "Проект 1" },
    { id: 2, name: "Проект 2" },
    { id: 3, name: "Проект 3" },
  ];
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Проекти</h2>

        <button
          className="text-blue-500 hover:text-blue-700 transition"
          onClick={() => alert("Додати новий проект")}
        >
          <FaPlus />
        </button>
      </div>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id} className="border-b border-gray-200 py-2">
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
