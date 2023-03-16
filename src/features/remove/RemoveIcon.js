import React from "react";
import { FaTrash } from "react-icons/fa";

const RemoveIcon = ({ todo, removeTodo }) => {
  return (
    <FaTrash
      className={todo.isCompleted ? "removeTodo highlight" : "removeTodo"}
      onClick={() => removeTodo(todo.id)}
    />
  );
};

export default RemoveIcon;
