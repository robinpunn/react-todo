import React from "react";
import Clear from "../Clear/Clear.js";
import NewTodoButton from "../NewTodoButton/NewTodoButton.js";
import "./SideBar.css";

function SideBar({ clearTodos }) {
  return (
    <div className="sideBar">
      <NewTodoButton />
      <Clear clearTodos={clearTodos} />
    </div>
  );
}

export default SideBar;
