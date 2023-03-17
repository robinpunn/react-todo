import React from "react";
import { FaCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../features/todos/todosSlice";

const ToggleComplete = ({ todo, toggleComplete }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete({ id: id }));
  };

  return (
    <div className="circle-container">
      <FaCircle
        className={todo.isCompleted ? "fa-circle" : "fa-circle-o"}
        onClick={() => handleToggleComplete(todo.id)}
      />
    </div>
  );
};

export default ToggleComplete;
