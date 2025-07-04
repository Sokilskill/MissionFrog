import { createSelector } from "@reduxjs/toolkit";

const selectTodos = (state) => state.todos;
const selectFilters = (state) => state.filters;

export const filterTodos = createSelector(
  [selectTodos, selectFilters],
  (todos, filters) => {
    if (!todos || todos.length === 0) {
      return [];
    }

    let filtered = [...todos];

    if (filters.selectedProjectId) {
      filtered = filtered.filter(
        (todo) => todo.projectId === filters.selectedProjectId
      );
    }

    if (filters.status !== "all") {
      filtered = filtered.filter((todo) =>
        filters.status === "pending" ? !todo.completed : todo.completed
      );
    }

    if (filters.priority !== "all") {
      filtered = filtered.filter((todo) => todo.priority === filters.priority);
    }

    if (filters.sortBy === "date-asc") {
      filtered.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    } else if (filters.sortBy === "date-desc") {
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (filters.sortBy === "priority") {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      filtered.sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
      );
    }

    return filtered;
  }
);
