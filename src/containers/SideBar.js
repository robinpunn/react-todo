import React from "react";
import Clear from "../components/Clear.js";
import NewTodoButton from "../components/NewTodoButton.js";

function SideBar({ clearTodos }) {
  return (
    <div className="sideBar">
      <NewTodoButton />
      <Clear clearTodos={clearTodos} />
    </div>
  );
}

export default SideBar;
