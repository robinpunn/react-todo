import React from "react";
import { FaEdit } from "react-icons/fa";

export const EditIcon = ({ todo, setEditing }) => {
  return (
    <FaEdit
      className={todo.isCompleted ? "hidden" : "editTodo"}
      onClick={() => setEditing((prevEditing) => !prevEditing)}
    />
  );
};
