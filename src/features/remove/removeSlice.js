import { createSlice } from "@reduxjs/toolkit";
import { remainingTodos } from "../remaining/remainingTodosSlice";

const removeSlice = createSlice({
  name: "remove",
  initialState: null,
  reducers: {
    removeTodo: (state, action) => {
      if (!state.todos) {
        return;
      }
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      remainingTodos(state);
    },
  },
});

export const { removeTodo } = removeSlice.actions;

export default removeSlice.reducer;
