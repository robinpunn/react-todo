import React from "react";

const TodoFilter = ({ todos, setSelectedFilter, setTodos }) => {
  //create a function to handle the filter
  const handleFilter = (e) => {
    setSelectedFilter(e.target.innerText.toLowerCase());
    document.querySelector(".todo-input").focus();
  };

  //remove all completed todos
  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(newTodos);
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
