import { createSlice } from "@reduxjs/toolkit";
import { remainingTodos } from "../remaining/remainingTodosSlice";

const initialState = {};

const toggleCompleteSlice = createSlice({
  name: "toggleComplete",
  initialState,
  reducers: {
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
      remainingTodos(state);
    },
  },
});

export const { toggleComplete } = toggleCompleteSlice.actions;

export default toggleCompleteSlice.reducer;
