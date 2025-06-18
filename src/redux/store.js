import { configureStore } from "@reduxjs/toolkit";
import projectsReduser from "./projects/projectsSlice";
import todosReducer from "./todos/todosSlice";

const store = configureStore({
  reducer: {
    projects: projectsReduser,
    todos: todosReducer,
  },
});

export default store;
