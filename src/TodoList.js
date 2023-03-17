import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "./components/TodoForm.js";
import Todo from "./containers/Todo.js";
import Scroll from "./containers/Scroll";
import TodoFilter from "./features/filter/TodoFilter";
import SideBar from "./containers/SideBar.js";
import Clear from "./components/Clear.js";
import FilterMessage from "./features/filter/FilterMessage.js";

const TodoList = () => {
  // const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const selectedFilter = useSelector(
    (state) => state.selectedFilter.selectedFilter
  );
  console.log("selectedFilter:", selectedFilter);

  // function loadSavedTodos() {
  //   const savedTodos = localStorage.getItem("todos");
  //   if (savedTodos) {
  //     try {
  //       return JSON.parse(savedTodos);
  //     } catch (err) {
  //       console.error(err);
  //       localStorage.removeItem("todos");
  //     }
  //   }
  //   return [];
  // }

  // function saveTodos(todos) {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }
  /*const [todos, setTodos] = useState(() => {
    // Check if there are any saved todos in local storage
    const savedTodos = localStorage.getItem("todos");
    // If there are, return the saved todos
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (err) {
        console.error(err);
        localStorage.removeItem("todos");
      }
    }
    // If there aren't, return an empty array
    return [];
  });

    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  */

  //create a state for remaining todos
  // const [remainingTodos, setRemainingTodos] = useState(0);
  //create a state for the filter
  // const [selectedFilter, setSelectedFilter] = useState("all");

  //create a function to add a todo, new todo should be on top of the list
  /*const addTodo = (text) => {
    const newTodos = [
      ...todos,
      { id: uuid().slice(0, 4), text, isCompleted: false },
    ];
    setTodos(newTodos);
    console.log(todos);
  };*/

  //create a function to remove a todo
  /* const removeTodo = (id) => {
     const newTodos = [...todos].filter((todo) => todo.id !== id);
     setTodos(newTodos);
   };*/

  //create a function to toggle a todo to complete or not complete
  /*const toggleComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
    setRemainingTodos(newTodos.filter((todo) => !todo.isCompleted).length);
    console.log(todos);
    console.log(remainingTodos);
  };*/

  //create a function to clear all todos
  /*const clearTodos = () => {
    setTodos([]);
    localStorage.removeItem("todos");
    // focus on the input
    document.querySelector(".todo-input").focus();
  };*/

  //use effect to update the remaining todos
  // useEffect(() => {
  //   setRemainingTodos(todos.filter((todo) => !todo.isCompleted).length);
  // }, [todos]);

  //render function
  return (
    <div className="main-container">
      <SideBar
      // clearTodos={clearTodos}
      />
      <div className="todo-container">
        <h4 className="header">
          {todos.filter((todo) => !todo.isCompleted).length} todos left
        </h4>
        <TodoFilter />
        <Scroll>
          {todos.filter((todo) => {
            if (selectedFilter === "all") {
              console.log("selectedFilter is all");
              return true;
            } else if (selectedFilter === "active") {
              console.log("selectedFilter is active");
              return !todo.isCompleted;
            } else {
              console.log("selectedFilter is complete");
              return todo.isCompleted;
            }
          }).length ? (
            todos
              .filter((todo) => {
                if (selectedFilter === "all") {
                  return true;
                } else if (selectedFilter === "active") {
                  return !todo.isCompleted;
                } else {
                  return todo.isCompleted;
                }
              })
              .map((todo) => <Todo key={todo.id} todo={todo} />)
          ) : (
            <FilterMessage />
          )}
        </Scroll>
        <TodoForm />
        <Clear />
      </div>
    </div>
  );
};

export default TodoList;
