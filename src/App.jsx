import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";
import ProjectModal from "./components/ProjectModal";

function App() {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 dark:text-gray-200 min-h-full">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Header />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Sidebar />
            <main className="lg:col-span-3 space-y-6">
              <AddForm />
              <TodoList />
            </main>
          </div>
        </div>
      </div>

      <ProjectModal />
    </>
  );
}

export default App;
