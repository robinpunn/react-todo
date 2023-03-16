import React from "react";
import { FaCircle } from "react-icons/fa";

const ToggleComplete = ({ todo, toggleComplete }) => {
  return (
    <FaCircle
      className={todo.isCompleted ? "fa-circle" : "fa-circle-o"}
      onClick={() => toggleComplete(todo.id)}
    />
  );
};

export default ToggleComplete;
