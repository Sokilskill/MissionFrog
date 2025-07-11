import { useSelector } from "react-redux";
import { selectProjects } from "../redux/projects/projectSelector";
import { useAddTodoForm } from "../hooks/useAddTodoForm";
import TodoFormFields from "./TodoFormFields";

const AddTodoForm = () => {
  const { form, handleSubmit } = useAddTodoForm();
  const projects = useSelector(selectProjects);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <TodoFormFields
        prefix="todo"
        showSubmitButton={true}
        title={form.title}
        setTitle={form.setTitle}
        priority={form.priority}
        setPriority={form.setPriority}
        color={form.color}
        setColor={form.setColor}
        projectId={form.projectId}
        setProjectId={form.setProjectId}
        onSubmit={handleSubmit}
        projects={projects}
      />
    </div>
  );
};

export default AddTodoForm;
