import { createSlice } from "@reduxjs/toolkit";
import { remainingTodos } from "../remaining/remainingTodosSlice";

const initialState = {
  editingTodoId: null,
  editedText: "",
};

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
      state.editingTodoId = null;
      remainingTodos(state);
    },
    setEditing: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      state.editingTodoId = action.payload;
      state.editedText = todo ? todo.text : "";
    },
    updateEditedText: (state, action) => {
      state.editedText = action.payload;
    },
  },
});

export const { editTodo, setEditing, updateEditedText } = editSlice.actions;

export default editSlice.reducer;
