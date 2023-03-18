import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, updateEditedText } from "./editSlice";
import { updateTodo } from "../todos/todosSlice";

const EditTodo = ({ todo }) => {
  console.log("todo:", todo);
  const dispatch = useDispatch();
  const { isEditing, editedText } = useSelector((state) => state.edit);
  const todos = useSelector((state) => state.todos.todos);

  const editingTodos = todos.find((editingTodo) => todo.id === editingTodo.id);

  const handleInputChange = (e) => {
    dispatch(updateEditedText(e.target.value));
  };

  //create a function to handle the edit
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(updateTodo({ id: todo.id, text: editedText }));
      dispatch(editTodo());
    }
    if (event.key === "Escape") {
      dispatch(editTodo());
    }
  };

  if (!isEditing || !editingTodos) return null;

  //render function
  return (
    <input
      className="edit-input"
      type="text"
      value={editedText}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  );
};

export default EditTodo;
