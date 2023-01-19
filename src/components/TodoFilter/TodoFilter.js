import React from "react";
import './TodoFilter.css'

const TodoFilter = ({ todos, setRemainingTodos, selectedFilter, setSelectedFilter }) => {
    //create a function to handle the filter
    function handleFilter(e) {
        setSelectedFilter(e.target.innerText.toLowerCase());
        if (selectedFilter === "all") {
          setRemainingTodos(todos)
        //   console.log(remainingTodos)
        } else if (selectedFilter === "active") {
          setRemainingTodos(todos.filter((todo) => !todo.isCompleted))
        //   console.log(remainingTodos)
        } else {
          setRemainingTodos(todos.filter((todo) => todo.isCompleted))
        //   console.log(remainingTodos)
        }
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
        </div>
    )
}

export default TodoFilter;