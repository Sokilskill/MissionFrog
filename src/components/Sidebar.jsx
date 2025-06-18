import Projects from "./Projects";
import Filter from "./Filter";

const Sidebar = () => {
  return (
    <aside className="lg:col-span-1 space-y-6">
      <Projects />
      <Filter />
    </aside>
  );
};

export default Sidebar;
