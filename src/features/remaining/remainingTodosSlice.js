import { createSlice } from "@reduxjs/toolkit";

const remainingTodosSlice = createSlice({
  name: "remainingTodos",
  initialState: { remainingTodos: 0 },
  reducers: {
    remainingTodos: (state) => {
      state.remainingTodos = state.todos.filter(
        (todo) => !todo.isCompleted
      ).length;
    },
  },
});

export const { remainingTodos } = remainingTodosSlice.actions;

export default remainingTodosSlice.reducer;
