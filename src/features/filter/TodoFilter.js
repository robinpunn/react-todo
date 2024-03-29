import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedFilter } from "./filterSlice";
import { setTodos } from "../todos/todosSlice";

const TodoFilter = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  //create a function to handle the filter
  const handleFilter = (e) => {
    console.log(selectedFilter, "e:", e.target.innerText.toLowerCase());
    dispatch(selectedFilter(e.target.innerText.toLowerCase()));
    document.querySelector(".todo-input").focus();
  };

  //remove all completed todos
  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    console.log(newTodos);
    dispatch(setTodos({ todos: newTodos }));
    document.querySelector(".todo-input").focus();
  };

  //render function
  return (
    <div className="filter">
      <div className="filter-options">
        <label className="filter-click" onClick={handleFilter}>
          <p>All</p>
        </label>
        <label className="filter-click" onClick={handleFilter}>
          <p>Active</p>
        </label>
        <label className="filter-click" onClick={handleFilter}>
          <p>Complete</p>
        </label>
      </div>
      <div className="clear-completed">
        <label className="filter-click clear" onClick={handleClearCompleted}>
          <p>Clear Completed</p>
        </label>
      </div>
    </div>
  );
};

export default TodoFilter;
