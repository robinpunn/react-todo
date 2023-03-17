import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../features/input/inputSlice";
import { addTodo } from "../features/todos/todosSlice";

/* create a component that will handle the input of todos*/
const TodoForm = () => {
  const dispatch = useDispatch();
  //create a state for the input
  const input = useSelector((state) => state.input);

  //create a function to handle the input change
  const handleChange = (event) => {
    dispatch(setInput(event.target.value));
  };
  //create a function to handle the submit only if the input is not empty
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      //if the input is not empty
      dispatch(addTodo({ text: input })); //add the todo needs an argument
      dispatch(setInput("")); //reset the input to empty
    }
  };

  //submie the form when the user hits enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  //render function
  return (
    <form
      className="input-form"
      onSubmit={handleSubmit}
      onKeyPress={handleKeyDown}
    >
      <input
        className="todo-input"
        type="text"
        placeholder="Add a todo..."
        value={input}
        onChange={handleChange}
        autoFocus={true}
      />
    </form>
  );
};

export default TodoForm;
