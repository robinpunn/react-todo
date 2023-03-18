import React from "react";
import { useDispatch } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { setEditing } from "./editSlice";

export const EditIcon = ({ todo }) => {
  const dispatch = useDispatch();

  const handleEditing = () => {
    dispatch(setEditing({ id: todo.id, text: todo.text }));
    console.log("icon:", todo);
  };

  return (
    <FaEdit
      className={todo.isCompleted ? "hidden" : "editTodo"}
      onClick={handleEditing}
    />
  );
};
