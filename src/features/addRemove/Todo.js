import React, { useState } from "react";
import { FaTrash, FaEdit, FaCircle } from "react-icons/fa";
import EditTodo from "../edit/EditTodo.js";

const Todo = ({ todo, removeTodo, toggleComplete }) => {
  //create a state for the edit
  const [editing, setEditing] = useState(false);

  //create a function to handle the edit
  const handleEditSave = (newText) => {
    setEditing(true);
    todo.text = newText;
  };

  //handle edit cancel
  const handleEditCancel = () => {
    setEditing(false);
  };

  //render function
  return (
    <div className={todo.isCompleted ? "completed todoCard" : "todoCard"}>
      <div className="keys">
        <FaCircle
          className={todo.isCompleted ? "fa-circle" : "fa-circle-o"}
          onClick={() => toggleComplete(todo.id)}
        />
        {editing ? (
          <EditTodo
            text={todo.text}
            onSave={handleEditSave}
            onCancel={handleEditCancel}
          />
        ) : (
          <p key={todo.id}>{todo.text}</p>
        )}
      </div>
      <div className="editRemove">
        <FaEdit
          className={todo.isCompleted ? "hidden" : "editTodo"}
          onClick={() => setEditing(true)}
        />
        <FaTrash
          className={todo.isCompleted ? "removeTodo highlight" : "removeTodo"}
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;