import { useDispatch } from "react-redux";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import {
  toggleTodoStatus,
  deleteTodo,
  updateTodo,
} from "../redux/todos/todosSlice";
import { formatTodoDate, getPriorityClass } from "../utils";
import { useState } from "react";
import TodoEditModal from "./TodoEditModal";
import Modal from "./Modal";

const TodoItem = ({ todo, project }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  let formattedComletedDate;
  const formattedCreatedDate = formatTodoDate(todo.createdAt);
  if (todo.completedAt && todo.completed) {
    formattedComletedDate = formatTodoDate(todo.completedAt);
  }

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = ({ title, priority, color, projectId }) => {
    const updatedItem = {
      id: todo.id,
      title,
      priority,
      color,
      projectId,
    };
    dispatch(updateTodo(updatedItem));
    handleCloseEditModal();
  };

  return (
    <div className="p-4 flex items-start gap-3">
      <button
        onClick={() => dispatch(toggleTodoStatus(todo.id))}
        data-todo-id={todo.id}
        aria-label={
          todo.completed ? "Завдання виконане" : "Завдання не виконане"
        }
        className={`toggle-status mt-1 flex-shrink-0 h-5 w-5 rounded border-2 ${
          todo.completed
            ? "bg-green-500 border-green-500"
            : "border-gray-300 dark:border-gray-600"
        } transition`}
      />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h3
            className={`${
              todo.completed ? "line-through text-gray-500" : "font-medium"
            } break-words`}
            data-todo-id={todo.id}
          >
            {todo.title}
          </h3>

          <div className="flex gap-2">
            <button
              className="edit-todo text-gray-400 hover:text-blue-500 transition"
              data-todo-id={todo.id}
              aria-label="Редагувати завдання"
              onClick={handleOpenEditModal}
            >
              <FaEdit />
            </button>
            <button
              className="text-gray-400 hover:text-red-500 transition"
              data-todo-id={todo.id}
              aria-label="Видалити завдання"
              onClick={handleOpenDeleteModal}
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>

        <div className="mt-2 flex flex-col items-start justify-start  gap-2">
          <div className=" flex flex-wrap items-center gap-2">
            <span
              className={`px-2 py-1 w-[46px] text-center text-xs rounded-full p ${getPriorityClass(
                todo.priority
              )}`}
            >
              {todo.priority}
            </span>

            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formattedCreatedDate}{" "}
              {todo.completedAt && <span>- {formattedComletedDate}</span>}
            </span>
          </div>
          {project && (
            <span
              className="px-2 py-1 text-xs rounded-full"
              style={{ backgroundColor: project.color, color: "#fff" }}
            >
              {project.name}
            </span>
          )}
        </div>
      </div>
      <TodoEditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        todo={todo}
        currentProject={project}
        onSave={handleSaveEdit}
      />
      <Modal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
        <div className="flex flex-col justify-center   max-w-[350px] text-white p-5 gap-3">
          <h3 className="text-2xl">Задання буде видалено!</h3>
          <div className="flex justify-center gap-6 mt-4">
            <button
              type="button"
              onClick={handleCloseDeleteModal}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
            >
              Скасувати
            </button>
            <button
              type="button"
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Видалити
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TodoItem;
