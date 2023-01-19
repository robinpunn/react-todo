import React from "react";
import './TodoFilter.css'

const TodoFilter = ({ todos, setSelectedFilter, setTodos }) => {
    //create a function to handle the filter
    function handleFilter(e) {
        setSelectedFilter(e.target.innerText.toLowerCase());
      }

    //remove all completed todos
    function handleClearCompleted() {
        const newTodos = todos.filter(todo => !todo.isCompleted);
        setTodos(newTodos);
    }

    //render function
    return (
        <div className='filter'>
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
                <label className="filter-click" onClick={handleClearCompleted}>
                    <p>Clear Completed</p>
                </label>
            </div>
        </div>
    )
}

export default TodoFilter;