import React, { useState } from "react";
import "./TodoForm.css";

/* create a component that will handle the input of todos*/
const TodoForm = ({ addTodo }) => {
  //create a state for the input
  const [input, setInput] = useState("");

  //create a function to handle the input change
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  //create a function to handle the submit only if the input is not empty
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      //if the input is not empty
      addTodo(input); //add the todo needs an argument
      setInput(""); //reset the input to empty
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
