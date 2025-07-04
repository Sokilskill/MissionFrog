import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "project",
  initialState: [
    { id: "2222", name: "Project 1", color: "green" },
    { id: "3333", name: "Project 2", color: "red" },
  ],

  reducers: {
    addProject: (state, action) => {
      const newProject = {
        id: Date.now().toString(),
        name: action.payload.name,
        color: action.payload.color,
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      };
      state.push(newProject);
    },
    deleteProject: (state, action) => {
      state = state.filter((project) => project.id !== action.payload);
    },

    updateProject: (state, action) => {
      const { id, name, color } = action.payload;
      const project = state.find((p) => p.id === id);
      if (project) {
        if (name !== undefined && name !== "") project.name = name;
        if (color !== undefined && color !== "") project.color = color;
      }
    },
  },
});

export const { addProject, deleteProject, updateProject } =
  projectsSlice.actions;
export default projectsSlice.reducer;
