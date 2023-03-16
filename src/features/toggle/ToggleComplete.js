import React from "react";
import { FaCircle } from "react-icons/fa";

const ToggleComplete = ({ todo, toggleComplete }) => {
  return (
    <div className="circle-container">
      <FaCircle
        className={todo.isCompleted ? "fa-circle" : "fa-circle-o"}
        onClick={() => toggleComplete(todo.id)}
      />
    </div>
  );
};

export default ToggleComplete;
