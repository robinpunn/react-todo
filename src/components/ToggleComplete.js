import React from "react";
import { FaCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../features/todos/todosSlice";

const ToggleComplete = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = (todo) => {
    dispatch(toggleComplete({ id: todo.id }));
  };

  return (
    <div className="circle-container">
      <FaCircle
        className={todo.isCompleted ? "fa-circle" : "fa-circle-o"}
        onClick={() => handleToggleComplete(todo)}
      />
    </div>
  );
};

export default ToggleComplete;
