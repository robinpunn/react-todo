import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuid().slice(0, 4),
        text: action.payload.text,
        isCompleted: false,
      };
      state.todos.push(newTodo);
      setTodos(state.todos);
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
        setTodos(state.todos);
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      setTodos(state.todos);
    },
    setTodos: (state, action) => {
      state.todos = action.payload.todos;
      localStorage.setItem("todos", JSON.stringify(state.todos));
      console.log("setTodos", state.todos);
    },
  },
});

export const {
  addTodo,
  setTodos,
  toggleComplete,
  deleteTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
