import { configureStore } from "@reduxjs/toolkit";
import projectsReduser from "./projects/projectsSlice";
import todosReducer from "./todos/todosSlice";
import filterReduce from "./filters/filtersSlice";

const store = configureStore({
  reducer: {
    projects: projectsReduser,
    todos: todosReducer,
    filters: filterReduce,
  },
});

export default store;
