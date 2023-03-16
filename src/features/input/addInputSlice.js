import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { remainingTodos } from "../remaining/remainingTodosSlice";

const initialState = {
  todos: [],
};

const addInputSlice = createSlice({
  name: "addInput",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuid().slice(0, 4),
        text: action.payload.text,
        isCompleted: false,
      };
      state.todos = [newTodo, ...state.todos]; //state.todos.push(newTodo);
      remainingTodos(state);
    },
    input: (state, action) => {
      const todo = state.todos.find((todo) => todo.id !== action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
      remainingTodos(state);
    },
  },
});

export const { addTodo, input } = addInputSlice.actions;

export default addInputSlice.reducer;
