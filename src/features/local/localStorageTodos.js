import { useEffect } from "react";

const localStorageTodos = (todos) => {
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
  // If there aren't, use the initialTodos passed to the function

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
};

export default localStorageTodos;
