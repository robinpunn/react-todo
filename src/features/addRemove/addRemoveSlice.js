import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { remainingTodos } from "../remaining/remainingTodosSlice";

const initialState = {
  todos: [],
};

const addRemoveSlice = createSlice({
  name: "addRemove",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuid().slice(0, 4),
        text: action.payload.text,
        isCompleted: false,
      };
      state.todos = [newTodo, ...state.todos];
      remainingTodos(state);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      remainingTodos(state);
    },
  },
});

export const { addTodo, removeTodo } = addRemoveSlice.actions;

export default addRemoveSlice.reducer;
