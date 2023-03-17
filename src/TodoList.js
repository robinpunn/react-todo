import React from "react";
import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm.js";
import Todo from "./containers/Todo.js";
import Scroll from "./containers/Scroll";
import TodoFilter from "./features/filter/TodoFilter";
import SideBar from "./containers/SideBar.js";
import Clear from "./components/Clear.js";
import FilterMessage from "./features/filter/FilterMessage.js";
import useFilteredTodos from "./features/filter/filteredTodos.js";

const TodoList = () => {
  // const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const filteredTodos = useFilteredTodos();

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
          {filteredTodos.length ? (
            filteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
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
