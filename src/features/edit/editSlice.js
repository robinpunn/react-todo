import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editingTodoId: null,
  isEditing: false,
  editedText: "",
};

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    editTodo: (state) => {
      state.editingTodoId = null;
      state.isEditing = false;
    },

    setEditing: (state, action) => {
      const { id, text } = action.payload;
      state.editingTodoId = id;
      state.isEditing = true;
      state.editedText = text;
    },

    updateEditedText: (state, action) => {
      state.editedText = action.payload;
    },

    toggleIsEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
  },
});

export const {
  editTodo,
  setEditing,
  updateEditedText,
  toggleIsEditing,
} = editSlice.actions;

export default editSlice.reducer;
