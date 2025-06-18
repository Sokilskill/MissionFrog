import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        projectId: action.payload.projectId,
        title: action.payload.title,
        color: action.payload.color,
        priority: action.payload.priority,
        completed: false,
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      };
      state.push(newTodo);
    },

    toggleTodoStatus: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        todo.updatedAt = new Date().toLocaleDateString();
      }
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const { id, title, color, priority } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        if (title !== undefined) todo.title = title;
        if (color !== undefined) todo.color = color;
        if (priority !== undefined) todo.priority = priority;
        todo.updatedAt = new Date().toLocaleDateString();
      }
    },
  },
});

export const { addTodo, toggleTodoStatus, deleteTodo, updateTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
