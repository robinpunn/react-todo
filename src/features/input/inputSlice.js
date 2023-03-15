import { createSlice } from "@reduxjs/toolkit";
import { remainingTodos } from "../remaining/remainingTodosSlice";

const initialState = {};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    input: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
      remainingTodos(state);
    },
  },
});

export const { input } = inputSlice.actions;

export default inputSlice.reducer;
